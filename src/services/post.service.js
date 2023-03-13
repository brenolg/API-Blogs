const { BlogPost, PostCategory } = require('../models');
const { findCategoriesById } = require('./category.service');
const { findUserByEmail } = require('./user.service');

const createPost = async (title, content, categoryIds, data) => {
  const { id } = await findUserByEmail(data);
  const userId = id;

  const hasId = await findCategoriesById(categoryIds);

  if (hasId.length !== categoryIds.length) {
    return {

      type: 400, message: 'one or more "categoryIds" not found', 
    }; 
  }

  const newPost = await BlogPost.create({ title, content, userId });

  const newCategories = categoryIds.map((categories) => ({
    categoryId: categories,
    postId: newPost.id,
  }));

  await PostCategory.bulkCreate(newCategories);
  
  return { type: null, message: newPost };
};

module.exports = {
  createPost,
};
