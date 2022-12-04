import React, {useContext, useEffect, useState} from 'react'
import '../styles/topratedmovies.css'
import { ThemeContext } from '../contexts/ThemeContext';
import axios from 'axios';
import TopRatedMovieCard from '../components/TopRatedMovieCard.js'

function TopRatedMovies() {

  const apiKey = process.env.REACT_APP_API_KEY
  const {darkMode} = useContext(ThemeContext)
  const [topRatedMovies, setTopRatedMovies] = useState()

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&page=1`)
      .then(response=>setTopRatedMovies(response.data.results))
      .catch(err=>console.log(err))
   }, [])




  return (
    <div className={darkMode===true ? 'top-rated-movies-container top-rated-movies-container-dark' : 'top-rated-movies-container'}>
      <h3>Top Rated Movies</h3>
      <div className='top-rated-movie-cards-container'>
        {
            topRatedMovies?.map((item, index)=>{
              return <TopRatedMovieCard topRatedMovie={item} key={index}/>
            })
        }
      </div>
    </div>
  )
}

export default TopRatedMovies