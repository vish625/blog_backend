'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('comments', [
      {
        comment: 'Great post!',
        comments_at: new Date(),
        blog_id: 1,
        user_id: 2,
        updated_at: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('People', null, {});
     
  }
};
