import React from 'react'
import  '../styles/header.css'
import { BsSun } from 'react-icons/bs';
import { BsFillMoonFill } from 'react-icons/bs';

function Header() {
  return (
    <div className='header-container'>
      <div className='logo-container'>
        <a href='/'>
          <p className='logo'>CineTrail</p>
        </a>
      </div>
      <div className='search-container'>
        <input className='search-input' placeholder='Search any movie'/>
      </div>
      <div className='header-buttons-container'>
        <div className='theme-buttons-container'>
          <div className='theme-button'><BsSun color='white'/></div>
          <div className='theme-button'><BsFillMoonFill color='white'/></div>
        </div>
        <div>
          <button className='create-account'>Create Account</button>
        </div>
      </div>
    </div>
  )
}

export default Header