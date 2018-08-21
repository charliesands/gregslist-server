const router = require('express').Router()
let Job = require('../models/Job')

router.get('/:id?', (req, res, next) => {
  if (!req.params.id) {
    Job.find({})
      .then(jobs => {
        return res.send(jobs)
      })
  }
  Job.findById(req.params.id)
    .then(job => {
      res.send(job)
    })
    .catch(err => {
      console.log(err)
    })
})

router.post('/', (req, res, next) => {
  let newJob = req.body
  console.log(newJob)
  Job.create(newJob)
    .then(job => {
      console.log(job)
      res.send(job)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

router.put('/:id', (req, res, next) => {
  Job.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  })
    .then(newJob => {
      res.send('Deleted')
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

module.exports = router