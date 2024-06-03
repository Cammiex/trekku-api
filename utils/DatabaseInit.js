import ProductImage from '../models/ProductImageModel.js';
import Products from '../models/ProductModel.js';
import Users from '../models/UserModel.js';
import Articles from '../models/ArticleModel.js';
import ArticleImage from '../models/ArticleImageModel.js';
import Wishlist from '../models/WishlistModel.js';

export const initDatabase = async () => {
  await Users.sync();
  await Products.sync();
  await Wishlist.sync();
  await ProductImage.sync();
  await Articles.sync();
  await ArticleImage.sync();
};
