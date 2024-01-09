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

class App {
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
    this.wishListCounter = new WhishListCounter(); // Correction de la typo WhishListCounter => WishListCounter
    this.wishlistSubject.subscribe(this.wishListCounter);

    // UserContext
    this.userContext = new UserContext(); // Correction de la typo UserContext => userContext
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
  }

  async main() {
    await this.fetchMovies();

    const form = new FormModal(this.userContext); // Correction de la typo Form => form, UserContext => userContext
    form.render();

    // Initialisation et rendu du formulaire de filtrage (FilterForm)
    const filterForm = new FilterForm(this.FullMovies, this.wishlistSubject);
    filterForm.render();

    // Initialisation et rendu du formulaire de tri (SorterForm)
    const sorterForm = new SorterForm(
      this.FullMovies,
      filterForm, // Correction de la variable filterForm
      this.wishlistSubject
    );
    sorterForm.render();

    // Affichage des films dans le wrapper des films
    this.FullMovies.forEach((movie) => {
      const movieCard = new MovieCard(movie, this.wishlistSubject);
      this.$moviesWrapper.appendChild(movieCard.createMovieCard());
      movieCardWithPlayer(movieCard, movie); // Commenté car la fonction movieCardWithPlayer n'est pas définie dans le code fourni
    });

    // Initialisation Search Form
    const search = new SearchForm(this.FullMovies); // Correction de la variable Search => search
    search.render();

    // Gestion des page
    // Ajoutez ici la logique pour gérer le changement de page
    const handlePageChange = (pageName) => {
      // Vous pouvez ajouter une logique ici pour déterminer quelle page afficher
      // en fonction du nom de la page, puis effectuer le changement de contenu de manière dynamique.
      // Par exemple, vous pouvez utiliser des conditions if/else ou un switch.
      console.log(`Changement de page vers : ${pageName}`);
    };

    // Exemple de déclenchement du changement de page
    handlePageChange("HomePage");
  }
}

// Création de l'instance de l'application et exécution de la méthode principale
const app = new App();
app.main();
