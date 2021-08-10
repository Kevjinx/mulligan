'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: DataTypes.STRING
  }, {});
  Category.associate = function(models) {
    // associations can be defined here
    Category.belongsToMany(models.Card, { through: 'cardCategories', foreignKey: 'categoryId'})
  };
  return Category;
};