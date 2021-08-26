import React, { Component } from 'react';
import movieData from '../../movieData';
import MoviesArea from '../MoviesArea/MoviesArea'
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
    // console.log(id)
    const findMovie = this.state.movies.find(movie => movie.id === id);
    // console.log(findMovie)
    this.setState({ selectedMovie: findMovie })
    console.log(this.state.selectedMovie)
  }

  render() {
    return (
      <main className='App'>
        <h1>Rancid Tomatillos</h1>
        {this.state.selectedMovie === 1 && <p>{this.state.selectedMovie.title}</p>}
        <MoviesArea movies={this.state.movies} displayMovie={this.displayMovie} />
      </main>
    )
  }
}

export default App;
