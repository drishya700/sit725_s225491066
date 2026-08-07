const mongoose = require('mongoose');

// NOTE: Fields are deliberately different from the Prac 4 "Project" schema
// (title, image, link, description). Here we model a Book instead of a
// generic project card.
const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 2
  },
  author: {
    type: String,
    required: true,
    minlength: 2
  },
  genre: {
    type: String,
    required: true
  },
  coverImage: {
    type: String,
    required: true
  },
  yearPublished: {
    type: Number,
    required: true,
    min: 1000,
    max: 2100
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0
  },
  description: {
    type: String,
    required: true,
    maxlength: 500
  }
});

module.exports = mongoose.model('Book', BookSchema);
