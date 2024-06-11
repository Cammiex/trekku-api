import { ArticleImage, Articles } from '../db/models/Association.js';
import path from 'path';
import fs from 'fs';
import { where } from 'sequelize';

export const getAllArticle = async (req, res) => {
  try {
    const response = await Articles.findAll({
      include: {
        model: ArticleImage,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(404);
    console.log(error);
  }
};

export const getArticleById = async (req, res) => {
  const { idArticle } = req.params;

  try {
    const response = await Articles.findOne({
      where: {
        id: idArticle,
      },
      include: {
        model: ArticleImage,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(404);
    console.log(error);
  }
};

export const addArticle = async (req, res) => {
  const { title, writter_name, text_head, text_body, text_footer } = req.body;

  //validasi file gambar
  const allowedType = ['.png', '.jpg', '.jpeg'];
  const maxFileSize = 5000000; // 5 MB
  let imageUrls = {};
  let imageNames = {};

  for (let i = 1; i <= 2; i++) {
    const fileKey = `image${i}`;
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
        fs.writeFileSync(`./public/images/${fileName}`, file.data);
        imageUrls[`url_img${i}`] = url;
        imageNames[`image${i}`] = fileName;
      } catch (error) {
        console.log(error);
        return res
          .status(500)
          .json({ msg: 'Terjadi kesalahan saat menyimpan gambar' });
      }
    } else {
      imageUrls[`url_img${i}`] = null;
      imageNames[`image${i}`] = null;
    }
  }

  try {
    const newArticle = await Articles.create({
      title: title,
      writter_name: writter_name,
      text_head: text_head,
      text_body: text_body,
      text_footer: text_footer,
    });

    const articleImages = [];
    for (let i = 1; i <= 2; i++) {
      articleImages.push({
        image: imageNames[`image${i}`],
        url_img: imageUrls[`url_img${i}`],
        article_id: newArticle.id,
      });
    }

    await ArticleImage.bulkCreate(articleImages);

    res.json({
      payload: {
        msg: 'Produk berhasil ditambahkan!',
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'Terjadi kesalahan saat menambahkan produk' });
  }
};
