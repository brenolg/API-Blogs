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

const getAllCategory = async (_req, res) => {
  try {
    const allCategories = await categoryService.findAllCategories();

    return res.status(200).json(allCategories);
} catch (e) {
    return res.status(500).json({
      message: 'Erro interno',
      error: e.message,
    });
  }
};

module.exports = {
    createCategory,
    getAllCategory,
};