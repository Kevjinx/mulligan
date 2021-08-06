'use strict';
module.exports = (sequelize, DataTypes) => {
  const Faction = sequelize.define('Faction', {
    name: DataTypes.STRING
  }, {});
  Faction.associate = function(models) {
    // associations can be defined here
  };
  return Faction;
};