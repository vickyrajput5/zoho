const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
const db = require('../config/db')
dotenv.config(); // Load environment variables from .env

// Middleware setup
app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes
app.use(express.json())
// API Routes
app.use('/auth', require('../routes/auth'));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Internal server error' });
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
