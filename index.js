let express = require('express')
let server = express()
let bp = require('body-parser')
let port = 3000
let cors = require('cors')

server.use(cors())

require('./server-assets/db/mlab-config')

server.use(bp.json())
server.use(bp.urlencoded({
  extended: true
}))

let carRoutes = require('./server-assets/routes/car-routes')
let jobRoutes = require('./server-assets/routes/job-routes')
let houseRoutes = require('./server-assets/routes/house-routes')

server.use('/api/cars', carRoutes)
server.use('/api/jobs', jobRoutes)
server.use('/api/houses', houseRoutes)

server.listen(port, () => {
  console.log('Running on port:', port)
})