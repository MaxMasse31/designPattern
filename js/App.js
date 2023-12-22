// App.js

import { MovieApi } from "./api/Api.js";
import { MovieCard } from "./templates/MovieCard.js";
import { MoviesFactory } from "./factories/MoviesFactory.js";
import { Form } from "./templates/Modal.js";
import { FilterForm } from "./templates/FilterForm.js";
import { movieCardWithPlayer } from "./Decorator/Decorator.js";
import { SorterForm } from "./templates/SorterForm.js";
import { WhishListCounter } from "./Observer/Counter.js";
import { WishlistSubject } from "./Observer/Subject.js";

class App {
  constructor() {
    this.$moviesWrapper = document.querySelector(".movies-wrapper");
    this.$modalWrapper = document.querySelector(".modal");

    this.moviesApi = new MovieApi("/data/new-movie-data.json");
    this.externalMoviesApi = new MovieApi("/data/external-movie-data.json");

    // WishLib Pub/sub
    this.WishlistSubject = new WishlistSubject();
    this.WhishListCounter = new WhishListCounter();
    this.WishlistSubject.subscribe(this.WhishListCounter);
  }

  async main() {
    const moviesData = await this.moviesApi.get();
    const externalMoviesData = await this.externalMoviesApi.get();

    const Movies = moviesData.map(
      (movie) => new MoviesFactory(movie, "newApi")
    );
    const ExternalMovies = externalMoviesData.map(
      (movie) => new MoviesFactory(movie, "externalApi")
    );

    const FullMovies = Movies.concat(ExternalMovies);

    const DataForm = new Form();
    DataForm.render();

    const Filter = new FilterForm(FullMovies);
    const Sorter = new SorterForm(FullMovies, Filter, this.WishlistSubject);

    Filter.render();
    Sorter.render();

    FullMovies.forEach((movie) => {
      const Template = new MovieCard(movie, this.WishlistSubject);
      this.$moviesWrapper.appendChild(Template.createMovieCard());
      // Apply the Decorator pattern to the movie card template
      movieCardWithPlayer(Template, movie);
    });
  }
}

const app = new App();
app.main();
