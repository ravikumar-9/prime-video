// Write your code here
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

import './index.css'

const MovieSlider = props => {
  console.log(props)

  const {movieDetails} = props

  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {movieDetails.map(eachMovie => (
          <MovieItem details={eachMovie} key={eachMovie.id} />
        ))}
      </Slider>
    </div>
  )
}

export default MovieSlider
