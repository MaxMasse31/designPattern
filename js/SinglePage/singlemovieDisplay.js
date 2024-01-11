export class SingleMovieDisplay {
  constructor(Movies) {
    this._movie = Movies;
    this.$moviesWrapper = document.querySelector(".movies-wrapper");
  }

  clearMoviesWrapper() {
    this.$moviesWrapper.innerHTML = "";
  }

  createSingleMovie() {
    const singleMovieContent = `
      <div class="movie-thumbnail center">
        <img alt="${this._movie.title}" src="${this._movie.thumbnail}" />
      </div>
      <h3 class="fs-16 center">${this._movie.title}</h3>
      <p class="fs-14 center">
        <span>${this._movie.released_in}</span>
        -
        <span>${this._movie.duration}</span>
        <button id="btn" class="btn">Voir le détail</button>
      </p>
     
    `;

    this.$moviesWrapper.innerHTML = singleMovieContent;
    return this.$moviesWrapper;
  }

  displayMovieById() {
    this.clearMoviesWrapper();
    this.createSingleMovie();
  }

  render() {
    // Call the displayMovieById method to render the movie
    // Specify the movie ID you want to display
    this.displayMovieById();
  }
}
