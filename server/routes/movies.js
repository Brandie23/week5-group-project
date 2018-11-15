const express = require ('express')
const router = express.Router()

const db = require('../db/movies')

router.get('/', (req, res) =>{
    db.getMovies()
    .then(movies =>{
        console.log(movies)
        res.json({movies})
    })
})



module.exports = router