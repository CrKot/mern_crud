import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import post from './routes/post'

import { connectMongoose } from "./utils/mongoose";

dotenv.config();

const app = express();
const PORT: string = process.env.PORT || '8080';

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://127.0.0.1:3000',
  credentials: true
}));

app.use('/api', post)

// connectMongoose() as Promise<void>

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
});

