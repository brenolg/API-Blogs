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
    res.status(500).json({
      message: 'Erro interno',
      error: e.message,
    });
  }
};

module.exports = {
  createUser,
};