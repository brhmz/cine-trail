import React from 'react'
import { Rating } from 'react-simple-star-rating'

export function RatingStars({ currentRating }) {

  var ratingOnFive = currentRating / 2

  return (
    <div>
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