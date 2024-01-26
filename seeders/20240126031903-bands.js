'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('bands', [{
      band_id: 1,
      name: 'Van Halen',
      genre: 'Rock',
      available_start_time: '11:00:00',
      end_time: '23:00:00'
    },
    {
      band_id: 2,
      name: 'Foreigner',
      genre: 'Rock',
      available_start_time: '11:00:00',
      end_time: '23:00:00'
    },
    {
      band_id: 3,
      name: 'Queen',
      genre: 'Rock',
      available_start_time: '11:00:00',
      end_time: '23:00:00'
    },
  ], {});

    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
