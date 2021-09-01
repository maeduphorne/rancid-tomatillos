import React, { Component } from 'react';
import APICalls from '../API/APICalls';

class MovieInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMovie: null,
      movieTrailer: null
    }
  }

  componentDidMount() {
    console.log('props', this.props)
    APICalls.fetchSingleMovieData(this.props.id)
    .then(data => this.setState({selectedMovie: data.movie}))
    .catch(error => this.setState({error: 'Oops! We are unable to display this movie'}))

    APICalls.fetchMovieVideoData(this.props.id)
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
    if (this.state.selectedMovie === null || undefined ) {
      return (
        <div>
          Loading
        </div>
      )
    }
    // deconstruct all of the properties within this.state.selectedMovie
    const {
      backdrop_path,
      title,
      poster_path,
      release_date,
      overview,
      genres,
      budget,
      runtime,
      tagline,
      revenue,
      average_rating } = this.state.selectedMovie

      return (
        <div>
          { this.state.selectedMovie !== null &&
            <section className='movie-info-container' key={this.state.selectedMovie.id}>
              <section className="banner">
                <img
                  className="backdrop"
                  src={this.state.selectedMovie.backdrop_path}
                  alt={`backdrop`}/>
                <h2 className="title">{title}</h2>
              </section>
              <section className='movie-info'>
                <section className='info-left'>
                  <div className='poster'>
                    <img src={poster_path} alt={`movie poster`}/>
                    <p className='tagline'>{tagline}</p>
                  </div>
                </section>
                <section className='info-right'>
                  <div className='right-wrapper'>
                    <p>Overview: {overview}</p>
                    <p> Release Date: {release_date}</p>
                    <p>Runtime: {runtime} minutes</p>
                    <p> Average Rating: {Math.round(average_rating * 100)/100} / 10</p>
                    <p className='genres'>Genre: {genres}</p>
                    <p>Budget: {budget}</p>
                    <p>Revenue: {revenue}</p>
                  </div>
                </section>
              </section>
            </section>
          }
        </div>
    )
    }
};


export default MovieInfo