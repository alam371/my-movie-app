'use strict'

const mongoose = require('mongoose')
const express = require('express')
const path = require('path')

// 1. Create main express intance
const app = express()

// 2. Require routes
const { router: movieRoutes } = require('./routes/movies/movieRoutes')

// 3. Require conatants
const { URL, PORT } = require('./utils/constants')


const publicPath = path.resolve(__dirname, '..', 'build')
app.use('/', express.static(publicPath))


// 4. Ensure that the router is parsing the request body to appropriately format incoming requests
app.use(express.json())
app.use(express.urlencoded({ extended: true }))



//Add static middleware
// 5. Utilise routes
app.use('/api/movies', movieRoutes)

//this needs to be at the bottom route before route handlers because it is a catch all
app.use('/*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'))
})

//probably handle some errors
// app.use((err, req, res, next) => {
// })

// 6. Define configuration for mongodb
const MONGO_CONFIG = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

// 7. Start server
mongoose
  .connect(URL, MONGO_CONFIG)
  .then(async () => {
    console.log(`Connected to database at ${URL}`)
    app.listen(PORT, () => {
      console.log(`Server is running on PORT: ${PORT}`)
    })
  })
  .catch((err) => {
    console.error(err)
  })
