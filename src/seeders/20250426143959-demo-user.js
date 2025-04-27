'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        user_name: 'John Doe',
        email: 'john@example.com',
        password: 'password123'
      },
      {
        user_name: 'Jane Smith',
        email: 'jane@example.com',
        password: 'securepassword'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('People', null, {});
     
  }
};
