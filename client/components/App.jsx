import React from 'react'
import { Fragment } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import MovieList from './MovieList'
import MovieShow from './MovieShow'
import Nav from './Nav'
import Header from './Header'
import Footer from './Footer'
import AddMovie from './AddMovie';
import { getMovies } from '../api-client'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      movies: []
    }

    this.listMovies = this.listMovies.bind(this)
  }

  componentDidMount(){
    this.listMovies()
  }

  listMovies() {
      return getMovies()
          .then(movies => {
              // console.log("movies", movies)
              this.setState({
                  movies: movies
              })

          })
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <h1>Latest and greatest movies</h1>
          <h2>A tool for the future</h2>
          <div className="grid main">
           <MovieList movies={this.state.movies}/>
           {/* <Route exact path='/' component={MovieList} /> */}
          {/* <Route path='/movies' component={MovieList} /> */}

          <Route path='/movies/:id' component={MovieShow} />
          <Route exact path='/addMovie' render={props => {
            return <AddMovie listMovies={this.listMovies} {...props}/>
          }} />
          </div>
          <Footer />
        </div>

      </Router>

    )
  }
}

export default App

