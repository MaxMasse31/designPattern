// export class SingleMovieDisplay {
//   constructor(movies, wrapperElement) {
//     this.movies = movies;
//     this.$wrapper = wrapperElement;
//   }

//   displaySingleMovie(movieId) {
//     const movie = this.movies.find((m) => m.id === movieId);

//     if (movie) {
//       this.clearWrapper();
//       const singleMovieInstance = new SingleMovie(movie);
//       singleMovieInstance.render();
//       this.$wrapper.appendChild(singleMovieInstance.$wrapper);
//     } else {
//       console.error(`Movie with ID ${movieId} not found.`);
//     }
//   }

//   clearWrapper() {
//     this.$wrapper.innerHTML = "";
//   }
// }

export class singleMovie {
    constructor(movie) {
      this._movie = movie;
      this.$wrapper = document.createElement("div");
      // Adjust the class selector to match your HTML structure
      this.$singlePage = document.querySelector(".movies-wrapper");
    }
  
    createSingleMovie() {
      const singleMovieContent = `
        <div class="movie-thumbnail center">
          <img alt="${this._movie.title}" src="${this._movie.thumbnail}" />
        </div>
        <h3 class="fs-16 center">${this._movie.title}</h3>
        <p class="fs-14 center">
          <span>${this._movie.released_in}</span>
          -
          <span>${this._movie.duration}</span>
        </p>
        <button id="btn" class="btn">Voir le détail</button>
      `;
  
      this.$wrapper.innerHTML = singleMovieContent;
      this.$singlePage.appendChild(this.$wrapper);
    }
  
    render() {
      this.createSingleMovie();
    }
  }