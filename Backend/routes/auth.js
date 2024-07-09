const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');
const { verifyToken, sequelize } = require('../config/db.js');
const User = require('../models/User');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/profile', verifyToken, authController.getProfile);
router.get('/protected', verifyToken, (req, res) => {
    res.status(200).json({ message: 'Protected route' });
});

router.get("/", (req, res)=>{
        if(req.session.name){
          return res.json({valid: true, name: req.session.name})
        }else{
          return res.json({valid: false})
        }
})

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
