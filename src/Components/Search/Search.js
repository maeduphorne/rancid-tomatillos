import React, { Component } from "react";
import "./Search.scss";
class Search extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }

  handleInput = async function (e) {
    await this.setState({ input: e.target.value });
    this.props.filterMovies(e.target.value);
  };

  handleClear = () => {
    this.setState({ input: "" });
  };

  submitSearch = (e) => {
    e.preventDefault();
    this.props.filterMovies(this.state.input);
  };

  render() {
    return (
      <form action="/" method="get">
        <input
          type="text"
          className="search-bar"
          placeholder="Start Typing a Movie Title to Search"
          name="search"
          value={this.state.input}
          onChange={(e) => this.handleInput(e)}
        />
        <div className="btn-styling">
          <button
            className="search-btn"
            type="submit"
            onClick={this.submitSearch}
          >
            Search
          </button>
          <button
            className="display-all"
            type="submit"
            onClick={this.handleClear}
          >
            Display All
          </button>
        </div>
      </form>
    );
  }
}

export default Search;
