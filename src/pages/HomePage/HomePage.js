import React, { useContext, useEffect, useState } from 'react';
import Slider from '../../components/Slider/Slider';
import { ThemeContext } from '../../contexts/ThemeContext';
import './homepage.css'
import axios from 'axios'
import MovieCard from '../../components/MovieCard/MovieCard';

function HomePage({apiKey}) {

  const { darkMode } = useContext(ThemeContext)
  const [popularMovies, setPopularMovies] = useState([])
  const [topRatedMovies, setTopRatedMovies] = useState()
  const [pageNumber, setPageNumber] = useState(1)
  const pageNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${pageNumber}`)
      .then(response => setPopularMovies(response.data.results))
      .catch(err => console.log(err))
  }, [pageNumber, apiKey])

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&page=1`)
      .then(response => setTopRatedMovies(response.data.results.slice(0, 10)))
      .catch(err => console.log(err))
  }, [apiKey])

  return (
    <div className={darkMode === true ? 'home-page home-page-dark' : 'home-page'}>
      <div className='slider-container'>
        <Slider apiKey={apiKey} />
      </div>
      <div className={darkMode === true
        ? 'home-page-body home-page-body-dark'
        : 'home-page-body'}>
        <div className={darkMode === true
          ? 'popular-movies-container popular-movies-container-dark'
          : 'popular-movies-container'}>
          <h3>Popular Movies</h3>
          <div className='popular-movie-cards-container'>
            {
              popularMovies?.map((movie) => {
                return <MovieCard
                  cardStyle={"popular-movie"}
                  imageUrl={movie.poster_path}
                  data={movie}
                  key={movie.id}
                  height={"300px"} width={"200px"} radius={"8px"} />
              })
            }
          </div>
          <div className='page-numbers-container'>
            <p>Select Page</p>
            {pageNumbers.map((item, index) => {
              return <p className={item === pageNumber
                ? 'current-page page-numbers'
                : 'page-numbers'} key={index}
                onClick={() => setPageNumber(item)}>
                {item}
              </p>
            })}
          </div>
        </div>
        <div className={darkMode === true
          ? 'top-rated-movies-container top-rated-movies-container-dark'
          : 'top-rated-movies-container'}>
          <h3>Top Rated Movies</h3>
          <div className='top-rated-movie-cards-container'>
            {
              topRatedMovies?.map((movie) => {
                return <MovieCard
                  cardStyle={"top-rated-movie"}
                  imageUrl={movie.backdrop_path}
                  data={movie} key={movie.id}
                  height={"100px"} width={"200px"} radius={"8px"} />
              })
            }
          </div>
        </div>
      </div>

    </div>
  )
}

export default HomePage