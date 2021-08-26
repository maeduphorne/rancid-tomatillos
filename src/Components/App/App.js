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
      selectedMovie: [

      ]
    }
  }

  displayMovie = (id) => {
    // console.log(id)
    const findMovie = this.state.movies.find(movie => movie.id === id);
    console.log("clicked movie:", findMovie)
    console.log("selected movie:", this.state.selectedMovie)
    this.setState({ selectedMovie: findMovie })
    console.log("selected movie title only:", this.state.selectedMovie.title)
  }

  render() {
    return (
      <main className='App'>
        <h1>Rancid Tomatillos</h1>
        {this.state.selectedMovie === 1 && <h4>{this.state.selectedMovie.title}</h4>}
        <MoviesArea movies={this.state.movies} displayMovie={this.displayMovie} />
        <MovieInfo movie={this.state.selectedMovie}/>
      </main>
    )
  }
}

export default App;
