import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'
import  '../styles/header.css'
import { BsSun } from 'react-icons/bs';
import { BsFillMoonFill } from 'react-icons/bs';
import { ThemeContext } from '../contexts/ThemeContext';

function Header() {

  const {darkMode, setDarkMode} = useContext(ThemeContext)
  const apiKey = process.env.REACT_APP_API_KEY
  const [filteredMovies, setFilteredMovies] = useState([]);

  const handleTheme=(theme)=>{
    setDarkMode(theme)
    localStorage.setItem('darkMode', theme)
  }

  // const handleFilter = (e) => {
  //   axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${input}&page=1`)
  //     .then(response => setFilteredMovies(response.results.filter(item => item.title.toLowerCase().includes(e.target.value.toLowerCase()))))
  //     .catch(err => console.log(err))
  // }

  console.log(filteredMovies)

  return (
    <div className={darkMode ? 'header-container header-container-dark' : 'header-container'}>
      <div className='logo-container'>
        <Link className='logo' to='/'>
          <p>CineTrail</p>
        </Link>
      </div>
      <div className='search-container'>
        <input className={darkMode ? 'search-input search-input-dark' : 'search-input'} placeholder='Search any movie'/>
      </div>
      <div className='header-buttons-container'>
        <div className='theme-buttons-container'>
          <div className={darkMode ? 'theme-button' : 'theme-button active-theme'}><BsSun onClick={()=>handleTheme(false)} color='white'/></div>
          <div className={darkMode ? 'theme-button active-theme' : 'theme-button'}><BsFillMoonFill onClick={()=>handleTheme(true)} color='white'/></div>
        </div>
        <div>
          <button className='create-account'>Create Account</button>
        </div>
      </div>
    </div>
  )
}

export default Header