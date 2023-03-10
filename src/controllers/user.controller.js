const { userService } = require('../services');
const { createToken } = require('../auth/authFuncs');

const createUser = async (req, res) => {
  try {
    const newUser = req.body;

    const hasUser = await userService.findUserByEmail(newUser.email);

    if (hasUser) return res.status(409).json({ message: 'User already registered' });

    const { type, message } = await userService.createUser(newUser);

    if (type) return res.status(400).json({ message });

    const token = createToken(newUser.email);
    return res.status(201).json({ token });
  } catch (e) {
    return res.status(500).json({
      message: 'Erro interno',
      error: e.message,
    });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await userService.findUserById(id);
    if (!user) return res.status(404).json({ message: 'User does not exist' });
   
    return res.status(200).json(user);
  } catch (e) {
    return res.status(500).json({
      message: 'Erro interno',
      error: e.message,
    });
  }
};

const getAllUsers = async (_req, res) => {
  try {
    const users = await userService.findAllUsers();
   
    return res.status(200).json(users);
  } catch (e) {
    return res.status(500).json({
      message: 'Erro interno',
      error: e.message,
    });
  }
};

module.exports = {
  createUser,
  getUserById,
  getAllUsers,
};