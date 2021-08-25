import React from 'react';
import './MovieCard.css';

const MovieCard = ({ title, poster_path, average_rating }) => {
  // console.log(MoviesArea)
  return (
    <div className='card'>
      <h2>{title}</h2>
      <p>{average_rating}</p>
      <img src={poster_path}/>
    </div>
  )
}

export default MovieCard
