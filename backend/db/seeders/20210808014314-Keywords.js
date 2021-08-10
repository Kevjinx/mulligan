'use strict';

const keywordSeed = require('../card-api/keywordSeeder.json')

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Keywords', keywordSeed, {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Keywords', null, {});

  }
};
