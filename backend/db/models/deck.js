'use strict';
module.exports = (sequelize, DataTypes) => {
  const Deck = sequelize.define('Deck', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    cardId: DataTypes.INTEGER
  }, {});
  Deck.associate = function(models) {
    // associations can be defined here
    Deck.belongsToMany(models.Card, { through: 'decksCards', foreignKey: 'deckId'})
  };
  return Deck;
};