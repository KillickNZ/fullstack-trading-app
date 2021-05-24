const express = require('express')
const path = require('path')
const server = express()

// ===== Auth ===== //
const cors = require('cors')
const passport = require('passport')
// const LocalStrategy = require('passport-local').Strategy
const cookieParser = require('cookie-parser')
// const bcrypt = require('bcrypt')
const session = require('express-session')
// const bodyParser = require('body-parser')

// ===== Routs ===== //
const ExternalApiRoutes = require('./routes/ExternalApiRoutes')
const dbRoutes = require('./routes/dbRoutes')
const avRoutes = require('./routes/alphaVantageRoutes')
const authRoutes = require('./routes/authRoutes')

// ===== Middleware ===== //
server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))
// server.use(bodyParser.json())
// server.use(bodyParser.urlencoded({ extended: true }))
server.use(
  cors({
    origin: 'http://localhost:300',
    credentials: true
  })
)
server.use(
  session({
    secret: 'secretcode',
    resave: true,
    saveUninitialized: true
  })
)

server.use(cookieParser('secretcode'))
server.use(passport.initialize())
server.use(passport.session())
require('./configs/passportConfig')(passport)

// ===== Routes ===== //
server.use('/api/v1/ExternalApiRoutes', ExternalApiRoutes)
server.use('/api/v1/dbRoutes', dbRoutes)
server.use('/api/v1/alphaVantageRoutes', avRoutes)
server.use('/api/v1/authRoutes', authRoutes)

module.exports = server
