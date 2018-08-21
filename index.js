let express = require('express')
let server = express()
let port = 3000
// let cors = require('cors')

// server.use(cors())

require('./server-assets/db/mlab-config')

let carRoutes = require('./server-assets/routes/car-routes')


server.use('api/car', carRoutes)

server.listen(port, () => {
  console.log('Running on port:', port)
})