import React from 'react';
import './MovieCard.css';
import { Link } from 'react-router-dom'

const MovieCard = ({ movieObj }) => {
  return (
    <Link to={`/${movieObj.id}`} className='movie-card'>
      <img className='movie-poster'
      src={movieObj.poster_path}
      alt={`Movie poster of ${movieObj.title}`}
      />
    </Link>
  )
}

export default MovieCard
