import { Sequelize } from 'sequelize';
import db from '../config/db.js';

const { DataTypes } = Sequelize;

const Users = db.define(
  'users',
  {
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    url_profile_img: {
      type: DataTypes.STRING,
    },
    phone_number: {
      type: DataTypes.STRING,
    },
    refresh_token: {
      type: DataTypes.TEXT,
    },
  },
  {
    freezeTableName: true,
  }
);

Users.associate = (models) => {
  Users.hasMany(models.Wishlist, { foreignKey: 'user_id' });
  Users.hasOne(models.Orders, { foreignKey: 'user_id' });
  Users.hasMany(models.Reviews, { foreignKey: 'user_id' });
};

export default Users;
