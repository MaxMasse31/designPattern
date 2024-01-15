// import 'bootstrap';
import {MovieCard} from "../templates/MovieCard.js"
import { NoFilterSearch } from "../Search/MainSearch.js"
import {App} from "../App.js";




export class SingleMovieDisplay {
  constructor(Movies, WishListSubject) {
    this._movie = Movies;
    this.$singleMovie = document.createElement("div"); // Ajout de "this."
    this.$singleMovie.classList.add("singleMovie"); // Ajout de "this."
    this.$moviesWrapper = document.querySelector(".movies-wrapper");

    

    this.WishListSubject = WishListSubject; // Pass the WishListSubject directly to SorterForm
  }
  clearMoviesWrapper() {
    this.$moviesWrapper.innerHTML = "";
  }



async OriginalWrapper(Movies){
  this.clearMoviesWrapper();
  const app = new App();
  app.movieRender();
  return Movies;

//   Movies.forEach(Movie => {
//     const Template = new MovieCard(Movie)
//     this.$moviesWrapper.appendChild(Template.createMovieCard())
// })

}

backToHomePage() {
  const backBtn = this.$singleMovie.querySelector(".btn-primary");
  backBtn.addEventListener("click", (event) => {
    event.stopPropagation();

    // Sauvegarde des éléments cochés dans la liste de souhaits
    const checkedWishes = Array.from(document.querySelectorAll('.wish-checkbox:checked')).map(checkbox => checkbox.value);

    // Réinitialisation de l'affichage des films à la page d'accueil
    this.OriginalWrapper().then(() => {
      // Rétablir les éléments cochés dans la liste de souhaits
      checkedWishes.forEach(movieId => {
        const wishCheckbox = document.querySelector(`.wish-checkbox[value="${movieId}"]`);
        if (wishCheckbox) {
          wishCheckbox.checked = true;
        }
      });
    });
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
    // Call the displayMovieById method to render the movie
    // Specify the movie ID you want to display
    this.displayMovie();
  }
}
