'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('deletedMigration1', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('deletedMigration1');
  }
};