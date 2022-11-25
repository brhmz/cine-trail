import React, { useContext, useEffect, useState } from 'react';
import Slider from '../components/Slider';
import { ThemeContext } from '../contexts/ThemeContext';
import '../styles/homepage.css'
import axios from 'axios';


function HomePage() {

  const {darkMode, setDarkMode} = useContext(ThemeContext)

  const [upComingMovies, setUpComingMovies] = useState([])

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=4fb47f1613fc6ff82ac98a531050f625')
      .then(response => setUpComingMovies(response.data.results))
      .catch(err => console.log(err))
  })

  return (
    <div className={darkMode===true ? 'home-page home-page-dark' : 'home-page'}>
      <div className='slider-container'>
        {
          upComingMovies.map((item, id) => {
            return <Slider 
              movie={item}
              key={id}
            />        
          })
        }
      </div>
      
    </div>
  )
}

export default HomePage