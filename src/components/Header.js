import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import  '../styles/header.css'
import { BsSun } from 'react-icons/bs';
import { BsFillMoonFill } from 'react-icons/bs';
import { ThemeContext } from '../contexts/ThemeContext';

function Header() {

  const {darkMode, setDarkMode} = useContext(ThemeContext)


  return (
    <div className={darkMode===true ? 'header-container header-container-dark' : 'header-container'}>
      <div className='logo-container'>
        <a href='/'>
          <p className='logo'>CineTrail</p>
        </a>
      </div>
      <div className='search-container'>
        <input className={darkMode===true ? 'search-input search-input-dark' : 'search-input'} placeholder='Search any movie'/>
      </div>
      <div className='header-buttons-container'>
        <div className='theme-buttons-container'>
          <div className={darkMode===true ? 'theme-button-sun-dark' : 'theme-button-sun-light'}><BsSun onClick={()=>setDarkMode(false)} color='white'/></div>
          <div className={darkMode===true ? 'theme-button-moon-dark' : 'theme-button-moon-light'}><BsFillMoonFill onClick={()=>setDarkMode(true)} color='white'/></div>
        </div>
        <div>
          <button className='create-account'>Create Account</button>
        </div>
      </div>
    </div>
  )
}

export default Header