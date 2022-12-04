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
        <p onClick={()=>setPageNumber('1')}>1</p>
        <p onClick={()=>setPageNumber('2')}>2</p>
        <p onClick={()=>setPageNumber('3')}>3</p>
        <p onClick={()=>setPageNumber('4')}>4</p>
        <p onClick={()=>setPageNumber('5')}>5</p>
        <p onClick={()=>setPageNumber('6')}>6</p>
        <p onClick={()=>setPageNumber('7')}>7</p>
        <p onClick={()=>setPageNumber('8')}>8</p>
        <p onClick={()=>setPageNumber('9')}>9</p>
        <p onClick={()=>setPageNumber('10')}>10</p>
      </div>
    </div>
  )
}

export default PopularMovies