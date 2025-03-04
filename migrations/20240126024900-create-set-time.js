'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
      await queryInterface.createTable('set_time', {
          event_id: {
            type: Sequelize.INTEGER,
            allowNull: false
          },
          stage_id: {
            type: Sequelize.INTEGER,
            allowNull: false
          },
          band_id: {
            type: Sequelize.INTEGER,
            allowNull: false
          },
          start_time: {
          type: Sequelize.DATE,
          allowNull: false
        }, end_time: {
          type: Sequelize.DATE,
          allowNull: false
        }, set_time_id: {
          type: Sequelize.INTEGER,
          allowNull: false
        }
      });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('set_time');
  }
};