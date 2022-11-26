import React, { useContext } from 'react';
import Slider from '../components/Slider';
import { ThemeContext } from '../contexts/ThemeContext';
import '../styles/homepage.css'


function HomePage() {

  const {darkMode, setDarkMode} = useContext(ThemeContext)


  return (
    <div className={darkMode===true ? 'home-page home-page-dark' : 'home-page'}>
      <div className='slider-container'>
       <Slider /> 
      </div>
      
    </div>
  )
}

export default HomePage