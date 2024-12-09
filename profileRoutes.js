const express = require('express');
const { protect } = require('../middlewares/authMiddleware').default;
const { getProfile, updateProfile } = require('../controllers/profileController');
const router = express.Router();

router.route('/').get(protect, getProfile).put(protect, updateProfile);

module.exports = router;