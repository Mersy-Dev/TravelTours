import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

import tourRoute from './routes/tour.js';
import userRoute from './routes/user.js';
import authRoute from './routes/authRoute.js';
import reviewRoute from './routes/reviewRoute.js';
import bookingRoute from './routes/bookingRoute.js';

const port = process.env.PORT || 8000;

// Database connection
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Database connected successfully');
  } catch (error) {
    console.log('Error connecting to database', error);
  }
};

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors({ origin: '*' }));
app.use(cookieParser());

app.use('/api/v1/auth', authRoute);
app.use('/api/v1/tours', tourRoute);
app.use('/api/v1/users', userRoute);
app.use('/api/v1/reviews', reviewRoute);
app.use('/api/v1/bookings', bookingRoute);

app.listen(port, () => {
  connect();
  console.log('serving is running on port', port);
});
