const express = require('express')
const cors = require('cors')
const app = express()
const path = require('path')

const postRoutes = require('./routes/posts')
const userRoutes = require('./routes/users')

app.use('/posts', postRoutes)
app.use('/users', userRoutes)

app.listen(4000, () => {
    console.log('server listen on port 4000')
})


