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
      factionId: {
        references: { model: 'Factions' },
        type: Sequelize.INTEGER
      },
      typeId: {
        references: { model: 'Types' },
        type: Sequelize.INTEGER
      },
      categoryId: {
        references: { model: 'Categories' },
        type: Sequelize.ARRAY(Sequelize.INTEGER)
      },
      keywordId: {
        references: { model: 'Keywords' },
        type: Sequelize.ARRAY(Sequelize.INTEGER)
      },
      rarityId: {
        references: { model: 'Rarities' },
        type: Sequelize.INTEGER
      },
      setId: {
        references: { model: 'Sets' },
        type: Sequelize.INTEGER
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