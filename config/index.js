require('dotenv').config();
let { createPool } = require('mysql');
let connect = createPool({
    host: process.env.HOST,
    database: process.env.dbName,
    user: process.env.dbUser,
    password: process.env.dbPassword,
    port: process.env.dbPort,
    multipleStatements:true
})
module.exports = connection;