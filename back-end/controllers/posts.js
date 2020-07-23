var mysql = require('mysql');
const dbConnect = require("../dbConnect");

exports.getAllPosts = (req, res, next) => {
    var db = dbConnect
    db.query('SELECT * FROM Posts', (err, results) => {
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