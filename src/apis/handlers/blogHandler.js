const { Blog, User, Category } = require('../../models');

const createBlog = async (req, res, next) => {
  try {
    const { blog_title, blog_content, category_id } = req.body;
    const blog = await Blog.create({
      blog_title,
      blog_content,
      user_id: req.user.user_id,
      category_id,
    });
    res.status(201).json(blog);
  } catch (error) {
    next(error);
  }
};

const getAllBlogs = async (req, res, next) => {
  try {
    const blogs = await Blog.findAll({
      include: [
        { model: User, attributes: ['user_id', 'user_name'] },
        { model: Category, attributes: ['category_id', 'category_name'] }
      ]
    });
    res.status(200).json(blogs);
  } catch (error) {
    next(error);
  }
};

const getBlogById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findByPk(id, {
      include: [
        { model: User, attributes: ['user_id', 'user_name'] },
        { model: Category, attributes: ['category_id', 'category_name'] }
      ]
    });
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.status(200).json(blog);
  } catch (error) {
    next(error);
  }
};

const updateBlog = async (req, res, next) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findByPk(id);

    if (!blog || blog.user_id !== req.user.user_id) {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    await blog.update(req.body);
    res.status(200).json(blog);
  } catch (error) {
    next(error);
  }
};

const deleteBlog = async (req, res, next) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findByPk(id);

    if (!blog || blog.user_id !== req.user.user_id) {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    await blog.destroy();
    res.status(200).json({ message: 'Blog deleted successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = { createBlog, getAllBlogs, getBlogById, updateBlog, deleteBlog };
