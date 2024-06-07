import { Op } from 'sequelize';
import {
  Orderer,
  Visitor,
  Orders,
  Products,
  ProductImage,
  PaymentMethod,
  Vouchers,
} from '../db/models/Association.js';

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
          attributes: ['id', 'name', 'date', 'location'],
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

export const cancelOrder = async (req, res) => {
  const { idOrder } = req.params;

  try {
    await Orders.update(
      {
        status: 'cancel',
      },
      {
        where: {
          id: idOrder,
        },
      }
    );
    res.status(200).json({ msg: 'Pesanan dibatalkan' });
  } catch (error) {
    console.log(error);
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
        attributes: ['id', 'name', 'date', 'quota', 'many_ordered', 'location'],
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

export const getUserOrderSucces = async (req, res) => {
  const { idUser } = req.params;

  try {
    const response = await Orders.findAll({
      where: {
        user_id: idUser,
        status: 'success',
      },
      attributes: ['id', 'status', 'product_id', 'total_price', 'user_id'],
      include: {
        model: Products,
        attributes: ['id', 'name', 'date', 'quota', 'many_ordered', 'location'],
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

export const getUserOrderPending = async (req, res) => {
  const { idUser } = req.params;

  try {
    const response = await Orders.findAll({
      where: {
        user_id: idUser,
        status: 'pending',
      },
      attributes: ['id', 'status', 'product_id', 'total_price', 'user_id'],
      include: {
        model: Products,
        attributes: ['id', 'name', 'date', 'quota', 'many_ordered', 'location'],
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

export const getUsetOrderCancel = async (req, res) => {
  const { idUser } = req.params;

  try {
    const response = await Orders.findAll({
      where: {
        user_id: idUser,
        status: 'cancel',
      },
      attributes: ['id', 'status', 'product_id', 'total_price', 'user_id'],
      include: {
        model: Products,
        attributes: ['id', 'name', 'date', 'quota', 'many_ordered', 'location'],
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

export const getVoucherByCode = async (req, res) => {
  const { code } = req.body;

  try {
    const voucher = await Vouchers.findOne({
      where: {
        code: {
          [Op.eq]: code,
        },
      },
    });

    if (!voucher) {
      res.status(400);
    }

    res.status(200).json(voucher);
  } catch (error) {
    res.status(400);
    console.log(error);
  }
};
