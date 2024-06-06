import { Products, ProductImage } from '../db/models/Association.js';
import path from 'path';
import fs from 'fs';

export const getProducts = async (req, res) => {
  try {
    const products = await Products.findAll({
      include: [
        {
          model: ProductImage,
        },
      ],
    });
    res.json({ msg: 'Berikut merupakan list procuk', produk: products });
  } catch (error) {
    console.log(error);
  }
};

export const getProductById = async (req, res) => {
  try {
    const { productID } = req.params;
    const product = await Products.findOne({
      where: {
        id: productID,
      },
      include: {
        model: ProductImage,
      },
    });
    if (!product) {
      res.json({ msg: 'Produk tidak ditemukan!' }).status(400);
      return;
    }
    res
      .json({
        payload: {
          msg: 'Berikut produk yang dicari:',
          datas: product,
        },
      })
      .status(200);
  } catch (error) {
    console.log(error);
  }
};

export const addProduct = async (req, res) => {
  const {
    name,
    location,
    desc_information,
    desc_destination,
    desc_schedule,
    desc_facility,
    desc_accommodation,
    desc_preparation,
    price,
    duration,
    date,
    quota,
    organizer,
    many_ordeded,
    url_location,
  } = req.body;

  //validasi file gambar
  const allowedType = ['.png', '.jpg', '.jpeg'];
  const maxFileSize = 5000000; // 5 MB
  let imageUrls = {};
  let imageNames = {};

  for (let i = 1; i <= 5; i++) {
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
    const newProduct = await Products.create({
      name: name,
      location: location,
      desc_information: desc_information,
      desc_destination: desc_destination,
      desc_schedule: desc_schedule,
      desc_facility: desc_facility,
      desc_accommodation: desc_accommodation,
      desc_preparation: desc_preparation,
      price: price,
      duration: duration,
      date: date,
      quota: quota,
      organizer: organizer,
      many_ordeded: many_ordeded,
      url_location: url_location,
    });

    const productImages = [];
    for (let i = 1; i <= 5; i++) {
      productImages.push({
        image: imageNames[`image${i}`],
        url_img: imageUrls[`url_img${i}`],
        product_id: newProduct.id,
      });
    }

    await ProductImage.bulkCreate(productImages);

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

export const deleteProduct = async (req, res) => {
  const product = await Products.findOne({
    where: {
      id: req.params.id,
    },
    include: {
      model: ProductImage,
    },
  });

  const productImages = await ProductImage.findAll({
    where: {
      product_id: req.params.id,
    },
  });

  if (!product) return res.status(404).json({ msg: 'Produk tidak ditemukan' });

  try {
    // Hapus file gambar yang terkait dengan produk
    for (let i = 0; i <= 4; i++) {
      if (productImages[i].url_img) {
        const filepath = `./public/images/${path.basename(
          productImages[i].url_img
        )}`;
        if (fs.existsSync(filepath)) {
          fs.unlinkSync(filepath);
        }
      }
    }

    await ProductImage.destroy({
      where: {
        product_id: req.params.id,
      },
    });

    await Products.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: 'Produk berhasil dihapus' });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: 'Terjadi kesalahan saat menghapus produk' });
  }
};

export const editProduct = async (req, res) => {
  const { id } = req.params;
  const {
    name,
    location,
    desc_information,
    desc_destination,
    desc_schedule,
    desc_facility,
    desc_accommodation,
    desc_preparation,
    price,
    duration,
    date,
    quota,
    organizer,
    many_ordeded,
    url_location,
  } = req.body;

  //validasi file gambar
  const allowedType = ['.png', '.jpg', '.jpeg'];
  const maxFileSize = 5000000; // 5 MB
  let imageUrls = {};
  let imageNames = {};

  try {
    const product = await Products.findOne({
      where: {
        id: id,
      },
      include: {
        model: ProductImage,
      },
    });

    const productImage = await ProductImage.findAll({
      where: {
        product_id: id,
      },
    });

    if (!product) {
      return res.status(404).json({ msg: 'Produk tidak ditemukan!' });
    }

    for (let i = 1; i <= 5; i++) {
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

          // Hapus gambar lama jika ada gambar baru diunggah
          const oldImageUrl = productImage[i - 1].url_img;
          if (oldImageUrl) {
            const oldFilePath = `./public/images/${path.basename(
              productImage[i - 1].url_img
            )}`;
            if (fs.existsSync(oldFilePath)) {
              fs.unlinkSync(oldFilePath);
            }
          }
        } catch (error) {
          console.log(error);
          return res
            .status(500)
            .json({ msg: 'Terjadi kesalahan saat menyimpan gambar' });
        }
      } else {
        imageUrls[`url_img${i}`] = productImage[i - 1].url_img;
        imageNames[`image${i}`] = productImage[i - 1].image;
      }
    }

    const editedProduct = await Products.update(
      {
        name: name,
        location: location,
        desc_information: desc_information,
        desc_destination: desc_destination,
        desc_schedule: desc_schedule,
        desc_facility: desc_facility,
        desc_accommodation: desc_accommodation,
        desc_preparation: desc_preparation,
        price: price,
        duration: duration,
        date: date,
        quota: quota,
        organizer: organizer,
        many_ordeded: many_ordeded,
        url_location: url_location,
      },
      {
        where: {
          id: id,
        },
      }
    );

    const newProductImages = [];
    for (let i = 1; i <= 5; i++) {
      newProductImages.push({
        image: imageNames[`image${i}`],
        url_img: imageUrls[`url_img${i}`],
        product_id: id,
      });
    }

    await ProductImage.destroy({
      where: {
        product_id: id,
      },
    });

    await ProductImage.bulkCreate(newProductImages);

    res.json({
      payload: {
        msg: 'Produk berhasil diperbarui!',
        image: imageNames,
        url: imageUrls,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'Terjadi kesalahan saat memperbarui produk' });
  }
};
