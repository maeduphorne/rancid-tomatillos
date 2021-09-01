import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MoviesArea.css';
import { Link } from 'react-router-dom'

const MoviesArea = (props) => {
  const movieCards = props.movies.map(movie => {
    return (
      <li key={movie.id}>
      <Link to={`/${movie.id}`}>
        <MovieCard
          key={movie.id}
          movieObj={movie}
          displayMovie={props.displayMovie}
        />
      </Link>
      </li>
    )
  })

  return (
    <div className='movies-area'>
      {movieCards}
    </div>
  )
};

export default MoviesArea