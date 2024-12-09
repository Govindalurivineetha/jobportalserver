import express from 'express';
import { registerUser, loginUser } from '../controllers/authController.js'; // Adjust the path if needed

const router = express.Router();

// Authentication routes
router.post('/register', registerUser);
router.post('/login', loginUser);

export default router;
