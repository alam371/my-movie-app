'use strict'

const mongoose = require('mongoose');
const { Schema } = mongoose;

// Map to fields in the DB
const movieSchema = new Schema({
  title: String,
  director: String,
  plot: String,
  comment: {
    type: String
  }
})

module.exports = mongoose.model('Movie', movieSchema)


