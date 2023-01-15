import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/header.css'
import { BsSun } from 'react-icons/bs';
import { BsFillMoonFill } from 'react-icons/bs';
import { ThemeContext } from '../contexts/ThemeContext';
import FilteredMovieCard from './FilteredMovies';
import axios from 'axios';

function Header() {

  const { darkMode, setDarkMode } = useContext(ThemeContext)
  const apiKey = process.env.REACT_APP_API_KEY
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [query, setQuery] = useState("");




  const handleTheme = (theme) => {
    setDarkMode(theme)
    localStorage.setItem('darkMode', theme)
  }

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&page=1&include_adult=false`)
      .then(response => setFilteredMovies(response.results))
      .catch(err => console.log(err))
  }, [query])


  return (
    <div className={darkMode ? 'header-container header-container-dark' : 'header-container'}>
      <div className='logo-container'>
        <Link className='logo' to='/'>
          <p>CineTrail</p>
        </Link>
      </div>
      <div className='search-container'>
        <input id="search-input" 
        type="text"
        onChange={(e) => setQuery(e.target.value)} 
        className={darkMode ? 'search-input search-input-dark' : 'search-input'} 
        placeholder='Search any movie' />
      </div>
      <div>
        {
          filteredMovies.map((item, index) => {
            return <FilteredMovieCard
              country={item}
              key={index}
            />
          })
        }
      </div>
      <div className='header-buttons-container'>
        <div className='theme-buttons-container'>
          <div className={darkMode ? 'theme-button' : 'theme-button active-theme'}><BsSun onClick={() => handleTheme(false)} color='white' /></div>
          <div className={darkMode ? 'theme-button active-theme' : 'theme-button'}><BsFillMoonFill onClick={() => handleTheme(true)} color='white' /></div>
        </div>
        <div>
          <button className='create-account'>Create Account</button>
        </div>
      </div>
    </div>
  )
}

export default Header