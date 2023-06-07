import React, { useContext, useState, useEffect } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext';
import { UserContext } from '../../contexts/UserContext';
import './myfavorites.css'
import axios from 'axios';
import MovieCard from '../../components/MovieCard/MovieCard';
import headerImg from '../../assests/cinema-stuff-red.jpg'

function MyFavorites({ serverUrl }) {

    const { darkMode } = useContext(ThemeContext)
    const { user, token } = useContext(UserContext)
    const [ favoriteMovies, setFavoriteMovies ] = useState([])

    useEffect(() => {
        axios.get(`${serverUrl}/favoriteMovies/user/${user?._id}`)
            .then(res => { setFavoriteMovies(res.data.favorites) })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className={darkMode === true
            ? 'my-favorites-page-container my-favorites-page-container-dark'
            : 'my-favorites-page-container'}>
            <img className={token ? 'logged-in-header' : 'logged-out-header'}
            src={headerImg}/>
            <h3 className='my-favorites-title'>My Favorite Movies</h3>
            <div>
                {
                    token
                        ? <div className='favorite-movies-container' >
                        {
                           favoriteMovies?.map(item => {
                            return <MovieCard
                                cardStyle={"popular-movie"}
                                width={"200px"}
                                height={"300px"}
                                imageUrl={item?.movie[0].poster_path}
                                key={item?.movie[0]._id}
                                data={item?.movie[0]}
                            /> }) 
                        }
                             
                        </div>  
                        : <p>Please Sign In to add favorite movies.</p>
                }
            </div>
        </div>
    )
}

export default MyFavorites