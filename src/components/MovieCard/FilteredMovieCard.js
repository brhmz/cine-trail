import React, { useState } from 'react'
import "./moviecard.css"
import { useNavigate } from 'react-router';

function FilteredMovieCard({ movie }) {

  const imageBaseUrl = 'https://image.tmdb.org/t/p/original'

  let navigate = useNavigate()

  return (
    <div onClick={() => { navigate(`/moviedetails/${movie?.id}`) }} className='filtered-movie-card'>
      <img className='filtered-movie-image' src={imageBaseUrl + movie?.backdrop_path} />
      <p className='filtered-movie-title'>{movie?.title}</p>
    </div>
  )
}

export default FilteredMovieCard