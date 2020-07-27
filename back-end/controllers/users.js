const bcrypt = require('bcrypt')
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
}

exports.signup = (req, res, next) => {
    const email = req.body.email
    const name = req.body.name
    const picture = req.body.picture
    bcrypt.hash(req.body.psw, 10, function (err, hash) {
        var db = dbConnect
        db.query('INSERT INTO Users (user_email, user_name, user_psw, user_picture) VALUES ("' + email + '", "' + name + '", "' + hash + '", "' + picture + '")', (err, results) => {
            if (err) {
                return res.send(err)
            }
            else {
                return res.json({
                    data: results
                })
            }
        })
    })
}

exports.login = (req, res, next) => {
    const email = req.body.email
    const psw = req.body.psw
    var db = dbConnect
    db.query('SELECT * FROM public.users WHERE user_email = "' + email + '" ', (err, result) => {
        if (err) {
            throw err
            res.status(401).json({ error: 'Utilisateur non trouvé !' })
        } else {
            console.log(result[0].user_psw)
            bcrypt.compare(psw, result[0].user_psw)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: 'Mot de passe incorrect !' })
                    }
                    console.log("ok")
                })
                .catch(error => res.status(500).json({ error: "erruer 500" }))
        }
    })
}



