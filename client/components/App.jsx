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
        <div>
          <h1>Latest and greatest movies</h1>
          <div className="grid main">
           <MovieList />
          {/* <Route path='/movies' component={MovieList} /> */}

          <Route path='/movies/:id' component={MovieShow} />
          </div>
        </div>

      </Router>

    )
  }
}

export default App

