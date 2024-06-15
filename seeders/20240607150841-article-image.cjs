'use strict';

/** @type {import('sequelize-cli').Migration} */
const dotenv = require('dotenv');
dotenv.config();

const API = process.env.API;

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'article_img',
      [
        {
          image: '2e2e102fb2a64f679c29e22c69f6c5ae.jpg',
          url_img: `${API}/images/article/2e2e102fb2a64f679c29e22c69f6c5ae.jpg`,
          createdAt: new Date(),
          updatedAt: new Date(),
          article_id: 1,
        },
        {
          image: 'b2601a70ecf63859088824ae3156b747.jpg',
          url_img: `${API}/images/article/b2601a70ecf63859088824ae3156b747.jpg`,
          createdAt: new Date(),
          updatedAt: new Date(),
          article_id: 1,
        },
        {
          image: 'menjangan-1.jpeg',
          url_img: `${API}/images/article/menjangan-1.jpeg`,
          createdAt: new Date(),
          updatedAt: new Date(),
          article_id: 2,
        },
        {
          image: 'menjangan-2.jpeg',
          url_img: `${API}/images/article/menjangan-2.jpeg`,
          createdAt: new Date(),
          updatedAt: new Date(),
          article_id: 2,
        },
        {
          image: 'komodo-1.jpeg',
          url_img: `${API}/images/article/komodo-1.jpeg`,
          createdAt: new Date(),
          updatedAt: new Date(),
          article_id: 3,
        },
        {
          image: 'komodo-2.jpeg',
          url_img: `${API}/images/article/komodo-2.jpeg`,
          createdAt: new Date(),
          updatedAt: new Date(),
          article_id: 3,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('article_img', null, {});
  },
};
