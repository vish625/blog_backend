const { Favourite, Blog } = require('../../models');

const addFavourite = async (req, res, next) => {
  try {
    // Validate that `blog_id` is provided
    const { blog_id } = req.body;
    if (!blog_id) {
      return res.status(400).json({ message: 'blog_id is required' });
    }

    // Ensure `req.user` is defined
    if (!req.user || !req.user.user_id) {
      return res.status(401).json({ message: 'Unauthorized: User not authenticated' });
    }

    // Create or find the favourite
    const [favourite, created] = await Favourite.findOrCreate({
      where: { user_id: req.user.user_id, blog_id },
    });

    // Respond with the favourite
    res.status(201).json({
      message: created ? 'Favourite added successfully' : 'Favourite already exists',
      favourite,
    });
  } catch (error) {
    // Log the error for debugging
    console.error('Error in addFavourite:', error);
    next(error);
  }
};

const getUserFavourite = async (req, res, next) => {
  try {
    // Ensure `req.user` is defined
    if (!req.user || !req.user.user_id) {
      return res.status(401).json({ message: 'Unauthorized: User not authenticated' });
    }

    // Fetch all favourites for the authenticated user
    const favourites = await Favourite.findAll({
      where: { user_id: req.user.user_id },
      include: [{ model: Blog, attributes: ['blog_id', 'blog_title'] }],
    });

    res.status(200).json(favourites);
  } catch (error) {
    // Log the error for debugging
    console.error('Error in getUserFavourite:', error);
    next(error);
  }
};

const removeFavourite = async (req, res, next) => {
  try {
    const { id } = req.params;

    // Ensure `req.user` is defined
    if (!req.user || !req.user.user_id) {
      return res.status(401).json({ message: 'Unauthorized: User not authenticated' });
    }

    // Find the favourite by ID
    const favourite = await Favourite.findByPk(id);
    if (!favourite) {
      return res.status(404).json({ message: 'Favourite not found' });
    }

    // Ensure the favourite belongs to the authenticated user
    if (favourite.user_id !== req.user.user_id) {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    // Delete the favourite
    await favourite.destroy();
    res.status(200).json({ message: 'Favourite removed successfully' });
  } catch (error) {
    // Log the error for debugging
    console.error('Error in removeFavourite:', error);
    next(error);
  }
};

module.exports = { addFavourite, getUserFavourite, removeFavourite };