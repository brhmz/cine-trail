import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext';
import './signup.css'
import poster from '../../assests/movie-theatre.webp'
import { Link } from 'react-router-dom';

function SignUp() {
  const { darkMode } = useContext(ThemeContext)

  return (
    <div className={darkMode === true ? 'sign-up-page-container sign-up-page-container-dark' : 'sign-up-page-container'}>
      <div className='poster-container'>
        <img className='poster' src={poster} alt='People watch movies.' />
      </div>
      <div className='form-container'>
        <h3>Sign Up</h3>
        <p className='form-description'>Please fill in this form to create an account.</p>
        <div className='inputs-container'>
          <h4>Email</h4>
          <input placeholder='Enter your email.'/>
          <h4>Password</h4>
          <input placeholder='Create a new password.'/>
          <h4>Username</h4>
          <input placeholder='Create a new Username.'/>
        </div>
        <div className='buttons-container'>
          <button className='cancel-button'>Cancel</button>
          <button className='sign-in-button'>Sign Up</button>
        </div>
        <p className='have-an-account'>Already have an account? 
        <Link className='sign-in'> Sign In!</Link>
        </p>
      </div>

    </div>
  )
}

export default SignUp