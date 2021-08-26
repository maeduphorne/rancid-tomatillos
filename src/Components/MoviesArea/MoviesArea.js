import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import App from '../App/App'
import './MoviesArea.css';


const MoviesArea = ({movies, displayMovie }) => {
  const movieCards = movies.map(movie => {
    return (
      <MovieCard
      title={movie.title}
      rating={movie.average_rating}
      poster={movie.poster_path}
      key={movie.id}
      id={movie.id}
      displayMovie={displayMovie}
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
