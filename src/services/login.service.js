const { User } = require('../models');

const createUser = ({ username, password }) => User.create({ username, password });

module.exports = {
  createUser, 
};
