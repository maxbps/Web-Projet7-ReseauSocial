
const mysql = require("mysql");

var dbConnect = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '64856485',
    database: 'public'
})

dbConnect.connect((err) => {
    if (!err) {
        console.log("Connected to SQL DATABASE !")
    }
    else {
        console.log("Connection to SQLDATABASE failed...")
    }
})

module.exports = dbConnect;