import { Sequelize } from 'sequelize';
import db from '../config/db.js';

const { DataTypes } = Sequelize;

const Products = db.define(
  'products',
  {
    name: {
      type: DataTypes.STRING,
    },
    location: { type: DataTypes.STRING },
    desc_information: {
      type: DataTypes.TEXT,
    },
    desc_destination: {
      type: DataTypes.TEXT,
    },
    desc_schedule: {
      type: DataTypes.TEXT,
    },
    desc_facility: {
      type: DataTypes.TEXT,
    },
    desc_accommodation: {
      type: DataTypes.TEXT,
    },
    desc_preparation: {
      type: DataTypes.TEXT,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    duration: {
      type: DataTypes.STRING,
    },
    date: {
      type: DataTypes.DATE,
    },
    quota: {
      type: DataTypes.INTEGER,
    },
    organizer: {
      type: DataTypes.STRING,
    },
    many_ordered: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    freezeTableName: true,
  }
);

Products.associate = (models) => {
  Products.hasMany(models.ProductImage, { foreignKey: 'product_id' });
  Products.hasMany(models.Wishlist, { foreignKey: 'product_id' });
  Products.hasOne(models.Orders, { foreignKey: 'product_id' });
};

export default Products;
