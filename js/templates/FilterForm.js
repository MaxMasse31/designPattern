import { MovieCard } from "../templates/MovieCard.js";
import { FilterMoviesAdapter } from "../adapters/FilterMoviesAdapter.js";
import { movieCardWithPlayer } from "../Decorator/Decorator.js";

export class FilterForm {
  constructor(Movies) {
    this.Movies = Movies;

    this.$wrapper = document.createElement("div");
    this.$filterFormWrapper = document.querySelector(".filter-form-wrapper");
    this.$moviesWrapper = document.querySelector(".movies-wrapper");
  }

  async filterMovies(actor) {
    this.clearMoviesWrapper();

    const AdaptedFilterLib = new FilterMoviesAdapter(this.Movies, actor);
    const FilteredMovies = await AdaptedFilterLib.filterByActor();

    FilteredMovies.forEach((movie) => {
      const Template = new MovieCard(movie);
      this.$moviesWrapper.appendChild(Template.createMovieCard());
      movieCardWithPlayer(Template, movie);
    });
  }

  onChangeFilter() {
    this.$wrapper.querySelector("form").addEventListener("change", (e) => {
      const actor = e.target.value;
      this.filterMovies(actor);
    });
  }

  clearMoviesWrapper() {
    this.$moviesWrapper.innerHTML = "";
  }

  render() {
    const filterForm = `
            <form class="filter-form" action="#" method="POST">
                <label for="filter-select">Choississez votre acteur préféré : </label>
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
