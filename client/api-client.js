import request from 'superagent'

const baseURL= 'http://localhost:3000/api/v1'

export function getMovies () {
    return new Promise(( resolve, reject) => {
        // if good
        resolve("hello from get movies")
        // if bad
        // reject("fail")
    })
}