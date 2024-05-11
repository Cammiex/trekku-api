import { Sequelize } from 'sequelize';

const db = new Sequelize('trekku_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

export default db;
