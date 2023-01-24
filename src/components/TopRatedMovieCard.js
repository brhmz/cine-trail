import React from 'react'
import '../styles/topratedmovies.css'
import { useNavigate } from 'react-router';

function TopRatedMovieCard({topRatedMovie}) {

  let navigate = useNavigate()

  const apiKey = process.env.REACT_APP_API_KEY
  const imageBaseUrl = 'https://image.tmdb.org/t/p/original'

 

  return (
    <div onClick={() => navigate(`/moviedetails/${topRatedMovie.id}`)} className='top-rated-movie-card'>
      <img src={imageBaseUrl+topRatedMovie.backdrop_path}/>
      <p>{topRatedMovie.title}</p>
    </div>
  )
}

export default TopRatedMovieCard