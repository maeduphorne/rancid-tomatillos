import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import MoviesArea from '../MoviesArea/MoviesArea'
import MovieInfo from '../MovieInfo/MovieInfo'
import APICalls from '../API/APICalls';
import Search from '../Search/Search'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: ''
    }
  }

  componentDidMount = () => {
    APICalls.fetchMoviesData()
    .then(data => this.setState({movies:[ ...this.state.movies,...data.movies]}))
    .catch(error => this.setState({error: 'Oops! Looks like something went wrong'}))
  }

//make 2 methods:
  // filter this.state.movies using the search input state
    // send 

  render() {
    return (
      <main className='App'>
        <h1>Rancid Tomatillos</h1>
        {this.state.error && <h2>{this.state.error}</h2>}
        <Search movies={this.state.movies}/>
        <Route exact path= '/' render= {() => <MoviesArea movies={this.state.movies} displayMovie={this.displayMovie}/> }/>

        <Route exact path= '/:id' render={({match}) => {
          const currentId = parseInt(match.params.id);
          return <MovieInfo id={currentId}/>
        }}/>
      </main>
    )
  }
}


export default App;
