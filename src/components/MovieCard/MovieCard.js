import React from 'react';
import RatingStars from '../Rating/RatingStars';
import "./moviecard.css"
import { useNavigate } from 'react-router';

function MovieCard({ movie, imageUrl, width, height, cardStyle, radius }) {

  const imageStyle = {
    backgroundImage: `url("https://image.tmdb.org/t/p/w500/${imageUrl}")`,
    width: width,
    height: height,
    backgroundRepeat: "no-repeat",
    backgrounPosition: "center",
    backgroundSize: "cover",
    position: "relative",
    borderRadius: radius,
    boxShadow: cardStyle === "popular-movie-card"
      ? "0px 0px 10px 0px rgba(118,118,118,0.75)"
      : null
  }

  let navigate = useNavigate()

  return (
    <div onClick={movie?.id
      ? () => navigate(`/moviedetails/${movie?.id}`)
      : () => navigate(`/moviedetails/${movie?.tmdb_id}`)}
      className={cardStyle}
      style={imageStyle}>
      <div className={`${cardStyle}-info`}>
        <div className={`${cardStyle}-rating`}>
          <RatingStars
            currentRating={movie?.vote_average}
          />
        </div>
        <div className={`${cardStyle}-detail`}>
          <p>{movie.title}</p>
          <p className={`${cardStyle}-rating`}>
            Rating: {Math.floor(movie.vote_average / 2)}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MovieCard