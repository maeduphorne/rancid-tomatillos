import React, { Component } from "react";
import { Link } from "react-router-dom";
import APICalls from "../API/APICalls";

class MovieInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMovie: null,
      movieTrailer: null,
    };
  }

  componentDidMount() {
    APICalls.fetchSingleMovieData(this.props.id)
      .then((data) => this.setState({ selectedMovie: data.movie }))
      .then(this.props.updateMovieSelection(true))
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
      return <div className="loading">Loading</div>;
    }

    const {
      backdrop_path,
      title,
      poster_path,
      release_date,
      overview,
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
                alt={`backdrop of ${title}`}
              />
              <h2 className="movie-title">{title}</h2>
            </section>
            <section className="movie-info">
              <section className="info-left">
                <div className="poster">
                  <img src={poster_path} alt={`movie poster of ${title}`} />
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
                  <div className="genre-section">
                    Genre:
                    <div className="genre-tags">
                    {this.displayGenres()}
                    </div>
                  </div>
                  {budget !== 0 && <p>Budget: {`$${Intl.NumberFormat('en-US').format(budget)}`}</p>}
                  {revenue !== 0 && <p>Revenue: {`$${Intl.NumberFormat('en-US').format(revenue)}`}</p>}
                  <Link to={"/"} className="home-btn" onClick={() => this.props.updateMovieSelection(false)}>
                    Return Home
                  </Link>
                </div>
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
          </section>
        )}
      </div>
    );
  }
}

export default MovieInfo;
