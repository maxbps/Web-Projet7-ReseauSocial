var mysql = require('mysql');
const dbConnect = require("../dbConnect");

exports.getAllUsers = (req, res, next) => {
    var db = dbConnect
    db.query('SELECT * FROM Users', (err, results) => {
        if (err) {
            return res.send(err)
        }
        else {
            return res.json({
                data: results
            })
        }
    })
};