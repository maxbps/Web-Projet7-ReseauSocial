const express = require('express')
const router = express.Router()
const postCtrl = require('../controllers/posts')


router.get('/', postCtrl.getAllPosts) // display posts


module.exports = router

