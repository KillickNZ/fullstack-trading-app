const bcrypt = require('bcrypt')

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
  db.userExists(req.body.username)
    .then(async (bool) => {
      const salt = await bcrypt.genSalt(10)
      const hash = await bcrypt.hash(req.body.password, salt)
      const data = { bool: bool, hash: hash }
      return data
    })
    .then(({ bool, hash }) => {
      console.log('in second then, bool, hash:', bool, hash)
      return bool
        ? res.json('user exists')
        : db.addUser(req.body.username, hash)
    })
    .catch(err => console.log(err))
})

router.get('/user', (req, res) => {
  return console.log(req.body)
})

module.exports = router
