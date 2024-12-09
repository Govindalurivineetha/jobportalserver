import express from 'express';
import dotenv from 'dotenv';
import connectDatabase from './config/db.js';
import jobRoutes from './routes/jobRoutes.js';

dotenv.config();
const app = express();
app.use(express.json());

// Connect to database
connectDatabase();

// Routes
app.use('/api/jobs', jobRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
    });