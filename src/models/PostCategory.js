/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {*} DataTypes
 * @returns
 */

module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define(
    "PostCategory",
    {
      postId: {type: DataTypes.INTEGER, primaryKey: true},
      categoryId: {type: DataTypes.INTEGER, primaryKey: true},
    },
    {
      timestamps: false,
      tableName: "posts_categories",
      underscored: true,
    },
  );

PostCategory.associate = ({ BlogPost, Category }) => {
    BlogPost.belongsToMany(Category , {
      foreignKey: 'postId',
      otherKey: 'categoryId',
      through: PostCategory,
      as: 'categories',
    });
    Category.belongsToMany(BlogPost, {
      foreignKey: 'categoryId',
      otherKey: 'postId',
      through: PostCategory,
      as: 'blogPosts',
    }); 
}; 

  return PostCategory;
};