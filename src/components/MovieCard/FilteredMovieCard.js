import React, { useState } from 'react'
import "./moviecard.css"
import { useNavigate } from 'react-router';

function FilteredMovieCard({ movie, setQuery }) {

  const imageBaseUrl = 'https://image.tmdb.org/t/p/original'

  let navigate = useNavigate()

  return (
    <div onClick={() => { {navigate(`/moviedetails/${movie?.id}`)} {setQuery('')} } } className='filtered-movie-card'>
      <img className='filtered-movie-image' src={imageBaseUrl + movie?.backdrop_path} alt={movie?.title}/>
      <p className='filtered-movie-title'>{movie?.title}</p>
    </div>
  )
}

export default FilteredMovieCard