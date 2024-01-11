class App {
    constructor() {
      // Movies
      this.FullMovies = [];
  
      // Sélection des éléments du DOM
      this.$moviesWrapper = document.querySelector(".movies-wrapper");
  
      this.$singleMovie=document.querySelector(".single-movie-details")
  
      this.$modalWrapper = document.querySelector(".modal");
  
      // Initialisation de l'API des films
      this.moviesApi = new MovieApi("/data/new-movie-data.json");
      this.externalMoviesApi = new MovieApi("/data/external-movie-data.json");
  
      // Initialisation du système de liste de souhaits (WishList)
      this.wishlistSubject = new WishlistSubject();
      this.wishListCounter = new WhishListCounter();
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
      const form = new FormModal(this.userContext);
      form.render();
  
      // Affichage des films dans le wrapper des films
      this.FullMovies.forEach((movie) => {
        const movieCard = new MovieCard(movie, this.wishlistSubject);
        this.$moviesWrapper.appendChild(movieCard.createMovieCard());
        movieCardWithPlayer(movieCard, movie);
      
      });
  
      const urlParams = new URLSearchParams(window.location.search);
      const movieId = urlParams.get("id");
  
      if (movieId) {
        // Chargez les détails du film spécifique à la page singlePage.html
  
        const movieDetails = this.FullMovies.find(
          (movie) => movie.id === movieId
        );
        const singlePage = new singleMovie(movieDetails);
        singlePage.render();
      } else {
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
    }
  }
  
  // Création de l'instance de l'application et exécution de la méthode principale
  const app = new App();
  app.main();
  