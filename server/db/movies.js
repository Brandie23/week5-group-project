const knex = require ('knex')
const config = require ('../../knexfile').development
const db = knex(config)

function getMovies() {
    return db('Movies'). select()
}




module.exports = {
    getMovies
}