import React from 'react';
import  '../styles/slider.css';
import {Link} from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios'
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

function Slider({movie}) {

  const [upComingMovies, setUpComingMovies] = useState([])
  const [i, setI] = useState(0)

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=4fb47f1613fc6ff82ac98a531050f625')
      .then(response => setUpComingMovies(response.data.results))
      .catch(err => console.log(err))
  })

  const imageBaseUrl = 'https://image.tmdb.org/t/p/original'
  const upComingMoviesIds = upComingMovies.map(item=>item.id)

const next = () => { i<(upComingMovies.length-1) && i>=0 ? setI(i+1) : setI(0)}
const previous = () => { i>0 && i<=(upComingMovies.length-1) ? setI(i-1) : setI(upComingMovies.length-1)}




  return (
    <div className='slider-component' style={{ backgroundImage:`url(${imageBaseUrl+upComingMovies[i]?.backdrop_path})`}}>
    <div className='slider-overlay'></div>
    <MdOutlineKeyboardArrowRight className='right-arrow' onClick={()=>next()}/>
    <MdOutlineKeyboardArrowLeft className='left-arrow' onClick={()=>previous()}/>
    <div className='slider-info'>
      <h1>{upComingMovies[i]?.title}</h1>
      <p>{upComingMovies[i]?.overview.length > 130 ? `${upComingMovies[i]?.overview.substring(0, 130)}...` : upComingMovies[i]?.overview}</p>
      <p>Release Date: {upComingMovies[i]?.release_date}</p>
      <div className='stars-container'></div>
      <Link to={'/'} className='link'>See Details</Link>


    </div>
    
      
  
        
    </div>
  )
}

export default Slider