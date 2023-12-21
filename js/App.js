// App.js

// Importation des modules et composants nécessaires
import { MovieApi } from "./api/Api.js";
import { MovieCard } from "./templates/MovieCard.js";
import { MoviesFactory } from "./factories/MoviesFactory.js";
import { Form } from "./templates/Modal.js";
import { FilterForm } from "./templates/FilterForm.js";
import { movieCardWithPlayer } from "./Decorator/Decorator.js";
import { SorterForm } from "./templates/SorterForm.js";

class App {
  constructor() {
    this.$moviesWrapper = document.querySelector(".movies-wrapper");
    this.$modalWrapper = document.querySelector(".modal");

    this.moviesApi = new MovieApi("/data/new-movie-data.json");
    this.externalMoviesApi = new MovieApi("/data/external-movie-data.json");
  }

  async main() {
    const moviesData = await this.moviesApi.get();
    const externalMoviesData = await this.externalMoviesApi.get();

    const Movies = moviesData.map((movie) => new MoviesFactory(movie, "newApi"));
    const ExternalMovies = externalMoviesData.map((movie) => new MoviesFactory(movie, "externalApi"));

    const FullMovies = Movies.concat(ExternalMovies);

    const DataForm = new Form();
    DataForm.render();

    const Filter = new FilterForm(FullMovies);
    const Sorter = new SorterForm(FullMovies, Filter);

    Filter.render();
    Sorter.render();

    FullMovies.forEach((movie) => {
      const Template = new MovieCard(movie);
      this.$moviesWrapper.appendChild(Template.createMovieCard());
      // Appliquez le Decorator pattern au template de la carte de film
      movieCardWithPlayer(Template, movie);
    });
  }
}

const app = new App();
app.main();
