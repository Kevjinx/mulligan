'use strict';
module.exports = (sequelize, DataTypes) => {
  const Rarity = sequelize.define('Rarity', {
    name: DataTypes.STRING
  }, {});
  Rarity.associate = function(models) {
    // associations can be defined here
  };
  return Rarity;
};