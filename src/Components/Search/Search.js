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
  handleInput = e => {
    this.setState({input: e.target.value})
  }

  render() {
    return (
      <form action="/" method="get">
      <input
      type="text"
      className="search-bar"
      placeholder="Search movies"
      name="search"
      value={this.state.input}
      onInput={e => this.handleInput(e)}
      />
      <button type="submit">Search</button>
      </form>)
    }
}





export default Search;
