const router = require('express').Router()
let Car = require('../models/Car')

router.get('/:id?', (req, res, next) => {
  if (!req.params.id) {
    Car.find({})
      .then(cars => {
        return res.send(cars)
      })
  }
  Car.findById(req.params.id)
    .then(car => {
      res.send(car)
    })
    .catch(err => {
      console.log(err)
    })
})

router.post('/', (req, res, next) => {
  let newCar = req.body
  console.log(newCar)
  Car.create(newCar)
    .then(car => {
      console.log(car)
      res.send(car)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

router.put('/:id', (req, res, next) => {
  Car.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  })
    .then(newCar => {
      res.send('Deleted')
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

module.exports = router