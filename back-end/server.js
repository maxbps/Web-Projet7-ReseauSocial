const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')

app.use(cors())

const postRoutes = require('./routes/posts')
const userRoutes = require('./routes/users')

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
    next()
})

app.use(bodyParser.json())

app.use('/posts', postRoutes)
app.use('/users', userRoutes)

app.listen(4000, () => {
    console.log('server listen on port 4000')
})


