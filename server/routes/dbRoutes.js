const express = require('express')
const router = express.Router()

const db = require('../db/connection')

router.get('/:username/:password', (req, res) => {
  console.log('REQ.body ', req.params)
  return db.getUser(req.params.username, req.params.password)
    .then(user => {
      return res.json(user)
    })
    .catch(err => {
      console.log(err.message)
      return res.status(500).send('500 error :(')
    })
})

module.exports = router
