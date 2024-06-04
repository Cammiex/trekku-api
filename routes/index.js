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
  getOrderById,
  getUserOrder,
} from '../controllers/Orders.js';

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

export default router;
