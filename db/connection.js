const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'company'
    },
    console.log('Connected to the election database.')
);

module.exports = db;