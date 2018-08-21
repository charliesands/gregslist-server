let mongoose = require('mongoose')
let Schema = mongoose.Schema

let schema = new Schema({
  make: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  imgUrl: {
    type: String,
    default: "No image"
  },
  description: {
    type: String,
    default: "No description"
  }
})

module.exports = mongoose.model('Car', schema)