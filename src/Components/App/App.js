import React, { Component } from "react";
import { Route } from "react-router-dom";
import MoviesArea from "../MoviesArea/MoviesArea";
import MovieInfo from "../MovieInfo/MovieInfo";
import APICalls from "../API/APICalls";
import Search from "../Search/Search";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: "",
      searchInput: "",
      searchResult: [],
    };
  }

  componentDidMount = () => {
    APICalls.fetchMoviesData()
      .then((data) =>
        this.setState({ movies: [...this.state.movies, ...data.movies] })
      )
      .catch((error) =>
        this.setState({ error: "Oops! Looks like something went wrong" })
      );
  };

  setSearchInput = (value) => {
    this.setState({ searchInput: value });
    console.log(this.state.searchInput)
  };

  setMovies = (searchResult) => {
    if (!searchResult.length) {
      this.setState({error: 'Looks like we don\'t have that movie title - try searching another title.'})
    } else {
      this.setState({searchResult, error: ''})
      console.log(this.state.searchResult)
    }
  }

  filterMovies = () => {
    const filteredMovies = this.state.movies.filter((movie) => movie.title.toLowerCase().includes(this.state.searchInput.toLowerCase()))
    this.setState({ searchResult: filteredMovies })
    this.setMovies(filteredMovies)
    console.log(filteredMovies)
    console.log(this.state.searchResult)
  };

  render() {
    return (
      <main className="App">
        <h1>Rancid Tomatillos</h1>
        {this.state.error && <h2>{this.state.error}</h2>}
        {this.state.movies ? (<Search setSearchInput={this.setSearchInput} filterMovies={this.filterMovies} />) : null}
        {this.state.movies && this.state.searchResult && (
          <Route exact path="/" render={() => (
              <MoviesArea movies={this.state.searchResult} displayMovie={this.displayMovie} />
            )}
          />
        )}
        {!this.state.error && !this.state.searchResult.length && (
          <Route exact path="/" render={() => (
              <MoviesArea movies={this.state.movies} displayMovie={this.displayMovie} />
            )}
          />
        )}
          <Route exact path="/:id" render={({ match }) => {
            const currentId = parseInt(match.params.id);
            return <MovieInfo id={currentId} />}
          }
          />
      </main>
    );
  }
}

export default App;
