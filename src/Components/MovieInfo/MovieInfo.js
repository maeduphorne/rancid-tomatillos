import React from 'react';

const MovieInfo = (props) => {
  // console.log('selected movie', props.selectedMovie[0])
  return props.selectedMovie.map(movie => {
    return (
      <section className='movie-info-container' key={movie.movie.id}>
        <section className="banner">
          <img
            className="backdrop"
            src={movie.movie.backdrop_path}
            alt={`backdrop for ${movie.movie.title}`}
          />
          <h2 className="title">{movie.movie.title}</h2>
        </section>
        <section className='movie-info'>
          <section className='info-left'>
            <div className='poster'>
              <img src={movie.movie.poster_path} alt='movie poster'/>
              <p className='tagline'>{movie.movie.tagline}</p>
            </div>
          </section>
          <section className='info-right'>
            <div className='right-wrapper'>
              <p>Overview: {movie.movie.overview}</p>
              <p> Release Date: {movie.movie.release_date}</p>
              <p>Runtime: {movie.movie.runtime} minutes</p>
              <p> Average Rating: {Math.round(movie.movie.average_rating * 100)/100} / 10</p>
              <p className='genres'>Genre: {movie.movie.genres}</p>
              <p>Budget: {movie.movie.budget}</p>
              <p>Revenue: {movie.movie.revenue}</p>
              <button onClick={props.displayHomePage}>Return Home</button>
            </div>
          </section>
        </section>
      </section>
    )
  })
};

export default MovieInfo
