import { Sequelize } from 'sequelize';
import db from '../config/db.js';

const { DataTypes } = Sequelize;

const Articles = db.define(
  'articles',
  {
    title: {
      type: DataTypes.STRING,
    },
    writter_name: {
      type: DataTypes.STRING,
    },
    text_head: {
      type: DataTypes.STRING,
    },
    text_body: {
      type: DataTypes.STRING,
    },
    text_footer: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

Articles.associate = (models) => {
  Articles.hasMany(models.ArticleImage, { foreignKey: 'article_id' });
};

export default Articles;
