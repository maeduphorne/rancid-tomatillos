import React from 'react';
import './MovieCard.css';

const MovieCard = ({ movieObj, displayMovie }) => {
  return (
    <div className='movie-card'>
      <img className='movie-poster' src={movieObj.poster_path} alt= 'Movie poster' onClick={() => displayMovie(movieObj.id)}/>
    </div>
  )
}

export default MovieCard



//IN MOVIE CARD:
// <h2>{title}</h2>
// <p>{rating}</p>
