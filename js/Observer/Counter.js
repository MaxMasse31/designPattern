export class WhishListCounter {
  constructor() {
    this._count = parseInt(localStorage.getItem("wishCount")) || 0;
    this._$wishCount = document.querySelector(".wish-count");
    this.updateDisplay();

    // Ajout de l'écouteur d'événements beforeunload
    window.addEventListener("beforeunload", () => {
      // Sauvegarde du compteur dans le localStorage avant de fermer la page
      localStorage.setItem("wishCount", this._count);
    });
  }

  update(action) {
    if (action === "INC") {
      this._count += 1;
    } else if (action === "DEC" && this._count > 0) { // Ensure count doesn't go below zero
      this._count -= 1;
    } else {
      throw "Unknown action";
    }

    // Mise à jour du stockage local avec le nouveau compteur
    localStorage.setItem("wishCount", this._count);

    this.updateDisplay();
  }

  updateDisplay() {
    this._$wishCount.innerHTML = this._count;
  }
}
