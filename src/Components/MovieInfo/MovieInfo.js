import React, { Component } from "react";
import { Link } from "react-router-dom";
import APICalls from "../API/APICalls";

class MovieInfo extends Component {
  constructor() {
    super();
    this.state = {
      selectedMovie: null,
      movieTrailer: null,
    };
  }

  componentDidMount() {
    console.log("props", this.props);
    APICalls.fetchSingleMovieData(this.props.id)
      .then((data) => this.setState({ selectedMovie: data.movie }))
      .catch((error) =>
        this.setState({ error: "Oops! We are unable to display this movie" })
      );

    APICalls.fetchMovieVideoData(this.props.id)
      .then((data) => this.setState({ movieTrailer: data.videos[0].key }))
      .catch((error) =>
        this.setState({ error: "Oops! We are unable to display this trailer" })
      );
  }

   displayGenres() {
    return this.state.selectedMovie.genres.map(genre => {
      return (
        <div className="genre" key={Math.random()}>
          {genre}
        </div>
      )
    })
  }

  render() {
    if (this.state.selectedMovie === null || undefined) {
      return <div>Loading</div>;
    }
    // deconstruct all of the properties within this.state.selectedMovie
    const {
      backdrop_path,
      title,
      poster_path,
      release_date,
      overview,
      genres,
      budget,
      runtime,
      tagline,
      revenue,
      average_rating,
      id
    } = this.state.selectedMovie;

    return (
      <div>
        {this.state.selectedMovie !== null && (
          <section
            className="movie-info-container"
            key={id}
          >
            <section className="banner">
              <img
                className="backdrop"
                src={backdrop_path}
                alt={`backdrop`}
              />
              <h2 className="title">{title}</h2>
            </section>
            <section className="movie-info">
              <section className="info-left">
                <div className="poster">
                  <img src={poster_path} alt={`movie poster`} />
                  <p className="tagline">{tagline}</p>
                </div>
              </section>
              <section className="info-right">
                <div className="right-wrapper">
                  <p>Overview: {overview}</p>
                  <p> Release Date: {release_date}</p>
                  <p>Runtime: {runtime} minutes</p>
                  <p>
                    {" "}
                    Average Rating: {Math.round(average_rating * 100) / 100} /
                    10
                  </p>
                  <div className="genres">Genre: {this.displayGenres()}</div>
                  {budget !== 0 && <p>Budget: {`$${Intl.NumberFormat('en-US').format(budget)}`}</p>}
                  {revenue !== 0 && <p>Revenue: {`$${Intl.NumberFormat('en-US').format(revenue)}`}</p>}
                  <Link to={"/"} className="home-btn">
                    Return Home
                  </Link>
                </div>
              </section>
            </section>
            <section className="trailer">
              { this.state.movieTrailer !== null && (
                <iframe
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${this.state.movieTrailer}`}
                  title="YouTube video player"
                ></iframe>
              )}
            </section>
          </section>
        )}
      </div>
    );
  }
}

export default MovieInfo;
