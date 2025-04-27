const { Blog } = require('../models');

// Middleware to check if the logged-in user is the owner of the blog
const authorizeBlogOwner = async (req, res, next) => {
  try {
    const blogId = req.params.id;

    const blog = await Blog.findByPk(blogId);
    if (!blog) {
      return res.status(404).json({ success: false, message: "Blog not found" });
    }

    if (blog.user_id.toString() !== req.user.user_id.toString()) {
      return res.status(403).json({ success: false, message: "Access denied: You are not the owner of this blog" });
    }

    // If authorized
    next();
  } catch (error) {
    console.error('Authorization error:', error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

module.exports = { authorizeBlogOwner };
