import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Genres({currentMovie}) {

    const [genres, setGenres] = useState([])

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=4fb47f1613fc6ff82ac98a531050f625')
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
    <p key={index}>{item}, &nbsp;</p>
    );
    
  return (
    <div className='genres-container'>
        <p>Genres:&nbsp;</p> 
        {currentGenreList}
    </div>
    
  )
}

export default Genres