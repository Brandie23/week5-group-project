import React from 'react'
import {addMovie} from '../api-client'

const defaultState = {
  title: '',
  category: '',
  director: '',
  release_date: ''
}

export default class AddMovie extends React.Component {
  constructor (props) {
    super(props)
    this.state = props.movie ? {...props.movie} : defaultState
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillReceiveProps (nextProps, nextState) {
    if (this.state !== nextProps.movie) {
      this.setState({...nextProps.movie})
    }
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit (e) {
    this.setState({...defaultState})
    const movie = this.state
    this.save(movie)
    e.preventDefault()
  }

  save(movie) {
    addMovie(movie).then(() => {
      this.props.listMovies()
      .then(() => {
        this.props.history.push('/')   //redirect
      })
    })
  }

  render () {
    return (
      <div className='add-movie-form'>
        <form>
          <p><input placeholder='Title' name='title'
            onChange={this.handleChange}
            value={this.state.title}
          /></p>
          <p><input placeholder='Category' name='category'
            onChange={this.handleChange}
            value={this.state.category}
          /></p>
          <p><input placeholder='Director' name='director'
            onChange={this.handleChange}
            value={this.state.director}
          /></p>
          <p><input placeholder='Release date' name='release_date'
            onChange={this.handleChange}
            value={this.state.release_date}
          /></p>
          <button onClick={this.handleSubmit}>Save movie</button> {' '}
          <a href='#' onClick={this.props.cancel}>Cancel</a>
        </form>
      </div>
    )
  }
}