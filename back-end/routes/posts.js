const express = require('express')
const router = express.Router()
const postCtrl = require('../controllers/posts')
const auth = require('../middleware/auth')


router.get('/', auth, postCtrl.getAllPosts)
router.post('/newpost', auth, postCtrl.createPost)  // display posts


module.exports = router

