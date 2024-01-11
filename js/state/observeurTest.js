// // Importation des modules

// // import { SingleMovie } from "./templates/singleMovie.js";
// // import { SingleMovieDisplay } from "./SinglePage/SingleMovieDisplay.js";
// // import { MovieSelectedObserver } from "./SinglePage/MovieSelectedObserver.js";

// // Définition de la classe App
// class App {
//   constructor() {
//     // Movies
//     this.fullMovies = [];

//     // Sélection des éléments du DOM
//     this.$moviesWrapper = document.querySelector(".movies-wrapper");
//     this.$singleMovie = document.querySelector(".single-movie-details");
//     this.$modalWrapper = document.querySelector(".modal");

//     // Initialisation de l'API des films
//     this.moviesApi = new MovieApi("/data/new-movie-data.json");
//     this.externalMoviesApi = new MovieApi("/data/external-movie-data.json");

//     // Initialisation du système de liste de souhaits (WishList)
//     this.wishlistSubject = new WishlistSubject();
//     this.wishListCounter = new WhishListCounter();
//     this.wishlistSubject.subscribe(this.wishListCounter);

//     // UserContext
//     this.userContext = new UserContext();
//   }

//   // Méthode asynchrone pour récupérer les films
//   async fetchMovies() {
//     const moviesData = await this.moviesApi.get();
//     const externalMoviesData = await this.externalMoviesApi.get();

//     // Création d'objets de film à partir des données
//     const movies = moviesData.map((movie) => new MoviesFactory(movie, "newApi"));
//     const externalMovies = externalMoviesData.map((movie) => new MoviesFactory(movie, "externalApi"));

//     // Fusion des films provenant des deux sources
//     this.fullMovies = movies.concat(externalMovies);
//   }

//   // Méthode asynchrone pour rendre la page principale
//   async renderMainPage() {
//     await this.fetchMovies();

//     // Création et rendu du formulaire modal
//     const form = new FormModal(this.userContext);
//     form.render();

//     // Rendu des cartes de film
//     this.fullMovies.forEach((movie) => {
//       const movieCard = new MovieCard(movie, this.wishlistSubject);
//       this.$moviesWrapper.appendChild(movieCard.createMovieCard());
//       movieCardWithPlayer(movieCard, movie);
//     });

//     // Initialisation et rendu du formulaire de filtrage (FilterForm)
//     const filterForm = new FilterForm(this.fullMovies, this.wishlistSubject);
//     filterForm.render();

//     // Initialisation et rendu du formulaire de tri (SorterForm)
//     const sorterForm = new SorterForm(this.fullMovies, filterForm, this.wishlistSubject);
//     sorterForm.render();

//     // Initialisation du formulaire de recherche (SearchForm)
//     const search = new SearchForm(this.fullMovies);
//     search.render();
//   }

  // Méthode asynchrone pour rendre la page unique
  // async renderSinglePage() {
  //   const urlParams = new URLSearchParams(window.location.search);
  //   const movieId = urlParams.get("id");
  //   console.log("Movie ID:", movieId);

  //   if (movieId) {
  //     // Recherche du film par ID dans la liste complète de films
  //     const selectedMovie = this.fullMovies.find((movie) => movie.id === movieId);

  //     if (selectedMovie) {
  //       // Création d'une instance de MovieCard pour le film sélectionné
  //       const singleMovieCard = new MovieCard(selectedMovie, this.wishlistSubject);

        
  //       // Affichage du film sélectionné dans la section $singleMovie
  //       this.$singleMovie.appendChild(singleMovieCard.createMovieCard());
  //       movieCardWithPlayer(singleMovieCard, selectedMovie);

  //       // Initialisation de l'observateur pour la page de film unique
  //       const movieSelectedObserver = new MovieSelectedObserver(selectedMovie);
  //       movieSelectedObserver.displayMovieDetails();
  //     }
  //   }
  // }

//   // Méthode principale asynchrone
//   async main() {
//     await this.renderMainPage();
//     // await this.renderSinglePage();
//   }
// }

// // Création de l'instance de l'application et exécution de la méthode principale
// const app = new App();
// app.main();
