const mysql = require('mysql')
const dbConnect = require("../dbConnect")
const fs = require('fs')
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }) //setting the default folder for multer

exports.getAllPosts = (req, res, next) => {
    const db = dbConnect
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
    const db = dbConnect
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