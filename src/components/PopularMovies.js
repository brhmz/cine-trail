import React, {useContext} from 'react'
import '../styles/popularmovies.css'
import { ThemeContext } from '../contexts/ThemeContext';

function PopularMovies() {

  const {darkMode} = useContext(ThemeContext)


  return (
    <div className={darkMode===true ? 'popular-movies-container popular-movies-container-dark' : 'popular-movies-container'}> 
      <h3>title</h3>
      <div className='movie-cards-container'>

      </div>
      <div className='page-numbers'>

      </div>
    </div>
  )
}

export default PopularMovies