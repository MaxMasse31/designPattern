import {singleMovie} from "../templates/singleMovie.js"

export function handleThumbnailClick(movieCard, movie) {
  const thumbnail = movieCard.$wrapper.querySelector(".movie-thumbnail");

  thumbnail.addEventListener("click", (event) => {
    event.stopPropagation();
    const singlePage = new singleMovie(movie);
    singlePage.render();
    window.location.href = `singlePage.html?id=${movie.id}`;
  });


}


