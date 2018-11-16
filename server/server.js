const path = require('path')
const express = require('express')

const server = express()
const movieRoutes = require('./routes/movies')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use('/api/v1/movies', movieRoutes)

module.exports = server
