// Write your code here
import {Component} from 'react'

import MovieSlider from '../MoviesSlider'

import './index.css'

class PrimeVideo extends Component {
  renderActionMovies = () => {
    const {moviesList} = this.props

    const actionMovies = moviesList.filter(
      eachMovie => eachMovie.categoryId === 'ACTION',
    )

    return actionMovies
  }

  renderComedyMovies = () => {
    const {moviesList} = this.props

    const comedyMovies = moviesList.filter(
      eachMovie => eachMovie.categoryId === 'COMEDY',
    )

    return comedyMovies
  }

  render() {
    const actionMovies = this.renderActionMovies()

    const comedyMovies = this.renderComedyMovies()

    console.log(comedyMovies)

    return (
      <div className="bg-container">
        <div className="top-section">
          <img
            src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
            alt="prime video"
            className="prime-image"
          />
        </div>
        <div className="bottom-section">
          <h1 className="action-movies-heading">Action Movies</h1>
          <div className="action-movies-section">
            <MovieSlider movieDetails={actionMovies} />
          </div>
          <h1 className="action-movies-heading">Comedy Movies</h1>
          <div className="action-movies-section">
            <MovieSlider movieDetails={comedyMovies} />
          </div>
        </div>
      </div>
    )
  }
}

export default PrimeVideo
