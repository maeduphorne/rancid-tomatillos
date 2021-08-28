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
      selectedMovie: [],
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
  return APICalls.fetchSingleMovieData(id)
    .then(data => this.setState({selectedMovie: [data]}))
    .catch(error => this.setState({errorKey: 'Oops! Looks like something went wrong'}))
    // this.state.selectedMovie.length ? this.setState({selectedMovie: []}) : this.setState({selectedMovie: [clickedMovie]})
    //if the length is 0 then keep empty, if not, set state to the clicked movie
  }

  displayHomePage = () => {
      this.setState({
      selectedMovie: []
    })
  }

  render() {
    return (
      <main className='App'>
        <h1>Rancid Tomatillos</h1>
        {this.state.errorKey && <h2>{this.state.errorKey}</h2>}
        {!this.state.selectedMovie.length && <MoviesArea movies={this.state.movies} displayMovie={this.displayMovie}/>}
        <MovieInfo selectedMovie={this.state.selectedMovie} displayHomePage={this.displayHomePage}/>
      </main>
        // ln 27 if ^  this.state.selectedMovie length is null then return regular movie grid,
        // ln 28 else ^ return movie info component
    )

  }
}

export default App;
