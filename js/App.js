// App.js

// Importation des modules et composants nécessaires
import { MovieApi } from "./api/Api.js";
import { MovieCard } from "./templates/MovieCard.js";
import { MoviesFactory } from "./factories/MoviesFactory.js";
import { Form } from "./templates/Modal.js";
import { FilterForm } from "./templates/FilterForm.js";

// Classe principale de l'application
class App {
  constructor() {
    // Éléments DOM pour les films et la fenêtre modale
    this.$moviesWrapper = document.querySelector(".movies-wrapper");
    this.$modalWrapper = document.querySelector(".modal");
    this.$filterFormWrapper = document.querySelector(".filter-form-wrapper");

    // Initialisation des API de films
    this.moviesApi = new MovieApi("/data/new-movie-data.json");
    this.externalMoviesApi = new MovieApi("/data/external-movie-data.json");
  }

  // Fonction principale pour initialiser l'application
  async main() {
    // Récupération des données des films à partir des deux API
    const moviesData = await this.moviesApi.get();
    const externalMoviesData = await this.externalMoviesApi.get();

    // Ajout d'une fenêtre modale au site
    const ModalForm = new Form();
    ModalForm.render();

    // Création d'objets Movie à l'aide de MoviesFactory pour les deux API
    const Movies = moviesData.map(
      (movie) => new MoviesFactory(movie, "newApi")
    );
    const ExternalMovies = externalMoviesData.map(
      (movie) => new MoviesFactory(movie, "externalApi")
    );

    // Combinaison des films provenant des deux API
    const FullMovies = Movies.concat(ExternalMovies);
    // const FullMovies = Movies.concat(ExternalMovies, ThirdMovies);

    //Ajout filter form
    const Filter = new FilterForm(FullMovies);
    Filter.render();

    // Affichage des cartes de films sur le site
    FullMovies.forEach((movie) => {
      const Template = new MovieCard(movie);
      this.$moviesWrapper.appendChild(Template.createMovieCard());
    });
  }
}

const app = new App();
app.main();
