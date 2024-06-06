import {
  ProductImage,
  Products,
  Users,
  Wishlist,
} from '../db/models/Association.js';

export const getSameWishlist = async (req, res) => {
  try {
    const { user_id, product_id } = req.query;
    const response = await Wishlist.findAll({
      where: {
        user_id: user_id,
        product_id: product_id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'Terjadi kesalahan saat mengambil wishlist' });
  }
};

export const getWishlistbyUserID = async (req, res) => {
  try {
    const response = await Wishlist.findAll({
      where: {
        user_id: req.params.id,
      },
      attributes: ['id', 'user_id'],
      include: [
        {
          model: Users,
          attributes: ['id', 'name'],
        },
        {
          model: Products,
          include: {
            model: ProductImage,
            attributes: ['url_img'],
          },
          attributes: ['id', 'organizer', 'name', 'price'],
        },
      ],
    });
    res.json(response);
  } catch (error) {
    console.log(error);
  }
};

export const addToWishlist = async (req, res) => {
  try {
    const { user_id, product_id } = req.body;
    const newWishlistItem = await Wishlist.create({ user_id, product_id });
    res.status(201).json(newWishlistItem);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ msg: 'Terjadi kesalahan saat menambahkan ke wishlist' });
  }
};

export const removeFromWishlist = async (req, res) => {
  try {
    const { user_id, product_id } = req.query;
    const wishlist = await Wishlist.destroy({
      where: {
        user_id: user_id,
        product_id: product_id,
      },
    });
    res.status(200).json(wishlist);
  } catch (error) {
    console.log(error);
  }
};
