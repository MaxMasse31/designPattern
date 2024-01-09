import {SinglePage} from "./SinglePage.js"

  const mySinglePage = new SinglePage();
  
  //modèles HTML
  const successPageTemplate = "<h1>Page de succès</h1>";
  const errorPageTemplate = "<h1>Page d'erreur</h1>";
  
  // Définissez les modèles pour chaque état de page
  mySinglePage.setPageTemplates(successPageTemplate, errorPageTemplate);
  
  // Sélectionnez une page et affichez-la
  mySinglePage.currentPage = "success";
  mySinglePage.getPage();
  mySinglePage.renderPage();
  
  mySinglePage.currentPage = "error";
  mySinglePage.getPage();
  mySinglePage.renderPage();