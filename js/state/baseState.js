// Étape 1: Créer une classe de base pour les états
class BaseState {
    constructor(app) {
      this.app = app;
    }
  
    async render() {
      console.error("Render method not implemented for this state");
    }
  }
  
  // Étape 2: Créer des classes d'état spécifiques
  class MainState extends BaseState {
    async render() {
      await this.app.fetchMovies();
      const form = new FormModal(this.app.userContext);
      form.render();
  
      this.app.FullMovies.forEach((movie) => {
        const movieCard = new MovieCard(movie, this.app.wishlistSubject);
        this.app.$moviesWrapper.appendChild(movieCard.createMovieCard());
        movieCardWithPlayer(movieCard, movie);
      });
  
      // Initialisation et rendu du formulaire de filtrage (FilterForm)
      const filterForm = new FilterForm(this.app.FullMovies, this.app.wishlistSubject);
      filterForm.render();
  
      // Initialisation et rendu du formulaire de tri (SorterForm)
      const sorterForm = new SorterForm(
        this.app.FullMovies,
        filterForm,
        this.app.wishlistSubject
      );
      sorterForm.render();
  
      // Initialisation Search Form
      const search = new SearchForm(this.app.FullMovies);
      search.render();
    }
  }
  
  class SinglePageState extends BaseState {
    async render() {
      const urlParams = new URLSearchParams(window.location.search);
      const movieId = urlParams.get("id");
  
      if (movieId) {
        // Chargez les détails du film spécifique à la page singlePage.html
        const movieDetails = this.app.FullMovies.find(
          (movie) => movie.id === movieId
        );
        const singlePage = new singleMovie(movieDetails);
        singlePage.render();
      }
    }
  }
  
 
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
    this.userContext = new UserContext();

        
      // Initialisation des éléments DOM et autres initialisations...
  
      // Créer une instance d'état initial (par exemple, la page principale)
      this.currentState = new MainState(this);
    }
  
    // Méthode pour changer l'état
    changeState(newState) {
      this.currentState = newState;
    }
  
    // Méthode pour rendre l'état actuel
    async render() {
      await this.currentState.render();
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
  }
  
  // Utilisation de l'application
  const app = new App();
  // Initial rendu
  app.render();
  