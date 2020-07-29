var mysql = require('mysql');
const dbConnect = require("../dbConnect");


exports.getAllPosts = (req, res, next) => {
    var db = dbConnect
    db.query('SELECT * FROM Posts ORDER BY post_id DESC', (err, result) => {
        if (err) {
            throw err;
        } else {
            res.status(200).json(result);
        }
    })
}

exports.createPost = (req, res, next) => {
    var db = dbConnect
    const description = req.body.description
    const email = req.body.email
    const name = req.body.name
    const picture = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    db.query('INSERT INTO Posts (user_email, user_name, post_description, post_picture) VALUES ("' + email + '", "' + name + '", "' + description + '", "' + picture + '")', (err, results) => {
        if (err) {
            throw err;
        } else {
            res.status(200).json(result);
        }
    })
}