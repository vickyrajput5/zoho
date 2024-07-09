const { Sequelize } = require('sequelize');
const jwt = require('jsonwebtoken');
const config = require('./config');
require('dotenv').config();

const sequelize = new Sequelize(config.databaseName, config.databaseUser, config.databasePassword, {
    host: config.databaseHost,
    dialect: 'mysql', 
});

function verifyToken(req, res, next) {
  const token = req.headers['authorization'];
  console.log('Received Token:', token);

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      console.error('Token Verification Error:', err);
      return res.status(403).json({ message: 'Forbidden' });
    }

    req.user = decoded;
    console.log('Decoded User:', req.user);
    next();
  });
}



module.exports = { sequelize, verifyToken };
