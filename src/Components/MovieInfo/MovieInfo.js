import React, { Component } from 'react';
import APICalls from '../API/APICalls';

class MovieInfo extends Component {
  constructor() {
    super();
    this.state = {
      selectedMovie: null,
      movieTrailer: null
    }
  }
  componentDidMount = () => {

    APICalls.fetchSingleMovieData(this.props.movie.id,)
    .then(data => this.state.selectedMovie ? this.setState({selectedMovie: null}) : this.setState({selectedMovie: data}))
    .catch(error => this.setState({error: 'Oops! We are unable to display this movie'}))

    APICalls.fetchMovieVideoData(this.props.movie.id,)
    .then(data => this.setState({movieTrailer: data.videos}))
    .catch(error => this.setState({error: 'Oops! We are unable to display this trailer'}))
  }

  // turn into class Component
  // displayMovieInfo should take the id from the URL, which we can access using the match object
  // should call displayMovieInfo on componentDidMount. this fetches the movie data

  // const {selectedMovie, displayHomePage, movieTrailer} = props;

  // const displayGenres = () => {
  //   return selectedMovie.genres.map(genre => {
  //     <div>
  //       {genre}
  //     </div>
  //   })
  // }

  render() {
      return (
        <section className='movie-info-container' key={this.state.selectedMovie.id}>
          <section className="banner">
            <img
              className="backdrop"
              src={this.state.selectedMovie.backdrop_path}
              alt={`backdrop for ${this.state.selectedMovie.title}`}
            />
            <h2 className="title">{this.state.selectedMovie.title}</h2>
          </section>
          <section className='movie-info'>
            <section className='info-left'>
              <div className='poster'>
                <img src={this.state.selectedMovie.poster_path} alt={`movie poster for ${this.state.selectedMovie.title}`}/>
                <p className='tagline'>{this.state.selectedMovie.tagline}</p>
              </div>
            </section>
            <section className='info-right'>
              <div className='right-wrapper'>
                <p>Overview: {this.state.selectedMovie.overview}</p>
                <p> Release Date: {this.state.selectedMovie.release_date}</p>
                <p>Runtime: {this.state.selectedMovie.runtime} minutes</p>
                <p> Average Rating: {Math.round(this.state.selectedMovie.average_rating * 100)/100} / 10</p>
                <p className='genres'>Genre: {this.state.selectedMovie.genres}</p>
                <p className='genres'>Genre: {this.state.displayGenres}</p>
                <p>Budget: {this.state.selectedMovie.budget}</p>
                <p>Revenue: {this.state.selectedMovie.revenue}</p>
                <button onClick={this.state.displayHomePage}>Return Home</button>
              </div>
            </section>
          </section>
          <section className='trailer'>
            {this.state.movieTrailer.length && <iframe width="560" height="315" src={`https://www.youtube.com/embed/${this.state.movieTrailer[0].key}`} title="YouTube video player">
            </iframe>}
          </section>
        </section>
      )
    }

};


export default MovieInfo
