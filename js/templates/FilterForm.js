import { MovieCard } from "./MovieCard.js";
import { FilterMoviesAdapter } from "../adapters/FilterMoviesAdapter.js";
import { movieCardWithPlayer } from "../Decorator/Decorator.js";
import { handleThumbnailClick } from "../Decorator/clickSinglePage.js";

export class FilterForm {
  constructor(Movies, WishListSubject) {
    this.Movies = Movies;
    this.WishListSubject = WishListSubject;
    this.$wrapper = document.createElement("div");
    this.$filterFormWrapper = document.querySelector(".filter-form-wrapper");
    this.$moviesWrapper = document.querySelector(".movies-wrapper");

    this.onChangeFilter = this.onChangeFilter.bind(this);
  }

  async filterMovies(actor) {
    this.clearMoviesWrapper();

    const adaptedFilterLib = new FilterMoviesAdapter(this.Movies, actor);
    const filteredMovies = await adaptedFilterLib.filterByActor();

    filteredMovies.forEach((movie) => {
      const template = new MovieCard(movie, this.WishListSubject);
      const movieCardElement = template.createMovieCard();

      const container = document.createElement("div");
      container.appendChild(movieCardElement);

      this.$moviesWrapper.appendChild(container);

      movieCardWithPlayer(template, movie);
      handleThumbnailClick(template, movie);


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
    this.filterMovies(this.getSelectedActor());
  }

  getSelectedActor() {
    const selectElement = this.$wrapper.querySelector("#filter-select");
    return selectElement ? selectElement.value : "";
  }

  clearMoviesWrapper() {
    this.$moviesWrapper.innerHTML = "";
  }

  render() {
    // Vérifiez si vous êtes sur la page singlePage avant d'attacher le formulaire
    const isSinglePage = window.location.pathname.includes('singlePage.html');
    
    if (!isSinglePage) {
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
      this.$wrapper
        .querySelector("form")
        .addEventListener("change", this.onChangeFilter);
  
      this.$filterFormWrapper.appendChild(this.$wrapper);
    }
  }
       
}
