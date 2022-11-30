import React from 'react';
import '../styles/slider.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios'
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import Genres from './Genres';
import RatingStars from './RatingStars';


function Slider() {

  const [upComingMovies, setUpComingMovies] = useState([])
  const [index, setIndex] = useState(0)
  const apiKey = process.env.REACT_APP_API_KEY
  const imageBaseUrl = 'https://image.tmdb.org/t/p/original'

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`)
      .then(response => setUpComingMovies(response.data.results))
      .catch(err => console.log(err))
  }, [])

  const next = () => { index < (upComingMovies.length - 1) && index >= 0 ? setIndex(index + 1) : setIndex(0) }
  const previous = () => { index > 0 && index <= (upComingMovies.length - 1) ? setIndex(index - 1) : setIndex(upComingMovies.length - 1) }

  return (
    <div className='slider-component' style={{ backgroundImage: `url(${imageBaseUrl + upComingMovies[index]?.backdrop_path})` }}>
      <div className='slider-overlay'></div>
      <MdOutlineKeyboardArrowRight className='right-arrow' onClick={() => next()} />
      <MdOutlineKeyboardArrowLeft className='left-arrow' onClick={() => previous()} />
      <div className='slider-info'>
        <h1>{upComingMovies[index]?.title}</h1>
        <p>{upComingMovies[index]?.overview.length > 130 ? `${upComingMovies[index]?.overview.substring(0, 130)}...` : upComingMovies[index]?.overview}</p>
        <div className='genres-container'>
          <Genres
            currentMovie={upComingMovies[index]}
          />
        </div>
        <p>Release Date: {upComingMovies[index]?.release_date}</p>
        <div className='stars-container'></div>
        <div>
          <RatingStars
            currentRating={upComingMovies[index]?.vote_average}
          />
        </div>
        <Link to={'/'} className='link'>See Details</Link>
      </div>
    </div>
  )
}

export default Slider