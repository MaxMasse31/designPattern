// SorterForm.js

import { RatingSorterApi } from "../lib/sorter/index.js";
import { ProxyRatingSorter } from "../proxy/Proxy.js";
import { MovieCard } from "../templates/MovieCard.js";
import { FilterV2 } from "../lib/filter-v2/index.js";

export class SorterForm {
  constructor(Movies, filterForm) {
    this.Movies = Movies;
    this.filterForm = filterForm; // Assurez-vous que le nom est correctement défini ici

    this.ProxyRatingSorter = new ProxyRatingSorter();
    this.$wrapper = document.createElement("div");
    this.$sorterFormWrapper = document.querySelector(".sorter-form-wrapper");
    this.$moviesWrapper = document.querySelector(".movies-wrapper");
  }

  async sorterMovies(sorter) {
    this.clearMoviesWrapper();

    // Utiliser this.filterForm.getSelectedActor() au lieu de filterForm.getSelectedActor()
    const actorFilter = this.filterForm.getSelectedActor();

    const filteredMovies = actorFilter
      ? await FilterV2.filterByActor(actorFilter, this.Movies)
      : this.Movies;

    if (!!sorter) {
      const sortedData = await this.ProxyRatingSorter.sorter(
        filteredMovies,
        sorter,
        actorFilter
      );
      const SortedMovies = sortedData.data;

      SortedMovies.forEach((movie) => {
        const Template = new MovieCard(movie);
        this.$moviesWrapper.appendChild(Template.createMovieCard());
      });
    } else {
      filteredMovies.forEach((movie) => {
        const Template = new MovieCard(movie);
        this.$moviesWrapper.appendChild(Template.createMovieCard());
      });
    }

    this.emitSortEvent(sorter);
  }

  emitSortEvent(sorter) {
    const sortEvent = new CustomEvent("sort", {
      detail: { sorter },
    });
    document.dispatchEvent(sortEvent);
  }

  onChangeSorter() {
    this.$wrapper.querySelector("form").addEventListener("change", (e) => {
      const sorter = e.target.value;
      this.sorterMovies(sorter);
    });
  }

  clearMoviesWrapper() {
    this.$moviesWrapper.innerHTML = "";
  }

  render() {
    const sorterForm = `
      <form action="#" method="POST" class="sorter-form">
        <label for="sorter-select">Triez par date de sortie : </label>
        <select name="sorter-select" id="sorter-select">
          <option value="">Aucun tri</option>
          <option value="ASC">Croissante</option>
          <option value="DESC">Décroissante</option>
        </select>
      </form>
    `;

    this.$wrapper.innerHTML = sorterForm;
    this.onChangeSorter();

    this.$sorterFormWrapper.appendChild(this.$wrapper);
  }
}