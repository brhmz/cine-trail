import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Genres({currentMovie}) {

    const [allGenres, setAllGenres] = useState([])
    const apiKey = process.env.REACT_APP_API_KEY

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`)
          .then(response => setAllGenres(response.data.genres))
          .catch(err => console.log(err))
      }, [])

    const currentGenreNames = []
    
    function genreNamesFinder() {
        if(currentMovie?.genre_ids){
            for(let i=0; i<allGenres?.length; i++) {
                for(let j=0; j<currentMovie?.genre_ids.length; j++){
                    if(allGenres[i]?.id === currentMovie?.genre_ids[j]){
                        currentGenreNames.push(allGenres[i]?.name)
                    }
                }
            }
        } else if (currentMovie?.genres) {
            for(let i=0; i<allGenres?.length; i++) {
                for(let j=0; j<currentMovie?.genres.length; j++){
                    if(allGenres[i]?.id === currentMovie?.genres[j].id){
                        currentGenreNames.push(allGenres[i]?.name)
                    }
                }
            }
        }
         
    }
    
    genreNamesFinder();
    const currentGenreList = currentGenreNames.map((item, index)=>
    <p key={index}>{index === currentGenreNames.length-1 ? item : `${item},`}&nbsp;</p>
    );
    
    console.log(currentMovie);

  return (
    <div className='genres-container'>
        <p>Genres:&nbsp;</p> 
        {currentGenreList}
    </div>
    
  )
}

export default Genres