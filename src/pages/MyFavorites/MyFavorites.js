import React, { useContext, useState, useEffect } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext';
import { UserContext } from '../../contexts/UserContext';
import './myfavorites.css'
import axios from 'axios';
import MovieCard from '../../components/MovieCard/MovieCard';

function MyFavorites({ serverUrl }) {

    const { darkMode } = useContext(ThemeContext)
    const { user, token } = useContext(UserContext)
    const { favoriteMovies, setFavoriteMovies } = useState([])

    useEffect(() => {
        axios.get(`${serverUrl}/favoriteMovies/user/${user?._id}`)
            .then(res => { console.log(res.data) })
            .catch(err => console.log(err))
    }, [user])

    return (
        <div className={darkMode === true
            ? 'my-favorites-page-container my-favorites-page-container-dark'
            : 'my-favorites-page-container'}>
            <h3>My Favorite Movies</h3>
            <div>
                {
                    token
                        ? <p>Girdin {user?._id}</p>
                        
                        /* favoriteMovies.map(item => {
                            return <MovieCard
                                cardStyle={"popular-movie"}
                                radius={"16px"}
                                width={"200px"}
                                height={"300px"}
                                imageUrl={item?.movie[0].poster_path}
                                key={item?.movie[0]._id}
                                data={item?.movie[0]}
                            />
                        }) */
                        : <p>Please Sign In to add favorite movies.</p>
                }
            </div>
        </div>
    )
}

export default MyFavorites