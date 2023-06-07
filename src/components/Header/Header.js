import axios from 'axios';
import React, { useContext, useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './header.css'
import "../../components/MovieCard/moviecard.css"
import { BsSun } from 'react-icons/bs';
import { BsFillMoonFill } from 'react-icons/bs';
import { ThemeContext } from '../../contexts/ThemeContext';
import FilteredMovieCard from '../MovieCard/FilteredMovieCard';
import { UserContext } from '../../contexts/UserContext';


function Header() {

  let navigate = useNavigate();

  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const { token, setToken, user } = useContext(UserContext);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [profileOptions, setProfileOptions] = useState(false);
  const apiKey = process.env.REACT_APP_API_KEY;

  const handleTheme = (theme) => {
    setDarkMode(theme)
    localStorage.setItem('darkMode', theme)
  }

  const handleLogout = () => {
    localStorage.clear()
    setToken('')
    navigate('/')
    setProfileOptions(false)
  }

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&page=1&include_adult=false`)
      .then(response => setFilteredMovies(response.data.results))
      .catch(err => console.log(err))
  }, [query, apiKey])

  return (
    <div className={darkMode ? 'header-container header-container-dark' : 'header-container'}>
      <div className='logo-container'>
        <Link className='logo' to='/'>
          <p className='logo-cinetrail'>CineTrail</p>
        </Link>
      </div>
      <div className='search-container'>
        <input id="search-input"
          type="text"
          value={inputValue}
          onChange={(e) => {
            setQuery(e.target.value)
            setInputValue(e.target.value)
          }}
          className={darkMode ? 'search-input search-input-dark' : 'search-input'}
          placeholder='Search any movie' />
      </div>
      <div className={query.length === 0 ? 'no-search' : 'filtered-movie-cards-container'}>
        {
          filteredMovies.map((item, index) => {
            return <FilteredMovieCard
              movie={item}
              key={index}
              setQuery={setQuery}
              setInputValue={setInputValue}
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
          {
            token
              ? <div className={darkMode
                ? 'header-profile-container header-profile-container-dark'
                : 'header-profile-container'}
                onClick={() => setProfileOptions(!profileOptions)}>
                <img src={user.image_url} alt={user.username} className='profile-image'/>
                <p className='profile-username'>Welcome {user.username}</p>
                {
                  profileOptions
                    ? <div className='profile-options-container'>
                      <Link className='my-favorites-button' to='/myfavorites'>My Favorites</Link>
                      <p className='logout-button' onClick={handleLogout}>Logout</p>
                    </div>
                    : null
                }
              </div>
              : <button onClick={() => navigate('/signup')}
                className='create-account'>Create Account</button>
          }
        </div>
      </div>
    </div>
  )
}

export default Header