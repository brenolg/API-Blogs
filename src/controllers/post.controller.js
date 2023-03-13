const { postService } = require('../services');
const { verifyToken } = require('../auth/authFuncs');

const createPost = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;
    const { authorization } = req.headers;

    const { data } = verifyToken(authorization);

    const { type, message } = await postService.createPost(title, content, categoryIds, data);
     if (type) return res.status(type).json({ message });

    return res.status(201).json(message);
} catch (e) {
    return res.status(500).json({
      message: 'Erro interno',
      error: e.message,
    });
  }
};

module.exports = {
    createPost,
};