import express from 'express';
import {
  getUsers,
  getUsersById,
  updateDataUser,
  register,
  login,
  logout,
  addProfilePicture,
  deleteProfilePicture,
} from '../controllers/Users.js';
// import { verifyToken } from '../middleware/VerifyToken.js';
import { refreshToken } from '../controllers/RefreshToken.js';
import {
  addProduct,
  deleteProduct,
  editProduct,
  getProductById,
  getProducts,
} from '../controllers/Products.js';
import {
  addToWishlist,
  getSameWishlist,
  getWishlistbyUserID,
  removeFromWishlist,
} from '../controllers/Wishlist.js';
import {
  addOrder,
  afterPayment,
  cancelOrder,
  getOrderById,
  getUserOrder,
  getUserOrderPending,
  getUserOrderSucces,
  getUsetOrderCancel,
  getVoucherByCode,
} from '../controllers/Orders.js';
import { getAllVoucher, getAllVoucherById } from '../controllers/Vouchers.js';
import {
  getAllReviews,
  getProductReviews,
  sendReviews,
} from '../controllers/Reviews.js';
import {
  addArticle,
  getAllArticle,
  getArticleById,
} from '../controllers/Articles.js';

const router = express.Router();

router.get('/users', getUsers);
router.get('/users/:userID', getUsersById);
router.patch('/users/edit/:userID', updateDataUser);
router.patch('/users/edit/image/:userID', addProfilePicture);
router.delete('/users/edit/delete-image/:userID', deleteProfilePicture);
router.post('/users', register);
router.post('/login', login);
router.get('/token', refreshToken);
router.delete('/logout', logout);

router.get('/products', getProducts);
router.get('/products/:productID', getProductById);
router.post('/products/add', addProduct);
router.delete('/products/delete/:id', deleteProduct);
router.patch('/products/update/:id', editProduct);

router.get('/wishlist', getSameWishlist);
router.get('/wishlist/:id', getWishlistbyUserID);
router.post('/wishlist', addToWishlist);
router.delete('/wishlist', removeFromWishlist);

// router.post('/order/orderer', addOrdererData);
// router.post('/order/visitor', addVisitor);
router.post('/order/add', addOrder);
router.get('/order/:idOrder', getOrderById);
router.put('/order/:idOrder', afterPayment);
router.get('/order/user/:idUser', getUserOrder);
router.get('/order/user/success/:idUser', getUserOrderSucces);
router.get('/order/user/pending/:idUser', getUserOrderPending);
router.get('/order/user/cancel/:idUser', getUsetOrderCancel);
router.put('/order/user/cancel/:idOrder', cancelOrder);

router.post('/voucher', getVoucherByCode);
router.get('/voucher', getAllVoucher);
router.get('/voucher/:idVoucher', getAllVoucherById);

router.get('/review', getAllReviews);
router.post('/review', sendReviews);
router.get('/review/:idProduct', getProductReviews);

router.get('/article', getAllArticle);
router.get('/article/:idArticle', getArticleById);
router.post('/article', addArticle);

export default router;
