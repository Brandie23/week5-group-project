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
        <Fragment>
          <Nav />
          <h1>Latest and greatest movies</h1>
          <h2>A tool for the future</h2>
          <Route exact path='/' component={MovieList} />
          <Route exact path='/movies' component={MovieList} />
          <Route exact path='/movies/:id' component={MovieShow} />
          <Route exact path='/addMovie' component={AddMovie} />
          <Footer />
        </Fragment>

      </Router>

    )
  }
}

export default App

