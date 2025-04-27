const { Category } = require('../models');

// Format a single blog response nicely
const formatBlogResponse = (blog) => {
  return {
    id: blog.blog_id.toString(),
    title: blog.title,
    content: blog.content,
    category: blog.category ? {
      id: blog.category.category_id.toString(),
      name: blog.category.category_name
    } : null,
    author: blog.author ? {
      id: blog.author.user_id.toString(),
      username: blog.author.username
    } : null,
    createdAt: blog.createdAt ? blog.createdAt.toISOString() : null,
    updatedAt: blog.updatedAt ? blog.updatedAt.toISOString() : null,
    comments: blog.comments ? blog.comments.map(comment => ({
      id: comment.comment_id.toString(),
      content: comment.content,
      author: comment.author ? {
        id: comment.author.user_id.toString(),
        username: comment.author.username
      } : null,
      createdAt: comment.createdAt ? comment.createdAt.toISOString() : null
    })) : []
  };
};

// Get or Create a Category if not exists
async function getOrCreateCategory(categoryName) {
  try {
    let category = await Category.findOne({ where: { category_name: categoryName } });
    
    if (!category) {
      category = await Category.create({ category_name: categoryName });
    }

    return category.category_id;
  } catch (error) {
    console.error('Error in getOrCreateCategory:', error);
    throw error;
  }
}

module.exports = { formatBlogResponse, getOrCreateCategory };
