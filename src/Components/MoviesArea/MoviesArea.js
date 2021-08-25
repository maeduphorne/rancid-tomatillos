import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MoviesArea.css';


const MoviesArea = (props) => {
  const movieCards = props.movies.map(movie => {
    return (
      <MovieCard
      title={movie.title}
      rating={movie.average_rating}
      poster={movie.poster_path}
      />
    )
  })

  return (
    <div className='movies-area'>
      {movieCards}
    </div>
  )
};

export default MoviesArea
