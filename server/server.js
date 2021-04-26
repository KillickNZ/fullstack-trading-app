const express = require('express')
const path = require('path')

const ExternalApiRoutes = require('./routes/ExternalApiRoutes')
const dbRoutes = require('./routes/dbRoutes')
const avRoutes = require('./routes/alphaVantageRoutes')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/ExternalApiRoutes', ExternalApiRoutes)
server.use('/api/v1/dbRoutes', dbRoutes)
server.use('/api/v1/alphaVantageRoutes', avRoutes)

module.exports = server
