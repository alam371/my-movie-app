'use strict'

const mongoose = require('mongoose')
const { Schema } = mongoose

// Map to fields in the DB
const movieSchema = exports.schema = new Schema({
  id: String,
  title: String,
  director: String,
  plot: String,
  date: Number,
  hidden: Boolean
})

// const actorSchema = exports.schema = new Schema({
//   actors: String
// })

const Movie = exports.model = mongoose.model('Movie', movieSchema)
// const Actor  = exports.model = mongoose.model('Actor', actorSchema)

