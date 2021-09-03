import React from 'react';

const Search = () => {
  return (
    <form action="/" method="get">
     <input
         type="text"
         className="search-bar"
         placeholder="Search movies"
         name="search"
     />
     <button type="submit">Search</button>
  </form>)
}

export default Search;
