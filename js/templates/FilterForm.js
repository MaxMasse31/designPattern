import { MovieCard } from "../templates/MovieCard.js";
import { FilterMoviesAdapter } from "../adapters/FilterMoviesAdapter.js";
import { movieCardWithPlayer } from "../Decorator/Decorator.js";

export class FilterForm {
  constructor(Movies, sorterForm) {
    this.Movies = Movies;
    this.sorterForm = sorterForm;

    this.$wrapper = document.createElement("div");
    this.$filterFormWrapper = document.querySelector(".filter-form-wrapper");
    this.$moviesWrapper = document.querySelector(".movies-wrapper");
  }

  async filterMovies(actor) {
    this.clearMoviesWrapper();

    const AdaptedFilterLib = new FilterMoviesAdapter(this.Movies, actor);
    const FilteredMovies = await AdaptedFilterLib.filterByActor();

    FilteredMovies.forEach((movie) => {
      const Template = new MovieCard(movie, this.WishListSubject);
      this.$moviesWrapper.appendChild(Template.createMovieCard());
      movieCardWithPlayer(Template, movie);
    });

    this.emitFilterEvent(actor);
  }

  emitFilterEvent(actor) {
    const filterEvent = new CustomEvent("filter", {
      detail: { actor },
    });
    document.dispatchEvent(filterEvent);
  }

  onChangeFilter() {
    this.$wrapper.querySelector("form").addEventListener("change", (e) => {
      const actor = e.target.value;
      this.filterMovies(actor);
    });
  }

  getSelectedActor() {
    const selectElement = this.$wrapper.querySelector("#filter-select");
    return selectElement ? selectElement.value : "";
  }

  clearMoviesWrapper() {
    this.$moviesWrapper.innerHTML = "";
  }

  render() {
    const filterForm = `
      <form class="filter-form" action="#" method="POST">
        <label for="filter-select">Choisissez votre acteur préféré : </label>
        <select name="filter-select" id="filter-select">
          <option value="">Aucun filtre</option>
          <option value="arnold">Arnold Schwarzenegger</option>
          <option value="sylvester">Sylvester Stallone</option>
        </select>
      </form>
    `;

    this.$wrapper.innerHTML = filterForm;
    this.onChangeFilter();

    this.$filterFormWrapper.appendChild(this.$wrapper);
  }
}
