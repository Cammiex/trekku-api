import { Sequelize } from 'sequelize';
import db from '../config/db.js';

const { DataTypes } = Sequelize;

const Vouchers = db.define('voucher', {
  voucher_name: {
    type: DataTypes.STRING,
  },
  url_img: {
    type: DataTypes.STRING,
  },
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
