import { SingleMovieDisplay } from "../SinglePage/singlemovieDisplay.js";

export function handleThumbnailClick(movieCard, movie) {
  const thumbnail = movieCard.$wrapper.querySelector(".btn-single-film");
  thumbnail.addEventListener("click", (event) => {
    event.stopPropagation();
    // alert(`Clicked on thumbnail. Movie ID: ${movie.id}`);
    
    // méthode displayMovieById de SingleMovieDisplay
    const single = new SingleMovieDisplay(movie);
    single.displayMovieById(movie.id);
    single.render();

    const searchFormWrapper = document.querySelector(".search-form-wrapper");
    const formsWrapper= document.querySelector(".forms-wrapper");
    if (searchFormWrapper && formsWrapper) {
      searchFormWrapper.style.display = "none";
      formsWrapper.style.display = "none";
    }
     // Changement de l'URL
     const newUrl = `/${movie.title}`;
     history.pushState({ movieId: movie.id }, null, newUrl);
    //  window.location.href = `/${movie.title}`;

    
  });

  return movieCard;
}
