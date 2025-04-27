// src/apis/routes/categoryRoutes.js
const router = require('express').Router();
const {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory
} = require('../handlers/categoryHandler');

router.post('/',       createCategory);
router.get('/',        getAllCategories);
router.get('/:id',     getCategoryById);
router.put('/:id',     updateCategory);
router.delete('/:id',  deleteCategory);

module.exports = router;
