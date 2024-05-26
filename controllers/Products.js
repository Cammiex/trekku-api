import Products from '../models/ProductModel.js';
import path from 'path';
import fs from 'fs';

export const getProducts = async (req, res) => {
  try {
    const products = await Products.findAll();
    res.json(products);
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

// export const addProduct = async (req, res) => {
//   const {
//     name,
//     location,
//     image1,
//     image2,
//     image3,
//     image4,
//     image5,
//     desc_information,
//     desc_destination,
//     desc_schedule,
//     desc_facility,
//     desc_accommodation,
//     desc_preparation,
//     price,
//     duration,
//     date,
//     quota,
//   } = req.body;

//   //validasi
//   const file = req.files.file;
//   const fileSize = file.data.length;
//   const ext = path.extname(file.name);
//   const fileName = file.md5 + ext;
//   const url = `${req.protocol}://${req.get('host')}/images/${fileName}`;
//   const allowedType = ['.png', '.jpg', '.jpeg'];

//   if (!allowedType.includes(ext.toLowerCase()))
//     return res.status(422).json({ msg: 'Invalid Images' });
//   if (fileSize > 5000000)
//     return res.status(422).json({ msg: 'Image must be less than 5 MB' });

//   try {
//     await Products.create({
//       name: name,
//       location: location,
//       image1: image1,
//       image2: image2,
//       image3: image3,
//       image4: image4,
//       image5: image5,
//       url_img1: name,
//       url_img2: name,
//       url_img3: name,
//       url_img4: name,
//       url_img5: name,
//       desc_information: desc_information,
//       desc_destination: desc_destination,
//       desc_schedule: desc_schedule,
//       desc_facility: desc_facility,
//       desc_accommodation: desc_accommodation,
//       desc_preparation: desc_preparation,
//       price: price,
//       duration: duration,
//       date: date,
//       quota: quota,
//     });
//     res.json({
//       payload: {
//         msg: 'Produk berhasil ditambahkan!',
//       },
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

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
  } = req.body;

  //validasi file gambar
  const allowedType = ['.png', '.jpg', '.jpeg'];
  const maxFileSize = 5000000; // 5 MB
  let imageUrls = {};

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
      } catch (error) {
        console.log(error);
        return res
          .status(500)
          .json({ msg: 'Terjadi kesalahan saat menyimpan gambar' });
      }
    } else {
      imageUrls[`url_img${i}`] = null;
    }
  }

  try {
    await Products.create({
      name: name,
      location: location,
      image1: req.body.image1,
      image2: req.body.image2,
      image3: req.body.image3,
      image4: req.body.image4,
      image5: req.body.image5,
      url_img1: imageUrls.url_img1,
      url_img2: imageUrls.url_img2,
      url_img3: imageUrls.url_img3,
      url_img4: imageUrls.url_img4,
      url_img5: imageUrls.url_img5,
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
    });

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
  });

  if (!product) return res.status(404).json({ msg: 'No Data Found' });

  try {
    // Hapus file gambar yang terkait dengan produk
    for (let i = 1; i <= 5; i++) {
      const imageUrlKey = `url_img${i}`;
      if (product[imageUrlKey]) {
        const filepath = `./public/images/${path.basename(
          product[imageUrlKey]
        )}`;
        if (fs.existsSync(filepath)) {
          fs.unlinkSync(filepath);
        }
      }
    }

    await Products.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: 'Product Deleted Successfully' });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: 'Terjadi kesalahan saat menghapus produk' });
  }
};
