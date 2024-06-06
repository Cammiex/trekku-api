import { Sequelize } from 'sequelize';
import db from '../config/db.js';

const { DataTypes } = Sequelize;

const ProductImage = db.define(
  'product_img',
  {
    image: {
      type: DataTypes.STRING,
    },
    url_img: {
      type: DataTypes.STRING,
    },
  },
  { freezeTableName: true }
);

ProductImage.associate = (models) => {
  ProductImage.belongsTo(models.Products, { foreignKey: 'product_id' });
};

export default ProductImage;
