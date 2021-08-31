import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import MoviesArea from '../MoviesArea/MoviesArea'
import MovieInfo from '../MovieInfo/MovieInfo'
import APICalls from '../API/APICalls';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      selectedMovie: null,
      movieTrailer: '',
      error: ''
    }
  }

  componentDidMount = () => {
    APICalls.fetchMoviesData()
    .then(data => this.setState({movies:[ ...this.state.movies,...data.movies]}))
    .catch(error => this.setState({error: 'Oops! Looks like something went wrong'}))
  }

  displayMovie = (id) => {
    APICalls.fetchSingleMovieData(id)
    .then(data => this.state.selectedMovie ? this.setState({selectedMovie: ''}) : this.setState({selectedMovie: data}))
    .catch(error => this.setState({error: 'Oops! We are unable to display this movie'}))

    APICalls.fetchMovieVideoData(id)
    .then(data => this.setState({movieTrailer: data.videos}))
    .catch(error => this.setState({error: 'Oops! We are unable to dsiplay this trailer'}))
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
        {this.state.error && <h2>{this.state.error}</h2>}
        {!this.state.selectedMovie && <MoviesArea movies={this.state.movies} displayMovie={this.displayMovie}/>}
        {this.state.selectedMovie && <MovieInfo selectedMovie={this.state.selectedMovie.movie} movieTrailer={this.state.movieTrailer} displayHomePage={this.displayHomePage}/>}
      </main>
    )
  }
}

export default App;
