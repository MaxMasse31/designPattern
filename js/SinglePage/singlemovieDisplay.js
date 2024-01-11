import { singleMovie } from "../templates/singleMovie.js";
import {MovieCard} from "../templates/MovieCard.js"

export class SingleMovieDisplay {
  constructor(Movies) {
    this.Movies = Movies;
    this.$wrapper = document.createElement("div");
    this.$moviesWrapper = document.querySelector('.movies-wrapper')
  }

  clearMoviesWrapper() {
    this.$moviesWrapper.innerHTML = ""
}


displayMovies(Movies) {
    this.clearMoviesWrapper();

    Movies.forEach((movie) => {
      if (movie.id === Movies.id) {
        const template = new singleMovie(movie);
        this.$moviesWrapper.appendChild(template.createSingleMovie());
      }
    });
}

render() {
    // Call the displayMovies method to render the movies
    this.displayMovies(this.Movies);
  }





}
