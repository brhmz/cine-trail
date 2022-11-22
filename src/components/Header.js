import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import  '../styles/header.css'
import { BsSun } from 'react-icons/bs';
import { BsFillMoonFill } from 'react-icons/bs';
import { ThemeContext } from '../contexts/ThemeContext';

function Header() {

  const {darkMode, setDarkMode} = useContext(ThemeContext)


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
          <div className={darkMode ? 'theme-button' : 'theme-button active-theme'}><BsSun onClick={()=>setDarkMode(false)} color='white'/></div>
          <div className={darkMode ? 'theme-button active-theme' : 'theme-button'}><BsFillMoonFill onClick={()=>setDarkMode(true)} color='white'/></div>
        </div>
        <div>
          <button className='create-account'>Create Account</button>
        </div>
      </div>
    </div>
  )
}

export default Header