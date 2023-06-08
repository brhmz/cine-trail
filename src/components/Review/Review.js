import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import ReactReadMoreReadLess from "react-read-more-read-less";
import './reviews.css'
import avatar from '../../assests/squirtle.jpg'

function Review({ review }) {

  const { darkMode } = useContext(ThemeContext)
  const [imageError, setImageError] = useState(false)

  return (
    <div className={darkMode === true ? 'review review-dark' : 'review'}>
      <div className="author-container">
        <img onError={() => setImageError(true)}
          src={imageError ? avatar : `https://image.tmdb.org/t/p/original/${review?.author_details?.avatar_path}`} alt={review?.author.name}
          className="author-avatar" />
        <p className="author-name">{review?.author}</p>
      </div>
      <div className="review-content">
        <ReactReadMoreReadLess
          charLimit={300}
          readMoreText={"read more"}
          readLessText={" read less"}
          readLessClassName={"read-less"}
          readMoreClassName={"read-more"}
        >
          {review.content}
        </ReactReadMoreReadLess>
      </div>
    </div>

  )
}

export default Review