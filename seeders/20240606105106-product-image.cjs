'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'product_img',
      [
        {
          image: '67f605d0467f329271a7bd5efb6634a9.jpg',
          url_img:
            'http://localhost:5000/images/product/67f605d0467f329271a7bd5efb6634a9.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
          product_id: 1,
        },
        {
          image: '2c86b0ca541758d4817fcc960b6648b5.jpg',
          url_img:
            'http://localhost:5000/images/product/2c86b0ca541758d4817fcc960b6648b5.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
          product_id: 1,
        },
        {
          image: '2e2e102fb2a64f679c29e22c69f6c5ae.jpg',
          url_img:
            'http://localhost:5000/images/product/2e2e102fb2a64f679c29e22c69f6c5ae.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
          product_id: 1,
        },
        {
          image: '73162b486c1da96c385d9209028330aa.jpg',
          url_img:
            'http://localhost:5000/images/product/73162b486c1da96c385d9209028330aa.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
          product_id: 1,
        },
        {
          image: 'b2601a70ecf63859088824ae3156b747.jpg',
          url_img:
            'http://localhost:5000/images/product/b2601a70ecf63859088824ae3156b747.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
          product_id: 1,
        },
        {
          image: 'bromo-1.jpg',
          url_img: 'http://localhost:5000/images/product/bromo-1.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
          product_id: 2,
        },
        {
          image: 'bromo-2.jpg',
          url_img: 'http://localhost:5000/images/product/bromo-2.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
          product_id: 2,
        },
        {
          image: 'bromo-3.jpg',
          url_img: 'http://localhost:5000/images/product/bromo-3.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
          product_id: 2,
        },
        {
          image: 'bromo-4.jpg',
          url_img: 'http://localhost:5000/images/product/bromo-4.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
          product_id: 2,
        },
        {
          image: 'bromo-5.jpg',
          url_img: 'http://localhost:5000/images/product/bromo-5.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
          product_id: 2,
        },
        {
          image: 'seribu-1.jpg',
          url_img: 'http://localhost:5000/images/product/seribu-1.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
          product_id: 3,
        },
        {
          image: 'seribu-2.jpg',
          url_img: 'http://localhost:5000/images/product/seribu-1.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
          product_id: 3,
        },
        {
          image: 'seribu-3.jpg',
          url_img: 'http://localhost:5000/images/product/seribu-3.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
          product_id: 3,
        },
        {
          image: 'seribu-4.jpg',
          url_img: 'http://localhost:5000/images/product/seribu-4.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
          product_id: 3,
        },
        {
          image: 'seribu-5.jpg',
          url_img: 'http://localhost:5000/images/product/seribu-5.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
          product_id: 3,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('product_img', null, {});
  },
};
