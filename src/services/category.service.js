const { Category } = require('../models');

const createCategory = async (name) => Category.create({ name });

const findAllCategories = async () => Category.findAll();

const findCategoriesById = async (id) => Category.findAll({ where: { id } });

module.exports = {
  createCategory,
  findAllCategories,
  findCategoriesById,
};
