import ProductImage from '../db/models/ProductImageModel.js';
import Products from '../db/models/ProductModel.js';
import Users from '../db/models/UserModel.js';
import Articles from '../db/models/ArticleModel.js';
import ArticleImage from '../db/models/ArticleImageModel.js';
import Wishlist from '../db/models/WishlistModel.js';
import Orders from '../db/models/OrderModel.js';
import Visitor from '../db/models/VisitorModel.js';
import Vouchers from '../db/models/VoucherModel.js';
import PaymentMethod from '../db/models/PaymentMethodModel.js';
import Orderer from '../db/models/OrdererDataModel.js';
import Reviews from '../db/models/ReviewModel.js';

export const initDatabase = async () => {
  try {
    await Users.sync();
    await Products.sync();
    await Wishlist.sync();
    await ProductImage.sync();
    await Articles.sync();
    await ArticleImage.sync();
    await Vouchers.sync();
    await PaymentMethod.sync();
    await Orders.sync();
    await Visitor.sync();
    await Orderer.sync();
    await Reviews.sync();
    console.log('Database synchronized successfully.');
  } catch (error) {
    console.error('Error synchronizing database:', error);
    // Handle error as needed, e.g., throw error or exit process
    throw error;
  }
};
