const { categoryService } = require('../services');

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;

    const newCategory = await categoryService.createCategory(name);

    return res.status(201).json(newCategory);
} catch (e) {
    return res.status(500).json({
      message: 'Erro interno',
      error: e.message,
    });
  }
};

module.exports = {
    createCategory,
};