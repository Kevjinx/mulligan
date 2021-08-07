'use strict';
module.exports = (sequelize, DataTypes) => {
  const Keyword = sequelize.define('Keyword', {
    name: DataTypes.STRING
  }, {});
  Keyword.associate = function(models) {
    // associations can be defined here
    Keyword.belongsToMany(models.Card, { through: 'cardsKeywords', foreignKey: 'keywordId'})
  };
  return Keyword;
};