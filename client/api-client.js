import request from 'superagent'

// const baseURL= 'http://localhost:3000/api/v1'
const baseURL= '/api/v1'

export function getMovies () {
    // return new Promise(( resolve, reject) => {
    //     // if good
    //     resolve("hello from get movies")
    //     // if bad
    //     // reject("fail")
    // })

    return request.get(baseURL + '/movies/')
    .then(res => res.body)
    .then(movies => {
        console.log("movies from api", movies)
        return movies
    })
}

export function addMovie (movie, callback) {
    console.log(movie)
    return request.post(baseURL + '/movies/').send(movie)
    .catch(err => {
        console.log(err)
    })
}