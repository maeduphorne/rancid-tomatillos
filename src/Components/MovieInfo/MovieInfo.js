import React from 'react';

const MovieInfo = (props) => {
  console.log('props', props.selectedMovie.movie)
  // return props.selectedMovie.movie.map(movie => {
    return (
      <section className='movie-info-container' key={props.selectedMovie.id}>
        <section className="banner">
          <img
            className="backdrop"
            src={props.selectedMovie.backdrop_path}
            alt={`backdrop for ${props.selectedMovie.title}`}
          />
          <h2 className="title">{props.selectedMovie.title}</h2>
        </section>
        <section className='movie-info'>
          <section className='info-left'>
            <div className='poster'>
              <img src={props.selectedMovie.poster_path} alt={`movie poster for ${props.selectedMovie.title}`}/>
              <p className='tagline'>{props.selectedMovie.tagline}</p>
            </div>
          </section>
          <section className='info-right'>
            <div className='right-wrapper'>
              <p>Overview: {props.selectedMovie.overview}</p>
              <p> Release Date: {props.selectedMovie.release_date}</p>
              <p>Runtime: {props.selectedMovie.runtime} minutes</p>
              <p> Average Rating: {Math.round(props.selectedMovie.average_rating * 100)/100} / 10</p>
              <p className='genres'>Genre: {props.selectedMovie.genres}</p>
              <p>Budget: {props.selectedMovie.budget}</p>
              <p>Revenue: {props.selectedMovie.revenue}</p>
              <button onClick={props.displayHomePage}>Return Home</button>
            </div>
          </section>
        </section>
      </section>
    )
  // })
};

export default MovieInfo
