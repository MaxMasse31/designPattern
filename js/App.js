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
import { SearchForm } from "./templates/SearchForm.js";
import { handleThumbnailClick } from "./Decorator/clickSinglePage.js";
import 'bootstrap';

export class App {
  constructor() {
    // Movies
    this.FullMovies = [];

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
    this.userContext = new UserContext();
  }

  async fetchMovies() {
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
    this.FullMovies = movies.concat(externalMovies);

       window.addEventListener("beforeunload", () => {
      localStorage.clear();
    });


  }


  async movieRender(){
    await this.fetchMovies();
    this.FullMovies.forEach((movie) => {
      const movieCard = new MovieCard(movie, this.wishlistSubject);
      const existingMovieCard = this.$moviesWrapper.querySelector(`[data-movie-id="${movie.id}"]`);
      if (!existingMovieCard) {
        this.$moviesWrapper.appendChild(movieCard.createMovieCard());
      }

      // this.$moviesWrapper.appendChild(movieCard.createMovieCard());
      movieCardWithPlayer(movieCard, movie);
      handleThumbnailClick(movieCard, movie);
    });

  }

  async renderMainPage() {

     await this.fetchMovies();
    this.FullMovies.forEach((movie) => {
      const movieCard = new MovieCard(movie, this.wishlistSubject);
    
      this.$moviesWrapper.appendChild(movieCard.createMovieCard());

      // this.$moviesWrapper.appendChild(movieCard.createMovieCard());
      movieCardWithPlayer(movieCard, movie);
      handleThumbnailClick(movieCard, movie);
    });
    
    const form = new FormModal(this.userContext);
    form.render();

 

    // Initialisation et rendu du formulaire de filtrage (FilterForm)
    const filterForm = new FilterForm(this.FullMovies, this.wishlistSubject);
    filterForm.render();

    // Initialisation et rendu du formulaire de tri (SorterForm)
    const sorterForm = new SorterForm(
      this.FullMovies,
      filterForm,
      this.wishlistSubject
    );
    sorterForm.render();

    // Initialisation Search Form
    const search = new SearchForm(this.FullMovies);
    search.render();
  }

  async main() {
    await this.renderMainPage();
    await this.movieRender();
  }
}

// Création de l'instance de l'application et exécution de la méthode principale
const app = new App();
app.main();

