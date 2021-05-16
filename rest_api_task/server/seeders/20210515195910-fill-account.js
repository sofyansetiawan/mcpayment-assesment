'use strict';
const fs = require("fs")
const accounts = JSON.parse(fs.readFileSync("./data/account.json", "utf-8"));

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    accounts.forEach(element => {
      element.createdAt = new Date();
      element.updatedAt = new Date();
    });

    await queryInterface.bulkInsert('Accounts', accounts, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Accounts', null, {});
  }
};