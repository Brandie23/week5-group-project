import React from 'react'
import {Link} from 'react-router-dom'
import { getMovies } from '../api-client'

class MovieList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            error: null,
            movies: []
        }
        this.listMovies = this.listMovies.bind(this)
    }

    componentDidMount(){
        this.listMovies()

    }

    listMovies() {
        getMovies()
            .then(movies => {
                // console.log("movies", movies)
                this.setState({
                    movies: movies
                })

            })
    }

    render() {

        return (
            <div className="grid movie-list">
                <h3>hello MovieList</h3>
                <ul>
                    {this.state.movies.map((movie, i) =>{
                       return <li key={i}><Link to = {`/movies/${movie.id}`}> {movie.title}</Link></li>
                    })}
                </ul>
            </div>
        )
    }
}





export default MovieList