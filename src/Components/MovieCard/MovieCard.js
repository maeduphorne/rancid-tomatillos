import React from 'react';
import './MovieCard.css';

const MovieCard = ({ title, poster, rating }) => {
  // console.log(MoviesArea)
  return (
    <div className='card'>
      <h2>{title}</h2>
      <p>{rating}</p>
      <img src={poster}/>
    </div>
  )
}

export default MovieCard
