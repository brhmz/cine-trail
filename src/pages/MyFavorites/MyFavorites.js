import React, { useContext, useState, useEffect } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext';
import { UserContext } from '../../contexts/UserContext';
import './myfavorites.css'
import axios from 'axios';
import MovieCard from '../../components/MovieCard/MovieCard';
import headerImg from '../../assests/cinema-stuff-red.jpg'
import { Link } from 'react-router-dom'

function MyFavorites({ serverUrl }) {

    const { darkMode } = useContext(ThemeContext)
    const { user, token } = useContext(UserContext)
    const [ favoriteMovies, setFavoriteMovies ] = useState([])

    useEffect(() => {
        axios.get(`${serverUrl}/favoriteMovies/user/${user?._id}`)
            .then(res => { setFavoriteMovies(res.data.favorites) })
            .catch(err => console.log(err))
    }, [user, serverUrl])

    return (
        <div className={darkMode === true
            ? 'my-favorites-page-container my-favorites-page-container-dark'
            : 'my-favorites-page-container'}>
            <img className={token ? 'logged-in-header' : 'logged-out-header'}
            src={headerImg} alt='people watches movies.'/>
            <h2 className='my-favorites-title'>My Favorite Movies</h2>
            <div>
                {
                    token
                        ? <div className='favorite-movies-container' >
                        {
                           favoriteMovies?.map(item => {
                            return <MovieCard
                                cardStyle={"favorite-movie"}
                                width={"200px"}
                                height={"300px"}
                                imageUrl={item?.movie[0]?.poster_path}
                                key={item?.movie[0]?._id}
                                movie={item?.movie[0]}
                                serverUrl={serverUrl}
                                
                            /> }) 
                        }
                             
                        </div>  
                        : <p className='signin-no-text'>Please <Link className='signin-no' to='/signin'>Sign In</Link> to add favorite movies.</p>
                }
            </div>
        </div>
    )
}

export default MyFavorites