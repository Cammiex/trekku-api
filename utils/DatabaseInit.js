import Products from '../models/ProductModel.js';
import Users from '../models/UserModel.js';

export const initDatabase = async () => {
  await Users.sync();
  await Products.sync();
};
