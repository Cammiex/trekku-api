import { Reviews, Users } from '../db/models/Association.js';

export const getAllReviews = async (req, res) => {
  try {
    const response = await Reviews.findAll({
      include: {
        model: Users,
        attributes: ['name', 'url_profile_img'],
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(400);
    console.log(error);
  }
};

export const getProductReviews = async (req, res) => {
  const { idProduct } = req.params;

  try {
    const response = await Reviews.findAll({
      where: {
        product_id: idProduct,
      },
      include: {
        model: Users,
        attributes: ['name', 'url_profile_img'],
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};

export const sendReviews = async (req, res) => {
  const { idUser, idProduct, name, comment, rating } = req.body;

  try {
    if (!idUser && !idProduct && !name && !comment && !rating) {
      res.status(403).json({ msg: 'Semua input harus diisi!' });
      return;
    }
    const response = await Reviews.create({
      name: name,
      comment: comment,
      rating: rating,
      user_id: idUser,
      product_id: idProduct,
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};
