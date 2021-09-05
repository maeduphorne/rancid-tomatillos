import React, { Component } from 'react';

//use input value event to filter through and update this.state.movies
class Search extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }

  //create a method to grab the input
  handleInput = async function(event) {
    //Since setState() function in asynchronous, we need to use await and async to make sure we are
    // grabbing most recent typed input. 
    await this.setState({input: event.target.value})
    this.props.setSearchInput(event.target.value)
    this.props.filterMovies()
  }

  handleClear = () => {
    this.setState({input: ''})
  };

  // when an event happens
  // within the search component filter through this.state.movies (passed as props)
  // using this.state.input as an argument in the conditional
  // eliminate MoviesArea display and replace with a new search display that renders filtered movies



  render() {
    return (
      <form action="/" method="get">
        <input
          type="text"
          className="search-bar"
          placeholder="Start Typing to Search"
          name="search"
          value={this.state.input}
          onChange={e => this.handleInput(e)}
        />
        <button className="search-btn" type="submit" onClick={this.handleInput}>Search</button>
        <button className="display-all" type="submit" onClick={this.handleClear}>Display All</button>
      </form>)
    }
}





export default Search;
