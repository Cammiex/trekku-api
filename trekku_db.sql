-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jul 02, 2024 at 11:23 AM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `trekku_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `articles`
--

CREATE TABLE `articles` (
  `id` int NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `writter_name` varchar(255) DEFAULT NULL,
  `text_head` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `text_body` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `text_footer` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `articles`
--

INSERT INTO `articles` (`id`, `title`, `writter_name`, `text_head`, `text_body`, `text_footer`, `createdAt`, `updatedAt`) VALUES
(1, 'Banda Neira, Surga di Timur Indonesia', 'Imam Muzakir', 'Pulau Banda Neira menyimpan sejuta keindahan alam Indonesia nan eksotis. Di pulau ini pula sejarah bangsa Indonesia penting pernah terjadi. Tidak heran bila pulau ini menjadi salah satu tujuan wisata memikat bagi wisatawan mancanegara maupun domestik. Banda Neira merupakan pulau di Kepulauan Banda, Maluku Tengah. Pulau tropis yang menawarkan lautan, hamparan pasir, terumbu karang, dan biota laut yang menawan. Penikmat senja dan pecinta snorkeling wajib mengunjungi tempat ini. Tidak berhenti pada kecantikan lautnya saja, Pulau Banda Neira menyajikan hamparan hutan tropis dan tumbuhan aromatik. Tidak ketinggalan pula di kepulauan ini wisatawan bisa menemukan gunung vulkanik aktif yang dapat didaki.', 'Berkunjung ke Banda Neira tidak lengkap bila tidak menyusuri sejarah peninggalan kolonial karena kepulauan ini menyimpan saksi bisu sejarah besar pernah terjadi. Bayangkan saja kota metropolitan yang dijuluki The Big Apple pernah diserahkan kepada Inggris demi mendapatkan salah satu pulau di kepulauan Banda ini. Keindahan alam dan sejarahnya tentu membuat orang semakin tertarik untuk berkunjung ke pulau Banda Neira. Tapi, tenang saja masih banyak fakta menarik mengenai pulau ini yang membuat kita semakin antusias untuk menjelajahinya. Mengutip dari laman https://kemenparekraf.go.id, Banda Neira merupakan salah satu dari sepuluh pulau vulkanik di Kepulauan Banda, Provinsi Maluku. Di balik keindahan alamnya, Banda Neira pernah menjadi daerah penghasil rempah pala satu-satunya di dunia. Sekitar 500 tahun lalu, nilai segenggam pala setara dengan segenggam emas.', 'Karena itu Banda Neira menjadi tempat pertama di nusantara yang dikuasai Belanda sebelum ke Batavia. Bahkan Banda Neira juga sempat menjadi wilayah yang diperebutkan Inggris, Belanda, hingga warga lokal untuk mempertahankan wilayah. Akibatnya pada 1609 terjadilah perang yang melibatkan warga lokal yang dibantu Inggris untuk melawan Belanda. Sayangnya, pertikaian antara Belanda dan Inggris tidak kunjung berhenti. Hingga akhirnya terjadilah pertukaran Pulau Run di Kepulauan Banda Neira, dengan Nieuw Amsterdam (sekarang dikenal dengan Manhattan, New York) demi memonopoli pala. Banda Neira juga pernah menjadi tempat pengasingan Bung Hatta dan Sutan Syahrir yang dilakukan oleh Belanda pada 1936. Sebelum akhirnya dipindahkan ke Rumah Pengasingan Hatta-Sjahrir di Sukabumi pada 1 Februari 1942 untuk mempersiapkan proklamasi kemerdekaan Indonesia. Sungguh fakta sejarah yang menarik mengiringi keindahan Banda Neira. Lantas, bagaimana dengan keindahan alamnya? Digadang-gadang destinasi wisata Banda Neira, surga di timur Indonesia sebagai kawasan yang menjanjikan.', '2024-06-12 12:45:35', '2024-06-12 12:45:35'),
(2, 'Eksplorasi Menjangan, Surga Bawah Laut Bali Barat', 'Andi Saputra', 'Pulau Menjangan merupakan surga tersembunyi di Bali Barat yang menawarkan keindahan bawah laut yang menakjubkan. Terletak di Taman Nasional Bali Barat, pulau ini menjadi destinasi favorit bagi penyelam dan snorkeler. Keindahan alam bawah lautnya dengan terumbu karang yang masih terjaga dan berbagai jenis ikan hias membuat Pulau Menjangan menjadi tujuan wisata yang menarik. Selain itu, pulau ini juga menyimpan pesona pantai pasir putih yang memikat. Para pecinta alam dan fotografi tidak boleh melewatkan kesempatan untuk mengabadikan keindahan pulau ini. Tidak hanya menawarkan keindahan bawah laut, Pulau Menjangan juga memiliki kekayaan flora dan fauna yang luar biasa.', 'Mengunjungi Pulau Menjangan, Anda akan disuguhi dengan pemandangan bawah laut yang spektakuler. Terumbu karang berwarna-warni dan ikan hias yang beraneka ragam menjadi daya tarik utama pulau ini. Selain menyelam, Anda juga bisa menikmati kegiatan snorkeling untuk melihat keindahan bawah laut dari permukaan. Tidak hanya itu, Pulau Menjangan juga menjadi rumah bagi berbagai jenis burung, menjadikannya tempat yang cocok untuk birdwatching. Selain alamnya yang indah, Menjangan juga memiliki cerita sejarah yang menarik. Dahulu, pulau ini menjadi tempat berlabuh bagi kapal-kapal dari berbagai negara. Keindahan alam dan kekayaan sejarahnya membuat Pulau Menjangan menjadi destinasi yang harus dikunjungi.', 'Pulau Menjangan juga dikenal sebagai tempat yang tenang dan jauh dari keramaian. Ini adalah tempat yang sempurna bagi Anda yang mencari ketenangan dan ingin menikmati alam dengan damai. Di pulau ini, Anda juga bisa menemukan beberapa spot untuk berkemah dan menikmati malam di bawah bintang-bintang. Pada malam hari, suasana pulau yang sepi memberikan pengalaman yang berbeda dan menyenangkan. Selain itu, Pulau Menjangan juga memiliki beberapa gua bawah laut yang bisa dijelajahi oleh penyelam berpengalaman. Jadi, jika Anda mencari destinasi wisata yang menawarkan keindahan alam bawah laut dan ketenangan, Pulau Menjangan adalah pilihan yang tepat. Jadikan liburan Anda tak terlupakan dengan menjelajahi surga bawah laut Bali Barat ini.', '2024-06-12 12:45:35', '2024-06-12 12:45:35'),
(3, 'Taman Nasional Komodo, Petualangan di Timur Indonesia', 'Dewi Lestari', 'Taman Nasional Komodo adalah salah satu destinasi wisata paling populer di Indonesia yang menawarkan keindahan alam dan petualangan. Terletak di antara provinsi Nusa Tenggara Timur dan Nusa Tenggara Barat, taman nasional ini dikenal dengan populasi komodo yang menjadi daya tarik utama. Selain itu, Taman Nasional Komodo juga menawarkan pemandangan alam yang menakjubkan, dengan pantai berpasir putih, perairan biru jernih, dan bukit-bukit hijau yang mempesona. Para wisatawan dapat menikmati berbagai aktivitas seperti trekking, snorkeling, dan menyelam. Tidak heran jika taman nasional ini menjadi tujuan favorit bagi wisatawan lokal dan mancanegara.', 'Saat berkunjung ke Taman Nasional Komodo, Anda akan disuguhkan dengan berbagai keindahan alam yang luar biasa. Dari bukit-bukit yang menawarkan pemandangan panorama hingga perairan yang kaya akan kehidupan laut. Aktivitas snorkeling dan menyelam di sini sangat populer karena keberagaman hayati bawah lautnya. Anda bisa menemukan terumbu karang yang masih terjaga dan berbagai spesies ikan tropis yang cantik. Tidak hanya itu, trekking di Pulau Komodo akan memberikan pengalaman yang tak terlupakan. Menyusuri jalur trekking sambil melihat komodo di habitat aslinya adalah salah satu pengalaman yang paling mendebarkan. Selain itu, Taman Nasional Komodo juga menyimpan sejarah geologi yang menarik.', 'Di Taman Nasional Komodo, Anda juga bisa menemukan Pantai Pink yang terkenal dengan pasir berwarna merah muda. Pantai ini merupakan salah satu dari sedikit pantai di dunia dengan pasir berwarna unik. Menikmati sunset di Pantai Pink adalah salah satu momen yang tidak boleh dilewatkan. Selain itu, Anda juga bisa mengunjungi pulau-pulau kecil di sekitar taman nasional yang menawarkan keindahan yang tak kalah menawan. Dari Pulau Rinca hingga Pulau Padar, setiap pulau memiliki pesona tersendiri. Jadi, jika Anda mencari destinasi wisata yang menawarkan petualangan dan keindahan alam yang luar biasa, Taman Nasional Komodo adalah pilihan yang tepat. Jelajahi keajaiban alam dan keunikan fauna di Timur Indonesia ini.', '2024-06-12 12:45:35', '2024-06-12 12:45:35');

-- --------------------------------------------------------

--
-- Table structure for table `article_img`
--

CREATE TABLE `article_img` (
  `id` int NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `url_img` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `article_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `article_img`
--

INSERT INTO `article_img` (`id`, `image`, `url_img`, `createdAt`, `updatedAt`, `article_id`) VALUES
(17, '2e2e102fb2a64f679c29e22c69f6c5ae.jpg', 'http://localhost:5000/images/article/2e2e102fb2a64f679c29e22c69f6c5ae.jpg', '2024-06-12 12:45:35', '2024-06-12 12:45:35', 1),
(18, 'b2601a70ecf63859088824ae3156b747.jpg', 'http://localhost:5000/images/article/b2601a70ecf63859088824ae3156b747.jpg', '2024-06-12 12:45:35', '2024-06-12 12:45:35', 1),
(19, 'menjangan-1.jpeg', 'http://localhost:5000/images/article/menjangan-1.jpeg', '2024-06-12 12:45:35', '2024-06-12 12:45:35', 2),
(20, 'menjangan-2.jpeg', 'http://localhost:5000/images/article/menjangan-2.jpeg', '2024-06-12 12:45:35', '2024-06-12 12:45:35', 2),
(21, 'komodo-1.jpeg', 'http://localhost:5000/images/article/komodo-1.jpeg', '2024-06-12 12:45:35', '2024-06-12 12:45:35', 3),
(22, 'komodo-2.jpeg', 'http://localhost:5000/images/article/komodo-2.jpeg', '2024-06-12 12:45:35', '2024-06-12 12:45:35', 3);

