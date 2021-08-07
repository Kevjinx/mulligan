'use strict';
module.exports = (sequelize, DataTypes) => {
  const Set = sequelize.define('Set', {
    name: DataTypes.STRING
  }, {});
  Set.associate = function(models) {
    // associations can be defined here
    Set.hasMany(models.Card, { foreignKey: 'setId'})
  };
  return Set;
};