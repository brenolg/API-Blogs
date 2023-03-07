const express = require('express');
const { loginController } = require('../controllers');

const loginRouter = express.Router();

loginRouter.post('/', loginController.createUser);

module.exports = loginRouter;