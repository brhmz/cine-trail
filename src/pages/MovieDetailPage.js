import axios from 'axios'
import React, {useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router';
import { ThemeContext } from '../contexts/ThemeContext';
import '../styles/moviedetailpage.css'



function MovieDetailPage() {

  const { movieId } = useParams();  
  const [selectedMovie, setSelectedMovie] = useState(null)

  const apiKey = process.env.REACT_APP_API_KEY
  const { darkMode } = useContext(ThemeContext)


  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`)
      .then(response=>setSelectedMovie(response.data))
      .catch(err=>console.log(err))
   }, [movieId])

  return (
    <div className='movie-detail-page-container'>
      <p>{selectedMovie?.id}</p>
    </div>
  )
}

export default MovieDetailPage