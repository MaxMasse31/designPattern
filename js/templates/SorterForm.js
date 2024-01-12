// SorterForm.js

import { ProxyRatingSorter } from "../proxy/Proxy.js";
import { MovieCard } from "./MovieCard.js";
import { FilterV2 } from "../lib/filter-v2/index.js";
import { movieCardWithPlayer } from "../Decorator/Decorator.js";
import { handleThumbnailClick } from "../Decorator/clickSinglePage.js";

export class SorterForm {
  constructor(Movies, filterForm, WishListSubject) {
    this.Movies = Movies;
    this.filterForm = filterForm;

    this.ProxyRatingSorter = new ProxyRatingSorter();
    this.$wrapper = document.createElement("div");
    this.$sorterFormWrapper = document.querySelector(".sorter-form-wrapper");
    this.$moviesWrapper = document.querySelector(".movies-wrapper");

    this.WishListSubject = WishListSubject; // Pass the WishListSubject directly to SorterForm
    this.onChangeSorter = this.onChangeSorter.bind(this);
  }

  async sorterMovies(sorter) {
    try {
      this.clearMoviesWrapper();

      const actorFilter = this.filterForm.getSelectedActor();

      const filteredMovies = actorFilter
        ? await FilterV2.filterByActor(actorFilter, this.Movies)
        : this.Movies;

      if (sorter === "none") {
        // If "Aucun tri" is selected, shuffle the movies randomly
        const shuffledMovies = this.shuffleArray(filteredMovies);

        shuffledMovies.forEach((movie) => {
          const Template = new MovieCard(movie, this.WishListSubject);
          this.$moviesWrapper.appendChild(Template.createMovieCard());
          movieCardWithPlayer(Template, movie);
          handleThumbnailClick(Template, movie);
        });
      } else if (!!sorter) {
        const sortedData = await this.ProxyRatingSorter.sorter(
          filteredMovies,
          sorter,
          actorFilter
        );
        const SortedMovies = sortedData.data;

        SortedMovies.forEach((movie) => {
          const Template = new MovieCard(movie, this.WishListSubject);
          this.$moviesWrapper.appendChild(Template.createMovieCard());
          movieCardWithPlayer(Template, movie);
          handleThumbnailClick(Template, movie);
        });
      } else {
        filteredMovies.forEach((movie) => {
          const Template = new MovieCard(movie, this.WishListSubject);
          movieCardWithPlayer(Template, movie);
          this.$moviesWrapper.appendChild(Template.createMovieCard());
          handleThumbnailClick(Template, movie);
        });
      }

      this.emitSortEvent(sorter);
    } catch (error) {
      console.error("Error sorting movies:", error);
      // Handle or log the error as needed
    }
  }

  shuffleArray(array) {
    // Function to shuffle an array (Fisher-Yates algorithm)
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  emitSortEvent(sorter) {
    const sortEvent = new CustomEvent("sort", {
      detail: { sorter },
    });
    document.dispatchEvent(sortEvent);
  }

  onChangeSorter(event) {
    const sorter = event.target.value;
    this.sorterMovies(sorter);
  }

  clearMoviesWrapper() {
    this.$moviesWrapper.innerHTML = "";
  }

  render() {
    const sorterForm = `
      <form action="#" method="POST" class="sorter-form">
        <label for="sorter-select">Triez par date de sortie : </label>
        <select name="sorter-select" id="sorter-select">
          <option value="none">Aucun tri</option>
          <option value="ASC">Croissante</option>
          <option value="DESC">Décroissante</option>
        </select>
      </form>
    `;

    this.$wrapper.innerHTML = sorterForm;
    this.$wrapper.addEventListener("change", this.onChangeSorter);

    this.$sorterFormWrapper.appendChild(this.$wrapper);
  }
}
