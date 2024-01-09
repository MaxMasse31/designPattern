class SinglePage {
    constructor() {
      this.pageState = {
        selectPage: null,
        errorPage: null
      };
      this.currentPage = null;
    }
  
    setPageTemplates(selectPageTemplate, errorPageTemplate) {
      this.pageState.selectPage = selectPageTemplate;
      this.pageState.errorPage = errorPageTemplate;
    }
  
    getPage() {
      if (this.currentPage === "error") {
        this.currentPage = this.pageState.errorPage;
      } else if (this.currentPage === "success") {
        this.currentPage = this.pageState.selectPage;
      }
    }
  
    renderPage() {
      if (this.currentPage) {
        // Vous devrez implémenter votre logique de rendu ici,
        // en utilisant le modèle de page approprié.
        console.log("Rendering:", this.currentPage);
      } else {
        console.log("No page selected.");
      }
    }
  }
  

  