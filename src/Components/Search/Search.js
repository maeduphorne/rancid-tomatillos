import React, { Component } from 'react';
import "./Search.css";
class Search extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }

  handleInput = async function(e) {
    //Since setState() function in asynchronous, we need to use await and async to make sure we are
    // grabbing most recent typed input.
    await this.setState({input: e.target.value})
    this.props.filterMovies(e.target.value)
  }

  handleClear = () => {
    this.setState({input: ''})
  };

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
// having issues with the search button - redisplaying all movies when search is hit





export default Search;
