import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Genres({currentMovie}) {

    const [genres, setGenres] = useState([])
    const apiKey = process.env.REACT_APP_API_KEY

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`)
          .then(response => setGenres(response.data.genres))
          .catch(err => console.log(err))
      }, [])

    const currentGenreNames = []
    
    function genreNamesFinder() {
        for(let i=0; i<genres?.length; i++) {
            for(let j=0; j<currentMovie?.genre_ids.length; j++){
                if(genres[i]?.id === currentMovie?.genre_ids[j]){
                    currentGenreNames.push(genres[i]?.name)
                }
            }
        } 
    }
    
    genreNamesFinder();
    const currentGenreList = currentGenreNames.map((item, index)=>
    <p key={index}>{index === currentGenreNames.length-1 ? item : `${item},`}&nbsp;</p>
    );
    
  return (
    <div className='genres-container'>
        <p>Genres:&nbsp;</p> 
        {currentGenreList}
    </div>
    
  )
}

export default Genres