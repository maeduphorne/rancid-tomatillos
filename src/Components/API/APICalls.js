const baseURL = "https://rancid-tomatillos.herokuapp.com/api/v2/movies";
const APICalls = {
  fetchMoviesData() {
    return fetch(`${baseURL}`)
      .then((response) => response.json())
      .catch((error) => console.log(error.message));
  },

  fetchSingleMovieData(id) {
    return fetch(`${baseURL}/${id}`)
      .then((response) => response.json())
      .catch((error) => console.log(error.message));
  },

  fetchMovieVideoData(id) {
    return fetch(`${baseURL}/${id}/videos`)
      .then((response) => response.json())
      .catch((error) => console.log(error.message));
  },
};

export default APICalls;
