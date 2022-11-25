import React from 'react';
import  '../styles/slider.css';
import {Link} from 'react-router-dom';

function Slider({movie}) {




  const imageBaseUrl = 'https://image.tmdb.org/t/p/original'

  // console.log(upComingMovies)


  return (
    <div className='slider-component'>
    <img className='slider-image' src={imageBaseUrl+movie.backdrop_path}  />
      
  
        
    </div>
  )
}

export default Slider