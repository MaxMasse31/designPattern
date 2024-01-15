import { App } from "../App.js";

export class SingleMovieDisplay {
  constructor(Movies) {
    this._movie = Movies;
    this.$singleMovie = document.createElement("div"); // Ajout de "this."
    this.$singleMovie.classList.add("singleMovie"); // Ajout de "this."
    this.$moviesWrapper = document.querySelector(".movies-wrapper");
  }
  clearMoviesWrapper() {
    this.$moviesWrapper.innerHTML = "";
  }

  async OriginalWrapper() {
    this.clearMoviesWrapper();
    const app = new App();
    app.movieRender();
    const newUrl = `/`;
    history.pushState({}, null, newUrl);
  }

  backToHomePage() {
    const backBtn = this.$singleMovie.querySelector(".btn-primary");
    backBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      // Réinitialisation de l'affichage des films à la page d'accueil
      this.OriginalWrapper();
    });
  }
  createSingleMovie() {
    const singleMovieContent = `
      <div class=" text-center"> <!-- Utilisation de la classe card pour encadrer le contenu -->
        <img class="" alt="${this._movie.title}" src="${this._movie.thumbnail}" /> <!-- Utilisation de classes card-img-top pour l'image -->
    
        <div class="card-body">
          <h3 class="card-title fs-16">${this._movie.title}</h3> <!-- Utilisation de la classe card-title pour le titre -->
          
          <p class="card-text fs-14">
            <span>${this._movie.released_in}</span>
            -
            <span>${this._movie.duration}</span>
          </p>
    
          <button class="btn-primary">Voir le détail</button> <!-- Utilisation de la classe btn pour le bouton -->
        </div>
      </div>`;

    this.$singleMovie.innerHTML = singleMovieContent;
    this.backToHomePage();
    return this.$singleMovie;
  }

  displayMovie() {
    this.clearMoviesWrapper();

    const singleMovie = this.createSingleMovie();
    this.$moviesWrapper.appendChild(singleMovie);
  }

  render() {
    this.displayMovie();
  }
}
