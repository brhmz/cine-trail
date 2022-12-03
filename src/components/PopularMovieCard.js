import React from 'react';
import RatingStars from './RatingStars';
import '../styles/popularmoviescard.css'


function PopularMovieCard({movie}) {

  const apiKey = process.env.REACT_APP_API_KEY
  const imageBaseUrl = 'https://image.tmdb.org/t/p/original'


  return (
    <div className='popular-movie-card' style={{ backgroundImage: `url(${imageBaseUrl + movie?.poster_path})` }}>
        <div className='popular-movie-rating'>

        </div>
        <div className='popular-movie-info'>
          <p>{movie.title}</p>
        </div>
    </div>
  )
}

export default PopularMovieCard