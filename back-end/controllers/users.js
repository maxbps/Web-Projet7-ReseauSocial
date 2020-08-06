const bcrypt = require('bcrypt')
const mysql = require('mysql')
const jwt = require('jsonwebtoken')
const dbConnect = require("../dbConnect")

exports.getAllUsers = (req, res, next) => {
    const db = dbConnect
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
    const rank = false
    bcrypt.hash(req.body.psw, 10, function (err, hash) {
        const db = dbConnect
        db.query('INSERT INTO Users (user_email, user_name, user_psw, user_isAdm) VALUES ("' + email + '", "' + name + '", "' + hash + '", ' + false + ' )', (err, results) => {
            if (err) {
                return res.send("this email already is already use")
            }
            else {
                return res.send("successfuly added you account")
            }
        })
    })
}

exports.login = (req, res, next) => {
    const email = req.body.email
    const psw = req.body.psw
    const db = dbConnect
    db.query('SELECT * FROM public.users WHERE user_email = "' + email + '" ', (err, result) => {
        if (err) {
            throw err
            res.status(401).json({ error: 'Utilisateur non trouvé !' })
        } else {
            bcrypt.compare(psw, result[0].user_psw)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: 'Mot de passe incorrect !' })
                    }
                    res.status(200).json({
                        user_isAdm: result[0].user_isAdm,
                        user_name: result[0].user_name,
                        token: jwt.sign({ user_email: result[0].user_email },
                            'RANDOM_TOKEN_SECRET', { expiresIn: '24h' }
                        )
                    })
                })
                .catch(error => res.status(500).json({ error: "erreur 500" }))
        }
    })
}



