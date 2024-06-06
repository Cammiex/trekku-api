import { Sequelize } from 'sequelize';
import db from '../config/db.js';

const { DataTypes } = Sequelize;

const Orders = db.define('order', {
  status: {
    type: DataTypes.ENUM,
    values: ['pending', 'success', 'cancel'],
    defaultValue: 'pending',
  },
  quantity: {
    type: DataTypes.INTEGER,
  },
  total_price: {
    type: DataTypes.INTEGER,
  },
});

Orders.associate = (models) => {
  Orders.hasMany(models.Visitor, { foreignKey: 'order_id' });
  Orders.hasOne(models.Orderer, { foreignKey: 'order_id' });
  Orders.belongsTo(models.Products, { foreignKey: 'product_id' });
  Orders.belongsTo(models.Users, { foreignKey: 'user_id' });
  Orders.belongsTo(models.Vouchers, { foreignKey: 'voucher_id' });
  Orders.belongsTo(models.PaymentMethod, { foreignKey: 'payment_method_id' });
};

export default Orders;
