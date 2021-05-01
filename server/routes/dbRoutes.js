const express = require('express')
const router = express.Router()

const db = require('../db/users')

router.get('/:username/:password', (req, res) => {
  return db.getUser(req.params.username, req.params.password)
    .then(user => {
      console.log('USER', user)
      return res.json(user[0].username)
    })
    .catch(err => {
      console.log(err.message)
      return res.status(500).send('500 error :(')
    })
})

module.exports = router
