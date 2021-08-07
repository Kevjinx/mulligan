'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Cards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      info: {
        type: Sequelize.TEXT
      },
      strength: {
        type: Sequelize.INTEGER
      },
      provision: {
        type: Sequelize.INTEGER
      },
      armor: {
        type: Sequelize.INTEGER
      },
      faction: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      categoryId: {
        type: Sequelize.ARRAY(Sequelize.INTEGER)
      },
      keywordId: {
        type: Sequelize.ARRAY(Sequelize.INTEGER)
      },
      rarityId: {
        type: Sequelize.STRING
      },
      setId: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Cards');
  }
};