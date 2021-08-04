'use strict';
module.exports = (sequelize, DataTypes) => {
  const Helpme = sequelize.define('Helpme', {
    name: DataTypes.STRING
  }, {});
  Helpme.associate = function(models) {
    // associations can be defined here
  };
  return Helpme;
};