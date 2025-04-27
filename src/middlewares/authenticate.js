const jwt = require('jsonwebtoken');
const { User } = require('../models');

async function authenticate(req, res, next) {
  try {
    const auth = req.headers.authorization;
    if (!auth?.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Missing or malformed token' });
    }

    const token = auth.slice(7);
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    // payload.user_id was what we signed in authHandler
    const user = await User.findByPk(payload.user_id);
    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    // attach safe user object (no password)
    const { password, ...safeUser } = user.toJSON();
    req.user = safeUser;
    next();
  } catch (err) {
    console.error(err);
    res.status(401).json({ message: 'Invalid or expired token' });
  }
}

module.exports = { authenticate };