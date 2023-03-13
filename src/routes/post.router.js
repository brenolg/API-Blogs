const express = require('express');
const { postControler } = require('../controllers');
const validateToken = require('../middlewares/validateAccess');
const { postRequiredFields } = require('../middlewares/post.middlewares');

const postRouter = express.Router();

postRouter.post('/', validateToken, postRequiredFields, postControler.createPost);

module.exports = postRouter;