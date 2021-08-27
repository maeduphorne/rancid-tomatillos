import React from 'react';

const MovieInfo = (props) => {
  return props.selectedMovie.map(movie => {
    return (
      <section className='movie-info-container'>
        <section className="banner">
          <img
            className="backdrop"
            src={movie.backdrop_path}
            alt={`backdrop for ${movie.title}`}
          />
          <h2 className="title">{movie.title}</h2>
        </section>
        <section className='movie-info'>
          <section className='info-left'>
            <div className='poster'>
              <img src={movie.poster_path} alt='movie poster'/>
              <p className='tagline'>Heres a tagline till api.</p>
            </div>
          </section>
          <section className='info-right'>
            <div className='right-wrapper'>
                <p> Release Date: {movie.release_date}</p>
                <p>{movie.overview}</p>
                <p>{movie.runtime} minutes</p>
                <p> Average Rating: {Math.round(movie.average_rating * 100)/100} / 10</p>
                <p className='genres'>Genre: {movie.genres}</p>
                <p>Budget: {movie.budget}</p>
                <p>Revenue: {movie.revenue}</p>
                <button onClick={props.displayHomePage}>Return Home</button>
            </div>
          </section>
        </section>
      </section>
    )
  })
};

export default MovieInfo
