const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
  // Get token from request header
  const token = req.header('x-auth-token');

  // Check if does not exist
  if (!token) {
    return res.status(401).json({ msg: 'No authorization token, access denied' });
  }

  // Verify token
  try {
    jwt.verify(token, config.get('jwtSecret'), (error, decoded) => {
      if (error) {
        return res.status(401).json({ msg: 'Token is not valid' });
      } else {
        req.user = decoded.user;
        next();
      }
    });
  } catch (err) {
    console.error('auth middleware error');
    res.status(500).json({ msg: 'Internal Server Error' });
  }
};