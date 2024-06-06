import Products from './ProductModel.js';
import ProductImage from './ProductImageModel.js';
import Articles from './ArticleModel.js';
import ArticleImage from './ArticleImageModel.js';
import Wishlist from './WishlistModel.js';
import Users from './UserModel.js';
import Orders from './OrderModel.js';
import Visitor from './VisitorModel.js';
import Vouchers from './VoucherModel.js';
import PaymentMethod from './PaymentMethodModel.js';
import Orderer from './OrdererDataModel.js';
import Reviews from './ReviewModel.js';

const models = {
  Products,
  ProductImage,
  Articles,
  ArticleImage,
  Wishlist,
  Users,
  Orders,
  Visitor,
  Vouchers,
  PaymentMethod,
  Orderer,
  Reviews,
};

//associator
Object.values(models).forEach((model) => {
  if (model.associate) {
    model.associate(models);
  }
});

export {
  Products,
  ProductImage,
  Articles,
  ArticleImage,
  Wishlist,
  Users,
  Orders,
  Visitor,
  Vouchers,
  PaymentMethod,
  Orderer,
  Reviews,
};
export default models;
