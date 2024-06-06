import { Sequelize } from 'sequelize';
import db from '../config/db.js';

const { DataTypes } = Sequelize;

const Visitor = db.define('visitor', {
  title: {
    type: DataTypes.ENUM,
    values: ['tuan', 'nyonya'],
  },
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

Visitor.associate = (models) => {
  Visitor.belongsTo(models.Orders, { foreignKey: 'order_id' });
};

export default Visitor;
