import React from 'react';
import './MovieCard.css';

const MovieCard = ({ title, rating, poster, id, displayMovie }) => {
  return (
    <div className='card'>
      <img className='poster' src={poster} onClick={() => displayMovie(id)}/>
    </div>
  )
}

export default MovieCard



//IN MOVIE CARD:
// <h2>{title}</h2>
// <p>{rating}</p>
