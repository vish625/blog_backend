// src/apis/routes/userRoutes.js
const router = require('express').Router();
const { getProfile, updateProfile } = require('../handlers/userHandler');

router.get('/profile', getProfile);
router.put('/profile', updateProfile);

module.exports = router;
