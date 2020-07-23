const express = require('express')
const router = express.Router()
const userCtrl = require('../controllers/users')


router.get('/', userCtrl.getAllUsers) // display users


module.exports = router
