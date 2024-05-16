import Users from '../models/UserModel.js';

export const initDatabase = async () => {
  await Users.sync();
};
