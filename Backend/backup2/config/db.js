const mysql = require('mysql2');
const jwt = require('jsonwebtoken');
const config = require('./config'); // Import your configuration

// Create a connection pool
const db = mysql.createPool({
  host: config.databaseHost,
  user: config.databaseUser,
  password: config.databasePassword,
  database: config.databaseName,
  waitForConnections: true,
  connectionLimit: 10, // Adjust this as needed
  queueLimit: 0,
});

// Verify JWT token middleware
// Verify JWT token middleware
function verifyToken(req, res, next) {
  const token = req.headers['authorization'];
  console.log('Received Token:', token);

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  // Extract the token from the "Bearer" prefix
  const tokenWithoutBearer = token.replace('Bearer ', '');

  jwt.verify(tokenWithoutBearer, 'your-secret-key', (err, decoded) => {
    if (err) {
      console.error('Token Verification Error:', err);
      return res.status(403).json({ message: 'Forbidden' });
    }

    req.userId = decoded.userId;
    next();
  });
}


module.exports = { db, verifyToken };
