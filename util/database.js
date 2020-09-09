const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'sahil',
    database: 'node-complete',
    password: ''
});

module.exports = pool.promise();