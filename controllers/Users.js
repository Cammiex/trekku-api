import { Users } from '../db/models/Association.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import path from 'path';
import fs from 'fs';

export const getUsers = async (req, res) => {
  try {
    const users = await Users.findAll({
      attributes: ['id', 'name', 'email'],
    });
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

export const getUsersById = async (req, res) => {
  try {
    const { userID } = req.params;
    const results = await Users.findOne({
      where: {
        id: userID,
      },
      attributes: ['name', 'email', 'phone_number', 'url_profile_img'],
    });
    if (!results) {
      res.status(400).json({
        msg: `User dengan ID: ${userID}, tidak ditemukan.`,
      });
      return;
    }
    res.status(200).json({
      payload: {
        msg: `Berikut data user dengan ID: ${userID}`,
        datas: results,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateDataUser = async (req, res) => {
  try {
    const { userID } = req.params;
    const { name, email, password, phone_number } = req.body;

    // Validasi input
    if (!email && !name && !password && !phone_number) {
      return res.status(400).json({ msg: 'Tidak ada data yang diupdate.' });
    }

    // Buat objek data yang akan diupdate
    const updateData = {};
    if (name) updateData.name = name;
    if (email) updateData.email = email;
    if (phone_number) updateData.phone_number = phone_number;
    if (password) {
      const salt = await bcrypt.genSalt();
      const hashPassword = await bcrypt.hash(password, salt);
      updateData.password = hashPassword;
    }

    // Update data pengguna
    const [updated] = await Users.update(updateData, {
      where: { id: userID },
    });

    if (updated) {
      const updatedUser = await Users.findOne({
        where: { id: userID },
        attributes: ['id', 'name', 'email', 'phone_number'],
      });
      return res.status(200).json({
        msg: 'Data pengguna berhasil diupdate.',
        data: updatedUser,
      });
    }

    // Jika tidak ada baris yang diupdate
    return res
      .status(404)
      .json({ msg: `User dengan ID: ${userID} tidak ditemukan.` });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: 'Terjadi kesalahan pada server.' });
  }
};

export const register = async (req, res) => {
  const { name, email, password, confPassword } = req.body;
  if (password !== confPassword)
    return res.status(400).json({ msg: 'Password tidak sama' });
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);
  try {
    await Users.create({
      name: name,
      email: email,
      password: hashPassword,
    });
    res.json({ msg: 'Register Success!' });
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req, res) => {
  try {
    const user = await Users.findAll({
      where: {
        email: req.body.email,
      },
    });
    const match = await bcrypt.compare(req.body.password, user[0].password);
    if (!match) return res.status(400).json({ msg: 'Wrong Password' });

    const userId = user[0].id;
    const name = user[0].name;
    const email = user[0].email;
    const accessToken = jwt.sign(
      { userId, name, email },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: '20s',
      }
    );
    const refreshToken = jwt.sign(
      { userId, name, email },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: '1d',
      }
    );
    await Users.update(
      { refresh_token: refreshToken },
      {
        where: {
          id: userId,
        },
      }
    );
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: true, // Hanya mengirimkan cookie melalui HTTPS
      sameSite: 'None', // Perlu untuk CORS
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.json({ accessToken });
  } catch (error) {
    res.status(404).json({ msg: 'Email tidak ditemukan' });
  }
};

export const logout = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) return res.sendStatus(204);
  const user = await Users.findAll({
    where: {
      refresh_token: refreshToken,
    },
  });
  if (!user[0]) return res.sendStatus(204);
  const userId = user[0].id;
  await Users.update(
    { refresh_token: null },
    {
      where: {
        id: userId,
      },
    }
  );
  res.clearCookie('refreshToken');
  return res.sendStatus(200);
};

export const addProfilePicture = async (req, res) => {
  //validasi file gambar
  const allowedType = ['.png', '.jpg', '.jpeg'];
  const maxFileSize = 5000000; // 5 MB
  let imageUrls = {};

  const fileKey = `url_profile_img`;
  const file = req.files?.[fileKey];
  if (file) {
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get('host')}/images/${fileName}`;

    if (!allowedType.includes(ext.toLowerCase())) {
      return res.status(422).json({ msg: 'Invalid Images' });
    }
    if (fileSize > maxFileSize) {
      return res.status(422).json({ msg: 'Image must be less than 5 MB' });
    }

    try {
      const { userID } = req.params;
      const user = await Users.findOne({ where: { id: userID } });
      if (user && user.url_profile_img) {
        const oldImagePath = `./public/images/${path.basename(
          user.url_profile_img
        )}`;
        if (fs.existsSync(oldImagePath)) {
          fs.unlinkSync(oldImagePath);
        }
      }

      fs.writeFileSync(`./public/images/${fileName}`, file.data);
      imageUrls[`url_profile_img`] = url;
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ msg: 'Terjadi kesalahan saat menyimpan gambar' });
    }
  } else {
    imageUrls[`url_profile_img`] = null;
  }

  try {
    const { userID } = req.params;
    await Users.update(
      { url_profile_img: imageUrls.url_profile_img },
      {
        where: {
          id: userID,
        },
      }
    );
    res.status(200).json({ msg: 'Foto berhasil diganti.' });
  } catch (error) {
    console.log(error);
  }
};

export const deleteProfilePicture = async (req, res) => {
  try {
    const { userID } = req.params;
    const user = await Users.findOne({ where: { id: userID } });

    if (!user || !user.url_profile_img) {
      return res.status(404).json({ msg: 'Gambar profil tidak ditemukan' });
    }

    const oldImagePath = `./public/images/${path.basename(
      user.url_profile_img
    )}`;
    if (fs.existsSync(oldImagePath)) {
      fs.unlinkSync(oldImagePath);
    }

    await Users.update(
      { url_profile_img: null },
      {
        where: {
          id: userID,
        },
      }
    );

    res.status(200).json({ msg: 'Foto profil berhasil dihapus.' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'Terjadi kesalahan saat menghapus gambar' });
  }
};
