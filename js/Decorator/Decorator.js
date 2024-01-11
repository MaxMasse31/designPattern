// Importez la classe PlayerModal
import { PlayerModal } from "../templates/PlayerModal.js";

export function movieCardWithPlayer(movieCard, movie) {
  const decoratedBtn = movieCard.$wrapper.querySelector(".btn");
  decoratedBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    const Player = new PlayerModal(movie);
    Player.render();
  });

  return movieCard;
}
