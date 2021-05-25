const bcrypt = require('bcrypt')

const express = require('express')
const passport = require('passport')
const router = express.Router()

const db = require('../db/users')

router.post('/login', (req, res, next) => {
  console.log('hitting login route', req.body.username)
  passport.authenticate('local', (err, user, info) => {
    if (err) throw err
    if (!user) return res.send('No user available')
    else {
      console.log('Login ', user)
      req.logIn(user, err => {
        console.log('loginseption', req.user)
        if (err) throw err
        res.send(req.user)
        // res.send('helllllooo')
      })
    }
  })(req, res, next)
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
      return bool
        ? res.json('user exists')
        : db.addUser(req.body.username, hash)
    })
    .catch(err => console.log(err))
})

router.get('/user', (req, res) => {
  return res.end(req.user)
})

router.get('/logout', (req, res) => {
  console.log('starting logging out')
  req.logOut()
  res.redirect('/')
  console.log('logout stuff done')
})

module.exports = router