-- --------------------------------------------------------

--
-- Table structure for table `orderer_data`
--

CREATE TABLE `orderer_data` (
  `id` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `order_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `orderer_data`
--

INSERT INTO `orderer_data` (`id`, `name`, `phone`, `email`, `createdAt`, `updatedAt`, `order_id`) VALUES
(1, 'adawd', 'awd', 'awdawd', '2024-06-07 01:13:48', '2024-06-07 01:13:48', 1),
(2, 'Aqil', 'awdaw', 'daw', '2024-06-07 02:41:46', '2024-06-07 02:41:46', 2),
(3, 'awdaw', 'dawd', 'awdaw', '2024-06-07 02:58:05', '2024-06-07 02:58:05', 3),
(4, 'awdawd', 'daw', 'dawd', '2024-06-08 09:27:55', '2024-06-08 09:27:55', 4),
(5, 'adawda', 'wdaw', 'awdawdaw', '2024-06-08 09:35:34', '2024-06-08 09:35:34', 1),
(6, 'awdaw', 'dawd', 'awdaw', '2024-06-09 03:35:07', '2024-06-09 03:35:07', 2),
(7, 'awdawd', 'awd', 'awdaw', '2024-06-09 04:14:56', '2024-06-09 04:14:56', 3),
(8, 'adawd', 'awdawd', 'awdaw', '2024-06-11 14:27:17', '2024-06-11 14:27:17', 4),
(9, 'test', '123123', '123123', '2024-06-11 15:00:44', '2024-06-11 15:00:44', 5),
(10, 'Roger Kenter', '+62812345678', 'roger@mail.com', '2024-06-12 11:27:54', '2024-06-12 11:27:54', 6),
(11, 'Roger Kenter', '+62812345678', 'roger@mail.com', '2024-06-12 11:29:07', '2024-06-12 11:29:07', 7),
(12, 'Davis Rosser', '+62812345678', 'email@example.com', '2024-06-12 11:34:01', '2024-06-12 11:34:01', 8),
(13, 'Aqil Rahmatullah', '+62812345678', 'aqil@mail.com', '2024-06-12 13:48:10', '2024-06-12 13:48:10', 9),
(14, 'Aqil Rahmatullah', '+62812345678', 'aqil@mail.com', '2024-06-12 14:00:11', '2024-06-12 14:00:11', 1),
(15, 'Malik', '+62812345678', 'malik@mail.com', '2024-06-13 01:29:45', '2024-06-13 01:29:45', 2),
(16, 'Ahmad Lahiq', '+62812345678', 'email@example.com', '2024-06-13 03:25:32', '2024-06-13 03:25:32', 3);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int NOT NULL,
  `status` enum('pending','success','cancel') DEFAULT 'pending',
  `quantity` int DEFAULT NULL,
  `total_price` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `product_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `voucher_id` int DEFAULT NULL,
  `payment_method_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `status`, `quantity`, `total_price`, `createdAt`, `updatedAt`, `product_id`, `user_id`, `voucher_id`, `payment_method_id`) VALUES
(1, 'success', 1, 1235000, '2024-06-12 14:00:11', '2024-06-12 14:00:50', 9, 1, NULL, 2),
(2, 'success', 1, 1157000, '2024-06-13 01:29:45', '2024-06-13 01:30:19', 9, 6, NULL, 2),
(3, 'success', 1, 1157000, '2024-06-13 03:25:32', '2024-06-13 03:25:49', 9, 7, NULL, 2);

-- --------------------------------------------------------

--
-- Table structure for table `payment_methods`
--

CREATE TABLE `payment_methods` (
  `id` int NOT NULL,
  `payment_name` varchar(255) DEFAULT NULL,
  `account_number` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `payment_methods`
--

INSERT INTO `payment_methods` (`id`, `payment_name`, `account_number`, `createdAt`, `updatedAt`) VALUES
(1, 'Bank Central Asia (BCA)', '4875 3210 6758', '2024-06-12 12:45:35', '2024-06-12 12:45:35'),
(2, 'Bank Mandiri', '9123 4567 8923', '2024-06-12 12:45:35', '2024-06-12 12:45:35'),
(3, 'Bank Rakyat Indonesia (BRI)', '3056 7891 2345', '2024-06-12 12:45:35', '2024-06-12 12:45:35'),
(4, 'Bank Negara Indonesia (BNI)', '6834 2198 7564', '2024-06-12 12:45:35', '2024-06-12 12:45:35'),
(5, 'Bank Central Asia (BCA)', '6834 2198 7564', '2024-06-12 12:45:35', '2024-06-12 12:45:35'),
(6, 'Alfamart', '0978 1234 5678', '2024-06-12 12:45:35', '2024-06-12 12:45:35'),
(7, 'Alfamidi', '7865 2341 0987', '2024-06-12 12:45:35', '2024-06-12 12:45:35'),
(8, 'Indomaret', '5674 8901 2345', '2024-06-12 12:45:35', '2024-06-12 12:45:35');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `desc_information` text,
  `desc_destination` text,
  `desc_schedule` text,
  `desc_facility` text,
  `desc_accommodation` text,
  `desc_preparation` text,
  `price` int DEFAULT NULL,
  `duration` varchar(255) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `quota` int DEFAULT NULL,
  `organizer` varchar(255) DEFAULT NULL,
  `many_ordered` int DEFAULT '0',
  `url_location` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `location`, `desc_information`, `desc_destination`, `desc_schedule`, `desc_facility`, `desc_accommodation`, `desc_preparation`, `price`, `duration`, `date`, `quota`, `organizer`, `many_ordered`, `url_location`, `createdAt`, `updatedAt`) VALUES
(2, 'Bromo Peak Sunrise Trip', 'Jawa Timur', 'Nikmati keindahan matahari terbit dari puncak Gunung Bromo dalam perjalanan open trip \"Bromo Peak Sunrise\". Gunung Bromo, yang terkenal dengan keindahan alamnya, menawarkan pemandangan spektakuler yang tidak boleh dilewatkan. Perjalanan ini akan membawa Anda menjelajahi keindahan Taman Nasional Bromo Tengger Semeru, dengan pengalaman yang tak terlupakan mulai dari melihat sunrise, menjelajahi kawah Bromo, hingga menikmati panorama savana yang menakjubkan. Titik kumpul di Jakarta dan perjalanan dilakukan bersama dengan peserta lain untuk kebersamaan yang lebih seru.', 'Penanjakan 1 - Spot terbaik untuk menikmati sunrise dengan latar belakang Gunung Bromo, Semeru, dan Batok. Kawah Bromo - Kawah aktif yang bisa dicapai dengan jalan kaki atau naik kuda. Pasir Berbisik - Padang pasir luas di sekitar Gunung Bromo. Savana Teletubbies - Padang rumput hijau yang menyerupai bukit-bukit di serial Teletubbies.', 'Hari 1: Jakarta - Probolinggo\n\n          18:00: Titik kumpul di Stasiun Pasar Senen, Jakarta\n          20:00: Berangkat menuju Probolinggo dengan kereta malam\n          Hari 2: Probolinggo - Bromo\n          \n          06:00: Tiba di Stasiun Probolinggo, sarapan di restoran lokal\n          07:00: Perjalanan menuju Cemoro Lawang dengan transportasi darat\n          09:00: Check-in di homestay dan istirahat sejenak\n          12:00: Makan siang di homestay\n          13:00: Jelajah Desa Ngadisari dan sekitarnya (acara bebas)\n          18:00: Makan malam di homestay\n          19:00: Istirahat dan persiapan untuk pendakian dini hari\n          Hari 3: Sunrise di Bromo\n          \n          02:30: Bangun dan persiapan untuk sunrise trip\n          03:00: Berangkat dengan jeep menuju Penanjakan\n          04:00: Tiba di Penanjakan, menikmati keindahan matahari terbit\n          06:00: Menuju Kawah Bromo, jalan kaki atau naik kuda (opsional)\n          08:00: Menjelajahi Pasir Berbisik dan Savana Teletubbies\n          10:00: Kembali ke homestay untuk sarapan dan bersih-bersih\n          11:00: Check-out dari homestay, perjalanan kembali ke Probolinggo\n          13:00: Makan siang di restoran lokal di Probolinggo\n          14:00: Berangkat kembali ke Jakarta dengan kereta sore\n          22:00: Tiba di Jakarta, acara selesai', '- Transportasi pulang-pergi dari Jakarta ke Bromo (kereta atau bus)\n          - Transportasi jeep di Bromo\n          - Akomodasi homestay selama 1 malam\n          - Makan sesuai program (1x sarapan, 1x makan siang, 1x makan malam)\n          - Tiket masuk Taman Nasional Bromo Tengger Semeru\n          - Pemandu wisata lokal\n          - Dokumentasi perjalanan\n          - Air mineral selama perjalanan\n          - Asuransi perjalanan', 'Penginapan di guest house atau homestay lokal yang nyaman, dengan fasilitas standar seperti kamar mandi dalam, air panas, dan kasur yang nyaman. Sarapan yang disediakan di penginapan untuk memulai hari dengan energi penuh', 'Dokumen dan Administrasi:\n\n          Identitas diri (KTP atau paspor)\n          Tiket kereta atau bus (disediakan oleh penyelenggara trip)\n          Voucher homestay dan konfirmasi pemesanan (disediakan oleh penyelenggara trip)\n          Asuransi perjalanan (disediakan oleh penyelenggara trip)\n          Barang Bawaan Pribadi:\n          \n          Pakaian hangat (jaket, sarung tangan, topi) karena suhu dingin di Bromo\n          Pakaian ganti secukupnya\n          Alat mandi pribadi\n          Obat-obatan pribadi\n          Sepatu trekking yang nyaman\n          Kamera atau smartphone untuk dokumentasi\n          Persiapan Teknis:\n          \n          Power bank dan charger untuk perangkat elektronik\n          Plastik kedap air untuk melindungi barang elektronik saat di pasir atau hujan\n          Uang tunai secukupnya untuk kebutuhan pribadi atau belanja oleh-oleh\n          Kesehatan dan Keamanan:\n          \n          Pastikan kondisi kesehatan dalam keadaan baik sebelum berangkat\n          Bawa masker dan hand sanitizer\n          Ikuti protokol kesehatan yang berlaku selama perjalanan\n          Patuhi arahan dari pemandu wisata dan tim penyelenggara untuk keamanan bersama', 900000, '3 hari, 2 malam', '2024-06-28 00:00:00', 30, 'Nusantara Tour & Travel', 0, 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15806.18004244916!2d112.95301219999999!3d-7.94249345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd637aaab794a41%3A0xada40d36ecd2a5dd!2sMt%20Bromo!5e0!3m2!1sen!2sid!4v1717673887891!5m2!1sen!2sid', '2024-06-12 12:45:35', '2024-06-12 12:45:35'),
(3, 'Wisata Pulau Seribu', 'Kepulauan Seribu', 'Nikmati keindahan Pulau Seribu dalam perjalanan open trip \"Wisata Pulau Seribu\". Pulau Seribu, yang terletak di utara Jakarta, menawarkan keindahan alam bawah laut, pantai berpasir putih, dan pengalaman yang tidak terlupakan. Dalam perjalanan ini, Anda akan diajak untuk snorkeling, menjelajahi pulau-pulau kecil, dan menikmati suasana pantai yang tenang. Titik kumpul dan keberangkatan dari Jakarta.', 'Spot Snorkeling - Menikmati keindahan terumbu karang dan biota laut Pulau Seribu. Pulau Pramuka - Pusat pemerintahan Kepulauan Seribu dan tempat penangkaran penyu. Pulau Karya - Pulau dengan sejarah dan pemandangan yang menakjubkan. Pulau Semak Daun - Pulau kecil yang cocok untuk berkemah dan menikmati suasana tenang.', 'Hari 1: Jakarta - Pulau Seribu\n\n          06:00: Titik kumpul di Dermaga Marina Ancol, Jakarta\n          07:00: Berangkat menuju Pulau Seribu dengan kapal cepat\n          09:00: Tiba di Pulau Seribu, check-in dan pembagian kamar\n          10:00: Snorkeling di spot snorkeling pertama\n          12:00: Makan siang di penginapan\n          14:00: Eksplorasi pulau (Pulau Pramuka, Pulau Karya, atau Pulau Semak Daun)\n          17:00: Kembali ke penginapan, bersih-bersih\n          18:30: Makan malam di penginapan\n          20:00: Acara bebas atau barbeque malam (opsional)\n          Hari 2: Pulau Seribu - Jakarta\n          \n          07:00: Sarapan di penginapan\n          08:00: Snorkeling di spot snorkeling kedua\n          10:00: Jelajah Pulau dan aktivitas bebas (berenang, berjalan-jalan)\n          12:00: Makan siang dan persiapan check-out\n          13:00: Check-out dan persiapan kembali ke Jakarta\n          14:00: Berangkat menuju Jakarta dengan kapal cepat\n          16:00: Tiba di Dermaga Marina Ancol, Jakarta\n          16:30: Acara selesai', 'Transportasi pulang-pergi dari Jakarta ke Pulau Seribu (kapal cepat)\n          Akomodasi penginapan selama 2 hari 1 malam\n          Makan sesuai program (1x sarapan, 2x makan siang, 1x makan malam)\n          Tiket masuk objek wisata\n          Peralatan snorkeling\n          Pemandu wisata lokal\n          Dokumentasi perjalanan\n          Air mineral selama perjalanan\n          Asuransi perjalanan', 'Penginapan di guest house atau homestay lokal yang nyaman, dengan fasilitas standar seperti kamar mandi dalam, air panas, dan kasur yang nyaman. Sarapan yang disediakan di penginapan untuk memulai hari dengan energi penuh', 'Dokumen dan Administrasi:\n\n          Identitas diri (KTP atau paspor)\n          Tiket kapal cepat (disediakan oleh penyelenggara trip)\n          Voucher penginapan dan konfirmasi pemesanan (disediakan oleh penyelenggara trip)\n          Asuransi perjalanan (disediakan oleh penyelenggara trip)\n          Barang Bawaan Pribadi:\n          \n          Pakaian secukupnya untuk 2 hari 1 malam (termasuk pakaian renang)\n          Alat mandi pribadi\n          Obat-obatan pribadi\n          Topi atau penutup kepala\n          Kacamata hitam\n          Tabir surya (sunscreen)\n          Sandal dan sepatu yang nyaman\n          Kamera atau smartphone untuk dokumentasi\n          Persiapan Teknis:\n          \n          Power bank dan charger untuk perangkat elektronik\n          Plastik kedap air untuk melindungi barang elektronik saat di pantai atau snorkeling\n          Uang tunai secukupnya untuk kebutuhan pribadi atau belanja oleh-oleh\n          Kesehatan dan Keamanan:\n          \n          Pastikan kondisi kesehatan dalam keadaan baik sebelum berangkat\n          Bawa masker dan hand sanitizer\n          Ikuti protokol kesehatan yang berlaku selama perjalanan\n          Patuhi arahan dari pemandu wisata dan tim penyelenggara untuk keamanan bersama', 1200000, '2 hari, 1 malam', '2024-08-18 00:00:00', 25, 'Nusantara Tour & Travel', 0, 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d508248.7354956543!2d106.6169964!3d-5.61224045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e41d68cd396621f%3A0xa06e871c66df72b3!2sKepulauan%20Seribu%20Regency%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1717674280075!5m2!1sen!2sid', '2024-06-12 12:45:35', '2024-06-12 12:45:35'),
(4, 'Wisata Karimun Jawa', 'Jawa Tengah', 'Mari bergabung dengan open trip \"Wisata Karimun Jawa\" dan nikmati keindahan alam serta pengalaman laut yang menakjubkan. Karimun Jawa terkenal dengan keindahan pantai berpasir putih, air laut yang jernih, serta terumbu karang yang mempesona. Perjalanan ini akan memberikan Anda kesempatan untuk snorkeling, menjelajahi pulau-pulau kecil, menikmati kuliner khas, dan banyak lagi. Titik kumpul tersedia di Bogor, Jakarta, dan Bandung.', 'Pulau Menjangan Besar - Tempat penangkaran hiu, Anda dapat berenang bersama hiu. Pulau Cemara Besar dan Kecil - Pulau dengan pantai berpasir putih dan spot snorkeling yang indah. Pulau Cilik - Pulau kecil yang eksotis, sempurna untuk snorkeling dan berenang. Spot Snorkeling - Menikmati keindahan terumbu karang dan biota laut Karimun Jawa.', 'Hari 1: Titik Kumpul - Jepara\n\n          18:00: Titik kumpul di Bogor (Plaza Jambu Dua)\n          20:00: Titik kumpul di Jakarta (Plaza Senayan)\n          22:00: Titik kumpul di Bandung (Trans Studio Mall)\n          23:00: Berangkat menuju Jepara dengan bus malam\n          Hari 2: Jepara - Karimun Jawa\n          \n          05:00: Tiba di Jepara, sarapan di restoran lokal\n          07:00: Berangkat menuju Karimun Jawa dengan kapal cepat\n          09:30: Tiba di Karimun Jawa, check-in dan pembagian kamar\n          11:00: Snorkeling di spot pertama\n          13:00: Makan siang di pulau\n          15:00: Eksplorasi Pulau Menjangan Besar (penangkaran hiu)\n          17:00: Kembali ke penginapan, bersih-bersih\n          18:30: Makan malam di penginapan\n          20:00: Acara bebas\n          Hari 3: Hopping Island\n          \n          07:00: Sarapan di penginapan\n          08:00: Hopping island (Pulau Cemara Besar, Pulau Cemara Kecil, Pulau Cilik)\n          12:00: Makan siang di pulau\n          14:00: Snorkeling di spot kedua\n          16:00: Kembali ke penginapan, bersih-bersih\n          18:30: Makan malam BBQ di pantai\n          20:00: Acara bebas atau hiburan malam\n          Hari 4: Karimun Jawa - Jepara - Titik Kumpul\n          \n          07:00: Sarapan di penginapan dan check-out\n          08:00: Belanja oleh-oleh di pasar lokal\n          10:00: Berangkat kembali ke Jepara dengan kapal cepat\n          12:30: Tiba di Jepara, makan siang di restoran lokal\n          14:00: Perjalanan kembali ke Bogor, Jakarta, dan Bandung dengan bus\n          22:00: Tiba di titik kumpul masing-masing, acara selesai', 'Transportasi pulang-pergi dari titik kumpul ke Jepara (bus)\n          Tiket kapal cepat Jepara - Karimun Jawa\n          Akomodasi penginapan selama 3 hari 2 malam\n          Makan sesuai program (2x sarapan, 3x makan siang, 2x makan malam)\n          Tiket masuk objek wisata\n          Peralatan snorkeling\n          Pemandu wisata lokal\n          Dokumentasi perjalanan\n          Air mineral selama perjalanan\n          Asuransi perjalanan', 'Penginapan di guest house atau homestay lokal yang nyaman, dengan fasilitas standar seperti kamar mandi dalam, air panas, dan kasur yang nyaman. Sarapan yang disediakan di penginapan untuk memulai hari dengan energi penuh', 'Dokumen dan Administrasi:\n\n          Identitas diri (KTP atau paspor)\n          Tiket bus dan kapal (disediakan oleh penyelenggara trip)\n          Voucher penginapan dan konfirmasi pemesanan (disediakan oleh penyelenggara trip)\n          Asuransi perjalanan (disediakan oleh penyelenggara trip)\n          Barang Bawaan Pribadi:\n          \n          Pakaian secukupnya untuk 3 hari 2 malam (termasuk pakaian renang)\n          Alat mandi pribadi\n          Obat-obatan pribadi\n          Topi atau penutup kepala\n          Kacamata hitam\n          Tabir surya (sunscreen)\n          Sandal dan sepatu yang nyaman\n          Kamera atau smartphone untuk dokumentasi\n          Persiapan Teknis:\n          \n          Power bank dan charger untuk perangkat elektronik\n          Plastik kedap air untuk melindungi barang elektronik saat di pantai atau snorkeling\n          Uang tunai secukupnya untuk kebutuhan pribadi atau belanja oleh-oleh\n          Kesehatan dan Keamanan:\n          \n          Pastikan kondisi kesehatan dalam keadaan baik sebelum berangkat\n          Bawa masker dan hand sanitizer\n          Ikuti protokol kesehatan yang berlaku selama perjalanan\n          Patuhi arahan dari pemandu wisata dan tim penyelenggara untuk keamanan bersama', 2800000, '4 hari, 3 malam', '2024-12-18 00:00:00', 40, 'Seize Tour', 0, 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15877.032623692938!2d110.45899999999999!3d-5.8191699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e73ce4502749065%3A0x810dc44dc5d89f67!2sKarimun%20Jawa!5e0!3m2!1sen!2sid!4v1718193601941!5m2!1sen!2sid', '2024-06-12 12:45:35', '2024-06-12 12:45:35'),
(5, 'Wisata Dieng', 'Jawa Tengah', 'Bergabunglah dengan open trip \"Wisata Dieng\" dan nikmati keindahan dataran tinggi Dieng yang memukau. Dataran tinggi Dieng, yang terletak di Jawa Tengah, menawarkan pemandangan alam yang menakjubkan, budaya yang kaya, serta udara pegunungan yang sejuk. Dalam perjalanan ini, Anda akan diajak untuk menjelajahi candi-candi kuno, kawah vulkanik, telaga-telaga cantik, serta menikmati sunrise dari Bukit Sikunir. Titik kumpul tersedia di Jakarta, Bandung, dan Cirebon.', 'Kompleks Candi Arjuna - Kompleks candi Hindu kuno yang menjadi ikon Dieng. Kawah Sikidang - Kawah vulkanik aktif yang mengeluarkan uap panas dan lumpur. Telaga Warna dan Telaga Pengilon - Dua telaga yang indah dengan warna air yang berbeda. Dieng Plateau Theater - Tempat untuk belajar tentang sejarah dan budaya Dieng. Bukit Sikunir - Spot terbaik untuk menikmati sunrise di Dieng. Kawah Candradimuka - Kawah vulkanik lainnya yang memiliki pemandangan menarik. Batu Ratapan Angin - Batu besar dengan pemandangan menakjubkan dari atas bukit.', 'Hari 1: Titik Kumpul - Dieng\n\n          18:00: Titik kumpul di Jakarta (Plaza Senayan)\n          20:00: Titik kumpul di Bandung (Trans Studio Mall)\n          22:00: Titik kumpul di Cirebon (Grage Mall)\n          23:00: Berangkat menuju Dieng dengan bus malam\n          Hari 2: Eksplorasi Dieng\n          \n          06:00: Tiba di Dieng, sarapan di restoran lokal\n          07:30: Mengunjungi Kompleks Candi Arjuna\n          09:00: Mengunjungi Kawah Sikidang\n          11:00: Mengunjungi Telaga Warna dan Telaga Pengilon\n          13:00: Makan siang di restoran lokal\n          14:30: Mengunjungi Dieng Plateau Theater\n          16:00: Check-in di penginapan dan istirahat sejenak\n          18:00: Makan malam di penginapan\n          19:00: Acara bebas (opsional: mengunjungi Bukit Sidengkeng untuk menikmati malam Dieng)\n          Hari 3: Sunrise Bukit Sikunir dan Kembali ke Titik Kumpul\n          \n          03:00: Bangun dan persiapan untuk sunrise trip\n          03:30: Berangkat menuju Bukit Sikunir\n          04:30: Trekking ke puncak Bukit Sikunir\n          05:30: Menikmati sunrise dari Bukit Sikunir\n          07:00: Kembali ke penginapan dan sarapan\n          08:30: Check-out dari penginapan\n          09:00: Mengunjungi Kawah Candradimuka\n          11:00: Mengunjungi Batu Ratapan Angin\n          12:30: Makan siang di restoran lokal\n          14:00: Perjalanan kembali ke Cirebon, Bandung, dan Jakarta\n          22:00: Tiba di titik kumpul masing-masing, acara selesai', 'Transportasi pulang-pergi dari titik kumpul ke Dieng (bus)\n          Akomodasi penginapan selama 2 hari 1 malam\n          Makan sesuai program (2x sarapan, 2x makan siang, 1x makan malam)\n          Tiket masuk objek wisata\n          Pemandu wisata lokal\n          Dokumentasi perjalanan\n          Air mineral selama perjalanan\n          Asuransi perjalanan', 'Penginapan di guest house atau homestay lokal yang nyaman, dengan fasilitas standar seperti kamar mandi dalam, air panas, dan kasur yang nyaman. Sarapan yang disediakan di penginapan untuk memulai hari dengan energi penuh', 'Dokumen dan Administrasi:\n\n          Identitas diri (KTP atau paspor)\n          Tiket bus (disediakan oleh penyelenggara trip)\n          Voucher penginapan dan konfirmasi pemesanan (disediakan oleh penyelenggara trip)\n          Asuransi perjalanan (disediakan oleh penyelenggara trip)\n          Barang Bawaan Pribadi:\n          \n          Pakaian secukupnya untuk 2 hari 1 malam (termasuk pakaian hangat)\n          Alat mandi pribadi\n          Obat-obatan pribadi\n          Topi atau penutup kepala\n          Kacamata hitam\n          Tabir surya (sunscreen)\n          Sepatu trekking yang nyaman\n          Kamera atau smartphone untuk dokumentasi\n          Persiapan Teknis:\n          \n          Power bank dan charger untuk perangkat elektronik\n          Plastik kedap air untuk melindungi barang elektronik saat hujan atau berembun\n          Uang tunai secukupnya untuk kebutuhan pribadi atau belanja oleh-oleh\n          Kesehatan dan Keamanan:\n          \n          Pastikan kondisi kesehatan dalam keadaan baik sebelum berangkat\n          Bawa masker dan hand sanitizer\n          Ikuti protokol kesehatan yang berlaku selama perjalanan\n          Patuhi arahan dari pemandu wisata dan tim penyelenggara untuk keamanan bersama', 950000, '2 hari, 1 malam', '2024-09-18 00:00:00', 45, 'Lokaly Travel & Trip', 0, 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31666.530982584507!2d109.89751185923438!3d-7.204700589242658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e700ce3b55c05d7%3A0x5027a76e3557280!2sDieng%2C%20Kejajar%2C%20Wonosobo%20Regency%2C%20Central%20Java!5e0!3m2!1sen!2sid!4v1718193982765!5m2!1sen!2sid', '2024-06-12 12:45:35', '2024-06-12 12:45:35'),
(6, 'Pendakian Gunung Sumbing', 'Jawa Tengah', 'Mari bergabung dengan open trip \"Pendakian Gunung Sumbing\" dan rasakan petualangan mendaki salah satu gunung tertinggi di Pulau Jawa. Gunung Sumbing yang terletak di Jawa Tengah menawarkan pemandangan yang menakjubkan dengan trek yang menantang, cocok bagi para pecinta alam dan pendaki. Dalam perjalanan ini, Anda akan ditemani oleh pemandu profesional dan mendapat pengalaman mendaki yang tak terlupakan. Titik kumpul tersedia di Jakarta dan Bandung.', 'Basecamp Gunung Sumbing - Titik awal pendakian dan tempat beristirahat sebelum mendaki. Pos 2 dan Pos 3 - Pos peristirahatan dengan pemandangan alam yang indah. Puncak Gunung Sumbing - Puncak dengan pemandangan sunrise yang menakjubkan dan panorama pegunungan yang indah.', 'Hari 1: Titik Kumpul - Basecamp Gunung Sumbing\n\n          18:00: Titik kumpul di Jakarta (Plaza Senayan)\n          20:00: Titik kumpul di Bandung (Trans Studio Mall)\n          21:00: Berangkat menuju basecamp Gunung Sumbing dengan minibus\n          Hari 2: Basecamp - Pos 3\n          \n          05:00: Tiba di basecamp Gunung Sumbing, check-in homestay dan sarapan\n          07:00: Persiapan pendakian dan briefing\n          08:00: Mulai pendakian dari basecamp\n          12:00: Istirahat dan makan siang di Pos 2\n          13:00: Melanjutkan pendakian menuju Pos 3\n          16:00: Tiba di Pos 3, mendirikan tenda dan istirahat\n          18:00: Makan malam di camp\n          19:00: Acara bebas dan istirahat malam\n          Hari 3: Summit Attack - Basecamp - Titik Kumpul\n          \n          02:00: Bangun dan persiapan untuk summit attack\n          02:30: Mulai pendakian menuju puncak\n          05:00: Tiba di puncak Gunung Sumbing, menikmati sunrise\n          06:00: Dokumentasi dan eksplorasi puncak\n          07:00: Turun kembali ke Pos 3\n          09:00: Sarapan di Pos 3 dan berkemas\n          10:00: Turun kembali ke basecamp\n          14:00: Tiba di basecamp, makan siang dan bersih-bersih\n          16:00: Perjalanan kembali ke Bandung dan Jakarta\n          22:00: Tiba di Bandung, Trans Studio Mall\n          00:00: Tiba di Jakarta, Plaza Senayan', 'Transportasi pulang-pergi dari titik kumpul ke basecamp Gunung Sumbing (minibus)\n          Akomodasi homestay selama 1 malam di basecamp\n          Makan sesuai program (1x sarapan, 1x makan siang, 1x makan malam, 1x snack)\n          Tiket masuk dan izin pendakian\n          Pemandu pendakian lokal\n          Porter (opsional)\n          Peralatan medis dasar dan asuransi perjalanan\n          Dokumentasi perjalanan\n          Air mineral selama perjalanan', 'Penginapan di guest house atau homestay lokal yang nyaman, dengan fasilitas standar seperti kamar mandi dalam, air panas, dan kasur yang nyaman. Sarapan yang disediakan di penginapan untuk memulai hari dengan energi penuh', 'Dokumen dan Administrasi:\n\n          Identitas diri (KTP atau paspor)\n          Tiket bus (disediakan oleh penyelenggara trip)\n          Izin pendakian dan tiket masuk (disediakan oleh penyelenggara trip)\n          Asuransi perjalanan (disediakan oleh penyelenggara trip)\n          Barang Bawaan Pribadi:\n          \n          Pakaian hangat (jaket, sarung tangan, topi) karena suhu dingin di gunung\n          Pakaian ganti secukupnya\n          Alat mandi pribadi\n          Obat-obatan pribadi\n          Sepatu trekking yang nyaman\n          Sleeping bag dan matras\n          Tenda (bisa disewa dari penyelenggara jika tidak punya)\n          Headlamp atau senter\n          Kamera atau smartphone untuk dokumentasi\n          Persiapan Teknis:\n          \n          Power bank dan charger untuk perangkat elektronik\n          Plastik kedap air untuk melindungi barang elektronik saat hujan\n          Uang tunai secukupnya untuk kebutuhan pribadi atau belanja oleh-oleh\n          Perbekalan ringan seperti camilan dan air minum\n          Kesehatan dan Keamanan:\n          \n          Pastikan kondisi kesehatan dalam keadaan baik sebelum berangkat\n          Bawa masker dan hand sanitizer\n          Ikuti protokol kesehatan yang berlaku selama perjalanan\n          Patuhi arahan dari pemandu pendakian dan tim penyelenggara untuk keamanan bersama', 1000000, '3 hari, 2 malam', '2024-10-22 00:00:00', 30, 'Cous Sve Tour', 0, 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15826.888673217003!2d110.07249999999999!3d-7.384999849999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a9c697b1bf411%3A0x7cb176b5c2587d2d!2sMount%20Sumbing!5e0!3m2!1sen!2sid!4v1718194473649!5m2!1sen!2sid', '2024-06-12 12:45:35', '2024-06-12 12:45:35'),
(7, 'Pendakian Gunung Semeru', 'Jawa Timur', 'Bergabunglah dengan open trip \"Pendakian Gunung Semeru\" dan nikmati petualangan mendaki gunung tertinggi di Pulau Jawa. Gunung Semeru menawarkan pemandangan yang spektakuler, termasuk danau Ranu Kumbolo yang indah, Oro-oro Ombo yang memukau, serta pemandangan puncak Mahameru yang legendaris. Dalam perjalanan ini, Anda akan dipandu oleh pemandu profesional dan mendapatkan pengalaman mendaki yang tak terlupakan. Titik kumpul tersedia di Jakarta, Bandung, Cirebon, Yogyakarta, dan Malang.', 'Ranu Pani - Desa terakhir sebelum pendakian, tempat untuk aklimatisasi dan persiapan. Ranu Kumbolo - Danau indah dengan pemandangan menakjubkan, spot populer untuk berkemah. Kalimati - Pos terakhir sebelum summit attack, tempat untuk beristirahat dan persiapan puncak. Puncak Mahameru - Puncak tertinggi di Pulau Jawa dengan pemandangan sunrise yang spektakuler.', 'Hari 1: Titik Kumpul - Ranu Pani\n\n          18:00: Titik kumpul di Jakarta (Plaza Senayan)\n          20:00: Titik kumpul di Bandung (Trans Studio Mall)\n          22:00: Titik kumpul di Cirebon (Grage Mall)\n          23:00: Berangkat menuju Yogyakarta\n          Hari 2: Yogyakarta - Malang - Ranu Pani\n          \n          05:00: Titik kumpul di Yogyakarta (Stasiun Tugu)\n          06:00: Berangkat menuju Malang\n          11:00: Titik kumpul di Malang (Stasiun Malang Kota Baru)\n          12:00: Berangkat menuju Ranu Pani\n          16:00: Tiba di Ranu Pani, check-in homestay dan persiapan pendakian\n          18:00: Makan malam dan briefing pendakian\n          20:00: Istirahat malam\n          Hari 3: Ranu Pani - Ranu Kumbolo - Kalimati\n          \n          05:00: Sarapan dan persiapan pendakian\n          06:00: Mulai pendakian dari Ranu Pani\n          12:00: Tiba di Ranu Kumbolo, makan siang dan istirahat\n          13:00: Melanjutkan pendakian menuju Kalimati\n          17:00: Tiba di Kalimati, mendirikan tenda dan istirahat\n          18:00: Makan malam di camp\n          19:00: Acara bebas dan istirahat malam\n          Hari 4: Summit Attack - Ranu Kumbolo\n          \n          00:00: Bangun dan persiapan untuk summit attack\n          01:00: Mulai pendakian menuju puncak Mahameru\n          06:00: Tiba di puncak Mahameru, menikmati sunrise\n          07:00: Dokumentasi dan eksplorasi puncak\n          08:00: Turun kembali ke Kalimati\n          12:00: Tiba di Kalimati, makan siang dan istirahat\n          13:00: Turun kembali ke Ranu Kumbolo\n          17:00: Tiba di Ranu Kumbolo, mendirikan tenda dan istirahat\n          18:00: Makan malam di camp\n          19:00: Acara bebas dan istirahat malam\n          Hari 5: Ranu Kumbolo - Ranu Pani - Titik Kumpul\n          \n          05:00: Bangun dan menikmati sunrise di Ranu Kumbolo\n          06:00: Sarapan di camp\n          07:00: Turun kembali ke Ranu Pani\n          11:00: Tiba di Ranu Pani, makan siang dan bersih-bersih\n          13:00: Perjalanan kembali ke Malang\n          17:00: Tiba di Malang, makan malam di restoran lokal\n          18:00: Perjalanan kembali ke Yogyakarta, Cirebon, Bandung, dan Jakarta\n          23:00: Tiba di Yogyakarta (Stasiun Tugu)\n          01:00: Tiba di Cirebon (Grage Mall)\n          04:00: Tiba di Bandung (Trans Studio Mall)\n          06:00: Tiba di Jakarta (Plaza Senayan), acara selesai', 'Transportasi pulang-pergi dari titik kumpul ke Ranu Pani (minibus)\n          Akomodasi homestay di Ranu Pani selama 1 malam\n          Makan sesuai program (3x sarapan, 3x makan siang, 2x makan malam, 2x snack)\n          Tiket masuk dan izin pendakian Taman Nasional Bromo Tengger Semeru\n          Pemandu pendakian lokal\n          Porter (opsional)\n          Peralatan medis dasar dan asuransi perjalanan\n          Dokumentasi perjalanan\n          Air mineral selama perjalanan', 'Penginapan di guest house atau homestay lokal yang nyaman, dengan fasilitas standar seperti kamar mandi dalam, air panas, dan kasur yang nyaman. Sarapan yang disediakan di penginapan untuk memulai hari dengan energi penuh', 'Dokumen dan Administrasi:\n\n          Identitas diri (KTP atau paspor)\n          Tiket bus atau kereta (disediakan oleh penyelenggara trip)\n          Izin pendakian dan tiket masuk (disediakan oleh penyelenggara trip)\n          Asuransi perjalanan (disediakan oleh penyelenggara trip)\n          Barang Bawaan Pribadi:\n          \n          Pakaian hangat (jaket, sarung tangan, topi) karena suhu dingin di gunung\n          Pakaian ganti secukupnya\n          Alat mandi pribadi\n          Obat-obatan pribadi\n          Sepatu trekking yang nyaman\n          Sleeping bag dan matras\n          Tenda (bisa disewa dari penyelenggara jika tidak punya)\n          Headlamp atau senter\n          Kamera atau smartphone untuk dokumentasi\n          Persiapan Teknis:\n          \n          Power bank dan charger untuk perangkat elektronik\n          Plastik kedap air untuk melindungi barang elektronik saat hujan\n          Uang tunai secukupnya untuk kebutuhan pribadi atau belanja oleh-oleh\n          Perbekalan ringan seperti camilan dan air minum\n          Kesehatan dan Keamanan:\n          \n          Pastikan kondisi kesehatan dalam keadaan baik sebelum berangkat\n          Bawa masker dan hand sanitizer\n          Ikuti protokol kesehatan yang berlaku selama perjalanan\n          Patuhi arahan dari pemandu pendakian dan tim penyelenggara untuk keamanan bersama', 8800000, '5 hari, 4 malam', '2024-12-19 00:00:00', 30, 'Mandala Travel', 0, 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15799.755094983077!2d112.9224075!3d-8.10771705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd63e89e1d817bb%3A0x9c14d4ed3c488f54!2sSemeru!5e0!3m2!1sen!2sid!4v1718194741369!5m2!1sen!2sid', '2024-06-12 12:45:35', '2024-06-12 12:45:35'),
(8, 'Menjelajah Bali', 'Bali', 'Bergabunglah dengan open trip \"Menjelajahi Bali\" dan nikmati pesona Pulau Dewata yang memukau. Perjalanan ini menawarkan pengalaman lengkap mulai dari wisata alam, budaya, hingga kuliner khas Bali. Anda akan mengunjungi pantai-pantai indah, pura-pura bersejarah, dan spot-spot menarik lainnya. Titik kumpul tersedia di Jakarta, Bandung, Semarang, dan Malang.', 'Tanah Lot - Pura yang terkenal dengan lokasi di atas batu karang di tepi laut. Kuta - Pantai yang terkenal dengan pasir putih dan kehidupan malamnya. Monkey Forest Ubud - Hutan suci yang dihuni oleh ratusan monyet ekor panjang. Pasar Seni Ubud - Tempat untuk berbelanja seni dan kerajinan khas Bali. Pura Tirta Empul - Pura dengan mata air suci yang digunakan untuk ritual penyucian. Pantai Nusa Dua - Pantai dengan pasir putih dan air laut yang jernih. Garuda Wisnu Kencana (GWK) - Taman budaya dengan patung besar Garuda Wisnu Kencana. Pura Luhur Uluwatu - Pura yang terletak di tebing dengan pemandangan sunset yang menakjubkan. Pantai Sanur - Pantai dengan suasana yang tenang dan pemandangan sunrise yang indah. Pantai Pandawa - Pantai yang terkenal dengan tebing kapur yang megah.', 'Hari 1: Titik Kumpul - Bali\n\n          18:00: Titik kumpul di Jakarta (Plaza Senayan)\n          20:00: Titik kumpul di Bandung (Trans Studio Mall)\n          22:00: Titik kumpul di Semarang (Simpang Lima)\n          23:00: Titik kumpul di Malang (Stasiun Malang Kota Baru)\n          00:00: Berangkat menuju Pelabuhan Ketapang, Banyuwangi\n          Hari 2: Ketapang - Bali\n          \n          06:00: Tiba di Pelabuhan Ketapang, sarapan di restoran lokal\n          07:00: Menyeberang ke Bali dengan ferry\n          09:00: Tiba di Pelabuhan Gilimanuk, Bali\n          12:00: Mengunjungi Tanah Lot, makan siang di restoran lokal\n          15:00: Check-in hotel di Kuta\n          18:00: Makan malam di restoran lokal\n          20:00: Acara bebas di Kuta (opsional: menikmati malam di Pantai Kuta)\n          Hari 3: Ubud dan Sekitarnya\n          \n          07:00: Sarapan di hotel\n          08:00: Berangkat menuju Ubud\n          09:30: Mengunjungi Monkey Forest Ubud\n          11:00: Mengunjungi Pasar Seni Ubud\n          12:30: Makan siang di restoran lokal\n          14:00: Mengunjungi Pura Tirta Empul\n          16:00: Kembali ke hotel di Kuta, acara bebas\n          18:00: Makan malam di restoran lokal\n          20:00: Acara bebas di Kuta\n          Hari 4: Nusa Dua dan Uluwatu\n          \n          07:00: Sarapan di hotel\n          08:00: Berangkat menuju Pantai Nusa Dua\n          09:00: Menikmati aktivitas di Pantai Nusa Dua\n          12:00: Makan siang di restoran lokal\n          14:00: Mengunjungi Garuda Wisnu Kencana (GWK)\n          16:00: Mengunjungi Pura Luhur Uluwatu\n          18:00: Menikmati sunset di Pantai Uluwatu\n          19:00: Makan malam di restoran lokal\n          20:00: Kembali ke hotel di Kuta, acara bebas\n          Hari 5: Bali - Titik Kumpul\n          \n          07:00: Sarapan di hotel dan check-out\n          08:00: Mengunjungi Pantai Sanur\n          10:00: Mengunjungi Pantai Pandawa\n          12:00: Makan siang di restoran lokal\n          14:00: Belanja oleh-oleh di Krisna Oleh-Oleh Khas Bali\n          16:00: Perjalanan menuju Pelabuhan Gilimanuk\n          18:00: Menyeberang ke Ketapang, Banyuwangi\n          20:00: Perjalanan kembali ke Malang, Semarang, Bandung, dan Jakarta\n          Hari 6: Tiba di Titik Kumpul\n          \n          06:00: Tiba di Malang (Stasiun Malang Kota Baru)\n          09:00: Tiba di Semarang (Simpang Lima)\n          14:00: Tiba di Bandung (Trans Studio Mall)\n          16:00: Tiba di Jakarta (Plaza Senayan), acara selesai', 'Transportasi pulang-pergi dari titik kumpul ke Bali (bus dan ferry)\n          Akomodasi hotel selama 4 hari 3 malam\n          Makan sesuai program (4x sarapan, 4x makan siang, 3x makan malam)\n          Tiket masuk objek wisata\n          Pemandu wisata lokal\n          Dokumentasi perjalanan\n          Air mineral selama perjalanan\n          Asuransi perjalanan', 'Penginapan di guest house atau homestay lokal yang nyaman, dengan fasilitas standar seperti kamar mandi dalam, air panas, dan kasur yang nyaman. Sarapan yang disediakan di penginapan untuk memulai hari dengan energi penuh', 'Dokumen dan Administrasi:\n\n          Identitas diri (KTP atau paspor)\n          Tiket bus dan ferry (disediakan oleh penyelenggara trip)\n          Voucher hotel dan konfirmasi pemesanan (disediakan oleh penyelenggara trip)\n          Asuransi perjalanan (disediakan oleh penyelenggara trip)\n          Barang Bawaan Pribadi:\n          \n          Pakaian secukupnya untuk 5 hari 4 malam (termasuk pakaian renang)\n          Alat mandi pribadi\n          Obat-obatan pribadi\n          Topi atau penutup kepala\n          Kacamata hitam\n          Tabir surya (sunscreen)\n          Sandal dan sepatu yang nyaman\n          Kamera atau smartphone untuk dokumentasi\n          Persiapan Teknis:\n          \n          Power bank dan charger untuk perangkat elektronik\n          Plastik kedap air untuk melindungi barang elektronik saat di pantai\n          Uang tunai secukupnya untuk kebutuhan pribadi atau belanja oleh-oleh\n          Kesehatan dan Keamanan:\n          \n          Pastikan kondisi kesehatan dalam keadaan baik sebelum berangkat\n          Bawa masker dan hand sanitizer\n          Ikuti protokol kesehatan yang berlaku selama perjalanan\n          Patuhi arahan dari pemandu wisata dan tim penyelenggara untuk keamanan bersama', 1500000, '6 hari, 5 malam', '2024-12-11 00:00:00', 65, 'Kencana Tour & Travel', 0, 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d505145.6949744661!2d115.07157704999999!3d-8.4554714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd141d3e8100fa1%3A0x24910fb14b24e690!2sBali!5e0!3m2!1sen!2sid!4v1718195054790!5m2!1sen!2sid', '2024-06-12 12:45:35', '2024-06-12 12:45:35'),
(9, 'Wisata Banda Neira', 'Maluku Tengah', 'Bergabunglah dengan paket wisata \"Petualangan Banda Neira\" dan nikmati eksplorasi yang mendalam ke keindahan alam dan sejarah yang kaya di Banda Neira dan sekitarnya. Dalam perjalanan ini, Anda akan menjelajahi destinasi menarik melalui jalur darat dan laut, memungkinkan Anda untuk merasakan petualangan yang tak terlupakan. Titik kumpul kami tersedia di kota-kota besar yang dilalui, dengan titik awal dari Jakarta.', 'Benteng Belgica: Bangunan bersejarah yang dibangun pada abad ke-17 oleh Belanda, menawarkan pemandangan spektakuler ke sekitar pelabuhan dan pulau-pulau sekitarnya. Benteng Nassau: Benteng lain yang bersejarah yang dibangun pada abad ke-16, menawarkan pemandangan laut yang indah dan menarik untuk dijelajahi. Desa Banda Neira: Berjalan-jalan di sekitar desa ini memungkinkan Anda untuk merasakan kehidupan lokal, mengamati arsitektur khas Belanda, dan berinteraksi dengan penduduk setempat. Pulau Banda Besar: Pulau terbesar di kepulauan Banda, terkenal dengan pantainya yang indah, airnya yang jernih, dan kehidupan bawah laut yang kaya. Aktivitas Snorkeling atau Diving: Nikmati keindahan bawah laut Banda Neira dengan snorkeling atau diving di beberapa lokasi terbaik di sekitar pulau-pulau dan terumbu karangnya.', 'Hari 1: Perjalanan Menuju Banda Neira\n\n          06:00: Berangkat dari Jakarta dengan bus atau mobil pribadi\n          Perjalanan darat menuju pelabuhan terdekat\n          12:00: Tiba di pelabuhan dan makan siang\n          14:00: Berangkat dengan kapal laut menuju Banda Neira\n          18:00: Tiba di Banda Neira dan check-in hotel\n          19:00: Makan malam di restoran lokal\n          Hari 2: Eksplorasi Banda Neira\n          \n          07:00: Sarapan di hotel\n          08:00: Kunjungan ke Benteng Belgica dan Benteng Nassau\n          10:00: Berjalan-jalan di sekitar desa dan melihat kehidupan lokal\n          12:00: Makan siang di restoran lokal\n          14:00: Aktivitas snorkeling atau diving di sekitar Pulau Banda Besar\n          17:00: Kembali ke hotel untuk istirahat\n          19:00: Makan malam di restoran lokal\n          Hari 3: Kembali ke Jakarta\n          \n          07:00: Sarapan di hotel dan check-out\n          08:00: Berangkat dengan kapal laut menuju pelabuhan terdekat\n          12:00: Tiba di pelabuhan dan makan siang\n          Perjalanan darat kembali ke Jakarta\n          18:00: Perkiraan tiba di Jakarta', 'Transportasi selama 3 hari\n          Akomodasi hotel selama 2 malam\n          Makan sesuai program (sarapan, makan siang, dan makan malam)\n          Tiket masuk objek wisata\n          Pemandu wisata lokal\n          Air mineral selama perjalanan\n          Asuransi perjalanan', 'Penginapan di guest house atau homestay lokal yang nyaman, dengan fasilitas standar seperti kamar mandi dalam, air panas, dan kasur yang nyaman. Sarapan yang disediakan di penginapan untuk memulai hari dengan energi penuh', 'Dokumen dan Administrasi:\n\n          Paspor dan tiket perjalanan\n          Asuransi perjalanan (disediakan oleh penyelenggara trip)\n          Voucher hotel dan konfirmasi pemesanan (jika diperlukan)\n          Barang Bawaan Pribadi:\n          \n          Pakaian yang nyaman dan sesuai dengan kegiatan\n          Topi atau penutup kepala\n          Kacamata hitam dan tabir surya (sunscreen)\n          Peralatan snorkeling atau diving (jika Anda ingin berpartisipasi dalam aktivitas tersebut)\n          Kamera atau smartphone untuk dokumentasi\n          Tas kecil atau ransel untuk membawa barang-barang pribadi\n          Air mineral tambahan (jika diperlukan)\n          Kesehatan dan Keamanan:\n          \n          Pastikan kondisi kesehatan dalam keadaan baik sebelum berangkat\n          Patuhi arahan dari pemandu wisata dan tim penyelenggara untuk keamanan bersama\n          Ikuti protokol kesehatan yang berlaku selama perjalanan, terutama dalam aktivitas snorkeling atau diving', 1300000, '3 hari, 2 malam', '2024-11-11 00:00:00', 47, 'Kencana Tour & Travel', 3, 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15909.68416230966!2d129.89376024822022!3d-4.517901827303523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d15860b887ac3ab%3A0x6d9d8565c44e2f07!2sBanda%20Neira!5e0!3m2!1sen!2sid!4v1718195347223!5m2!1sen!2sid', '2024-06-12 12:45:35', '2024-06-13 03:25:49');

-- --------------------------------------------------------

--
-- Table structure for table `product_img`
--

CREATE TABLE `product_img` (
  `id` int NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `url_img` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `product_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `product_img`
--

INSERT INTO `product_img` (`id`, `image`, `url_img`, `createdAt`, `updatedAt`, `product_id`) VALUES
(131, 'bromo-1.jpg', 'http://localhost:5000/images/product/bromo-1.jpg', '2024-06-12 12:45:35', '2024-06-12 12:45:35', 2),
(132, 'bromo-2.jpg', 'http://localhost:5000/images/product/bromo-2.jpg', '2024-06-12 12:45:35', '2024-06-12 12:45:35', 2),
(133, 'bromo-3.jpg', 'http://localhost:5000/images/product/bromo-3.jpg', '2024-06-12 12:45:35', '2024-06-12 12:45:35', 2),
(134, 'bromo-4.jpg', 'http://localhost:5000/images/product/bromo-4.jpg', '2024-06-12 12:45:35', '2024-06-12 12:45:35', 2),
(135, 'bromo-5.jpg', 'http://localhost:5000/images/product/bromo-5.jpg', '2024-06-12 12:45:35', '2024-06-12 12:45:35', 2),
(136, 'seribu-1.jpg', 'http://localhost:5000/images/product/seribu-1.jpg', '2024-06-12 12:45:35', '2024-06-12 12:45:35', 3),
(137, 'seribu-2.jpg', 'http://localhost:5000/images/product/seribu-1.jpg', '2024-06-12 12:45:35', '2024-06-12 12:45:35', 3),
(138, 'seribu-3.jpg', 'http://localhost:5000/images/product/seribu-3.jpg', '2024-06-12 12:45:35', '2024-06-12 12:45:35', 3),
(139, 'seribu-4.jpg', 'http://localhost:5000/images/product/seribu-4.jpg', '2024-06-12 12:45:35', '2024-06-12 12:45:35', 3),
(140, 'seribu-5.jpg', 'http://localhost:5000/images/product/seribu-5.jpg', '2024-06-12 12:45:35', '2024-06-12 12:45:35', 3),
(141, 'karimun-1.jpeg', 'http://localhost:5000/images/product/karimun-1.jpeg', '2024-06-12 12:45:35', '2024-06-12 12:45:35', 4),
(142, 'karimun-2.jpg', 'http://localhost:5000/images/product/karimun-2.jpg', '2024-06-12 12:45:35', '2024-06-12 12:45:35', 4),
(143, 'karimun-3.jpg', 'http://localhost:5000/images/product/karimun-3.jpg', '2024-06-12 12:45:35', '2024-06-12 12:45:35', 4),
(144, 'karimun-4.jpg', 'http://localhost:5000/images/product/karimun-4.jpg', '2024-06-12 12:45:35', '2024-06-12 12:45:35', 4),
(145, 'karimun-5.jpg', 'http://localhost:5000/images/product/karimun-5.jpg', '2024-06-12 12:45:35', '2024-06-12 12:45:35', 4),
(146, 'dieng-1.jpg', 'http://localhost:5000/images/product/dieng-1.jpg', '2024-06-12 12:45:35', '2024-06-12 12:45:35', 5),
(147, 'dieng-2.jpg', 'http://localhost:5000/images/product/dieng-2.jpg', '2024-06-12 12:45:35', '2024-06-12 12:45:35', 5),
(148, 'dieng-3.jpg', 'http://localhost:5000/images/product/dieng-3.jpg', '2024-06-12 12:45:35', '2024-06-12 12:45:35', 5),
(149, 'dieng-4.jpeg', 'http://localhost:5000/images/product/dieng-4.jpeg', '2024-06-12 12:45:35', '2024-06-12 12:45:35', 5),
(150, 'dieng-5.jpeg', 'http://localhost:5000/images/product/dieng-5.jpeg', '2024-06-12 12:45:35', '2024-06-12 12:45:35', 5),
(151, 'sumbing-1.jpeg', 'http://localhost:5000/images/product/sumbing-1.jpeg', '2024-06-12 12:45:35', '2024-06-12 12:45:35', 6),
(152, 'sumbing-2.jpg', 'http://localhost:5000/images/product/sumbing-2.jpg', '2024-06-12 12:45:35', '2024-06-12 12:45:35', 6),
(153, 'sumbing-3.jpg', 'http://localhost:5000/images/product/sumbing-3.jpg', '2024-06-12 12:45:35', '2024-06-12 12:45:35', 6),
(154, 'sumbing-4.jpg', 'http://localhost:5000/images/product/sumbing-4.jpg', '2024-06-12 12:45:35', '2024-06-12 12:45:35', 6),
(155, 'sumbing-5.jpg', 'http://localhost:5000/images/product/sumbing-5.jpg', '2024-06-12 12:45:35', '2024-06-12 12:45:35', 6),
(156, 'semeru-1.jpg', 'http://localhost:5000/images/product/semeru-1.jpg', '2024-06-12 12:45:35', '2024-06-12 12:45:35', 7),
(157, 'semeru-2.jpg', 'http://localhost:5000/images/product/semeru-2.jpg', '2024-06-12 12:45:35', '2024-06-12 12:45:35', 7),
(158, 'semeru-3.jpg', 'http://localhost:5000/images/product/semeru-3.jpg', '2024-06-12 12:45:35', '2024-06-12 12:45:35', 7),
(159, 'semeru-4.jpg', 'http://localhost:5000/images/product/semeru-4.jpg', '2024-06-12 12:45:35', '2024-06-12 12:45:35', 7),
(160, 'semeru-5.jpg', 'http://localhost:5000/images/product/semeru-5.jpg', '2024-06-12 12:45:35', '2024-06-12 12:45:35', 7),
(161, 'bali-1.jpg', 'http://localhost:5000/images/product/bali-1.jpg', '2024-06-12 12:45:35', '2024-06-12 12:45:35', 8),
(162, 'bali-2.jpg', 'http://localhost:5000/images/product/bali-2.jpg', '2024-06-12 12:45:35', '2024-06-12 12:45:35', 8),
(163, 'bali-3.jpg', 'http://localhost:5000/images/product/bali-3.jpg', '2024-06-12 12:45:35', '2024-06-12 12:45:35', 8),
(164, 'bali-4.jpg', 'http://localhost:5000/images/product/bali-4.jpg', '2024-06-12 12:45:35', '2024-06-12 12:45:35', 8),
(165, 'bali-5.jpg', 'http://localhost:5000/images/product/bali-5.jpg', '2024-06-12 12:45:35', '2024-06-12 12:45:35', 8),
(166, 'neira-1.jpg', 'http://localhost:5000/images/product/neira-1.jpg', '2024-06-12 12:45:35', '2024-06-12 12:45:35', 9),
(167, 'neira-2.jpg', 'http://localhost:5000/images/product/neira-2.jpg', '2024-06-12 12:45:35', '2024-06-12 12:45:35', 9),
(168, 'neira-3.jpg', 'http://localhost:5000/images/product/neira-3.jpg', '2024-06-12 12:45:35', '2024-06-12 12:45:35', 9),
(169, 'neira-4.jpg', 'http://localhost:5000/images/product/neira-4.jpg', '2024-06-12 12:45:35', '2024-06-12 12:45:35', 9),
(170, 'neira-5.jpg', 'http://localhost:5000/images/product/neira-5.jpg', '2024-06-12 12:45:35', '2024-06-12 12:45:35', 9);

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `id` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `comment` text,
  `rating` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `product_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`id`, `name`, `comment`, `rating`, `createdAt`, `updatedAt`, `product_id`, `user_id`) VALUES
(1, 'Skylar Saris', 'Trekku benar-benar memudahkan perencanaan perjalanan saya. Informasi lengkap dan customer service yang responsif membuat pengalaman saya semakin menyenangkan.', 5, '2024-06-12 11:17:42', '2024-06-12 11:17:42', 3, 1),
(2, 'Roger Kenter', 'Dengan Trekku, saya dapat menemukan rekomendasi wisata unik yang sesuai dengan selera saya. Plus, fitur budget planning-nya sangat membantu dalam mengatur keuangan.', 4, '2024-06-12 11:29:42', '2024-06-12 11:29:42', 4, 4),
(3, 'Davis Rosser', 'Trekku benar-benar memudahkan perencanaan perjalanan saya. Ulasan pengguna yang jujur dan fitur perencanaan yang lengkap membuat perjalanan saya lebih teratur dan menyenangkan. ', 5, '2024-06-12 11:34:36', '2024-06-12 11:34:36', 3, 5),
(4, 'Aqil Rahmatullah', 'Open trip ini cukup menyenangkan!', 3, '2024-06-12 14:03:10', '2024-06-12 14:03:10', 9, 1),
(5, 'Malik', 'Mau coba open trip ini lagi lain kali!!', 3, '2024-06-13 01:31:17', '2024-06-13 01:31:17', 9, 6),
(6, 'Ahmad Laahiq', 'Pelayanan yang diberikan cukup memuaskan!', 4, '2024-06-13 03:26:44', '2024-06-13 03:26:44', 9, 7);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `url_profile_img` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `refresh_token` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `url_profile_img`, `phone_number`, `refresh_token`, `createdAt`, `updatedAt`) VALUES
(1, 'Aqil Rahmatullah', 'aqil@mail.com', '$2b$10$ympgPBDcdH9CnodoM3YZ2upuu8UDhWths48iyTNj9ydfWqFNT8dwS', 'http://localhost:5000/images/3ed55bc93347321a192c9f977019c92b.jpg', NULL, NULL, '2024-06-07 01:12:58', '2024-06-13 01:13:47'),
(2, 'John Doe', 'john@mail.com', '$2b$10$WHg/7UNxkZ4am.SPcFzIf.4Hx42wsz5XhNx0zzizCJe5Ic/Ox0WAW', 'http://localhost:5000/images/81d4070f5c3bf9f89b4c13c371846300.jpg', NULL, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsIm5hbWUiOiJKb2huIERvZSIsImVtYWlsIjoiam9obkBtYWlsLmNvbSIsImlhdCI6MTcxNzcyODAwNywiZXhwIjoxNzE3ODE0NDA3fQ.DTawswMhoLz9uloikEtXDrqHTBvToieUxqDeJeOlBRY', '2024-06-07 02:39:56', '2024-06-07 02:40:45'),
(3, 'Aqil Rahmatullah', 'aqil@mail.com', '$2b$10$G2RUmOH3eQBWs2XS1Rb35.KTqct2AALAX9W9cpCwYkd2OFshXlr1e', NULL, NULL, NULL, '2024-06-08 09:26:43', '2024-06-08 09:26:43'),
(4, 'Roger Kenter', 'roger@mail.com', '$2b$10$m/SdTmWl8eidPKmCUarBIuYyiZInQLP3NzFX3PZ4TB.YUJkA2rd/.', 'http://localhost:5000/images/666a6be21fe4db8cc132a6cd0800bcdf.jpg', NULL, NULL, '2024-06-12 11:25:30', '2024-06-12 11:30:41'),
(5, 'Davis Rosser', 'davis@mail.com', '$2b$10$.CCOKhygKieDdkdo.rO9iOHgRAzb4RSUX8Y185uZJc6uiju5RSroS', 'http://localhost:5000/images/ea73b6666efe19fa25e3202750877321.jpg', NULL, NULL, '2024-06-12 11:30:56', '2024-06-12 13:31:38'),
(6, 'Malik', 'malik@mail.com', '$2b$10$LIqGzaoNgM42MgHAF73hHu1XjG.CiHNw.QDKuUxPaMbSnYCOGzxVW', 'http://localhost:5000/images/e02f27e9eae1928679a7502dc1b8f8af.jpg', '08121241232', NULL, '2024-06-13 01:14:10', '2024-06-13 01:37:03'),
(7, 'Ahmad Laahiq', 'laahiq@mail.com', '$2b$10$8Oqd3/Ek4d4DBk/0KJv9GOrH6wvkb5a0CpY0/x8OCkxPaoEprHcca', 'http://localhost:5000/images/ad88d1ef44a149f3b660c011c2ad4f0c.jpg', NULL, NULL, '2024-06-13 03:19:16', '2024-06-13 03:27:59');

-- --------------------------------------------------------

--
-- Table structure for table `visitors`
--

CREATE TABLE `visitors` (
  `id` int NOT NULL,
  `title` enum('tuan','nyonya') DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `order_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `visitors`
--

INSERT INTO `visitors` (`id`, `title`, `name`, `phone`, `email`, `createdAt`, `updatedAt`, `order_id`) VALUES
(1, 'tuan', 'awdawd', 'awdawd', 'awdaw', '2024-06-07 01:13:48', '2024-06-07 01:13:48', 1),
(2, 'tuan', 'awdawd', 'awdaw', 'dawd', '2024-06-07 02:41:46', '2024-06-07 02:41:46', 2),
(3, 'tuan', 'dawdaw', 'dawdaw', 'dawdawd', '2024-06-07 02:58:05', '2024-06-07 02:58:05', 3),
(4, 'tuan', 'awdawd', 'awd', 'awdawd', '2024-06-08 09:27:55', '2024-06-08 09:27:55', 4),
(5, 'tuan', 'dawdawd', 'dawdaw', 'dawdaw', '2024-06-08 09:35:34', '2024-06-08 09:35:34', 1),
(6, 'tuan', 'awdawd', 'awdawd', 'awdawd', '2024-06-09 03:35:07', '2024-06-09 03:35:07', 2),
(7, 'tuan', 'dawdawd', 'awdaw', 'awdawd', '2024-06-09 04:14:56', '2024-06-09 04:14:56', 3),
(8, 'tuan', 'awdawd', 'awdaw', 'daw', '2024-06-11 14:27:17', '2024-06-11 14:27:17', 4),
(9, 'tuan', 'awdawd', 'dawdaw', 'daw', '2024-06-11 15:00:44', '2024-06-11 15:00:44', 5),
(10, 'tuan', 'Roger Kenter', '+62812345678', 'roger@mail.com', '2024-06-12 11:27:54', '2024-06-12 11:27:54', 6),
(11, 'tuan', 'Roger Kenter', '+62812345678', 'roger@mail.com', '2024-06-12 11:29:07', '2024-06-12 11:29:07', 7),
(12, 'tuan', 'Davis Rosser', '+62812345678', 'email@example.com', '2024-06-12 11:34:01', '2024-06-12 11:34:01', 8),
(13, 'tuan', 'Aqil Rahmatullah', '+62812345678', 'aqil@mail.com', '2024-06-12 13:48:10', '2024-06-12 13:48:10', 9),
(14, 'tuan', 'Aqil Rahmatullah', '+62812345678', 'aqil@mail.com', '2024-06-12 14:00:11', '2024-06-12 14:00:11', 1),
(15, 'tuan', 'Malik', '+62812345678', 'malik@mail.com', '2024-06-13 01:29:45', '2024-06-13 01:29:45', 2),
(16, 'tuan', 'Ahmad Lahiq', '+62812345678', 'email@example.com', '2024-06-13 03:25:32', '2024-06-13 03:25:32', 3);

-- --------------------------------------------------------

--
-- Table structure for table `vouchers`
--

CREATE TABLE `vouchers` (
  `id` int NOT NULL,
  `voucher_name` varchar(255) DEFAULT NULL,
  `url_img` varchar(255) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `discount` decimal(5,2) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `vouchers`
--

INSERT INTO `vouchers` (`id`, `voucher_name`, `url_img`, `code`, `discount`, `createdAt`, `updatedAt`) VALUES
(21, '11.11', 'http://localhost:5000/images/voucher/voucher-1.png', 'TREKKU11', 0.11, '2024-06-12 12:45:35', '2024-06-12 12:45:35'),
(22, 'Flash Sale 48 Jam', 'http://localhost:5000/images/voucher/voucher-2.png', 'FLASHSALE48', 0.50, '2024-06-12 12:45:35', '2024-06-12 12:45:35'),
(23, 'JALANMEN', 'http://localhost:5000/images/voucher/voucher-3.png', 'JALANMEN', 0.05, '2024-06-12 12:45:35', '2024-06-12 12:45:35'),
(24, 'Trekku x DANA', 'http://localhost:5000/images/voucher/voucher-4.png', 'PAKAIDANA', 0.05, '2024-06-12 12:45:35', '2024-06-12 12:45:35');

-- --------------------------------------------------------

--
-- Table structure for table `wishlist`
--

CREATE TABLE `wishlist` (
  `id` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `product_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `wishlist`
--

INSERT INTO `wishlist` (`id`, `createdAt`, `updatedAt`, `product_id`, `user_id`) VALUES
(4, '2024-06-13 01:13:37', '2024-06-13 01:13:37', 4, 1),
(7, '2024-06-13 01:33:11', '2024-06-13 01:33:11', 5, 6),
(8, '2024-06-13 03:27:19', '2024-06-13 03:27:19', 4, 7),
(9, '2024-06-13 03:27:23', '2024-06-13 03:27:23', 3, 7);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `article_img`
--
ALTER TABLE `article_img`
  ADD PRIMARY KEY (`id`),
  ADD KEY `article_id` (`article_id`);

--
-- Indexes for table `orderer_data`
--
ALTER TABLE `orderer_data`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_id` (`order_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `voucher_id` (`voucher_id`),
  ADD KEY `payment_method_id` (`payment_method_id`);

--
-- Indexes for table `payment_methods`
--
ALTER TABLE `payment_methods`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_img`
--
ALTER TABLE `product_img`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `visitors`
--
ALTER TABLE `visitors`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_id` (`order_id`);

--
-- Indexes for table `vouchers`
--
ALTER TABLE `vouchers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `wishlist`
--
ALTER TABLE `wishlist`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `user_id` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `articles`
--
ALTER TABLE `articles`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `article_img`
--
ALTER TABLE `article_img`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `orderer_data`
--
ALTER TABLE `orderer_data`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `payment_methods`
--
ALTER TABLE `payment_methods`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `product_img`
--
ALTER TABLE `product_img`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=171;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `visitors`
--
ALTER TABLE `visitors`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `vouchers`
--
ALTER TABLE `vouchers`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `wishlist`
--
ALTER TABLE `wishlist`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `article_img`
--
ALTER TABLE `article_img`
  ADD CONSTRAINT `article_img_ibfk_1` FOREIGN KEY (`article_id`) REFERENCES `articles` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `orderer_data`
--
ALTER TABLE `orderer_data`
  ADD CONSTRAINT `orderer_data_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `orders_ibfk_3` FOREIGN KEY (`voucher_id`) REFERENCES `vouchers` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `orders_ibfk_4` FOREIGN KEY (`payment_method_id`) REFERENCES `payment_methods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `product_img`
--
ALTER TABLE `product_img`
  ADD CONSTRAINT `product_img_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `reviews_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `visitors`
--
ALTER TABLE `visitors`
  ADD CONSTRAINT `visitors_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `wishlist`
--
ALTER TABLE `wishlist`
  ADD CONSTRAINT `wishlist_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `wishlist_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
