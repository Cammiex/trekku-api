import { where } from 'sequelize';
import {
  Orderer,
  Visitor,
  Orders,
  Products,
  ProductImage,
  PaymentMethod,
} from '../models/Association.js';

export const addOrder = async (req, res) => {
  const {
    quantity,
    total_price,
    idUser,
    idProduct,
    idVoucher,
    idPayment,
  } = req.body;
  const { nameOrderer, phoneOrderer, emailOrderer } = req.body;
  const { titleVisitor, nameVisitor, phoneVisitor, emailVisitor } = req.body;
  try {
    const newOrder = await Orders.create({
      quantity: quantity,
      total_price: total_price,
      user_id: idUser,
      product_id: idProduct,
      voucher_id: idVoucher,
      payment_method_id: idPayment,
    });

    await Orderer.create({
      name: nameOrderer,
      phone: phoneOrderer,
      email: emailOrderer,
      order_id: newOrder.id,
    });

    await Visitor.create({
      title: titleVisitor,
      name: nameVisitor,
      phone: phoneVisitor,
      email: emailVisitor,
      order_id: newOrder.id,
    });

    res.status(200).json(newOrder);
  } catch (error) {
    res.status(400);
    console.log(error);
  }
};

export const getOrderById = async (req, res) => {
  const { idOrder } = req.params;

  try {
    const response = await Orders.findOne({
      where: {
        id: idOrder,
      },
      include: [
        {
          model: Products,
          attributes: ['id', 'name', 'date'],
          include: {
            model: ProductImage,
            attributes: ['url_img'],
          },
        },
        {
          model: PaymentMethod,
          attributes: ['id', 'payment_name', 'account_number'],
        },
      ],
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(400);
  }
};

export const afterPayment = async (req, res) => {
  const { idOrder } = req.params;

  try {
    const order = await Orders.findOne({
      where: {
        id: idOrder,
      },
      include: [
        {
          model: Products,
          attributes: ['id', 'name', 'date', 'quota', 'many_ordered'],
          include: {
            model: ProductImage,
            attributes: ['url_img'],
          },
        },
        {
          model: PaymentMethod,
          attributes: ['id', 'payment_name', 'account_number'],
        },
      ],
    });

    await Products.update(
      {
        quota: order.product.quota - order.quantity,
        many_ordered: order.product.many_ordered + 1,
      },
      {
        where: {
          id: order.product.id,
        },
      }
    );

    await Orders.update(
      {
        status: 'success',
      },
      {
        where: {
          id: idOrder,
        },
      }
    );

    if (order[0] === 0) {
      return res.status(404).json({ msg: 'Order tidak ditemukan!' });
    }

    res
      .status(200)
      .json({ msg: 'Status pembayaran berhasil diperbarui!', data: order });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'Terjadi kesalahan pada server.' });
  }
};

export const getUserOrder = async (req, res) => {
  const { idUser } = req.params;

  try {
    const response = await Orders.findAll({
      where: {
        user_id: idUser,
      },
      attributes: ['id', 'status', 'product_id', 'total_price', 'user_id'],
      include: {
        model: Products,
        attributes: ['id', 'name', 'date', 'quota', 'many_ordered'],
        include: {
          model: ProductImage,
          attributes: ['url_img'],
        },
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};
