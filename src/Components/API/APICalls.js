const APICalls = {
    fetchMoviesData() {
        return  fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movie')
        .then(response =>response.json())
        .catch(error => console.log(error.message))
    },

    fetchSingleMovieData(id) {
        return  fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
        .then(response =>response.json())
        .catch(error => console.log(error.message))
    }
}

export default APICalls
