'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'vouchers',
      [
        {
          voucher_name: '11.11',
          url_img: 'http://localhost:5000/images/voucher/voucher-1.png',
          code: 'TREKKU11',
          discount: 0.11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          voucher_name: 'Flash Sale 48 Jam',
          url_img: 'http://localhost:5000/images/voucher/voucher-2.png',
          code: 'FLASHSALE48',
          discount: 0.5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          voucher_name: 'JALANMEN',
          url_img: 'http://localhost:5000/images/voucher/voucher-3.png',
          code: 'JALANMEN',
          discount: 0.05,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          voucher_name: 'Trekku x DANA',
          url_img: 'http://localhost:5000/images/voucher/voucher-4.png',
          code: 'PAKAIDANA',
          discount: 0.05,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('vouchers', null, {});
  },
};
