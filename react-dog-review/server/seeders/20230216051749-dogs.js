'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Dogs', [
       {
        dog_name: 'nala',
        address : '6129 Old trail rd',
        review : '3',
       },
       {
        dog_name: 'vilar',
        address : '1720 Ferrell st',
        review : '5',
       },
       {
        dog_name: 'lady',
        address : '6204 lanning ln',
        review : '5',
       },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Dogs', null, {})
  }
};
