import React from 'react'
import "../styles/filteredmovies.css"

function FilteredMovieCard({movie}) {

  const imageBaseUrl = 'https://image.tmdb.org/t/p/original'


  return (
    <div className='filtered-movie-card'>
      <img className='filtered-movie-image' src={imageBaseUrl+movie.backdrop_path}/>
      <p className='filtered-movie-title'>{movie.title}</p>
    </div>
  )
}

export default FilteredMovieCard