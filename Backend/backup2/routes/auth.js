const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');
const { verifyToken } = require('../config/db'); // Import the verifyToken middleware

// Register a new user
router.post('/register', authController.register);

// Login an existing user
router.post('/login', authController.login);

// Protected route example
router.get('/protected', verifyToken, (req, res) => {
  // The route is protected, and req.userId contains the user's ID from the JWT payload
  res.status(200).json({ message: 'Protected route' });
});

// GET endpoint to retrieve data from a stored procedure
router.get('/get-data-from-stored-procedure', verifyToken, (req, res) => {
  // Define the stored procedure call
  const callStoredProcedure = 'CALL GetUsers()';

  // Execute the stored procedure
  db.query(callStoredProcedure, (err, results) => {
    if (err) {
      console.error('Error executing stored procedure:', err);
      return res.status(500).json({ message: 'Error executing stored procedure' });
    }

    // Process the retrieved data (results)
    const data = results[0]; // Assuming the result is in the first element of the array

    // Send the data in the response
    res.json({ data });
  });
});

module.exports = router;
