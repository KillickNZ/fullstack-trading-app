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

router.get('/', (req, res) => {
  console.log("Routes - Getting all users")
  return db.getUsers()
    .then(user => {
      console.log('USER', user)
      return res.json(user)
    })
    .catch(err => {
      console.log(err.message)
      return res.status(500).send('500 error :(')
    })
})

router.post('/:username/:password', (req, res) => {
  console.log("Routes - Adding user")
  return db.addUser(req.params.username, req.params.password)
    .then(user => {
      console.log('USER added - return:', user)
      return res.json(user)
    })
    .catch(err => {
      console.log(err.message)
      return res.status(500).send('500 error :(')
    })
})

router.delete('/:username/:password', (req, res) => {
  console.log("Routes - Deleting user")
  return db.deleteUser(req.params.username, req.params.password)
    .then(user => {
      console.log('USER deleted: number of effected rows should be 1:', user)
      return res.redirect('/')
      // return res.json()
    })
    .catch(err => {
      console.log(err.message)
      return res.status(500).send('500 error :(')
    })
})

router.get('/:user', (req, res) => {
  console.log("Routes - Getting users stock watchlist")
  return db.getWatchlist(req.params.user)
    .then(user => {
      console.log('USER watchlist', user)
      return res.json(user)
    })
    .catch(err => {
      console.log(err.message)
      return res.status(500).send('500 error :(')
    })
})

router.patch('/:user/:watchlist', (req, res) => {
  console.log("Routes - Adding users stock watchlist")
  return db.updateWatchlist(req.params.user, req.params.watchlist)
    .then(user => {
      console.log('USER watchlist updated:', user)
      return res.json(user)
    })
    .catch(err => {
      console.log(err.message)
      return res.status(500).send('500 error :(')
    })
})


module.exports = router
