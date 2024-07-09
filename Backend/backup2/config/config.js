const crypto = require('crypto');

// Generate a secure random string for JWT secret key
const jwtSecret = crypto.randomBytes(32).toString('hex');

// console.log('JWT Secret Key:', jwtSecret);
module.exports = {
    jwtSecret: jwtSecret, // Replace with the generated JWT secret key
    databaseHost: '172.16.1.64',
    databaseUser: 'admin',
    databasePassword: 'Fn12345$',
    databaseName: 'hcm',
    // Add other configuration variables as needed
};
