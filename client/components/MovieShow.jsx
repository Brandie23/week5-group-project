import React from 'react'
import { Link } from 'react-router-dom'
import { getMovies, getMovie } from '../api-client'


class MovieShow extends React.Component {
    constructor(props) {
        super(props)
       
        this.state = {
            id: this.props.match.params.id,
            error: null,
            movie: {
                title: "die hard",
                director: "christopher nolan"
            }

        }
        // this.listMovies = this.listMovies.bind(this)
    }

    componentDidMount(){
        this.showMovie(this.state.id)

    }

    showMovie(id) {
        getMovie(id)
            .then(movie => {
                console.log("movie", movie)
                this.setState({
                    movie: movie
                })

            })
    }



    render() {

        return (
            <div>
                <h3>{this.state.movie.title}</h3>
                <p>
                    Category: {this.state.movie.category}
                </p>
                <p>
                  Director: {this.state.movie.director}
                </p>
                <p>
                    Release Date: {this.state.movie.release_date}
                </p>

                <Link to ="/movies">Movies List</Link>

            </div>
        )
    }
}





export default MovieShow