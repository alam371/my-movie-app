'use strict'

const express = require('express')
const router = express.Router()

const movieService = require('./movieService')

// GET /movies/
router.route('/')
  .get(async (req, res, next) => {
    try {
      // 1. Fetch all movies from database
      const movies = await movieService.listMovies()
      // 2. Respond with list of movies
      res.status(200).send({
        data: movies
      })
    } catch (err) {
      // 3. If error, send to the error handler
      next(err)
    }
  })

// POST /movies/
router.route('/')
  .post(async (req, res, next) => {
    // 1. Get data from request body
    // Format of the request for this destructuring would look like:
    /*
      {
        "movieData": {
          "name": "Moby Dick",
          "author": "Herman Melville",
          "summary": "Really good movie. It's about a lot of stuff"
        }
      }
    */
    // Play around with the destructuring if you would like the request to be sent in a different way
    const {  movieData } = req.body
    try {
      // 2. Create movie from data
      const movie = await movieService.createMovie(movieData)
      // 3. Respond with created movie
      res.status(200).send({
        data: [movie]
      })
    } catch (err) {
        console.error(errZ)
      // 4. If error, send to the error handler
      next(err)
    }
  })

exports.router = router
