import { SingleMovieDisplay } from "../SinglePage/singlemovieDisplay.js";



export function handleThumbnailClick(movieCard, movie, FullMovies) {
  const thumbnail = movieCard.$wrapper.querySelector(".btn-single-film");
  thumbnail.addEventListener("click", (event) => {
    event.stopPropagation();

    const single = new SingleMovieDisplay(movie, FullMovies);
    single.displayMovie(movie.id);
    single.render();

    // Changement de l'URL
    const newUrl = `/${movie.title}`;
    history.pushState({ movieId: movie.id }, null, newUrl);
    

    // Mémorisation de l'URL dans le localStorage
    // localStorage.setItem("lastVisitedURL", newUrl);


  });

  return movieCard;
}
