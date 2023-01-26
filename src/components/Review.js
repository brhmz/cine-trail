import React, {useContext, useEffect, useState} from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import ReactReadMoreReadLess from "react-read-more-read-less";
import '../styles/moviedetailpage.css'

function Review({review}) {

  const apiKey = process.env.REACT_APP_API_KEY
  const { darkMode } = useContext(ThemeContext)

  return (
      <div className={darkMode === true ? 'review review-dark' : 'review'}>
        <div className="author-container">
          <img src="" alt="" className="author-avatar" />
          <p className="author-name">{review?.author}</p>
        </div>
        <div className="review-content">
            <ReactReadMoreReadLess
                      charLimit={300}
                      readMoreText={"read more"}
                      readLessText={ " read less"}
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