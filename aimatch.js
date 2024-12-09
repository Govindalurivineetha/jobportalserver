// backend/routes/aimatch.js

import express from 'express';
import { aiMatch } from './controllers/aiMatchController.js';

const router = express.Router();

// AI matching endpoint
router.post('/', aiMatch);

export default router;
