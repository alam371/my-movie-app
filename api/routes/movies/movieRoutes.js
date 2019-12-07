'use strict'

const express = require('express')
const movieRouter = express.Router()

const movieService = require('./movieService')

// GET /movies/
movieRouter.route('/')
  .get(async (req, res) => {
      console.log('this is working')
    try {
      // 1. Fetch all movies from database
      const movies = await movieService.listMovies()
      // 2. Respond with list of movies
      res.status(200).json({
        data: movies
      })
    } catch (err) {
      // 3. If error, send to the error handler
        console.log(err);
        res.status(500).json({ error: 'internal server error' });
    }
  })
    .post(async (req, res) => {
    const { title, director, plot, comment } = req.body;
    if (!title || title === ""){
        res.status(400).json({ error: 'title must be provided'});
        return
    }
      try {
          const newMovie = await movieService.createMovie({
              title,
              director,
              plot,
              comment,
          });
          res.status(200).json({ id: newMovie.id })

      } catch (err){
          console.error(err);
          res.status(500).json({ error: 'internal server error' });
      }

});
exports.router = movieRouter;
