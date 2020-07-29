const express = require('express')
const router = express.Router()
const postCtrl = require('../controllers/posts')
const multer = require('../middleware/multer_config')


router.get('/', postCtrl.getAllPosts)
router.post('/', multer, postCtrl.createPost)  // display posts


module.exports = router

