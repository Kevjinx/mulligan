'use strict';
module.exports = (sequelize, DataTypes) => {
  const Deck = sequelize.define('Deck', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    cardId: DataTypes.INTEGER
  }, {});
  Deck.associate = function(models) {
    // associations can be defined here
    Deck.belongsTo(models.Card, { foreignKey: 'cardId'});
    //! may need to change the association to hasMany for importing/copying other user's decks to own deck lists
    Deck.belongsTo(models.userId, { foreignKey: 'userId'})
  };
  return Deck;
};