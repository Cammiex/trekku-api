import { Sequelize } from 'sequelize';
import db from '../config/db.js';
import models from './Association.js';

const { DataTypes } = Sequelize;

const Vouchers = db.define('voucher', {
  code: {
    type: DataTypes.STRING,
  },
  discount: {
    type: DataTypes.DECIMAL(5, 2),
  },
});

Vouchers.associate = (models) => {
  Vouchers.hasOne(models.Orders, { foreignKey: 'voucher_id' });
};

export default Vouchers;
