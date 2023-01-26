import React from 'react'
import { Rating } from 'react-simple-star-rating'
import '../styles/slider.css';

export function RatingStars({ currentRating }) {

  var ratingOnFive = currentRating / 2

  return (
    <div className='rating-stars-container'>
      <Rating
        className='rating-stars'
        fillColor='#e50916'
        size={18}
        allowFraction
        initialValue={ratingOnFive}
        readonly />
    </div>
  )
}


export default RatingStars