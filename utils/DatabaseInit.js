import ProductImage from '../models/ProductImageModel.js';
import Products from '../models/ProductModel.js';
import Users from '../models/UserModel.js';
import Association from '../models/AssociationProduct.js';

export const initDatabase = async () => {
  await Users.sync();
  await Products.sync();
  await ProductImage.sync();
};
