const { User } = require('../models');
const schema = require('./validations/validationsInputValues');

const createUser = async (user) => {
    const error = await schema.validateNewUser(user);
  if (error.type) return error;

  const newUser = User.create(user);

  return { type: null, message: newUser };
};

const findUserByEmail = async (email) => User.findOne({ where: { email } });

const findAllUsers = async () => User.findAll({ attributes: { exclude: 'password' } });

const findUserById = async (id) => User.findByPk(id, { attributes: { exclude: 'password' } });

module.exports = {
    createUser,
    findUserByEmail,
    findUserById, 
    findAllUsers,
};