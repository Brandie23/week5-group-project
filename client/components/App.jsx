import React from 'react'
import { Fragment } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

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
        </Fragment>

      </Router>

    )
  }
}

export default App

