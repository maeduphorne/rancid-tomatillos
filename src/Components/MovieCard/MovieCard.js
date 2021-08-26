import React from 'react';
import './MovieCard.css';

const MovieCard = ({ title, poster, rating, id }) => {
  // console.log(MoviesArea)
  return (
    <div className='card'>
      <img class='poster' src={poster}/>
    </div>
  )
}

export default MovieCard



//IN MOVIE CARD:
// <h2>{title}</h2>
// <p>{rating}</p>
