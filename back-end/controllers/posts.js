var mysql = require('mysql')
const dbConnect = require("../dbConnect")
var fs = require('fs')
var multer = require('multer');
var upload = multer({ dest: 'uploads/' }) //setting the default folder for multer


exports.getAllPosts = (req, res, next) => {
    var db = dbConnect
    db.query('SELECT * FROM public.Posts ORDER BY post_id DESC', (err, result) => {
        if (err) {
            throw err;
        } else {
            res.status(200).json(result);
        }
    })
}


exports.createPost = (req, res, next) => {
    const description = req.body.description
    const name = req.body.name
    const email = req.body.email
    console.log(description)
    console.log(email)
    console.log(name)
    var db = dbConnect
    db.query('INSERT INTO public.Posts (user_email, user_name, post_description) VALUES ("' + email + '", "' + name + '", "' + description + '")', (err, results) => {
        if (err) {
            return res.send(err)
        }
        else {
            return res.json({
                data: results
            })
        }
    })
}

exports.deletePost = (req, res, next) => {
    const post_id = req.body.post_id
    console.log(post_id)
    var db = dbConnect
    db.query('DELETE FROM public.posts WHERE post_id=' + post_id + '', (err, results) => {
        if (err) {
            return res.send(err)
        }
        else {
            return res.json({
                data: results
            })
        }
    })
}