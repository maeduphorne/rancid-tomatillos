import React, { Component } from 'react';
// import movieData from '../../movieData';
import MoviesArea from '../MoviesArea/MoviesArea'
import MovieInfo from '../MovieInfo/MovieInfo'
import APICalls from '../API/APICalls';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      selectedMovie: '',
      movieTrailer: '',
      errorKey: ''
    }
  }

  componentDidMount = () => {
    APICalls.fetchMoviesData()
    .then(data => this.setState({movies:[ ...this.state.movies,...data.movies]}))
    .catch(error => this.setState({errorKey: 'Oops! Looks like something went wrong'}))
  }

// Fetch single movie data
// pass through the movie.id of what is held in selectedMovie state

  displayMovie = (id) => {
    // const clickedMovie =
    // this.state.movies.find(movie => movie.id === id);
    APICalls.fetchSingleMovieData(id)
    .then(data => this.state.selectedMovie ? this.setState({selectedMovie: ''}) : this.setState({selectedMovie: data}))
    .catch(error => this.setState({errorKey: 'Oops! We are unable to display this movie'}))

    APICalls.fetchMovieVideoData(id)
    .then(data => this.setState({movieTrailer: data.videos}))
    .catch(error => this.setState({errorKey: 'Oops! We are unable to dsiplay this trailer'}))
    // this.setState({selectedMovie: data})
    //if the length is 0 then keep empty, if not, set state to the clicked movie
  }

  displayHomePage = () => {
      this.setState({
      selectedMovie: ''
    })
  }

  render() {
    return (
      <main className='App'>
        <h1>Rancid Tomatillos</h1>
        {this.state.errorKey && <h2>{this.state.errorKey}</h2>}
        {!this.state.selectedMovie && <MoviesArea movies={this.state.movies} displayMovie={this.displayMovie}/>}
        {this.state.selectedMovie && <MovieInfo selectedMovie={this.state.selectedMovie.movie} movieTrailer={this.state.movieTrailer} displayHomePage={this.displayHomePage}/>}
      </main>
        // ln 27 if ^  this.state.selectedMovie length is null then return regular movie grid,
        // ln 28 else ^ return movie info component
    )

  }
}

export default App;
