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
        {
          id: 4,
          name: 'Wisata Karimun Jawa',
          location: 'Jawa Tengah',
          desc_information:
            'Mari bergabung dengan open trip "Wisata Karimun Jawa" dan nikmati keindahan alam serta pengalaman laut yang menakjubkan. Karimun Jawa terkenal dengan keindahan pantai berpasir putih, air laut yang jernih, serta terumbu karang yang mempesona. Perjalanan ini akan memberikan Anda kesempatan untuk snorkeling, menjelajahi pulau-pulau kecil, menikmati kuliner khas, dan banyak lagi. Titik kumpul tersedia di Bogor, Jakarta, dan Bandung.',
          desc_destination:
            'Pulau Menjangan Besar - Tempat penangkaran hiu, Anda dapat berenang bersama hiu. Pulau Cemara Besar dan Kecil - Pulau dengan pantai berpasir putih dan spot snorkeling yang indah. Pulau Cilik - Pulau kecil yang eksotis, sempurna untuk snorkeling dan berenang. Spot Snorkeling - Menikmati keindahan terumbu karang dan biota laut Karimun Jawa.',
          desc_schedule: `Hari 1: Titik Kumpul - Jepara

          18:00: Titik kumpul di Bogor (Plaza Jambu Dua)
          20:00: Titik kumpul di Jakarta (Plaza Senayan)
          22:00: Titik kumpul di Bandung (Trans Studio Mall)
          23:00: Berangkat menuju Jepara dengan bus malam
          Hari 2: Jepara - Karimun Jawa
          
          05:00: Tiba di Jepara, sarapan di restoran lokal
          07:00: Berangkat menuju Karimun Jawa dengan kapal cepat
          09:30: Tiba di Karimun Jawa, check-in dan pembagian kamar
          11:00: Snorkeling di spot pertama
          13:00: Makan siang di pulau
          15:00: Eksplorasi Pulau Menjangan Besar (penangkaran hiu)
          17:00: Kembali ke penginapan, bersih-bersih
          18:30: Makan malam di penginapan
          20:00: Acara bebas
          Hari 3: Hopping Island
          
          07:00: Sarapan di penginapan
          08:00: Hopping island (Pulau Cemara Besar, Pulau Cemara Kecil, Pulau Cilik)
          12:00: Makan siang di pulau
          14:00: Snorkeling di spot kedua
          16:00: Kembali ke penginapan, bersih-bersih
          18:30: Makan malam BBQ di pantai
          20:00: Acara bebas atau hiburan malam
          Hari 4: Karimun Jawa - Jepara - Titik Kumpul
          
          07:00: Sarapan di penginapan dan check-out
          08:00: Belanja oleh-oleh di pasar lokal
          10:00: Berangkat kembali ke Jepara dengan kapal cepat
          12:30: Tiba di Jepara, makan siang di restoran lokal
          14:00: Perjalanan kembali ke Bogor, Jakarta, dan Bandung dengan bus
          22:00: Tiba di titik kumpul masing-masing, acara selesai`,
          desc_facility: `Transportasi pulang-pergi dari titik kumpul ke Jepara (bus)
          Tiket kapal cepat Jepara - Karimun Jawa
          Akomodasi penginapan selama 3 hari 2 malam
          Makan sesuai program (2x sarapan, 3x makan siang, 2x makan malam)
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
          Tiket bus dan kapal (disediakan oleh penyelenggara trip)
          Voucher penginapan dan konfirmasi pemesanan (disediakan oleh penyelenggara trip)
          Asuransi perjalanan (disediakan oleh penyelenggara trip)
          Barang Bawaan Pribadi:
          
          Pakaian secukupnya untuk 3 hari 2 malam (termasuk pakaian renang)
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
          price: 2800000,
          duration: '4 hari, 3 malam',
          date: '2024-12-18 00:00:00',
          quota: 40,
          organizer: 'Seize Tour',
          many_ordered: 0,
          url_location:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15877.032623692938!2d110.45899999999999!3d-5.8191699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e73ce4502749065%3A0x810dc44dc5d89f67!2sKarimun%20Jawa!5e0!3m2!1sen!2sid!4v1718193601941!5m2!1sen!2sid',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          name: 'Wisata Dieng',
          location: 'Jawa Tengah',
          desc_information:
            'Bergabunglah dengan open trip "Wisata Dieng" dan nikmati keindahan dataran tinggi Dieng yang memukau. Dataran tinggi Dieng, yang terletak di Jawa Tengah, menawarkan pemandangan alam yang menakjubkan, budaya yang kaya, serta udara pegunungan yang sejuk. Dalam perjalanan ini, Anda akan diajak untuk menjelajahi candi-candi kuno, kawah vulkanik, telaga-telaga cantik, serta menikmati sunrise dari Bukit Sikunir. Titik kumpul tersedia di Jakarta, Bandung, dan Cirebon.',
          desc_destination:
            'Kompleks Candi Arjuna - Kompleks candi Hindu kuno yang menjadi ikon Dieng. Kawah Sikidang - Kawah vulkanik aktif yang mengeluarkan uap panas dan lumpur. Telaga Warna dan Telaga Pengilon - Dua telaga yang indah dengan warna air yang berbeda. Dieng Plateau Theater - Tempat untuk belajar tentang sejarah dan budaya Dieng. Bukit Sikunir - Spot terbaik untuk menikmati sunrise di Dieng. Kawah Candradimuka - Kawah vulkanik lainnya yang memiliki pemandangan menarik. Batu Ratapan Angin - Batu besar dengan pemandangan menakjubkan dari atas bukit.',
          desc_schedule: `Hari 1: Titik Kumpul - Dieng

          18:00: Titik kumpul di Jakarta (Plaza Senayan)
          20:00: Titik kumpul di Bandung (Trans Studio Mall)
          22:00: Titik kumpul di Cirebon (Grage Mall)
          23:00: Berangkat menuju Dieng dengan bus malam
          Hari 2: Eksplorasi Dieng
          
          06:00: Tiba di Dieng, sarapan di restoran lokal
          07:30: Mengunjungi Kompleks Candi Arjuna
          09:00: Mengunjungi Kawah Sikidang
          11:00: Mengunjungi Telaga Warna dan Telaga Pengilon
          13:00: Makan siang di restoran lokal
          14:30: Mengunjungi Dieng Plateau Theater
          16:00: Check-in di penginapan dan istirahat sejenak
          18:00: Makan malam di penginapan
          19:00: Acara bebas (opsional: mengunjungi Bukit Sidengkeng untuk menikmati malam Dieng)
          Hari 3: Sunrise Bukit Sikunir dan Kembali ke Titik Kumpul
          
          03:00: Bangun dan persiapan untuk sunrise trip
          03:30: Berangkat menuju Bukit Sikunir
          04:30: Trekking ke puncak Bukit Sikunir
          05:30: Menikmati sunrise dari Bukit Sikunir
          07:00: Kembali ke penginapan dan sarapan
          08:30: Check-out dari penginapan
          09:00: Mengunjungi Kawah Candradimuka
          11:00: Mengunjungi Batu Ratapan Angin
          12:30: Makan siang di restoran lokal
          14:00: Perjalanan kembali ke Cirebon, Bandung, dan Jakarta
          22:00: Tiba di titik kumpul masing-masing, acara selesai`,
          desc_facility: `Transportasi pulang-pergi dari titik kumpul ke Dieng (bus)
          Akomodasi penginapan selama 2 hari 1 malam
          Makan sesuai program (2x sarapan, 2x makan siang, 1x makan malam)
          Tiket masuk objek wisata
          Pemandu wisata lokal
          Dokumentasi perjalanan
          Air mineral selama perjalanan
          Asuransi perjalanan`,
          desc_accommodation:
            'Penginapan di guest house atau homestay lokal yang nyaman, dengan fasilitas standar seperti kamar mandi dalam, air panas, dan kasur yang nyaman. Sarapan yang disediakan di penginapan untuk memulai hari dengan energi penuh',
          desc_preparation: `Dokumen dan Administrasi:

          Identitas diri (KTP atau paspor)
          Tiket bus (disediakan oleh penyelenggara trip)
          Voucher penginapan dan konfirmasi pemesanan (disediakan oleh penyelenggara trip)
          Asuransi perjalanan (disediakan oleh penyelenggara trip)
          Barang Bawaan Pribadi:
          
          Pakaian secukupnya untuk 2 hari 1 malam (termasuk pakaian hangat)
          Alat mandi pribadi
          Obat-obatan pribadi
          Topi atau penutup kepala
          Kacamata hitam
          Tabir surya (sunscreen)
          Sepatu trekking yang nyaman
          Kamera atau smartphone untuk dokumentasi
          Persiapan Teknis:
          
          Power bank dan charger untuk perangkat elektronik
          Plastik kedap air untuk melindungi barang elektronik saat hujan atau berembun
          Uang tunai secukupnya untuk kebutuhan pribadi atau belanja oleh-oleh
          Kesehatan dan Keamanan:
          
          Pastikan kondisi kesehatan dalam keadaan baik sebelum berangkat
          Bawa masker dan hand sanitizer
          Ikuti protokol kesehatan yang berlaku selama perjalanan
          Patuhi arahan dari pemandu wisata dan tim penyelenggara untuk keamanan bersama`,
          price: 950000,
          duration: '2 hari, 1 malam',
          date: '2024-09-18 00:00:00',
          quota: 45,
          organizer: 'Lokaly Travel & Trip',
          many_ordered: 0,
          url_location:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31666.530982584507!2d109.89751185923438!3d-7.204700589242658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e700ce3b55c05d7%3A0x5027a76e3557280!2sDieng%2C%20Kejajar%2C%20Wonosobo%20Regency%2C%20Central%20Java!5e0!3m2!1sen!2sid!4v1718193982765!5m2!1sen!2sid',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          name: 'Pendakian Gunung Sumbing',
          location: 'Jawa Tengah',
          desc_information:
            'Mari bergabung dengan open trip "Pendakian Gunung Sumbing" dan rasakan petualangan mendaki salah satu gunung tertinggi di Pulau Jawa. Gunung Sumbing yang terletak di Jawa Tengah menawarkan pemandangan yang menakjubkan dengan trek yang menantang, cocok bagi para pecinta alam dan pendaki. Dalam perjalanan ini, Anda akan ditemani oleh pemandu profesional dan mendapat pengalaman mendaki yang tak terlupakan. Titik kumpul tersedia di Jakarta dan Bandung.',
          desc_destination:
            'Basecamp Gunung Sumbing - Titik awal pendakian dan tempat beristirahat sebelum mendaki. Pos 2 dan Pos 3 - Pos peristirahatan dengan pemandangan alam yang indah. Puncak Gunung Sumbing - Puncak dengan pemandangan sunrise yang menakjubkan dan panorama pegunungan yang indah.',
          desc_schedule: `Hari 1: Titik Kumpul - Basecamp Gunung Sumbing

          18:00: Titik kumpul di Jakarta (Plaza Senayan)
          20:00: Titik kumpul di Bandung (Trans Studio Mall)
          21:00: Berangkat menuju basecamp Gunung Sumbing dengan minibus
          Hari 2: Basecamp - Pos 3
          
          05:00: Tiba di basecamp Gunung Sumbing, check-in homestay dan sarapan
          07:00: Persiapan pendakian dan briefing
          08:00: Mulai pendakian dari basecamp
          12:00: Istirahat dan makan siang di Pos 2
          13:00: Melanjutkan pendakian menuju Pos 3
          16:00: Tiba di Pos 3, mendirikan tenda dan istirahat
          18:00: Makan malam di camp
          19:00: Acara bebas dan istirahat malam
          Hari 3: Summit Attack - Basecamp - Titik Kumpul
          
          02:00: Bangun dan persiapan untuk summit attack
          02:30: Mulai pendakian menuju puncak
          05:00: Tiba di puncak Gunung Sumbing, menikmati sunrise
          06:00: Dokumentasi dan eksplorasi puncak
          07:00: Turun kembali ke Pos 3
          09:00: Sarapan di Pos 3 dan berkemas
          10:00: Turun kembali ke basecamp
          14:00: Tiba di basecamp, makan siang dan bersih-bersih
          16:00: Perjalanan kembali ke Bandung dan Jakarta
          22:00: Tiba di Bandung, Trans Studio Mall
          00:00: Tiba di Jakarta, Plaza Senayan`,
          desc_facility: `Transportasi pulang-pergi dari titik kumpul ke basecamp Gunung Sumbing (minibus)
          Akomodasi homestay selama 1 malam di basecamp
          Makan sesuai program (1x sarapan, 1x makan siang, 1x makan malam, 1x snack)
          Tiket masuk dan izin pendakian
          Pemandu pendakian lokal
          Porter (opsional)
          Peralatan medis dasar dan asuransi perjalanan
          Dokumentasi perjalanan
          Air mineral selama perjalanan`,
          desc_accommodation:
            'Penginapan di guest house atau homestay lokal yang nyaman, dengan fasilitas standar seperti kamar mandi dalam, air panas, dan kasur yang nyaman. Sarapan yang disediakan di penginapan untuk memulai hari dengan energi penuh',
          desc_preparation: `Dokumen dan Administrasi:

          Identitas diri (KTP atau paspor)
          Tiket bus (disediakan oleh penyelenggara trip)
          Izin pendakian dan tiket masuk (disediakan oleh penyelenggara trip)
          Asuransi perjalanan (disediakan oleh penyelenggara trip)
          Barang Bawaan Pribadi:
          
          Pakaian hangat (jaket, sarung tangan, topi) karena suhu dingin di gunung
          Pakaian ganti secukupnya
          Alat mandi pribadi
          Obat-obatan pribadi
          Sepatu trekking yang nyaman
          Sleeping bag dan matras
          Tenda (bisa disewa dari penyelenggara jika tidak punya)
          Headlamp atau senter
          Kamera atau smartphone untuk dokumentasi
          Persiapan Teknis:
          
          Power bank dan charger untuk perangkat elektronik
          Plastik kedap air untuk melindungi barang elektronik saat hujan
          Uang tunai secukupnya untuk kebutuhan pribadi atau belanja oleh-oleh
          Perbekalan ringan seperti camilan dan air minum
          Kesehatan dan Keamanan:
          
          Pastikan kondisi kesehatan dalam keadaan baik sebelum berangkat
          Bawa masker dan hand sanitizer
          Ikuti protokol kesehatan yang berlaku selama perjalanan
          Patuhi arahan dari pemandu pendakian dan tim penyelenggara untuk keamanan bersama`,
          price: 1000000,
          duration: '3 hari, 2 malam',
          date: '2024-10-22 00:00:00',
          quota: 30,
          organizer: 'Cous Sve Tour',
          many_ordered: 0,
          url_location:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15826.888673217003!2d110.07249999999999!3d-7.384999849999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a9c697b1bf411%3A0x7cb176b5c2587d2d!2sMount%20Sumbing!5e0!3m2!1sen!2sid!4v1718194473649!5m2!1sen!2sid',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 7,
          name: 'Pendakian Gunung Semeru',
          location: 'Jawa Timur',
          desc_information:
            'Bergabunglah dengan open trip "Pendakian Gunung Semeru" dan nikmati petualangan mendaki gunung tertinggi di Pulau Jawa. Gunung Semeru menawarkan pemandangan yang spektakuler, termasuk danau Ranu Kumbolo yang indah, Oro-oro Ombo yang memukau, serta pemandangan puncak Mahameru yang legendaris. Dalam perjalanan ini, Anda akan dipandu oleh pemandu profesional dan mendapatkan pengalaman mendaki yang tak terlupakan. Titik kumpul tersedia di Jakarta, Bandung, Cirebon, Yogyakarta, dan Malang.',
          desc_destination:
            'Ranu Pani - Desa terakhir sebelum pendakian, tempat untuk aklimatisasi dan persiapan. Ranu Kumbolo - Danau indah dengan pemandangan menakjubkan, spot populer untuk berkemah. Kalimati - Pos terakhir sebelum summit attack, tempat untuk beristirahat dan persiapan puncak. Puncak Mahameru - Puncak tertinggi di Pulau Jawa dengan pemandangan sunrise yang spektakuler.',
          desc_schedule: `Hari 1: Titik Kumpul - Ranu Pani

          18:00: Titik kumpul di Jakarta (Plaza Senayan)
          20:00: Titik kumpul di Bandung (Trans Studio Mall)
          22:00: Titik kumpul di Cirebon (Grage Mall)
          23:00: Berangkat menuju Yogyakarta
          Hari 2: Yogyakarta - Malang - Ranu Pani
          
          05:00: Titik kumpul di Yogyakarta (Stasiun Tugu)
          06:00: Berangkat menuju Malang
          11:00: Titik kumpul di Malang (Stasiun Malang Kota Baru)
          12:00: Berangkat menuju Ranu Pani
          16:00: Tiba di Ranu Pani, check-in homestay dan persiapan pendakian
          18:00: Makan malam dan briefing pendakian
          20:00: Istirahat malam
          Hari 3: Ranu Pani - Ranu Kumbolo - Kalimati
          
          05:00: Sarapan dan persiapan pendakian
          06:00: Mulai pendakian dari Ranu Pani
          12:00: Tiba di Ranu Kumbolo, makan siang dan istirahat
          13:00: Melanjutkan pendakian menuju Kalimati
          17:00: Tiba di Kalimati, mendirikan tenda dan istirahat
          18:00: Makan malam di camp
          19:00: Acara bebas dan istirahat malam
          Hari 4: Summit Attack - Ranu Kumbolo
          
          00:00: Bangun dan persiapan untuk summit attack
          01:00: Mulai pendakian menuju puncak Mahameru
          06:00: Tiba di puncak Mahameru, menikmati sunrise
          07:00: Dokumentasi dan eksplorasi puncak
          08:00: Turun kembali ke Kalimati
          12:00: Tiba di Kalimati, makan siang dan istirahat
          13:00: Turun kembali ke Ranu Kumbolo
          17:00: Tiba di Ranu Kumbolo, mendirikan tenda dan istirahat
          18:00: Makan malam di camp
          19:00: Acara bebas dan istirahat malam
          Hari 5: Ranu Kumbolo - Ranu Pani - Titik Kumpul
          
          05:00: Bangun dan menikmati sunrise di Ranu Kumbolo
          06:00: Sarapan di camp
          07:00: Turun kembali ke Ranu Pani
          11:00: Tiba di Ranu Pani, makan siang dan bersih-bersih
          13:00: Perjalanan kembali ke Malang
          17:00: Tiba di Malang, makan malam di restoran lokal
          18:00: Perjalanan kembali ke Yogyakarta, Cirebon, Bandung, dan Jakarta
          23:00: Tiba di Yogyakarta (Stasiun Tugu)
          01:00: Tiba di Cirebon (Grage Mall)
          04:00: Tiba di Bandung (Trans Studio Mall)
          06:00: Tiba di Jakarta (Plaza Senayan), acara selesai`,
          desc_facility: `Transportasi pulang-pergi dari titik kumpul ke Ranu Pani (minibus)
          Akomodasi homestay di Ranu Pani selama 1 malam
          Makan sesuai program (3x sarapan, 3x makan siang, 2x makan malam, 2x snack)
          Tiket masuk dan izin pendakian Taman Nasional Bromo Tengger Semeru
          Pemandu pendakian lokal
          Porter (opsional)
          Peralatan medis dasar dan asuransi perjalanan
          Dokumentasi perjalanan
          Air mineral selama perjalanan`,
          desc_accommodation:
            'Penginapan di guest house atau homestay lokal yang nyaman, dengan fasilitas standar seperti kamar mandi dalam, air panas, dan kasur yang nyaman. Sarapan yang disediakan di penginapan untuk memulai hari dengan energi penuh',
          desc_preparation: `Dokumen dan Administrasi:

          Identitas diri (KTP atau paspor)
          Tiket bus atau kereta (disediakan oleh penyelenggara trip)
          Izin pendakian dan tiket masuk (disediakan oleh penyelenggara trip)
          Asuransi perjalanan (disediakan oleh penyelenggara trip)
          Barang Bawaan Pribadi:
          
          Pakaian hangat (jaket, sarung tangan, topi) karena suhu dingin di gunung
          Pakaian ganti secukupnya
          Alat mandi pribadi
          Obat-obatan pribadi
          Sepatu trekking yang nyaman
          Sleeping bag dan matras
          Tenda (bisa disewa dari penyelenggara jika tidak punya)
          Headlamp atau senter
          Kamera atau smartphone untuk dokumentasi
          Persiapan Teknis:
          
          Power bank dan charger untuk perangkat elektronik
          Plastik kedap air untuk melindungi barang elektronik saat hujan
          Uang tunai secukupnya untuk kebutuhan pribadi atau belanja oleh-oleh
          Perbekalan ringan seperti camilan dan air minum
          Kesehatan dan Keamanan:
          
          Pastikan kondisi kesehatan dalam keadaan baik sebelum berangkat
          Bawa masker dan hand sanitizer
          Ikuti protokol kesehatan yang berlaku selama perjalanan
          Patuhi arahan dari pemandu pendakian dan tim penyelenggara untuk keamanan bersama`,
          price: 8800000,
          duration: '5 hari, 4 malam',
          date: '2024-12-19 00:00:00',
          quota: 30,
          organizer: 'Mandala Travel',
          many_ordered: 0,
          url_location:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15799.755094983077!2d112.9224075!3d-8.10771705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd63e89e1d817bb%3A0x9c14d4ed3c488f54!2sSemeru!5e0!3m2!1sen!2sid!4v1718194741369!5m2!1sen!2sid',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 8,
          name: 'Menjelajah Bali',
          location: 'Bali',
          desc_information:
            'Bergabunglah dengan open trip "Menjelajahi Bali" dan nikmati pesona Pulau Dewata yang memukau. Perjalanan ini menawarkan pengalaman lengkap mulai dari wisata alam, budaya, hingga kuliner khas Bali. Anda akan mengunjungi pantai-pantai indah, pura-pura bersejarah, dan spot-spot menarik lainnya. Titik kumpul tersedia di Jakarta, Bandung, Semarang, dan Malang.',
          desc_destination:
            'Tanah Lot - Pura yang terkenal dengan lokasi di atas batu karang di tepi laut. Kuta - Pantai yang terkenal dengan pasir putih dan kehidupan malamnya. Monkey Forest Ubud - Hutan suci yang dihuni oleh ratusan monyet ekor panjang. Pasar Seni Ubud - Tempat untuk berbelanja seni dan kerajinan khas Bali. Pura Tirta Empul - Pura dengan mata air suci yang digunakan untuk ritual penyucian. Pantai Nusa Dua - Pantai dengan pasir putih dan air laut yang jernih. Garuda Wisnu Kencana (GWK) - Taman budaya dengan patung besar Garuda Wisnu Kencana. Pura Luhur Uluwatu - Pura yang terletak di tebing dengan pemandangan sunset yang menakjubkan. Pantai Sanur - Pantai dengan suasana yang tenang dan pemandangan sunrise yang indah. Pantai Pandawa - Pantai yang terkenal dengan tebing kapur yang megah.',
          desc_schedule: `Hari 1: Titik Kumpul - Bali

          18:00: Titik kumpul di Jakarta (Plaza Senayan)
          20:00: Titik kumpul di Bandung (Trans Studio Mall)
          22:00: Titik kumpul di Semarang (Simpang Lima)
          23:00: Titik kumpul di Malang (Stasiun Malang Kota Baru)
          00:00: Berangkat menuju Pelabuhan Ketapang, Banyuwangi
          Hari 2: Ketapang - Bali
          
          06:00: Tiba di Pelabuhan Ketapang, sarapan di restoran lokal
          07:00: Menyeberang ke Bali dengan ferry
          09:00: Tiba di Pelabuhan Gilimanuk, Bali
          12:00: Mengunjungi Tanah Lot, makan siang di restoran lokal
          15:00: Check-in hotel di Kuta
          18:00: Makan malam di restoran lokal
          20:00: Acara bebas di Kuta (opsional: menikmati malam di Pantai Kuta)
          Hari 3: Ubud dan Sekitarnya
          
          07:00: Sarapan di hotel
          08:00: Berangkat menuju Ubud
          09:30: Mengunjungi Monkey Forest Ubud
          11:00: Mengunjungi Pasar Seni Ubud
          12:30: Makan siang di restoran lokal
          14:00: Mengunjungi Pura Tirta Empul
          16:00: Kembali ke hotel di Kuta, acara bebas
          18:00: Makan malam di restoran lokal
          20:00: Acara bebas di Kuta
          Hari 4: Nusa Dua dan Uluwatu
          
          07:00: Sarapan di hotel
          08:00: Berangkat menuju Pantai Nusa Dua
          09:00: Menikmati aktivitas di Pantai Nusa Dua
          12:00: Makan siang di restoran lokal
          14:00: Mengunjungi Garuda Wisnu Kencana (GWK)
          16:00: Mengunjungi Pura Luhur Uluwatu
          18:00: Menikmati sunset di Pantai Uluwatu
          19:00: Makan malam di restoran lokal
          20:00: Kembali ke hotel di Kuta, acara bebas
          Hari 5: Bali - Titik Kumpul
          
          07:00: Sarapan di hotel dan check-out
          08:00: Mengunjungi Pantai Sanur
          10:00: Mengunjungi Pantai Pandawa
          12:00: Makan siang di restoran lokal
          14:00: Belanja oleh-oleh di Krisna Oleh-Oleh Khas Bali
          16:00: Perjalanan menuju Pelabuhan Gilimanuk
          18:00: Menyeberang ke Ketapang, Banyuwangi
          20:00: Perjalanan kembali ke Malang, Semarang, Bandung, dan Jakarta
          Hari 6: Tiba di Titik Kumpul
          
          06:00: Tiba di Malang (Stasiun Malang Kota Baru)
          09:00: Tiba di Semarang (Simpang Lima)
          14:00: Tiba di Bandung (Trans Studio Mall)
          16:00: Tiba di Jakarta (Plaza Senayan), acara selesai`,
          desc_facility: `Transportasi pulang-pergi dari titik kumpul ke Bali (bus dan ferry)
          Akomodasi hotel selama 4 hari 3 malam
          Makan sesuai program (4x sarapan, 4x makan siang, 3x makan malam)
          Tiket masuk objek wisata
          Pemandu wisata lokal
          Dokumentasi perjalanan
          Air mineral selama perjalanan
          Asuransi perjalanan`,
          desc_accommodation:
            'Penginapan di guest house atau homestay lokal yang nyaman, dengan fasilitas standar seperti kamar mandi dalam, air panas, dan kasur yang nyaman. Sarapan yang disediakan di penginapan untuk memulai hari dengan energi penuh',
          desc_preparation: `Dokumen dan Administrasi:

          Identitas diri (KTP atau paspor)
          Tiket bus dan ferry (disediakan oleh penyelenggara trip)
          Voucher hotel dan konfirmasi pemesanan (disediakan oleh penyelenggara trip)
          Asuransi perjalanan (disediakan oleh penyelenggara trip)
          Barang Bawaan Pribadi:
          
          Pakaian secukupnya untuk 5 hari 4 malam (termasuk pakaian renang)
          Alat mandi pribadi
          Obat-obatan pribadi
          Topi atau penutup kepala
          Kacamata hitam
          Tabir surya (sunscreen)
          Sandal dan sepatu yang nyaman
          Kamera atau smartphone untuk dokumentasi
          Persiapan Teknis:
          
          Power bank dan charger untuk perangkat elektronik
          Plastik kedap air untuk melindungi barang elektronik saat di pantai
          Uang tunai secukupnya untuk kebutuhan pribadi atau belanja oleh-oleh
          Kesehatan dan Keamanan:
          
          Pastikan kondisi kesehatan dalam keadaan baik sebelum berangkat
          Bawa masker dan hand sanitizer
          Ikuti protokol kesehatan yang berlaku selama perjalanan
          Patuhi arahan dari pemandu wisata dan tim penyelenggara untuk keamanan bersama`,
          price: 1500000,
          duration: '6 hari, 5 malam',
          date: '2024-12-11 00:00:00',
          quota: 65,
          organizer: 'Kencana Tour & Travel',
          many_ordered: 0,
          url_location:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d505145.6949744661!2d115.07157704999999!3d-8.4554714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd141d3e8100fa1%3A0x24910fb14b24e690!2sBali!5e0!3m2!1sen!2sid!4v1718195054790!5m2!1sen!2sid',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 9,
          name: 'Wisata Banda Neira',
          location: 'Maluku Tengah',
          desc_information:
            'Bergabunglah dengan paket wisata "Petualangan Banda Neira" dan nikmati eksplorasi yang mendalam ke keindahan alam dan sejarah yang kaya di Banda Neira dan sekitarnya. Dalam perjalanan ini, Anda akan menjelajahi destinasi menarik melalui jalur darat dan laut, memungkinkan Anda untuk merasakan petualangan yang tak terlupakan. Titik kumpul kami tersedia di kota-kota besar yang dilalui, dengan titik awal dari Jakarta.',
          desc_destination:
            'Benteng Belgica: Bangunan bersejarah yang dibangun pada abad ke-17 oleh Belanda, menawarkan pemandangan spektakuler ke sekitar pelabuhan dan pulau-pulau sekitarnya. Benteng Nassau: Benteng lain yang bersejarah yang dibangun pada abad ke-16, menawarkan pemandangan laut yang indah dan menarik untuk dijelajahi. Desa Banda Neira: Berjalan-jalan di sekitar desa ini memungkinkan Anda untuk merasakan kehidupan lokal, mengamati arsitektur khas Belanda, dan berinteraksi dengan penduduk setempat. Pulau Banda Besar: Pulau terbesar di kepulauan Banda, terkenal dengan pantainya yang indah, airnya yang jernih, dan kehidupan bawah laut yang kaya. Aktivitas Snorkeling atau Diving: Nikmati keindahan bawah laut Banda Neira dengan snorkeling atau diving di beberapa lokasi terbaik di sekitar pulau-pulau dan terumbu karangnya.',
          desc_schedule: `Hari 1: Perjalanan Menuju Banda Neira

          06:00: Berangkat dari Jakarta dengan bus atau mobil pribadi
          Perjalanan darat menuju pelabuhan terdekat
          12:00: Tiba di pelabuhan dan makan siang
          14:00: Berangkat dengan kapal laut menuju Banda Neira
          18:00: Tiba di Banda Neira dan check-in hotel
          19:00: Makan malam di restoran lokal
          Hari 2: Eksplorasi Banda Neira
          
          07:00: Sarapan di hotel
          08:00: Kunjungan ke Benteng Belgica dan Benteng Nassau
          10:00: Berjalan-jalan di sekitar desa dan melihat kehidupan lokal
          12:00: Makan siang di restoran lokal
          14:00: Aktivitas snorkeling atau diving di sekitar Pulau Banda Besar
          17:00: Kembali ke hotel untuk istirahat
          19:00: Makan malam di restoran lokal
          Hari 3: Kembali ke Jakarta
          
          07:00: Sarapan di hotel dan check-out
          08:00: Berangkat dengan kapal laut menuju pelabuhan terdekat
          12:00: Tiba di pelabuhan dan makan siang
          Perjalanan darat kembali ke Jakarta
          18:00: Perkiraan tiba di Jakarta`,
          desc_facility: `Transportasi selama 3 hari
          Akomodasi hotel selama 2 malam
          Makan sesuai program (sarapan, makan siang, dan makan malam)
          Tiket masuk objek wisata
          Pemandu wisata lokal
          Air mineral selama perjalanan
          Asuransi perjalanan`,
          desc_accommodation:
            'Penginapan di guest house atau homestay lokal yang nyaman, dengan fasilitas standar seperti kamar mandi dalam, air panas, dan kasur yang nyaman. Sarapan yang disediakan di penginapan untuk memulai hari dengan energi penuh',
          desc_preparation: `Dokumen dan Administrasi:

          Paspor dan tiket perjalanan
          Asuransi perjalanan (disediakan oleh penyelenggara trip)
          Voucher hotel dan konfirmasi pemesanan (jika diperlukan)
          Barang Bawaan Pribadi:
          
          Pakaian yang nyaman dan sesuai dengan kegiatan
          Topi atau penutup kepala
          Kacamata hitam dan tabir surya (sunscreen)
          Peralatan snorkeling atau diving (jika Anda ingin berpartisipasi dalam aktivitas tersebut)
          Kamera atau smartphone untuk dokumentasi
          Tas kecil atau ransel untuk membawa barang-barang pribadi
          Air mineral tambahan (jika diperlukan)
          Kesehatan dan Keamanan:
          
          Pastikan kondisi kesehatan dalam keadaan baik sebelum berangkat
          Patuhi arahan dari pemandu wisata dan tim penyelenggara untuk keamanan bersama
          Ikuti protokol kesehatan yang berlaku selama perjalanan, terutama dalam aktivitas snorkeling atau diving`,
          price: 1300000,
          duration: '3 hari, 2 malam',
          date: '2024-11-11 00:00:00',
          quota: 50,
          organizer: 'Kencana Tour & Travel',
          many_ordered: 0,
          url_location:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15909.68416230966!2d129.89376024822022!3d-4.517901827303523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d15860b887ac3ab%3A0x6d9d8565c44e2f07!2sBanda%20Neira!5e0!3m2!1sen!2sid!4v1718195347223!5m2!1sen!2sid',
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
