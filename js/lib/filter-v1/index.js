export class FilterV1 {
  /**
   *
   * @param {array} Movies
   * @param {string} actor
   */
  constructor(Movies, actor) {
    this._Movies = Movies;
    this._actor = actor;
  }

  async filterByActor() {
    await new Promise((resolve) => setTimeout(resolve, 250));

    console.log("FilterByActor called with actor:", this._actor);

    if (!this._actor) {
      console.log("No actor specified, returning all movies.");
      return this._Movies;
    }

    const FilteredMovies = [];

    for (let i = 0; i < this._Movies.length; i++) {
      if (this._Movies[i].actor === this._actor) {
        FilteredMovies.push(this._Movies[i]);
      }
    }

    console.log("Filtered movies:", FilteredMovies);
    return FilteredMovies;
  }
}
