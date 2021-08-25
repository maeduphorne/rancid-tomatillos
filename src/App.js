import React, { Component } from 'react';
import movieData from './movieData';
// import Ideas from './Components/Ideas';
// import Form from './Components/Form';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [movieData.movies]
    }
  }

  render() {
    return (
      <main className='App'>
        <h1>Rancid Tomatillos</h1>
      </main>
    )
  }
}

export default App;