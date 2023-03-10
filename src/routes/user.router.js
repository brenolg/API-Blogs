const express = require('express');
const { userController } = require('../controllers');
const validateToken = require('../middlewares/validateAccess');
const { validateUserRequiredFields } = require('../middlewares/user.middlewares');

const userRouter = express.Router();

userRouter.post('/', validateUserRequiredFields, userController.createUser);

userRouter.get('/', validateToken, userController.getAllUsers);

userRouter.get('/:id', validateToken, userController.getUserById);

module.exports = userRouter;