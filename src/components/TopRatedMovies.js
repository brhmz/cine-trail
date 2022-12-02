import React, {useContext} from 'react'
import '../styles/topratedmovies.css'
import { ThemeContext } from '../contexts/ThemeContext';

function TopRatedMovies() {

  const {darkMode} = useContext(ThemeContext)


  return (
    <div className={darkMode===true ? 'top-rated-movies-container top-rated-movies-container-dark' : 'top-rated-movies-container'}>
      <h3>top rated title</h3>
      <div className='top-rated-movie-cards-container'>
        <div>

        </div>
      </div>
    </div>
  )
}

export default TopRatedMovies