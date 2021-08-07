'use strict';
module.exports = (sequelize, DataTypes) => {
  const Rarity = sequelize.define('Rarity', {
    name: DataTypes.STRING
  }, {});
  Rarity.associate = function(models) {
    // associations can be defined here
    Rarity.hasMany(models.Card, { foreignKey: 'rarityId'})
  };
  return Rarity;
};