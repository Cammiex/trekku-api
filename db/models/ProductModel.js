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
    url_location: {
      type: DataTypes.TEXT,
      defaultValue:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15909.684160714634!2d129.90406!3d-4.5179019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d15860b887ac3ab%3A0x6d9d8565c44e2f07!2sBanda%20Neira!5e0!3m2!1sen!2sid!4v1717667760720!5m2!1sen!2sid',
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
  Products.hasMany(models.Reviews, { foreignKey: 'product_id' });
};

export default Products;
