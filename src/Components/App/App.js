import React, { Component } from "react";
import { Route } from "react-router-dom";
import MoviesArea from "../MoviesArea/MoviesArea";
import MovieInfo from "../MovieInfo/MovieInfo";
import APICalls from "../API/APICalls";
import Search from "../Search/Search";
import Nav from "../Nav/Nav"
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

  setMovies = (searchResult) => {
    if (!searchResult.length) {
      this.setState({error: 'Uh oh! We can\'t find the title you\'re looking for - please try searching another title.'})
    } else {
      this.setState({searchResult, error: ''})
    }
  }

  filterMovies = (value) => {
    this.setState({ searchInput: value });
    const filteredMovies = this.state.movies.filter((movie) => movie.title.toLowerCase().includes(this.state.searchInput.toLowerCase()))
    this.setState({ searchResult: filteredMovies })
    this.setMovies(filteredMovies)
  };

  render() {
    return (
      <main className="App">
        <Nav/>
        {this.state.error && <h2>{this.state.error}</h2>}
        {this.state.movies ? (<Search filterMovies={this.filterMovies} />) : null}
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
