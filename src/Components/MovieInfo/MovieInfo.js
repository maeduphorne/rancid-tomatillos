import React, { Component } from 'react';
import APICalls from '../API/APICalls';

class MovieInfo extends Component {
  constructor() {
    super();
    this.state = {
      selectedMovie: null,
      movieTrailer: null
    }
  }

  componentDidMount = (id) => {

    APICalls.fetchSingleMovieData(id).then(data => {
      console.log(data)
      return
        this.state.selectedMovie ? this.setState({selectedMovie: null}) : this.setState({selectedMovie: data.movie})
    })
    .catch(error => this.setState({error: 'Oops! We are unable to display this movie'}))

    APICalls.fetchMovieVideoData(id)
    .then(data => this.setState({movieTrailer: data.videos}))
    .catch(error => this.setState({error: 'Oops! We are unable to display this trailer'}))
  }

  // turn into class Component
  // displayMovieInfo should take the id from the URL, which we can access using the match object
  // should call displayMovieInfo on componentDidMount. this fetches the movie data

  // const {selectedMovie, displayHomePage, movieTrailer} = props;

  // const displayGenres = () => {
  //   return selectedMovie.genres.map(genre => {
  //     <div>
  //       {genre}
  //     </div>
  //   })
  // }

  render() {
      // return (
      //   <section className='movie-info-container' key={selectedMovie.id}>
      //     <section className="banner">
      //       <img
      //         className="backdrop"
      //         src={selectedMovie.backdrop_path}
      //         alt={`backdrop for ${selectedMovie.title}`}
      //       />
      //       <h2 className="title">{selectedMovie.title}</h2>
      //     </section>
      //     <section className='movie-info'>
      //       <section className='info-left'>
      //         <div className='poster'>
      //           <img src={selectedMovie.poster_path} alt={`movie poster for ${selectedMovie.title}`}/>
      //           <p className='tagline'>{selectedMovie.tagline}</p>
      //         </div>
      //       </section>
      //       <section className='info-right'>
      //         <div className='right-wrapper'>
      //           <p>Overview: {selectedMovie.overview}</p>
      //           <p> Release Date: {selectedMovie.release_date}</p>
      //           <p>Runtime: {selectedMovie.runtime} minutes</p>
      //           <p> Average Rating: {Math.round(selectedMovie.average_rating * 100)/100} / 10</p>
      //           <p className='genres'>Genre: {selectedMovie.genres}</p>
      //           <p className='genres'>Genre: {displayGenres}</p>
      //           <p>Budget: {selectedMovie.budget}</p>
      //           <p>Revenue: {selectedMovie.revenue}</p>
      //           <button onClick={displayHomePage}>Return Home</button>
      //         </div>
      //       </section>
      //     </section>
      //     <section className='trailer'>
      //       {movieTrailer.length && <iframe width="560" height="315" src={`https://www.youtube.com/embed/${props.movieTrailer[0].key}`} title="YouTube video player">
      //       </iframe>}
      //     </section>
      //   </section>
      // )
      <h1>HELLO</h1>
      return (console.log('HELLO'))
    }

};


export default MovieInfo
