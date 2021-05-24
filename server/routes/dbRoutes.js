const express = require('express')
const passport = require('passport')
const router = express.Router()

const db = require('../db/users')

// done
router.get('/watchlist/:username', (req, res) => {
  console.log('Routes - Getting users stock watchlist', req.params.username)
  return db
    .getWatchlist(req.params.username)
    .then((wl) => {
      console.log('USER watchlist', wl)
      return res.json(wl)
    })
    .catch((err) => {
      console.log(err.message)
      return res.status(500).send('500 error :(')
    })
})

router.post('/watchlist', (req, res) => {
  console.log('updating watchlist:', req.body.username, req.body.watchlist)
  return db
    .updateWatchlist(req.body.username, req.body.watchlist)
    .then(() => {
      return db.getWatchlist(req.body.username)
    })
    .then((wl) => {
      console.log('USER watchlist', wl)
      return res.json(wl)
    })
    .catch((err) => {
      console.log(err.message)
      return res.status(500).send('500 error :(')
    })
})

// done
router.get('/', (req, res) => {
  console.log('Routes - Getting all users')
  return db
    .getUsers()
    .then((user) => {
      console.log('USER', user)
      return res.json(user)
    })
    .catch((err) => {
      console.log(err.message)
      return res.status(500).send('500 error :(')
    })
})

module.exports = router
