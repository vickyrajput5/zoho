const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { sequelize } = require('../config/db');
const User = require('../models/User');
const { verifyToken } = require('../config/db');
const Employee = require('../models/Employee');
exports.register = async (req, res) => {
    const { name, email, password } = req.body;

    try {
          // Check if the email exists in either the users or employees table
     const existingUser = await User.findOne({ where: { email } });
     const existingEmployee = await Employee.findOne({ where: { email } });
 
     // Proceed with creating the employee only if the email does not exist in both tables
     if (existingUser || existingEmployee) {
       return res.status(409).json({ status: 'error', message: 'Email already exists in either users or employees table.' });
     }
        // If the email doesn't exist, proceed with user registration
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = {
            name,
            email,
            password: hashedPassword,
        };

        const newUser = await User.create(user);

        const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
            expiresIn: '1d', // 1 day
        });

        // Save the token to the user in the database
        newUser.token = token;
        await newUser.save();

        res.status(201).json({ status: 'success', message: 'User registered successfully', token });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ status: 'error', message: 'Internal server error in register' });
    }
};


exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ where: { email } });
        const employee = await Employee.findOne({ where: { email } });

        // Check if the email exists in either the users or employees table
        const entity = user || employee;

        if (!entity) {
            console.log('User or employee not found for email:', email);
            return res.status(401).json({ status: 'error', message: 'Email or password not correct' });
        }

        const passwordMatch = entity instanceof User
            ? await bcrypt.compare(password, entity.password)
            : password === entity.password;

        if (passwordMatch) {
            const token = jwt.sign({ email: entity.email }, process.env.JWT_SECRET, {
                expiresIn: '1d', // 1 day
            });

            // Send user details along with the token
            res.status(200).json({
                status: 'success',
                message: 'Login successful',
                token: token,
                user: entity,
            });
        } else {
            console.log('Password does not match for email:', email);
            res.status(401).json({
                status: 'error',
                message: 'Email or password not correct',
            });
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({
            status: 'error',
            message: 'Internal server error in login',
        });
    }
};
exports.logout = (req, res) => {
    // Clear the session and redirect to the login page or homepage
    req.session.destroy((err) => {
        if (err) {
            console.error('Error logging out:', err);
            return res.status(500).json({
                status: 'error',
                message: 'Internal server error in logout',
            });
        }
        res.redirect('/login'); // Redirect to your login page
    });
};


// controllers/auth.js

exports.getProfile = async (req, res) => {
    try {
        // Retrieve user information from the request object (added during login)
        const user = req.user;

        console.log('req.user:', req.user);

        // If user information is available, fetch all user details from the Employee table
        if (user) {
            const userDetails = await Employee.findOne({
                where: { email: user.email }
            });

            if (userDetails) {
                res.status(200).json({
                    status: 'success',
                    message: 'User profile retrieved successfully',
                    user: userDetails,
                });
            } else {
                res.status(404).json({
                    status: 'error',
                    message: 'User not found',
                });
            }
        } else {
            res.status(401).json({
                status: 'error',
                message: 'User not authenticated',
            });
        }
    } catch (error) {
        console.error('Error getting user profile:', error);
        res.status(500).json({
            status: 'error',
            message: 'Internal server error in getting user profile',
        });
    }
};

