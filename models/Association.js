import Products from './ProductModel.js';
import ProductImage from './ProductImageModel.js';
import Articles from './ArticleModel.js';
import ArticleImage from './ArticleImageModel.js';
import Wishlist from './WishlistModel.js';
import Users from './UserModel.js';

const models = {
  Products,
  ProductImage,
  Articles,
  ArticleImage,
  Wishlist,
  Users,
};

Object.values(models).forEach((model) => {
  if (model.associate) {
    model.associate(models);
  }
});

export { Products, ProductImage, Articles, ArticleImage, Wishlist, Users };
export default models;
