import React, {useState, useEffect} from 'react'
import axios from 'axios'



function FilteredMovies({movie}) {



  return (
    <div>
      {movie.title}
    </div>
  )
}

export default FilteredMovies