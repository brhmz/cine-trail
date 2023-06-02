import React from 'react'
import "./moviecard.css"
import { useNavigate } from 'react-router';
import poster from '../../assests/movie-theatre.webp'

function FilteredMovieCard({ movie, setQuery, setInputValue }) {

  const imageBaseUrl = 'https://image.tmdb.org/t/p/w500'

  let navigate = useNavigate()

  const selectAMovie = (value) => {
    navigate(`/moviedetails/${movie?.id}`)
    setQuery('')
    setInputValue('')
  }

  return (
    <div onClick={() => { selectAMovie() }
    } className='filtered-movie-card'>
      <img className='filtered-movie-image'
        src={
          movie?.backdrop_path === null
            ? poster
            : imageBaseUrl + movie?.backdrop_path
        }
        alt={movie?.title} />
      <p className='filtered-movie-title'>{movie?.title}</p>
    </div>
  )
}

export default FilteredMovieCard