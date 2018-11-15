const express = require ('express')
const router = express.Router()

const db = require('../db/movies')

router.get('/', (req, res) =>{
    db.getMovies()
    .then(movies =>{
        console.log(movies)
        res.json(movies)
        // res.json(movies)
    })
})
router.get('/:id', (req, res) =>{
    const movieId = req.params.id
    db.getMovie(movieId)
    .then(movie =>{
        console.log("movie = ", movie)
        res.json(movie)
    
    })

    
})



module.exports = router