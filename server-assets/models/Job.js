let mongoose = require('mongoose')
let Schema = mongoose.Schema

let schema = new Schema({
  company: {
    type: String,
    required: true
  },
  jobTitle: {
    type: String,
    required: true
  },
  hours: {
    type: String,
    required: true
  },
  rate: {
    type: String,
    required: true
  },
  discription: {
    type: String,
    default: "No description"
  }
})

module.exports = mongoose.model('Job', schema)