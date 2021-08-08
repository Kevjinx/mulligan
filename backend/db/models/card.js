'use strict';
module.exports = (sequelize, DataTypes) => {
  const Card = sequelize.define('Card', {
    name: DataTypes.STRING,
    info: DataTypes.TEXT,
    strength: DataTypes.INTEGER,
    provision: DataTypes.INTEGER,
    armor: DataTypes.INTEGER,
    faction: DataTypes.STRING,
    type: DataTypes.STRING,
    rarity: DataTypes.STRING,
    set: DataTypes.STRING,
    imageId: DataTypes.INTEGER
  }, {});
  Card.associate = function(models) {
    // associations can be defined here
    Card.belongsToMany(models.Category, { through: 'cardsCategories', foreignKey: 'cardId'})
    Card.belongsToMany(models.Keyword, { through: 'cardsKeywords', foreignKey: 'cardId'})
    Card.belongsToMany(models.Deck, { through: 'decksCards', foreignKey: 'cardId'})
  };
  return Card;
};