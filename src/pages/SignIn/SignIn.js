import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext';
import './signin.css'
import poster from '../../assests/movie-theatre.webp'
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import axios from 'axios'

function SignIn({ serverUrl }) {

    const { darkMode } = useContext(ThemeContext);
    const { setUser, token, setToken } = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let navigate = useNavigate();

    const signIn = (e) => {
        e.preventDefault();
        axios.post(`${serverUrl}/users/login`, { email, password })
            .then(res => {
                console.log(res.data)
                setUser(res.data)
                setToken(res.data.token)
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('userInfo', JSON.stringify(res.data))
                setTimeout(() => { navigate('/') }, 3000)
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
                    : <form className='form-container' onSubmit={signIn}>
                        <h3>Sign In</h3>
                        <p className='form-description'>Please login with your email and password.</p>
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
                        </div>
                        <div className='buttons-container'>
                            <button type='reset' className='cancel-button'>Cancel</button>
                            <button type='submit' className='sign-in-button'>Sign In</button>
                        </div>
                        <p className='have-an-account'>Don't you have account yet?<Link className='sign-in' to={'/signup'}> Sign Up!</Link></p>
                    </form>
            }
        </div>
    )
}

export default SignIn