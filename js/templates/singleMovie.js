export class singleMovie {
  constructor(movie) {
    this._movie = movie;
    this.$wrapper = document.createElement("div");
    this.$wrapper.classList.add("single-movie-wrapper");
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
        </p>
        <button id="btn" class="btn">Voir le détail</button>
      `;

    this.$wrapper.innerHTML = singleMovieContent;
  }

  render() {
    this.createSingleMovie();
    document.body.appendChild(this.$wrapper);
  }
}
