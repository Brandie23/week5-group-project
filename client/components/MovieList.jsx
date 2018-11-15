import React from 'react'
import { getMovies } from '../api-client'

class MovieList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            error: null,
            movies: ["no movies"]
        }
        this.listMovies = this.listMovies.bind(this)
    }

    componentDidMount(){
        this.listMovies()
    }

    listMovies() {
        getMovies()
            .then(movies => {
                console.log("movies", movies)
                this.setState({
                    movies: movies
                })

            })
    }

    render() {

        return (
            <div>
                <h3>hello MovieList</h3>
                <p>
                    {this.state.movies}
                </p>
            </div>
        )
    }
}





export default MovieList