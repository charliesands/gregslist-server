let mongoose = require('mongoose')
const connectionString = 'mongodb://user01:user01@ds014388.mlab.com:14388/gregslist'
let connection = mongoose.connection


mongoose.connect(connectionString, {
  useNewUrlParser: true
})

connection.on('error', err => {
  console.log("DATABASE ERROR: ", err)
})

connection.once('open', () => {
  console.log("Connected to Database")
})