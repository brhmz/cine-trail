import React from 'react';
import RatingStars from './RatingStars';
import '../styles/popularmoviescard.css'


function PopularMovieCard({popularMovie}) {

  const apiKey = process.env.REACT_APP_API_KEY
  const imageBaseUrl = 'https://image.tmdb.org/t/p/original'


  return (
    <div className='popular-movie-card' style={{ backgroundImage: `url(${imageBaseUrl + popularMovie?.poster_path})` }}>
        <div className='polular-movie-card-info'>
          <div className='popular-movie-rating'>
            <RatingStars
                currentRating={popularMovie?.vote_average}
              />
          </div>
          <div className='popular-movie-detail'>
            <p>{popularMovie.title}</p>
            <p>Rating: {Math.floor(popularMovie.vote_average/2)}</p>
          </div>
        </div>
    </div>
  )
}

export default PopularMovieCard