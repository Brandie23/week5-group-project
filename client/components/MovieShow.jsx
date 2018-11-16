import React from 'react'
import {Link} from 'react-router-dom'
import { getMovies } from '../api-client'

class MovieShow extends React.Component {
    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         error: null,
    //         movies: []
    //     }
    //     this.listMovies = this.listMovies.bind(this)
    // }

    // componentDidMount(){
    //     this.listMovies()

    // }

    // showMovie(id) {
    //     getMovie(id)
    //         .then(movies => {
    //             console.log("movies", movies)
    //             this.setState({
    //                 movies: movies
    //             })

    //         })
    // }

    

    render() {

        return (
            <div>
                <h3>hello Movie {this.props.match.params.id} </h3>
            </div>
        )
    }
}





export default MovieShow