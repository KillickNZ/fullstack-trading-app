const express = require('express')
// const passport = require('passport')
const router = express.Router()

const db = require('../db/users')

// done
router.get('/watch/:username', require('connect-ensure-login').ensureLoggedIn(), (req, res) => {
  console.log('Routes - Getting users stock watchlist', req.params.username)
  return db
    .getWatchlist(req.params.username)
    .then((wl) => {
      console.log('USER watchlist', wl[0])
      return res.send(wl[0])
    })
    .catch((err) => {
      console.log(err.message)
      return res.status(500).send('500 error :(')
    })
})

router.post('/watchlist', require('connect-ensure-login').ensureLoggedIn(), (req, res, next) => {
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
    })(req, res, next)
})

// done
router.get('/', (req, res, next) => {
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
    })(req, res, next)
})

module.exports = router
