// src/apis/routes/favouriteRoutes.js
const router = require('express').Router();
const {
  addFavourite,
  getUserFavourite,
  removeFavourite
} = require('../handlers/favouriteHandler');

router.post('/',      addFavourite);
router.get('/',       getUserFavourite);
router.delete('/:id', removeFavourite);

module.exports = router;
