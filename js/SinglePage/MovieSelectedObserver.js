export class MovieSelectedObserver {
    constructor() {
      this._selectedMovie = null;
      this._observers = [];
    }
  
    get selectedMovie() {
      return this._selectedMovie;
    }
  
    subscribe(observer) {
      this._observers.push(observer);
    }
  
    unsubscribe(observer) {
      this._observers = this._observers.filter(obs => obs !== observer);
    }
  
    notify(movie) {
      this._selectedMovie = movie;
      this._observers.forEach(observer => observer.update(movie));
    }
  
    displayMovieDetails() {
      // Implémentez la logique pour afficher les détails du film sélectionné
      if (this._selectedMovie) {
        console.log("Movie details displayed:", this._selectedMovie);
  
        // Exemple de mise à jour du DOM (à adapter selon votre structure HTML)
        const detailsContainer = document.querySelector(".movie-details-container");
  
        if (detailsContainer) {
          detailsContainer.innerHTML = `
            <h2>${this._selectedMovie.title}</h2>
            <p>Released: ${this._selectedMovie.released_in}</p>
            <p>Duration: ${this._selectedMovie.duration}</p>
            <p>Other details...</p>
          `;
        } else {
          console.error("Movie details container not found in the DOM.");
        }
      } else {
        console.error("No selected movie to display details.");
      }
    }
  }
  