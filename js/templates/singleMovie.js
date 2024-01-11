export class singleMovie {
  constructor(movie, targetElement) {
    this._movie = movie;
    this.$wrapper = document.createElement("div");
    this.$wrapper.classList.add("movie-card-wrapper");
    this.targetElement = targetElement; // Ajout de la référence à l'élément du DOM
  }

  get movie() {
    return this._movie;
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
    return this.$wrapper;
  }

  render() {
    this.createSingleMovie();
  }
}
