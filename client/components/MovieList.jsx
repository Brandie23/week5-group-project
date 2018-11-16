import React from 'react'
import {Link} from 'react-router-dom'

class MovieList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            error: null,
        }
    }


    render() {

        return (
            <div className="grid movie-list">
                <h3>hello MovieList</h3>
                <ul>
                    {this.props.movies.map((movie, i) =>{
                       return <li key={i}><Link to = {`/movies/${movie.id}`}> {movie.title}</Link></li>
                    })}
                </ul>
            </div>
        )
    }
}





export default MovieList