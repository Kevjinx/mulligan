'use strict';
module.exports = (sequelize, DataTypes) => {
  const Card = sequelize.define('Card', {
    name: DataTypes.STRING,
    strength: DataTypes.INTEGER,
    provision: DataTypes.INTEGER,
    armor: DataTypes.INTEGER,
    factionId: DataTypes.INTEGER,
    typeId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    keywordId: DataTypes.INTEGER,
    rarityId: DataTypes.INTEGER,
    setId: DataTypes.INTEGER
  }, {});
  Card.associate = function(models) {
    // associations can be defined here
  };
  return Card;
};