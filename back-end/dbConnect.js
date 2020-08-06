
const mysql = require("mysql")
require('dotenv').config()

const dbConnect = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})

dbConnect.connect((err) => {
    if (!err) {
        console.log("Connected to SQL DATABASE !")
    }
    else {
        console.log("Failed to connect SQL DATABASE")
    }
})
module.exports = dbConnect;