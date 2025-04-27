const express = require('express');
const router = express.Router();

const authRoutes = require('./authRoutes');
const userRoutes = require('./userRoutes');
const blogRoutes = require('./blogRoutes');
const categoryRoutes = require('./categoryRoutes');
const commentRoutes = require('./commentRoutes');
const favouritesRoutes = require('./favouritesRoutes');

// Mount all routes here
router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/blogs', blogRoutes);
router.use('/categories', categoryRoutes);
router.use('/comments', commentRoutes);
router.use('/favourites', favouritesRoutes);

module.exports = router;
