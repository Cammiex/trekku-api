import { Sequelize } from 'sequelize';
import db from '../config/db.js';

const { DataTypes } = Sequelize;

const PaymentMethod = db.define('payment_method', {
  payment_name: {
    type: DataTypes.STRING,
  },
  account_number: {
    type: DataTypes.STRING,
  },
});

PaymentMethod.associate = (models) => {
  PaymentMethod.hasOne(models.Orders, { foreignKey: 'payment_method_id' });
};

export default PaymentMethod;
