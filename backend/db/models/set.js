'use strict';
module.exports = (sequelize, DataTypes) => {
  const Set = sequelize.define('Set', {
    name: DataTypes.STRING
  }, {});
  Set.associate = function(models) {
    // associations can be defined here
  };
  return Set;
};