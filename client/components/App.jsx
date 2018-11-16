import React from 'react'
import { Fragment } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import MovieList from './MovieList'
import MovieShow from './MovieShow'
import Nav from './Nav'
import Header from './Header'
import Footer from './Footer'
import AddMovie from './AddMovie';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <h1>Latest and greatest movies</h1>
          <h2>A tool for the future</h2>
          <div className="grid main">
           <MovieList />
           {/* <Route exact path='/' component={MovieList} /> */}
          {/* <Route path='/movies' component={MovieList} /> */}

          <Route path='/movies/:id' component={MovieShow} />
          <Route exact path='/addMovie' component={AddMovie} />
          </div>
          <Footer />
        </div>

      </Router>

    )
  }
}

export default App

