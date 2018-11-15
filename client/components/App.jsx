import React from 'react'
import { Fragment } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import MovieList from './MovieList'
import MovieShow from './MovieShow'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Router>
        <Fragment>
          <h1>Latest and greatest movies</h1>
          <h2>A tool for the future</h2>
          <Route exact path='/' component={MovieList} />
          <Route exact path='/movies' component={MovieList} />
          <Route exact path='/movies/:id' component={MovieShow} />
        </Fragment>

      </Router>

    )
  }
}

export default App

