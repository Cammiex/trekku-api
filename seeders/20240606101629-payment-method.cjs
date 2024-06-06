'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'payment_methods',
      [
        {
          id: 1,
          payment_name: 'Bank Central Asia (BCA)',
          account_number: '4875 3210 6758',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          payment_name: 'Bank Mandiri',
          account_number: '9123 4567 8923',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          payment_name: 'Bank Rakyat Indonesia (BRI)',
          account_number: '3056 7891 2345',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          payment_name: 'Bank Negara Indonesia (BNI)',
          account_number: '6834 2198 7564',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          payment_name: 'Bank Central Asia (BCA)',
          account_number: '6834 2198 7564',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          payment_name: 'Alfamart',
          account_number: '0978 1234 5678',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 7,
          payment_name: 'Alfamidi',
          account_number: '7865 2341 0987',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 8,
          payment_name: 'Indomaret',
          account_number: '5674 8901 2345',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('payment_methods', null, {});
  },
};
