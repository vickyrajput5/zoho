const crypto = require('crypto');
require('dotenv').config();

module.exports = {
    jwtSecret: process.env.JWT,
    databaseHost: process.env.Local_Host,
    databaseUser: process.env.USER,
    databasePassword: process.env.PASSWORD,
    databaseName: process.env.DBNAME,
};
