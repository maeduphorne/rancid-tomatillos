import React from 'react';
import './MovieCard.css';

const MovieCard = ({ movieObj }) => {
  return (
    <div className='movie-card'>
      <img className='movie-poster'
      src={movieObj.poster_path}
      alt={`Movie poster of ${movieObj.title}`}
      />
    </div>
  )
}

export default MovieCard
