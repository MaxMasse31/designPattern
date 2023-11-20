// Importation de la classe User depuis le module "../db/User.js"
import { User } from "../db/User.js";


// Définition de la classe Form
export class Form {
  constructor() {
    // Création d'un élément <div> pour contenir le formulaire
    this.$wrapper = document.createElement("div");
    // Récupération de la fenêtre modale existante
    this.$modalWrapper = document.querySelector(".modal");
  }

  // Gestionnaire d'événement pour la soumission du formulaire
  onSubmitForm() {
    // Écoute de l'événement de soumission du formulaire
    this.$wrapper.querySelector("form").addEventListener("submit", (e) => {
      e.preventDefault();

      // Récupération des valeurs des champs du formulaire
      const firstNameInputValue =
        this.$wrapper.querySelector("#firstname").value;
      const lastNameInputValue = this.$wrapper.querySelector("#lastname").value;

      // Création d'une nouvelle instance de la classe User avec les données du formulaire
      const user = new User({
        firstName: firstNameInputValue,
        lastName: lastNameInputValue,
      });

      // Vérification si l'utilisateur existe
      if (user.user) {
        // Si l'utilisateur existe, masquer la fenêtre modale
        this.$modalWrapper.classList.remove("modal-on");
        // Effacer le contenu de la fenêtre modale
        this.$modalWrapper.innerHTML = "";
      }
    });
  }

  // Fonction pour déterminer si le formulaire doit être affiché
  shouldDisplayForm() {
    // Création d'une nouvelle instance de la classe User
    const user = new User();
    // Retourne true si l'utilisateur n'existe pas, indiquant que le formulaire doit être affiché
    return !user.user;
  }

  // Fonction pour créer le formulaire
  createForm() {
    // Structure HTML du formulaire
    const form = `
      <form action="#" method="POST">
        <div class="form-group">
          <label class="form-label" for="firstname">Votre prénom : </label>
          <input id="firstname" name="firstname" type="text">
        </div>
        <div class="form-group">
          <label class="form-label" for="lastname">Votre nom : </label>
          <input id="lastname" name="lastname" type="text">
        </div>
        <button class="submit-btn" type="submit">Valider</button>
      </form>
    `;

    // Injection de la structure HTML dans l'élément wrapper
    this.$wrapper.innerHTML = form;

    // Ajout de la classe pour afficher la fenêtre modale
    this.$modalWrapper.classList.add("modal-on");
    // Ajout du formulaire à la fenêtre modale
    this.$modalWrapper.appendChild(this.$wrapper);
  }

  // Fonction principale pour rendre le formulaire
  render() {
    // Vérification si le formulaire doit être affiché
    if (this.shouldDisplayForm()) {
      // Création et affichage du formulaire
      this.createForm();
      // Ajout de l'écouteur d'événement pour la soumission du formulaire
      this.onSubmitForm();
    }
  }
}
