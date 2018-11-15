const path = require('path')
const express = require('express')

const server = express()
const movieRoutes = require('./routes/movies')

server.use('/api/v1/movies', movieRoutes)

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

module.exports = server
