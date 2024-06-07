import { Sequelize } from 'sequelize';
import db from '../config/db.js';

const { DataTypes } = Sequelize;

const Reviews = db.define('reviews', {
  name: {
    type: DataTypes.STRING,
  },
  comment: {
    type: DataTypes.TEXT,
  },
  rating: {
    type: DataTypes.INTEGER,
    validate: {
      min: 1,
      max: 5,
    },
  },
});

Reviews.associate = (models) => {
  Reviews.belongsTo(models.Products, { foreignKey: 'product_id' });
  Reviews.belongsTo(models.Users, { foreignKey: 'user_id' });
};

export default Reviews;
