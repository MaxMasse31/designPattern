import { MovieApi } from "./api/Api.js";
import { MovieCard } from "./templates/MovieCard.js";
import { MoviesFactory } from "./factories/MoviesFactory.js";
import { FormModal } from "./templates/Modal.js";
import { FilterForm } from "./templates/FilterForm.js";
import { movieCardWithPlayer } from "./Decorator/Decorator.js";
import { SorterForm } from "./templates/SorterForm.js";
import { WhishListCounter } from "./Observer/Counter.js";
import { WishlistSubject } from "./Observer/Subject.js";
import { UserContext } from "./User/Context.js";

class App {
  constructor() {
    // Sélection des éléments du DOM
    this.$moviesWrapper = document.querySelector(".movies-wrapper");
    this.$modalWrapper = document.querySelector(".modal");

    // Initialisation de l'API des films
    this.moviesApi = new MovieApi("/data/new-movie-data.json");
    this.externalMoviesApi = new MovieApi("/data/external-movie-data.json");

    // Initialisation du système de liste de souhaits (WishList)
    this.wishlistSubject = new WishlistSubject();
    this.wishListCounter = new WhishListCounter();
    this.wishlistSubject.subscribe(this.wishListCounter);

    // UserContext
    this.UserContext = new UserContext();
  }

  async main() {
    const Form = new FormModal(this.UserContext);
    Form.render();

    // Récupération des données des films depuis l'API
    const moviesData = await this.moviesApi.get();
    const externalMoviesData = await this.externalMoviesApi.get();

    // Création d'objets de film à partir des données
    const movies = moviesData.map(
      (movie) => new MoviesFactory(movie, "newApi")
    );
    const externalMovies = externalMoviesData.map(
      (movie) => new MoviesFactory(movie, "externalApi")
    );

    // Fusion des films provenant des deux sources
    const fullMovies = movies.concat(externalMovies);

    // Initialisation et rendu du formulaire de filtrage (FilterForm)
    const filterForm = new FilterForm(fullMovies, this.wishlistSubject);
    filterForm.render();

    // Initialisation et rendu du formulaire de tri (SorterForm)
    const sorterForm = new SorterForm(
      fullMovies,
      filterForm,
      this.wishlistSubject
    );
    sorterForm.render();

    //Initialisation Search Form
    const Search = new SearchForm(this.FullMovies);
    Search.render();

    // Affichage des films dans le wrapper des films
    fullMovies.forEach((movie) => {
      const movieCard = new MovieCard(movie, this.wishlistSubject);
      this.$moviesWrapper.appendChild(movieCard.createMovieCard());
      movieCardWithPlayer(movieCard, movie);
    });
  }
}

// Création de l'instance de l'application et exécution de la méthode principale
const app = new App();
app.main();
