import { Sequelize } from 'sequelize';
import db from '../config/db.js';

const { DataTypes } = Sequelize;

const Orderer = db.define('orderer_data', {
  name: {
    type: DataTypes.STRING,
  },
  phone: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
});

Orderer.associate = (models) => {
  Orderer.belongsTo(models.Orders, { foreignKey: 'order_id' });
};

export default Orderer;
