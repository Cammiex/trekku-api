import Products from './ProductModel.js';
import ProductImage from './ProductImageModel.js';

const models = {
  Products,
  ProductImage,
};

Object.values(models).forEach((model) => {
  if (model.associate) {
    model.associate(models);
  }
});

export { Products, ProductImage };
export default models;
