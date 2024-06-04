import ProductImage from '../models/ProductImageModel.js';
import Products from '../models/ProductModel.js';
import Users from '../models/UserModel.js';
import Articles from '../models/ArticleModel.js';
import ArticleImage from '../models/ArticleImageModel.js';
import Wishlist from '../models/WishlistModel.js';
import Orders from '../models/OrderModel.js';
import Visitor from '../models/VisitorModel.js';
import Vouchers from '../models/VoucherModel.js';
import PaymentMethod from '../models/PaymentMethodModel.js';
import Orderer from '../models/OrdererDataModel.js';

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
    console.log('Database synchronized successfully.');
  } catch (error) {
    console.error('Error synchronizing database:', error);
    // Handle error as needed, e.g., throw error or exit process
    throw error;
  }
};
