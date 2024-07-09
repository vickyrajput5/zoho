const jwt = require('jsonwebtoken');
const config = require('../config/config');

// Function to generate a JWT token
function generateToken(userId) {
  return jwt.sign({ userId }, config.jwtSecret, { expiresIn: '1h' });
}

module.exports = { generateToken };
