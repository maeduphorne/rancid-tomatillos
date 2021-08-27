import React from 'react';
import './MovieCard.css';

const MovieCard = ({ movieCard, displayMovie }) => {
  return (
    <div className='movie-card'>
      <img className='movie-poster' src={movieCard.poster_path} onClick={() => displayMovie(movieCard.id)}/>
    </div>
  )
}

export default MovieCard



//IN MOVIE CARD:
// <h2>{title}</h2>
// <p>{rating}</p>
