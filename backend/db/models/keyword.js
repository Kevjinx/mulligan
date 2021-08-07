'use strict';
module.exports = (sequelize, DataTypes) => {
  const Keyword = sequelize.define('Keyword', {
    name: DataTypes.STRING
  }, {});
  Keyword.associate = function(models) {
    // associations can be defined here
    Keyword.hasMany(models.Card, { foreignKey: 'keywordId'})
  };
  return Keyword;
};