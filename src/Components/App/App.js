import React, { Component } from 'react';
import movieData from '../../movieData';
import MoviesArea from '../MoviesArea/MoviesArea'
// import Ideas from './Components/Ideas';
// import Form from './Components/Form';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies
    }
  }

  render() {
    return (
      <main className='App'>
        <h1>Rancid Tomatillos</h1>
        <MoviesArea movies={this.state.movies}/>
      </main>
    )
  }
}

export default App;
