'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'articles',
      [
        {
          id: 1,
          title: 'Banda Neira, Surga di Timur Indonesia',
          writter_name: 'Imam Muzakir',
          text_head:
            'Pulau Banda Neira menyimpan sejuta keindahan alam Indonesia nan eksotis. Di pulau ini pula sejarah bangsa Indonesia penting pernah terjadi. Tidak heran bila pulau ini menjadi salah satu tujuan wisata memikat bagi wisatawan mancanegara maupun domestik. Banda Neira merupakan pulau di Kepulauan Banda, Maluku Tengah. Pulau tropis yang menawarkan lautan, hamparan pasir, terumbu karang, dan biota laut yang menawan. Penikmat senja dan pecinta snorkeling wajib mengunjungi tempat ini. Tidak berhenti pada kecantikan lautnya saja, Pulau Banda Neira menyajikan hamparan hutan tropis dan tumbuhan aromatik. Tidak ketinggalan pula di kepulauan ini wisatawan bisa menemukan gunung vulkanik aktif yang dapat didaki.',
          text_body:
            'Berkunjung ke Banda Neira tidak lengkap bila tidak menyusuri sejarah peninggalan kolonial karena kepulauan ini menyimpan saksi bisu sejarah besar pernah terjadi. Bayangkan saja kota metropolitan yang dijuluki The Big Apple pernah diserahkan kepada Inggris demi mendapatkan salah satu pulau di kepulauan Banda ini. Keindahan alam dan sejarahnya tentu membuat orang semakin tertarik untuk berkunjung ke pulau Banda Neira. Tapi, tenang saja masih banyak fakta menarik mengenai pulau ini yang membuat kita semakin antusias untuk menjelajahinya. Mengutip dari laman https://kemenparekraf.go.id, Banda Neira merupakan salah satu dari sepuluh pulau vulkanik di Kepulauan Banda, Provinsi Maluku. Di balik keindahan alamnya, Banda Neira pernah menjadi daerah penghasil rempah pala satu-satunya di dunia. Sekitar 500 tahun lalu, nilai segenggam pala setara dengan segenggam emas.',
          text_footer:
            'Karena itu Banda Neira menjadi tempat pertama di nusantara yang dikuasai Belanda sebelum ke Batavia. Bahkan Banda Neira juga sempat menjadi wilayah yang diperebutkan Inggris, Belanda, hingga warga lokal untuk mempertahankan wilayah. Akibatnya pada 1609 terjadilah perang yang melibatkan warga lokal yang dibantu Inggris untuk melawan Belanda. Sayangnya, pertikaian antara Belanda dan Inggris tidak kunjung berhenti. Hingga akhirnya terjadilah pertukaran Pulau Run di Kepulauan Banda Neira, dengan Nieuw Amsterdam (sekarang dikenal dengan Manhattan, New York) demi memonopoli pala. Banda Neira juga pernah menjadi tempat pengasingan Bung Hatta dan Sutan Syahrir yang dilakukan oleh Belanda pada 1936. Sebelum akhirnya dipindahkan ke Rumah Pengasingan Hatta-Sjahrir di Sukabumi pada 1 Februari 1942 untuk mempersiapkan proklamasi kemerdekaan Indonesia. Sungguh fakta sejarah yang menarik mengiringi keindahan Banda Neira. Lantas, bagaimana dengan keindahan alamnya? Digadang-gadang destinasi wisata Banda Neira, surga di timur Indonesia sebagai kawasan yang menjanjikan.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          title: 'Eksplorasi Menjangan, Surga Bawah Laut Bali Barat',
          writter_name: 'Andi Saputra',
          text_head:
            'Pulau Menjangan merupakan surga tersembunyi di Bali Barat yang menawarkan keindahan bawah laut yang menakjubkan. Terletak di Taman Nasional Bali Barat, pulau ini menjadi destinasi favorit bagi penyelam dan snorkeler. Keindahan alam bawah lautnya dengan terumbu karang yang masih terjaga dan berbagai jenis ikan hias membuat Pulau Menjangan menjadi tujuan wisata yang menarik. Selain itu, pulau ini juga menyimpan pesona pantai pasir putih yang memikat. Para pecinta alam dan fotografi tidak boleh melewatkan kesempatan untuk mengabadikan keindahan pulau ini. Tidak hanya menawarkan keindahan bawah laut, Pulau Menjangan juga memiliki kekayaan flora dan fauna yang luar biasa.',
          text_body:
            'Mengunjungi Pulau Menjangan, Anda akan disuguhi dengan pemandangan bawah laut yang spektakuler. Terumbu karang berwarna-warni dan ikan hias yang beraneka ragam menjadi daya tarik utama pulau ini. Selain menyelam, Anda juga bisa menikmati kegiatan snorkeling untuk melihat keindahan bawah laut dari permukaan. Tidak hanya itu, Pulau Menjangan juga menjadi rumah bagi berbagai jenis burung, menjadikannya tempat yang cocok untuk birdwatching. Selain alamnya yang indah, Menjangan juga memiliki cerita sejarah yang menarik. Dahulu, pulau ini menjadi tempat berlabuh bagi kapal-kapal dari berbagai negara. Keindahan alam dan kekayaan sejarahnya membuat Pulau Menjangan menjadi destinasi yang harus dikunjungi.',
          text_footer:
            'Pulau Menjangan juga dikenal sebagai tempat yang tenang dan jauh dari keramaian. Ini adalah tempat yang sempurna bagi Anda yang mencari ketenangan dan ingin menikmati alam dengan damai. Di pulau ini, Anda juga bisa menemukan beberapa spot untuk berkemah dan menikmati malam di bawah bintang-bintang. Pada malam hari, suasana pulau yang sepi memberikan pengalaman yang berbeda dan menyenangkan. Selain itu, Pulau Menjangan juga memiliki beberapa gua bawah laut yang bisa dijelajahi oleh penyelam berpengalaman. Jadi, jika Anda mencari destinasi wisata yang menawarkan keindahan alam bawah laut dan ketenangan, Pulau Menjangan adalah pilihan yang tepat. Jadikan liburan Anda tak terlupakan dengan menjelajahi surga bawah laut Bali Barat ini.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          title: 'Taman Nasional Komodo, Petualangan di Timur Indonesia',
          writter_name: 'Dewi Lestari',
          text_head:
            'Taman Nasional Komodo adalah salah satu destinasi wisata paling populer di Indonesia yang menawarkan keindahan alam dan petualangan. Terletak di antara provinsi Nusa Tenggara Timur dan Nusa Tenggara Barat, taman nasional ini dikenal dengan populasi komodo yang menjadi daya tarik utama. Selain itu, Taman Nasional Komodo juga menawarkan pemandangan alam yang menakjubkan, dengan pantai berpasir putih, perairan biru jernih, dan bukit-bukit hijau yang mempesona. Para wisatawan dapat menikmati berbagai aktivitas seperti trekking, snorkeling, dan menyelam. Tidak heran jika taman nasional ini menjadi tujuan favorit bagi wisatawan lokal dan mancanegara.',
          text_body:
            'Saat berkunjung ke Taman Nasional Komodo, Anda akan disuguhkan dengan berbagai keindahan alam yang luar biasa. Dari bukit-bukit yang menawarkan pemandangan panorama hingga perairan yang kaya akan kehidupan laut. Aktivitas snorkeling dan menyelam di sini sangat populer karena keberagaman hayati bawah lautnya. Anda bisa menemukan terumbu karang yang masih terjaga dan berbagai spesies ikan tropis yang cantik. Tidak hanya itu, trekking di Pulau Komodo akan memberikan pengalaman yang tak terlupakan. Menyusuri jalur trekking sambil melihat komodo di habitat aslinya adalah salah satu pengalaman yang paling mendebarkan. Selain itu, Taman Nasional Komodo juga menyimpan sejarah geologi yang menarik.',
          text_footer:
            'Di Taman Nasional Komodo, Anda juga bisa menemukan Pantai Pink yang terkenal dengan pasir berwarna merah muda. Pantai ini merupakan salah satu dari sedikit pantai di dunia dengan pasir berwarna unik. Menikmati sunset di Pantai Pink adalah salah satu momen yang tidak boleh dilewatkan. Selain itu, Anda juga bisa mengunjungi pulau-pulau kecil di sekitar taman nasional yang menawarkan keindahan yang tak kalah menawan. Dari Pulau Rinca hingga Pulau Padar, setiap pulau memiliki pesona tersendiri. Jadi, jika Anda mencari destinasi wisata yang menawarkan petualangan dan keindahan alam yang luar biasa, Taman Nasional Komodo adalah pilihan yang tepat. Jelajahi keajaiban alam dan keunikan fauna di Timur Indonesia ini.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('articles', null, {});
  },
};
