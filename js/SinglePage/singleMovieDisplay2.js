import { singleMovie } from "../templates/singleMovie.js";

export class SingleMovieDisplay {
  constructor(movies, wrapperElement) {
    this.movies = movies;
    this.$wrapper = wrapperElement;
  }

  displaySingleMovie(movieId) {
    const movie = this.movies.find((m) => m.id === movieId);
    console.log(movie);

    if (movie) {
      this.clearWrapper();
      const singleMovieInstance = new singleMovie(movie);
      singleMovieInstance.render();
      this.$wrapper.appendChild(singleMovieInstance.$wrapper);
    } else {
      console.error(`Movie with ID ${movieId} not found.`);
    }
  }

  clearWrapper() {
    this.$wrapper.innerHTML = ""; // Clear all content in the wrapper
  }
}