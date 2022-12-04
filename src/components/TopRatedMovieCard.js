import React from 'react'
import '../styles/topratedmovies.css'

function TopRatedMovieCard({topRatedMovie}) {

  const apiKey = process.env.REACT_APP_API_KEY
  const imageBaseUrl = 'https://image.tmdb.org/t/p/original'

 

  return (
    <div className='top-rated-movie-card'>
      <img src={imageBaseUrl+topRatedMovie.backdrop_path}/>
      <p>{topRatedMovie.title}</p>
    </div>
  )
}

export default TopRatedMovieCard