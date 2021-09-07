import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./MoviesArea.scss";

const MoviesArea = (props) => {
  const movieCards = props.movies.map((movie) => {
    return (
      <MovieCard
        key={movie.id}
        movieObj={movie}
        displayMovie={props.displayMovie}
      />
    );
  });

  return <div className="movies-area">{movieCards}</div>;
};

export default MoviesArea;
