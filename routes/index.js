import express from 'express';
import {
  getUsers,
  getUsersById,
  updateDataUser,
  register,
  login,
  logout,
} from '../controllers/Users.js';
import { verifyToken } from '../middleware/VerifyToken.js';
import { refreshToken } from '../controllers/RefreshToken.js';
import {
  addProduct,
  deleteProduct,
  editProduct,
  getProductById,
  getProducts,
} from '../controllers/Products.js';

const router = express.Router();

router.get('/users', verifyToken, getUsers);
router.get('/users/:userID', verifyToken, getUsersById);
router.put('/users/edit/:userID', updateDataUser);
router.post('/users', register);
router.post('/login', login);
router.get('/token', refreshToken);
router.delete('/logout', logout);

router.get('/products', getProducts);
router.get('/products/:productID', getProductById);
router.post('/products/add', addProduct);
router.delete('/products/delete/:id', deleteProduct);
router.patch('/products/update/:id', editProduct);

export default router;
