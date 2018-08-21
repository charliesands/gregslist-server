let mongoose = require('mongoose')
let Schema = mongoose.Schema

let schema = new Schema({
  bedrooms: {
    type: Number,
    required: true
  },
  bathrooms: {
    type: Number,
    required: true
  },
  levels: {
    type: Number,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  imgUrl: {
    type: String,
    default: "http://unsplash.it/200x200"
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    default: "No description"
  }
})

module.exports = mongoose.model('House', schema)