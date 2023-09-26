import dotenv from 'dotenv';
import express from 'express';

import mongoose from 'mongoose';

dotenv.config();

// Router import
import router from './routes/index.js';
import { errorHandler } from './middlewares/errorHandler.js';
import createHttpError from 'http-errors';

const app = express();
app.use(express.json());

// Server router
app.use('/api', router);
app.use(errorHandler);

// Unkown route handler
app.use((req, res, next) => {
  next(createHttpError(404, 'Endpoint not found'));
});

const SERVER_PORT = process.env.SERVER_PORT || 9090;
const DATABASE_URL = process.env.DATABASE_URL || '';

// Mongo connection and server listening
mongoose
  // Try to connect to database
  .connect(DATABASE_URL)
  // If connected starts the server
  .then(() => {
    app.listen(SERVER_PORT, () => {
      console.log(`Server on port: ${SERVER_PORT}`);
    });
  })
  // If not connected returns and error
  .catch((error) => {
    console.log(error);
  });
