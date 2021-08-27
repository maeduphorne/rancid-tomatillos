import React, { Component } from 'react';
import movieData from '../../movieData';
import MoviesArea from '../MoviesArea/MoviesArea'
import MovieInfo from '../MovieInfo/MovieInfo'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies,
      selectedMovie: []
    }
  }

  displayMovie = (id) => {
    const clickedMovie = this.state.movies.find(movie => movie.id === id);

    this.state.selectedMovie.length ? this.setState({selectedMovie: []}) : this.setState({selectedMovie: [clickedMovie]})
  }

  render() {
    return (
      <main className='App'>
        <h1>Rancid Tomatillos</h1>
        {!this.state.selectedMovie.length && <MoviesArea movies={this.state.movies} displayMovie={this.displayMovie}/>}
        <MovieInfo selectedMovie={this.state.selectedMovie}/>
      </main>
    )

  }
}

export default App;
