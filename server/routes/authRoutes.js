const express = require('express')
const router = express.Router()

const db = require('../db/users')

router.post('/login', (req, res) => {
    console.log(req.body)
    return 
    
    
    // db.getUser(req.params.username, req.params.password)
    // .then(user => {
    //   return num
    // })
    // .catch(err => {
    //   console.log(err.message)
    //   return res.status(500).send('500 error :(')
    // })
})

router.post('/regester', (req, res) => {
    console.log(req.body)
    return 
    
    

})

router.get('/user', (req, res) => {
    console.log(req.body)
    return 
    
})

module.exports = router
