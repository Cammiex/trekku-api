import { Sequelize } from 'sequelize';
import db from '../config/db.js';

const { DataTypes } = Sequelize;
const Wishlist = db.define('wishlist', {}, { freezeTableName: true });

Wishlist.associate = (models) => {
  Wishlist.belongsTo(models.Products, { foreignKey: 'product_id' });
  Wishlist.belongsTo(models.Users, { foreignKey: 'user_id' });
};

export default Wishlist;
