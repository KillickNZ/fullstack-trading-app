const express = require('express')
const router = express.Router()

const db = require('../db/users')

router.get('/login', (req, res) => {
  console.log('Hitting auth login', req.body)
  return db
    .getUser(req.body.username, req.body.password)
    .then((user) => {
      return user
    })
    .catch((err) => {
      console.log(err.message)
      return res.status(500).send('500 error :(')
    })
})

router.post('/register', (req, res) => {
  console.log('Hitting auth register', req.body)
  if (db.userExists(req.body.username)) {
    return res.json('user exists')
  } else {
    return db.addUser(req.body.username, req.body.password)
  }
})

router.get('/user', (req, res) => {
  return console.log(req.body)
})

module.exports = router
