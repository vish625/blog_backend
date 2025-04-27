const { Comments, Blog, User } = require('../../models');

const createComment = async (req, res, next) => {
  try {
    const { blog_id, comment_content } = req.body;
    const comment = await Comments.create({
      blog_id,
      comment_content,
      user_id: req.user.user_id
    });
    res.status(201).json(comment);
  } catch (error) {
    next(error);
  }
};

const getAllComments = async (req, res, next) => {
  try {
    const comments = await Comments.findAll({
      include: [
        { model: User, attributes: ['user_id', 'user_name'] },
        { model: Blog, attributes: ['blog_id', 'blog_title'] }
      ]
    });
    res.status(200).json(comments);
  } catch (error) {
    next(error);
  }
};

const getCommentById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const comment = await Comments.findByPk(id, {
      include: [
        { model: User, attributes: ['user_id', 'user_name'] },
        { model: Blog, attributes: ['blog_id', 'blog_title'] }
      ]
    });
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }
    res.status(200).json(comment);
  } catch (error) {
    next(error);
  }
};

const updateComment = async (req, res, next) => {
  try {
    const { id } = req.params;
    const comment = await Comments.findByPk(id);
    if (!comment || comment.user_id !== req.user.user_id) {
      return res.status(403).json({ message: 'Unauthorized' });
    }
    await comment.update(req.body);
    res.status(200).json(comment);
  } catch (error) {
    next(error);
  }
};

const deleteComment = async (req, res, next) => {
  try {
    const { id } = req.params;
    const comment = await Comments.findByPk(id);
    if (!comment || comment.user_id !== req.user.user_id) {
      return res.status(403).json({ message: 'Unauthorized' });
    }
    await comment.destroy();
    res.status(200).json({ message: 'Comment deleted successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = { createComment, getAllComments, getCommentById, updateComment, deleteComment };
