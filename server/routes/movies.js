const express = require ('express')
const router = express.Router()

const db = require('../db/movies')

router.get('/', (req, res) =>{
    db.getMovies()
    .then(movies =>{
        // console.log(movies)
        res.json(movies)
        // res.json(movies)
    })
})

router.post('/', function (req, res) {
    const movie = {
      ...req.body,
    }
    console.log(req.body)
    db.saveMovie(movie).then(() => {
        res.sendStatus(200)
    })
  })
  
router.get('/:id', (req, res) =>{
    const movieId = req.params.id
    db.getMovie(movieId)
    .then(movie =>{
        // console.log("movie = ", movie)
        res.json(movie)
    
    })

    
})



module.exports = router