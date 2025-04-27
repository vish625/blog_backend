// src/apis/routes/authRoutes.js
const router = require('express').Router();
const { signup, login } = require('../handlers/authHandler');

router.post('/signup', signup);
router.post('/login', login);

module.exports = router;
