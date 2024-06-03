import { Sequelize } from 'sequelize';
import db from '../config/db.js';

const { DataTypes } = Sequelize;

const ArticleImage = db.define(
  'article_img',
  {
    image: {
      type: DataTypes.STRING,
    },
    url_img: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

ArticleImage.associate = (models) => {
  ArticleImage.belongsTo(models.Articles, { foreignKey: 'article_id' });
};

export default ArticleImage;
