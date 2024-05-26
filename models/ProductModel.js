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
    image1: {
      type: DataTypes.STRING,
    },
    url_img1: {
      type: DataTypes.STRING,
    },
    image2: {
      type: DataTypes.STRING,
    },
    url_img2: {
      type: DataTypes.STRING,
    },
    image3: {
      type: DataTypes.STRING,
    },
    url_img3: {
      type: DataTypes.STRING,
    },
    image4: {
      type: DataTypes.STRING,
    },
    url_img4: {
      type: DataTypes.STRING,
    },
    image5: {
      type: DataTypes.STRING,
    },
    url_img5: {
      type: DataTypes.STRING,
    },
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
  },
  {
    freezeTableName: true,
  }
);

export default Products;
