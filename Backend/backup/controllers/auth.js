const { generateToken } = require('../Utils/jwtUtils');
const { db } = require('../config/db'); // Import the updated db object
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Register a new user
exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
      // Hash the password using bcrypt
      const hashedPassword = await bcrypt.hash(password, 10); // 10 is the number of salt rounds

      // Generate the token
      const token = generateToken(email); // Use email as a unique identifier for the token

      // Insert the user data and token into the database
      db.getConnection((err, connection) => {
          if (err) {
              console.error(err);
              return res.status(500).json({status:"error", message: 'Internal server error in register' });
          }

          // Store the token in the user object
          const user = {
              name,
              email,
              password: hashedPassword,
              token, // Store the token
          };

          connection.query(
              'INSERT INTO users SET ?',
              user, // Pass the user object directly
              (err, result) => {
                  connection.release(); // Release the connection

                  if (err) {
                      if (err.code === 'ER_DUP_ENTRY') {
                          console.error('Duplicate email address. Please choose a different email.');
                          return res.status(400).json({ status:"error",  message: 'Email address is already in use. Please choose a different email.' });
                      } else {
                          console.error(err);
                          return res.status(500).json({status:"error", message: 'Internal server error in register' });
                      }
                  }

                  res.status(201).json({ status:"success" ,  message: 'User registered successfully', token });
              }
          );
      });
  } catch (error) {
      console.error('Error hashing password:', error);
      res.status(500).json({ status:"error", message: 'Internal server error in register' });
  }
};

// Login an existing user
exports.login = (req, res) => {
  const { email, password } = req.body;

  db.getConnection((err, connection) => {
      if (err) {
          console.error(err);
          return res.status(500).json({ status:"error", message: 'Internal server error in login' });
      }

      connection.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
          if (err) {
              connection.release(); // Release the connection
              console.error(err);
              return res.status(500).json({status:"error", message: 'Internal server error in login' });
          }

          if (results.length === 0) {
              connection.release(); // Release the connection
              return res.status(401).json({status:"error", message: 'Invalid credentials' });
          }

          const user = results[0];

          try {
            // Validate user credentials
            const passwordMatch = await bcrypt.compare(password, user.password);
          
            if (passwordMatch) {
              // Generate a new token for the user
              const token = jwt.sign({ email: user.email }, 'your-secret-key', {
                expiresIn: '1h', // Token expiration time (adjust as needed)
              });
              console.log('Generated Token:', token);
              // Send the token in the response
              res.status(200).json({
                status: "success",
                message: 'Login successful',
                token: token,
              });
            } else {
              res.status(401).json({
                status: "error",
                message: 'Invalid credentials',
              });
            }
          } catch (error) {
            console.error('Error comparing passwords:', error);
            res.status(500).json({
              status: "error",
              message: 'Internal server error in login',
            });
          } finally {
              connection.release(); // Release the connection
          }
      });
  });
};



