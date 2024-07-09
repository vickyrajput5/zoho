const { generateToken } = require('../Utils/jwtUtils');
const { db } = require('../config/db'); // Import the updated db object
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Register a new user using a stored procedure
exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  db.getConnection((err, connection) => {
      if (err) {
          console.error(err);
          return res.status(500).json({ status: "error", message: 'Internal server error in register' });
      }

      connection.query(
          'CALL RegisterUser(?, ?, ?)',
          [name, email, password],
          (err, result) => {
              connection.release(); // Release the connection

              if (err) {
                  if (err.code === 'ER_DUP_ENTRY') {
                      console.error('Duplicate email address. Please choose a different email.');
                      return res.status(400).json({ status: "error", message: 'Email address is already in use. Please choose a different email.' });
                  } else {
                      console.error(err);
                      return res.status(500).json({ status: "error", message: 'Internal server error in register' });
                  }
              }

              res.status(201).json({ status: "success", message: 'User registered successfully', token: result[0][0].token });
          }
      );
  });
};

// Login an existing user using a stored procedure
exports.login = (req, res) => {
  const { email, password } = req.body;

  db.getConnection((err, connection) => {
      if (err) {
          console.error(err);
          return res.status(500).json({ status: "error", message: 'Internal server error in login' });
      }

      connection.query(
          'CALL UserLogin(?, ?)',
          [email, password],
          (err, results) => {
              connection.release(); // Release the connection

              if (err) {
                  console.error(err);
                  return res.status(500).json({ status: "error", message: 'Internal server error in login' });
              }

              const token = results[0][0];

              if (token) {
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
          }
      );
  });
};
