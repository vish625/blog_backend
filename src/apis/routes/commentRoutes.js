// src/apis/routes/commentRoutes.js
const router = require('express').Router();
const {
  createComment,
  getAllComments,
  getCommentById,
  updateComment,
  deleteComment
} = require('../handlers/commentHandler');

router.post('/',       createComment);
router.get('/',        getAllComments);
router.get('/:id',     getCommentById);
router.put('/:id',     updateComment);
router.delete('/:id',  deleteComment);

module.exports = router;
