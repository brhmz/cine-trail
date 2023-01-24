import axios from 'axios'
import React, {useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router';
import { ThemeContext } from '../contexts/ThemeContext';
import '../styles/moviedetailpage.css'
import ReactPlayer from 'react-player'
import RatingStars from '../components/RatingStars';
import Genres from '../components/Genres';



function MovieDetailPage() {

  const apiKey = process.env.REACT_APP_API_KEY
  const { darkMode } = useContext(ThemeContext)

  const { movieId } = useParams();  
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [trailerUrl, setTrailerUrl] = useState(null)
  const [isFavorite, setFavorite] = useState(false)
  const imageBaseUrl = 'https://image.tmdb.org/t/p/original'
  const videoBaseUrl = "https://www.youtube.com/watch?v="


  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}&language=en-US`)
      .then(response=>setTrailerUrl(response.data.results.find((item) => (item.type) = "Trailer")))
      .catch(err=>console.log(err))
   }, [movieId])

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`)
      .then(response=>setSelectedMovie(response.data))
      .catch(err=>console.log(err))
   }, [movieId])


  return (
    <div className='movie-detail-page-container'>
      <div className='trailer-container'>
        <ReactPlayer
            className='react-player'
            url={videoBaseUrl + trailerUrl?.key}
            width='100%'
            height='100%'
          />
      </div>
      <div className='movie-details-container'>
        <div className="movie-title">
          <h2>{selectedMovie?.title}</h2>
        </div>
      <div className='movie-rating'>
        <RatingStars
            currentRating={selectedMovie?.vote_average}
        />
        <p className={isFavorite == false ? "is-favorite-false" : "is-favorite-true"} onClick={()=>setFavorite(!isFavorite)}>{isFavorite == false ? "Add to favorites." : "Remove from favorties."}</p>
      </div>
      <div className='movie-details'>
          <img className="movie-detail-image" src={imageBaseUrl + selectedMovie?.poster_path} alt="" />
        <div className="movie-info">
          <h2>{selectedMovie?.tagline}</h2>
          <h4>{selectedMovie?.overview}</h4>
          <h4>Status: {selectedMovie?.status}</h4>
          <h4>Runtime: {selectedMovie?.runtime}</h4>
          <h4>Budget: {selectedMovie?.budget}</h4>
          <h4>
          <Genres
            currentMovie={selectedMovie}
          />
          </h4>
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default MovieDetailPage