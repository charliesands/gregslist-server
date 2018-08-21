const router = require('express').Router()
let House = require('../models/House')

router.get('/:id?', (req, res, next) => {
  if (!req.params.id) {
    House.find({})
      .then(houses => {
        return res.send(houses)
      })
  }
  House.findById(req.params.id)
    .then(house => {
      res.send(house)
    })
    .catch(err => {
      console.log(err)
    })
})

router.post('/', (req, res, next) => {
  let newHouse = req.body
  console.log(newHouse)
  House.create(newHouse)
    .then(house => {
      console.log(house)
      res.send(house)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

router.put('/:id', (req, res, next) => {
  House.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  })
    .then(newHouse => {
      res.send('Deleted')
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

module.exports = router