import { Sequelize } from 'sequelize';
import db from '../config/db.js';

const { DataTypes } = Sequelize;

// const ProductImage = db.define(
//   'product_img',
//   {
//     image1: {
//       type: DataTypes.STRING,
//     },
//     url_img1: {
//       type: DataTypes.STRING,
//     },
//     image2: {
//       type: DataTypes.STRING,
//     },
//     url_img2: {
//       type: DataTypes.STRING,
//     },
//     image3: {
//       type: DataTypes.STRING,
//     },
//     url_img3: {
//       type: DataTypes.STRING,
//     },
//     image4: {
//       type: DataTypes.STRING,
//     },
//     url_img4: {
//       type: DataTypes.STRING,
//     },
//     image5: {
//       type: DataTypes.STRING,
//     },
//     url_img5: {
//       type: DataTypes.STRING,
//     },
//   },
//   { freezeTableName: true }
// );
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
