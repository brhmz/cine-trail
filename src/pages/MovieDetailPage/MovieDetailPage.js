import axios from 'axios'
import React, { useEffect, useState, useContext, useMemo } from 'react'
import { useParams } from 'react-router';
import { ThemeContext } from '../../contexts/ThemeContext';
import { UserContext } from '../../contexts/UserContext';
import './moviedetailpage.css'
import ReactPlayer from 'react-player'
import RatingStars from '../../components/Rating/RatingStars';
import Genres from '../../components/Genres/Genres';
import Review from '../../components/Review/Review';


function MovieDetailPage({ serverUrl }) {

  const apiKey = process.env.REACT_APP_API_KEY
  const { darkMode } = useContext(ThemeContext)
  const { user, token } = useContext(UserContext)
  const { movieId } = useParams();
  const [movie, setMovie] = useState([])
  const [trailerUrl, setTrailerUrl] = useState(null)
  const [isFavorite, setFavorite] = useState(false)
  const [reviews, setReviews] = useState([])
  const [numberOfReviewsShown, setnumberOfReviewsShown] = useState(3)
  const imageBaseUrl = 'https://image.tmdb.org/t/p/w500/'
  const videoBaseUrl = "https://www.youtube.com/watch?v="

  const showMore = () => {
    if (numberOfReviewsShown < reviews.length) {
      setnumberOfReviewsShown(numberOfReviewsShown + 3);
    } else if (numberOfReviewsShown >= reviews.length) {
      setnumberOfReviewsShown(3);
    }
  };

  const itemsToShow = useMemo(() => {
    return reviews
      .slice(0, numberOfReviewsShown)
      .map((item, index) => {
        return <Review review={item} key={index} />
      });
  }, [reviews, numberOfReviewsShown]);


  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}&language=en-US`)
      .then(response => setTrailerUrl(response.data.results?.find((item) => (item.type) === "Trailer")))
      .catch(err => console.log(err))

    axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`)
      .then(response => setMovie(response?.data))
      .catch(err => console.log(err))

    axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${apiKey}&language=en-US`)
      .then(response => setReviews(response.data?.results))
      .catch(err => console.log(err))
  }, [movieId, apiKey])

  useEffect(() => {
    axios.post(`${serverUrl}/favoriteMovies/search`, 
    {
      user_id: user._id,
      tmdb_id: movie.id
    })
      .then(res => res.data === null ? setFavorite(false) : setFavorite(true))
      .catch(err => console.log(err))
  }, [user, movie])

  const addToFavorites = () => {
    if (!token) {
      alert('You need to login first!')
    } else if (token === null || token === undefined) {
      alert('Something went wrong, try again later.')
    } else {
      axios.post(`${serverUrl}/favoriteMovies`, { user_id: user._id, movie_id: movie?.id })
        .then(res => { setFavorite(true) })
        .catch(err => console.log(err))
    }
  }

  const removeFromFavorites = () => {
    axios.delete(`${serverUrl}/favoriteMovies/${user._id}/${movie?.id}`)
      .then(res => { setFavorite(false) })
      .cath(err => console.log(err))
  }
  return (
    <div className={darkMode === true
      ? 'movie-detail-page-container movie-detail-page-container-dark'
      : 'movie-detail-page-container'}>
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
          <h2>{movie?.title}</h2>
        </div>
        <div className='movie-rating'>
          <RatingStars
            currentRating={movie?.vote_average}
          />
          {
            isFavorite
              ? <p className="is-favorite-true"
                onClick={removeFromFavorites}>
                Remove from favorties
              </p>
              : <p className="is-favorite-false"
                onClick={addToFavorites}>
                Add to favorties
              </p>
          }
        </div>
        <div className='movie-details'>
          <div className="movie-detail-image-container">
            <img className="movie-detail-image"
              src={imageBaseUrl + movie?.poster_path}
              alt="" />
          </div>
          <div className="movie-info">
            <h2>{movie?.tagline}</h2>
            <p>{movie?.overview}</p>
            <p>Status: {movie?.status}</p>
            <p>Runtime: {movie?.runtime}</p>
            <p>Budget: {movie?.budget}</p>
            <p>
              <Genres
                currentMovie={movie}
              />
            </p>
          </div>
        </div>
        <div>
          <h2>Reviews</h2>
          <hr />
          <div>
            {itemsToShow.length ? itemsToShow : "There is no comment yet."}
          </div>
          <button id={reviews?.length <= 3
            ? "no-show-more-button"
            : "show-more-button"}
            onClick={showMore}>{numberOfReviewsShown >= reviews?.length
              ? 'End of reviews. Collapse!'
              : 'Read more reviews'}</button>
          <hr />
        </div>
      </div>
    </div>
  )
}

export default MovieDetailPage