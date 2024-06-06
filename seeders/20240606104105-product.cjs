'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'products',
      [
        {
          id: 1,
          name: 'Wisata Tur Pulau Belitung',
          location: 'Kepulauan Bangka Belitung',
          desc_information:
            'Selamat datang di Open Trip "Wisata Tur Pulau Belitung"! Kami mengajak Anda untuk menjelajahi keindahan Pulau Belitung yang terkenal dengan pantainya yang eksotis, pasir putih yang lembut, dan formasi batu granit yang menakjubkan. Perjalanan ini akan memberikan pengalaman yang tak terlupakan, mulai dari snorkeling di laut biru jernih, mengunjungi pulau-pulau kecil yang cantik, hingga menikmati kuliner khas Belitung. Titik kumpul dan keberangkatan dari Jakarta.',
          desc_destination:
            'Pantai Tanjung Tinggi - Pantai dengan pasir putih dan batu granit besar yang eksotis.            Pantai Tanjung Kelayang - Pantai yang terkenal sebagai titik keberangkatan hopping island. Pulau Lengkuas - Terkenal dengan mercusuar peninggalan Belanda dan spot snorkeling yang indah. Pulau Kepayang - Pulau kecil dengan pantai yang indah, tempat ideal untuk makan siang dan bersantai. Pulau Batu Berlayar - Pulau kecil dengan batu-batu besar yang unik. Pulau Pasir - Pulau yang muncul saat air surut, dengan pasir putih yang lembut. Danau Kaolin - Danau dengan air biru dan pemandangan yang menakjubkan akibat aktivitas penambangan kaolin.',
          desc_schedule: `Jadwal Perjalanan:

          Hari 1: Jakarta - Belitung
          
          05:00: Titik kumpul di Bandara Soekarno-Hatta, Jakarta
          07:00: Penerbangan ke Belitung
          08:30: Tiba di Bandara H.A.S. Hanandjoeddin, Belitung
          09:00: Sarapan di restoran lokal
          10:00: Mengunjungi Pantai Tanjung Tinggi
          12:00: Makan siang di restoran lokal
          13:00: Check-in di hotel
          15:00: Mengunjungi Pantai Tanjung Kelayang
          18:00: Kembali ke hotel dan makan malam
          19:00: Acara bebas
          Hari 2: Hopping Island
          
          07:00: Sarapan di hotel
          08:00: Menuju Pantai Tanjung Kelayang untuk hopping island
          08:30: Mengunjungi Pulau Lengkuas (snorkeling dan naik ke mercusuar)
          11:00: Mengunjungi Pulau Kepayang (makan siang dan bersantai)
          13:00: Mengunjungi Pulau Batu Berlayar dan Pulau Pasir
          15:00: Kembali ke Pantai Tanjung Kelayang
          17:00: Kembali ke hotel dan bersih-bersih
          18:00: Makan malam di restoran lokal
          19:00: Acara bebas
          Hari 3: Belitung - Jakarta
          
          07:00: Sarapan di hotel dan check-out
          08:00: Mengunjungi Danau Kaolin
          10:00: Belanja oleh-oleh khas Belitung
          12:00: Makan siang di restoran lokal
          13:00: Menuju Bandara H.A.S. Hanandjoeddin
          14:30: Penerbangan kembali ke Jakarta
          16:00: Tiba di Bandara Soekarno-Hatta, Jakarta
          16:30: Acara selesai`,
          desc_facility: `Tiket pesawat pulang-pergi Jakarta - Belitung
          Transportasi darat di Belitung (AC)
          Akomodasi hotel bintang 3 selama 3 hari 2 malam
          Makan sesuai program (2x sarapan, 3x makan siang, 2x makan malam)
          Tiket masuk objek wisata
          Peralatan snorkeling
          Pemandu wisata lokal
          Dokumentasi perjalanan
          Air mineral selama perjalanan
          Asuransi perjalanan`,
          desc_accommodation:
            'Penginapan di guest house atau homestay lokal yang nyaman, dengan fasilitas standar seperti kamar mandi dalam, air panas, dan kasur yang nyaman. Sarapan yang disediakan di penginapan untuk memulai hari dengan energi penuh',
          desc_preparation: `Persiapan Perjalanan:

          1. Dokumen dan Administrasi:
             - Identitas diri (KTP atau paspor)
             - Tiket pesawat (disediakan oleh penyelenggara trip)
             - Voucher hotel dan konfirmasi pemesanan (disediakan oleh penyelenggara trip)
             - Asuransi perjalanan (disediakan oleh penyelenggara trip)
          
          2. Barang Bawaan Pribadi:
             - Pakaian secukupnya untuk 3 hari 2 malam (termasuk pakaian renang)
             - Alat mandi pribadi
             - Obat-obatan pribadi
             - Topi atau penutup kepala
             - Kacamata hitam
             - Tabir surya (sunscreen)
             - Sandal dan sepatu yang nyaman
             - Kamera atau smartphone untuk dokumentasi
          
          3. Persiapan Teknis:
             - Power bank dan charger untuk perangkat elektronik
             - Plastik kedap air untuk melindungi barang elektronik saat di pantai atau snorkeling
             - Uang tunai secukupnya untuk kebutuhan pribadi atau belanja oleh-oleh
          
          4. Kesehatan dan Keamanan:
             - Pastikan kondisi kesehatan dalam keadaan baik sebelum berangkat
             - Bawa masker dan hand sanitizer
             - Ikuti protokol kesehatan yang berlaku selama perjalanan
             - Patuhi arahan dari pemandu wisata dan tim penyelenggara untuk keamanan bersama
          
          5. Tips Tambahan:
             - Bawa perbekalan ringan seperti camilan dan air minum
             - Siapkan mental untuk aktivitas fisik seperti berjalan di pantai atau naik perahu
             - Bawa tas kecil untuk keperluan sehari-hari selama tur`,
          price: 4500000,
          duration: '3 hari, 2 malam',
          date: '2024-12-23 00:00:00',
          quota: 30,
          organizer: 'Nusantara Tour & Travel',
          many_ordered: 0,
          url_location:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d510042.9819714387!2d107.80006589570311!3d-2.8994298499999864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e172904cb3c7b25%3A0x9b308566eb9637c6!2sBelitung!5e0!3m2!1sen!2sid!4v1717672841116!5m2!1sen!2sid',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: 'Bromo Peak Sunrise Trip',
          location: 'Jawa Timur',
          desc_information:
            'Nikmati keindahan matahari terbit dari puncak Gunung Bromo dalam perjalanan open trip "Bromo Peak Sunrise". Gunung Bromo, yang terkenal dengan keindahan alamnya, menawarkan pemandangan spektakuler yang tidak boleh dilewatkan. Perjalanan ini akan membawa Anda menjelajahi keindahan Taman Nasional Bromo Tengger Semeru, dengan pengalaman yang tak terlupakan mulai dari melihat sunrise, menjelajahi kawah Bromo, hingga menikmati panorama savana yang menakjubkan. Titik kumpul di Jakarta dan perjalanan dilakukan bersama dengan peserta lain untuk kebersamaan yang lebih seru.',
          desc_destination:
            'Penanjakan 1 - Spot terbaik untuk menikmati sunrise dengan latar belakang Gunung Bromo, Semeru, dan Batok. Kawah Bromo - Kawah aktif yang bisa dicapai dengan jalan kaki atau naik kuda. Pasir Berbisik - Padang pasir luas di sekitar Gunung Bromo. Savana Teletubbies - Padang rumput hijau yang menyerupai bukit-bukit di serial Teletubbies.',
          desc_schedule: `Hari 1: Jakarta - Probolinggo

          18:00: Titik kumpul di Stasiun Pasar Senen, Jakarta
          20:00: Berangkat menuju Probolinggo dengan kereta malam
          Hari 2: Probolinggo - Bromo
          
          06:00: Tiba di Stasiun Probolinggo, sarapan di restoran lokal
          07:00: Perjalanan menuju Cemoro Lawang dengan transportasi darat
          09:00: Check-in di homestay dan istirahat sejenak
          12:00: Makan siang di homestay
          13:00: Jelajah Desa Ngadisari dan sekitarnya (acara bebas)
          18:00: Makan malam di homestay
          19:00: Istirahat dan persiapan untuk pendakian dini hari
          Hari 3: Sunrise di Bromo
          
          02:30: Bangun dan persiapan untuk sunrise trip
          03:00: Berangkat dengan jeep menuju Penanjakan
          04:00: Tiba di Penanjakan, menikmati keindahan matahari terbit
          06:00: Menuju Kawah Bromo, jalan kaki atau naik kuda (opsional)
          08:00: Menjelajahi Pasir Berbisik dan Savana Teletubbies
          10:00: Kembali ke homestay untuk sarapan dan bersih-bersih
          11:00: Check-out dari homestay, perjalanan kembali ke Probolinggo
          13:00: Makan siang di restoran lokal di Probolinggo
          14:00: Berangkat kembali ke Jakarta dengan kereta sore
          22:00: Tiba di Jakarta, acara selesai`,
          desc_facility: `- Transportasi pulang-pergi dari Jakarta ke Bromo (kereta atau bus)
          - Transportasi jeep di Bromo
          - Akomodasi homestay selama 1 malam
          - Makan sesuai program (1x sarapan, 1x makan siang, 1x makan malam)
          - Tiket masuk Taman Nasional Bromo Tengger Semeru
          - Pemandu wisata lokal
          - Dokumentasi perjalanan
          - Air mineral selama perjalanan
          - Asuransi perjalanan`,
          desc_accommodation:
            'Penginapan di guest house atau homestay lokal yang nyaman, dengan fasilitas standar seperti kamar mandi dalam, air panas, dan kasur yang nyaman. Sarapan yang disediakan di penginapan untuk memulai hari dengan energi penuh',
          desc_preparation: `Dokumen dan Administrasi:

          Identitas diri (KTP atau paspor)
          Tiket kereta atau bus (disediakan oleh penyelenggara trip)
          Voucher homestay dan konfirmasi pemesanan (disediakan oleh penyelenggara trip)
          Asuransi perjalanan (disediakan oleh penyelenggara trip)
          Barang Bawaan Pribadi:
          
          Pakaian hangat (jaket, sarung tangan, topi) karena suhu dingin di Bromo
          Pakaian ganti secukupnya
          Alat mandi pribadi
          Obat-obatan pribadi
          Sepatu trekking yang nyaman
          Kamera atau smartphone untuk dokumentasi
          Persiapan Teknis:
          
          Power bank dan charger untuk perangkat elektronik
          Plastik kedap air untuk melindungi barang elektronik saat di pasir atau hujan
          Uang tunai secukupnya untuk kebutuhan pribadi atau belanja oleh-oleh
          Kesehatan dan Keamanan:
          
          Pastikan kondisi kesehatan dalam keadaan baik sebelum berangkat
          Bawa masker dan hand sanitizer
          Ikuti protokol kesehatan yang berlaku selama perjalanan
          Patuhi arahan dari pemandu wisata dan tim penyelenggara untuk keamanan bersama`,
          price: 900000,
          duration: '3 hari, 2 malam',
          date: '2024-06-28 00:00:00',
          quota: 30,
          organizer: 'Nusantara Tour & Travel',
          many_ordered: 0,
          url_location:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15806.18004244916!2d112.95301219999999!3d-7.94249345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd637aaab794a41%3A0xada40d36ecd2a5dd!2sMt%20Bromo!5e0!3m2!1sen!2sid!4v1717673887891!5m2!1sen!2sid',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          name: 'Wisata Pulau Seribu',
          location: 'Kepulauan Seribu',
          desc_information:
            'Nikmati keindahan Pulau Seribu dalam perjalanan open trip "Wisata Pulau Seribu". Pulau Seribu, yang terletak di utara Jakarta, menawarkan keindahan alam bawah laut, pantai berpasir putih, dan pengalaman yang tidak terlupakan. Dalam perjalanan ini, Anda akan diajak untuk snorkeling, menjelajahi pulau-pulau kecil, dan menikmati suasana pantai yang tenang. Titik kumpul dan keberangkatan dari Jakarta.',
          desc_destination:
            'Spot Snorkeling - Menikmati keindahan terumbu karang dan biota laut Pulau Seribu. Pulau Pramuka - Pusat pemerintahan Kepulauan Seribu dan tempat penangkaran penyu. Pulau Karya - Pulau dengan sejarah dan pemandangan yang menakjubkan. Pulau Semak Daun - Pulau kecil yang cocok untuk berkemah dan menikmati suasana tenang.',
          desc_schedule: `Hari 1: Jakarta - Pulau Seribu

          06:00: Titik kumpul di Dermaga Marina Ancol, Jakarta
          07:00: Berangkat menuju Pulau Seribu dengan kapal cepat
          09:00: Tiba di Pulau Seribu, check-in dan pembagian kamar
          10:00: Snorkeling di spot snorkeling pertama
          12:00: Makan siang di penginapan
          14:00: Eksplorasi pulau (Pulau Pramuka, Pulau Karya, atau Pulau Semak Daun)
          17:00: Kembali ke penginapan, bersih-bersih
          18:30: Makan malam di penginapan
          20:00: Acara bebas atau barbeque malam (opsional)
          Hari 2: Pulau Seribu - Jakarta
          
          07:00: Sarapan di penginapan
          08:00: Snorkeling di spot snorkeling kedua
          10:00: Jelajah Pulau dan aktivitas bebas (berenang, berjalan-jalan)
          12:00: Makan siang dan persiapan check-out
          13:00: Check-out dan persiapan kembali ke Jakarta
          14:00: Berangkat menuju Jakarta dengan kapal cepat
          16:00: Tiba di Dermaga Marina Ancol, Jakarta
          16:30: Acara selesai`,
          desc_facility: `Transportasi pulang-pergi dari Jakarta ke Pulau Seribu (kapal cepat)
          Akomodasi penginapan selama 2 hari 1 malam
          Makan sesuai program (1x sarapan, 2x makan siang, 1x makan malam)
          Tiket masuk objek wisata
          Peralatan snorkeling
          Pemandu wisata lokal
          Dokumentasi perjalanan
          Air mineral selama perjalanan
          Asuransi perjalanan`,
          desc_accommodation:
            'Penginapan di guest house atau homestay lokal yang nyaman, dengan fasilitas standar seperti kamar mandi dalam, air panas, dan kasur yang nyaman. Sarapan yang disediakan di penginapan untuk memulai hari dengan energi penuh',
          desc_preparation: `Dokumen dan Administrasi:

          Identitas diri (KTP atau paspor)
          Tiket kapal cepat (disediakan oleh penyelenggara trip)
          Voucher penginapan dan konfirmasi pemesanan (disediakan oleh penyelenggara trip)
          Asuransi perjalanan (disediakan oleh penyelenggara trip)
          Barang Bawaan Pribadi:
          
          Pakaian secukupnya untuk 2 hari 1 malam (termasuk pakaian renang)
          Alat mandi pribadi
          Obat-obatan pribadi
          Topi atau penutup kepala
          Kacamata hitam
          Tabir surya (sunscreen)
          Sandal dan sepatu yang nyaman
          Kamera atau smartphone untuk dokumentasi
          Persiapan Teknis:
          
          Power bank dan charger untuk perangkat elektronik
          Plastik kedap air untuk melindungi barang elektronik saat di pantai atau snorkeling
          Uang tunai secukupnya untuk kebutuhan pribadi atau belanja oleh-oleh
          Kesehatan dan Keamanan:
          
          Pastikan kondisi kesehatan dalam keadaan baik sebelum berangkat
          Bawa masker dan hand sanitizer
          Ikuti protokol kesehatan yang berlaku selama perjalanan
          Patuhi arahan dari pemandu wisata dan tim penyelenggara untuk keamanan bersama`,
          price: 1200000,
          duration: '2 hari, 1 malam',
          date: '2024-08-18 00:00:00',
          quota: 25,
          organizer: 'Nusantara Tour & Travel',
          many_ordered: 0,
          url_location:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d508248.7354956543!2d106.6169964!3d-5.61224045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e41d68cd396621f%3A0xa06e871c66df72b3!2sKepulauan%20Seribu%20Regency%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1717674280075!5m2!1sen!2sid',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('products', null, {});
  },
};
