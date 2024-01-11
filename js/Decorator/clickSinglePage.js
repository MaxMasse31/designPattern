import { SingleMovieDisplay } from "../SinglePage/singlemovieDisplay.js";

export function handleThumbnailClick(movieCard, movie) {
  const thumbnail = movieCard.$wrapper.querySelector(".btn-single-film");
  thumbnail.addEventListener("click", (event) => {
    event.stopPropagation();
    alert(`Clicked on thumbnail. Movie ID: ${movie.id}`);
    
    // Utiliser la méthode displayMovieById de SingleMovieDisplay
    const single = new SingleMovieDisplay(movie);
    single.displayMovieById(movie.id);
    single.render();
  });

  return movieCard;
}
