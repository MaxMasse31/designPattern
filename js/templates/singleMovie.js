export class SingleMovie {
    constructor(movie) {
      this._movie = movie;
      this.$wrapper = document.createElement("div");
      this.$wrapper.classList.add("single-movie-wrapper");
    }
  
    get movie() {
      return this._movie;
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
      this.handleDetailButton();
  
      return this.$wrapper;
    }
  
    handleDetailButton() {
      const detailButton = this.$wrapper.querySelector(".btn");
  
      detailButton.addEventListener("click", () => {
        console.log("Detail button clicked!");
        // Ajoutez ici la logique pour afficher les détails du film au clic du bouton.
      });
    }
  }
  