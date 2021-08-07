'use strict';
module.exports = (sequelize, DataTypes) => {
  const Deck = sequelize.define('Deck', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    cardId: DataTypes.INTEGER
  }, {});
  Deck.associate = function(models) {
    // associations can be defined here
    Deck.hasMany(models.Card, { foreignKey: 'cardId'});

    Deck.hasMany(models.userId, { foreignKey: 'deckId'})
  };
  return Deck;
};