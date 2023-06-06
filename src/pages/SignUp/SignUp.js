import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext';
import './signup.css'
import poster from '../../assests/movie-theatre.webp'
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import axios from 'axios'

function SignUp({ serverUrl }) {

  const { darkMode } = useContext(ThemeContext);
  const { token } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [success, setSuccess] = useState(false)

  let navigate = useNavigate();

  const signUp = (e) => {
    e.preventDefault();
    axios.post(`${serverUrl}/users/signup`, { email, password, username })
      .then(res => {
        console.log(res.data)
        if (res.data.status === 409) {
          alert('There is another user with this Email.')
        } else {
          setSuccess(true)
          setPassword('')
          setEmail('')
          setUsername('')
          setTimeout(()=>{navigate('/signin')}, 2000)
        }
      })
      .catch(err => console.log(err))
  }

  return (
    <div className={darkMode === true
      ? 'sign-up-page-container sign-up-page-container-dark'
      : 'sign-up-page-container'}>
      <div className='poster-container'>
        <img className='poster' src={poster} alt='People watch movies.' />
      </div>
      {
        token
          ? <p>You have already logged in!</p>
          : <form className='form-container' onSubmit={signUp}>
            <h3>Sign Up</h3>
            <p className='form-description'>Please fill in this form to create an account.</p>
            <div className='inputs-container'>
              <h4>Email</h4>
              <input required
                value={email}
                type='email'
                name='email'
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter your email.' />
              <h4>Password</h4>
              <input required
                value={password}
                type='password'
                name='password'
                onChange={(e) => setPassword(e.target.value)}
                autoComplete='on'
                placeholder='Create a new password.' />
              <h4>Username</h4>
              <input required
                value={username}
                type='text'
                name='username'
                onChange={(e) => setUsername(e.target.value)}
                placeholder='Create a new Username.' />
            </div>
            <div className='buttons-container'>
              <button type='reset' className='cancel-button'>Cancel</button>
              <button type='submit' className='sign-in-button'>Sign Up</button>
            </div>
            {
              success
                ? <p>Signed Up successfully! Enjoy.</p>
                : <p className='have-an-account'>Already have an account?<Link className='sign-in' to={'/signin'}> Sign In!</Link></p>
            }
          </form>
      }
    </div>
  )
}

export default SignUp