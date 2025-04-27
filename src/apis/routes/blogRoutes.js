// src/apis/routes/blogRoutes.js
const router = require('express').Router();
const {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog
} = require('../handlers/blogHandler');

router.post('/',       createBlog);
router.get('/',        getAllBlogs);
router.get('/:id',     getBlogById);
router.put('/:id',     updateBlog);
router.delete('/:id',  deleteBlog);

module.exports = router;
