import React, {useContext, useEffect, useState} from 'react';
import ReactReadMoreReadLess from "react-read-more-read-less";

function Review({review}) {

  const apiKey = process.env.REACT_APP_API_KEY

  return (
    <div className='reviews-container'>
      <div className="author-container">
        <img src="" alt="" className="author-avatar" />
        <p className="author-name">{review?.author}</p>
      </div>
      <div className="content-container">
          <ReactReadMoreReadLess
                    charLimit={300}
                    readMoreText={"read more"}
                    readLessText={ " read less"}
              >
                    {review.content}
          </ReactReadMoreReadLess>
      </div>
     </div>
  )
}

export default Review