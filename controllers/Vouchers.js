import Vouchers from '../db/models/VoucherModel.js';

export const getAllVoucher = async (req, res) => {
  try {
    const response = await Vouchers.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(404);
    console.log(error);
  }
};

export const getAllVoucherById = async (req, res) => {
  const { idVoucher } = req.params;

  try {
    const response = await Vouchers.findOne({
      where: {
        id: idVoucher,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(400);
    console.log(error);
  }
};
