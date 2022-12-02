import React, { useContext } from 'react';
import Slider from '../components/Slider';
import { ThemeContext } from '../contexts/ThemeContext';
import '../styles/homepage.css'
import TopRatedMovies from '../components/TopRatedMovies';
import PopularMovies from '../components/PopularMovies';

function HomePage() {

  const {darkMode} = useContext(ThemeContext)


  return (
    <div className={darkMode===true ? 'home-page home-page-dark' : 'home-page'}>
      <div className='slider-container'>
       <Slider /> 
      </div>
      <div className={darkMode===true ? 'home-page-body home-page-body-dark' : 'home-page-body'}>
        <div className='popular-movies-container'>
          <PopularMovies /> 
          <TopRatedMovies />
        </div>
      </div>
      
    </div>
  )
}

export default HomePage