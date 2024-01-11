import { SingleMovieDisplay } from "../SinglePage/singlemovieDisplay.js";

export function handleThumbnailClick(movieCard, movie) {
  const thumbnail = movieCard.$wrapper.querySelector(".btn-single-film");
  thumbnail.addEventListener("click", (event) => {
    event.stopPropagation();
    alert(`Clicked on thumbnail. Movie ID: ${this._movie.id}`);
    const single = new SingleMovieDisplay(movie);
    single.render();
  });

  return movieCard;
}
