import express from 'express';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Your routes here
router.get('/', protect, (req, res) => {
    res.json({ message: "Jobs route working" });
});

export default router;