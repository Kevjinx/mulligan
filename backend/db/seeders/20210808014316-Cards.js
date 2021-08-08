'use strict';

const cardSeed = require('../card-api/cardSeeder.json')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Cards', cardSeed, {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Cards', null, {});

  }
};
