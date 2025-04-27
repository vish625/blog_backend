'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('blogs', [
      {
        user_id: 1,
        blog_title: 'First Blog Post',
        description: 'This is the first blog',
        content: 'Hello world!',
        thumbnail: 'image1.png',
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 1
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
   
      await queryInterface.bulkDelete('People', null, {});
    
  }
};
