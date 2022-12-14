import React, {useContext} from 'react'
import {useEffect, useState} from 'react';
import axios from 'axios';
import '../styles/popularmovies.css'
import { ThemeContext } from '../contexts/ThemeContext';
import PopularMovieCard from './PopularMovieCard';

function PopularMovies() {

  const apiKey = process.env.REACT_APP_API_KEY
  const {darkMode} = useContext(ThemeContext)
    
  const [popularMovies, setPopularMovies] = useState([])
  const [pageNumber, setPageNumber] = useState('1')
  const pageNumbers = [1,2,3,4,5,6,7,8,9,10]

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&page=${pageNumber}`)
      .then(response=>setPopularMovies(response.data.results))
      .catch(err => console.log(err))
   }, [pageNumber])

  return (
    <div className={darkMode===true ? 'popular-movies-container popular-movies-container-dark' : 'popular-movies-container'}> 
      <h3>Popular Movies</h3>
      <div className='movie-cards-container'>
      {
          popularMovies.map((item, index)=>{
            return <PopularMovieCard popularMovie={item} key={index}/>
          })
        }
      </div>
      <div className='page-numbers'>
        <p>Select Page</p>
        {pageNumbers.map((item)=>
        <a onClick={()=>setPageNumber(item)}>{item}</a>)
        }
      </div>
    </div>
  )
}

export default PopularMovies