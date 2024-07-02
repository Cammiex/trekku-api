import express from 'express';
import dotenv from 'dotenv';
import db from './db/config/db.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import router from './routes/index.js';
import fileUpload from 'express-fileupload';
import { initDatabase } from './utils/DatabaseInit.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT;

const startServer = async () => {
  try {
    await db.authenticate();
    await initDatabase();
    console.log('Database Connected...');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1); // Exit process with failure
  }

  // app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
  app.set('trust proxy', 1);
  const allowedOrigins = [
    'http://localhost:3000',
    'https://trekku.vercel.app',
    'https://design-dabblers.productsofwebdevuiuxceleratessib6.site',
  ];
  app.use(
    cors({
      credentials: true,
      origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
          callback(null, true);
        } else {
          callback(new Error('Not allowed by CORS'));
        }
      },
    })
  );

  app.use(cookieParser());
  app.use(express.json());
  app.use(fileUpload());
  app.use(express.static('public'));
  app.use(router);

  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
};

startServer();

// try {
//   await db.authenticate();
//   await initDatabase();
//   console.log('Database Connected...');
// } catch (error) {
//   console.error(error);
// }

// app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
// app.use(cookieParser());
// app.use(express.json());
// app.use(fileUpload());
// app.use(express.static('public'));
// app.use(router);

// app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
