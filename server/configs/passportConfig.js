const bcrypt = require('bcrypt')
const usersDB = require('../db/users')

const LocalStrategy = require('passport-local').Strategy

module.exports = (passport) => {
  console.log('Hitting passport strategy')
  passport.use(
    new LocalStrategy(async (username, password, done) => {
      const user = await usersDB.getUser(username)
      await bcrypt.compare(password, user[0].hash)
        .then((result) => {
          if (result === true) {
            console.log('correct password')
            return done(null, user[0])
          } else {
            console.log('password not true')
            return done(null, false)
          }
        })
    })
  )
  passport.serializeUser((user, cb) => {
    cb(null, user.id)
  })
  passport.deserializeUser((id, cb) => {
    usersDB.getUserByID(id)
      .then((user) => {
        return cb(null, user)
      })
      .catch((err) => { throw err })
  })
}
