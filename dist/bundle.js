/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/App.js":
/*!*******************!*\
  !*** ./js/App.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api_Api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/Api.js */ \"./js/api/Api.js\");\n/* harmony import */ var _templates_MovieCard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templates/MovieCard.js */ \"./js/templates/MovieCard.js\");\n/* harmony import */ var _factories_MoviesFactory_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./factories/MoviesFactory.js */ \"./js/factories/MoviesFactory.js\");\n/* harmony import */ var _templates_Modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./templates/Modal.js */ \"./js/templates/Modal.js\");\n/* harmony import */ var _templates_FilterForm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./templates/FilterForm.js */ \"./js/templates/FilterForm.js\");\n/* harmony import */ var _Decorator_Decorator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Decorator/Decorator.js */ \"./js/Decorator/Decorator.js\");\n// App.js\n\n// Importation des modules et composants nécessaires\n\n\n\n\n\n\n\nclass App {\n  constructor() {\n    this.$moviesWrapper = document.querySelector(\".movies-wrapper\");\n    this.$modalWrapper = document.querySelector(\".modal\");\n\n    this.moviesApi = new _api_Api_js__WEBPACK_IMPORTED_MODULE_0__.MovieApi(\"/data/new-movie-data.json\");\n    this.externalMoviesApi = new _api_Api_js__WEBPACK_IMPORTED_MODULE_0__.MovieApi(\"/data/external-movie-data.json\");\n  }\n\n  async main() {\n    const moviesData = await this.moviesApi.get();\n    const externalMoviesData = await this.externalMoviesApi.get();\n\n    const Movies = moviesData.map(\n      (movie) => new _factories_MoviesFactory_js__WEBPACK_IMPORTED_MODULE_2__.MoviesFactory(movie, \"newApi\")\n    );\n    const ExternalMovies = externalMoviesData.map(\n      (movie) => new _factories_MoviesFactory_js__WEBPACK_IMPORTED_MODULE_2__.MoviesFactory(movie, \"externalApi\")\n    );\n\n    const FullMovies = Movies.concat(ExternalMovies);\n\n    const DataForm = new _templates_Modal_js__WEBPACK_IMPORTED_MODULE_3__.Form();\n    DataForm.render();\n\n    const Filter = new _templates_FilterForm_js__WEBPACK_IMPORTED_MODULE_4__.FilterForm(FullMovies);\n    Filter.render();\n\n    FullMovies.forEach((movie) => {\n      const Template = new _templates_MovieCard_js__WEBPACK_IMPORTED_MODULE_1__.MovieCard(movie);\n      this.$moviesWrapper.appendChild(Template.createMovieCard());\n      // Appliquez le Decorator pattern au template de la carte de film\n      (0,_Decorator_Decorator_js__WEBPACK_IMPORTED_MODULE_5__.movieCardWithPlayer)(Template, movie);\n    });\n  }\n}\n\nconst app = new App();\napp.main();\n\n\n//# sourceURL=webpack://designpattern/./js/App.js?");

/***/ }),

/***/ "./js/Decorator/Decorator.js":
/*!***********************************!*\
  !*** ./js/Decorator/Decorator.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   movieCardWithPlayer: () => (/* binding */ movieCardWithPlayer)\n/* harmony export */ });\n/* harmony import */ var _templates_PlayerModal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../templates/PlayerModal.js */ \"./js/templates/PlayerModal.js\");\n// Importez la classe PlayerModal\n\n\nfunction movieCardWithPlayer(movieCard, movie) {\n  const decoratedBtn = movieCard.$wrapper.querySelector(\".btn\");\n\n  decoratedBtn.addEventListener(\"click\", (event) => {\n    event.stopPropagation();\n    const Player = new _templates_PlayerModal_js__WEBPACK_IMPORTED_MODULE_0__.PlayerModal(movie);\n    Player.render();\n  });\n\n  return movieCard;\n}\n\n\n//# sourceURL=webpack://designpattern/./js/Decorator/Decorator.js?");

/***/ }),

/***/ "./js/Models/ExternalMovie.js":
/*!************************************!*\
  !*** ./js/Models/ExternalMovie.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ExternalMovie: () => (/* binding */ ExternalMovie)\n/* harmony export */ });\nclass ExternalMovie {\n    constructor(data) {\n        this._actor = \"sylvester\"\n        this._infos = data.infos\n        this._medias = data.medias\n        this._synopsis = data.synopsis\n        this._title_en = data.title_en\n        this._title_fr = data.title_fr\n        this._trailer = data.trailer_id\n    }\n\n    get actor() {\n        return this._actor\n    }\n\n    get duration() {\n        return this._infos.duration\n    }\n\n    get picture() {\n        return `/assets/${this._medias.picture}`\n    }\n\n    get thumbnail() {\n        return `/assets/thumbnails/${this._medias.thumbnail}`\n    }\n\n    get released_in() {\n        return this._infos.released_in\n    }\n\n    get synopsis() {\n        return this._synopsis\n    }\n\n    get title() {\n        return this._title_fr ? this._title_fr : this._title_en\n    }\n\n    get trailer() {\n        return `https://www.youtube.com/embed/${this._trailer}`\n    }\n}\n\n//# sourceURL=webpack://designpattern/./js/Models/ExternalMovie.js?");

/***/ }),

/***/ "./js/Models/Movie.js":
/*!****************************!*\
  !*** ./js/Models/Movie.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Movie: () => (/* binding */ Movie)\n/* harmony export */ });\nclass Movie {\n    constructor(data) {\n        this._actor = \"arnold\"\n        this._duration = data.duration\n        this._picture = data.picture\n        this._released_in = data.released_in\n        this._synopsis = data.synopsis\n        this._title = data.title\n    }\n\n    get actor() {\n        return this._actor\n    }\n\n    get duration() {\n        const hours = Math.floor(this._duration / 60)\n        const minutes = this._duration % 60\n        return `${hours}h${minutes}`\n    }\n\n    get picture() {\n        return `/assets/${this._picture}`\n    }\n\n    get thumbnail() {\n        return `/assets/thumbnails/${this._picture}`\n    }\n\n    get released_in() {\n        return this._released_in\n    }\n\n    get synopsis() {\n        return this._synopsis\n    }\n\n    get title() {\n        return this._title.hasOwnProperty('fr') ? this._title['fr'] : this._title['en']\n    }\n}\n\n//# sourceURL=webpack://designpattern/./js/Models/Movie.js?");

/***/ }),

/***/ "./js/Models/OldMovie.js":
/*!*******************************!*\
  !*** ./js/Models/OldMovie.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   OldMovie: () => (/* binding */ OldMovie)\n/* harmony export */ });\nclass OldMovie {\n  constructor(data) {\n    this._duration = data.duration;\n    this._picture = data.picture;\n    this._released_in = data.released_in;\n    this._synopsis = data.synopsis;\n    this._title = data.title;\n  }\n\n  get duration() {\n    return this._duration;\n  }\n\n  get picture() {\n    return `/assets/${this._picture}`;\n  }\n\n  get thumbnail() {\n    return `/assets/thumbnails/${this._picture}`;\n  }\n\n  get released_in() {\n    return this._released_in;\n  }\n\n  get synopsis() {\n    return this._synopsis;\n  }\n\n  get title() {\n    return this._title;\n  }\n}\n\n\n//# sourceURL=webpack://designpattern/./js/Models/OldMovie.js?");

/***/ }),

/***/ "./js/adapters/FilterMoviesAdapter.js":
/*!********************************************!*\
  !*** ./js/adapters/FilterMoviesAdapter.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FilterMoviesAdapter: () => (/* binding */ FilterMoviesAdapter)\n/* harmony export */ });\n/* harmony import */ var _lib_filter_v2_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/filter-v2/index.js */ \"./js/lib/filter-v2/index.js\");\n\n\nclass FilterMoviesAdapter {\n    constructor(Movies, actor) {\n        this.Movies = Movies\n        this.actor = actor\n    }\n\n    async filterByActor() {\n        return await _lib_filter_v2_index_js__WEBPACK_IMPORTED_MODULE_0__.FilterV2.filterByActor(this.actor, this.Movies)\n    }\n}\n\n//# sourceURL=webpack://designpattern/./js/adapters/FilterMoviesAdapter.js?");

/***/ }),

/***/ "./js/api/Api.js":
/*!***********************!*\
  !*** ./js/api/Api.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MovieApi: () => (/* binding */ MovieApi)\n/* harmony export */ });\nclass Api {\n  /**\n   *\n   * @param {string} url\n   */\n  constructor(url) {\n    this._url = url;\n  }\n\n  async get() {\n    return fetch(this._url)\n      .then((res) => res.json())\n      .then((res) => res.data)\n      .catch((err) => console.log(\"an error occurs\", err));\n  }\n}\n\n// Data API\nclass MovieApi extends Api {\n  /**\n   *\n   * @param {string} url\n   */\n  constructor(url) {\n    super(url);\n  }\n\n  async getMovies() {\n    return await this.get();\n  }\n}\n\n\n//# sourceURL=webpack://designpattern/./js/api/Api.js?");

/***/ }),

/***/ "./js/db/User.js":
/*!***********************!*\
  !*** ./js/db/User.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   User: () => (/* binding */ User)\n/* harmony export */ });\nclass User {\n  constructor(data) {\n    if (User.exists) {\n      return User.instance;\n    } else if (data && data.firstName && data.lastName) {\n      // Si firstName et lastName sont définis au moment de l'instanciation\n\n      // J'initialise les propriétés firstName et lastName\n      this._firstName = data.firstName;\n      this._lastName = data.lastName;\n\n      // Je les sauvegarde en Local Storage\n      this.saveToLocalStorage();\n\n      // Je \"lock\" l'objet\n      User.instance = this;\n      User.exists = true;\n      return this;\n    }\n  }\n\n  get firstName() {\n    return this._firstName;\n  }\n\n  get lastName() {\n    return this._lastName;\n  }\n\n  get user() {\n    // Vérifie si firstName et lastName existent soit au sein de la classe, soit en LocalStorage\n    const firstName = this._firstName || localStorage.getItem(\"firstName\");\n    const lastName = this._lastName || localStorage.getItem(\"lastName\");\n\n    // Si oui, alors je réinstancie : on a besoin de ce bout de code une fois que l'application a été quittée.\n    if (firstName && lastName) {\n      const user = new User({\n        firstName,\n        lastName,\n      });\n    }\n\n    // Sinon, ça veut dire que la classe n'a pas été instancié.\n    if (!firstName && !lastName) {\n      return null;\n    }\n\n    // Ici, je retourne le user\n    return {\n      firstName: firstName,\n      lastName: lastName,\n    };\n  }\n\n  saveToLocalStorage() {\n    localStorage.setItem(\"firstName\", this._firstName);\n    localStorage.setItem(\"lastName\", this._lastName);\n  }\n}\n\n\n//# sourceURL=webpack://designpattern/./js/db/User.js?");

/***/ }),

/***/ "./js/factories/MoviesFactory.js":
/*!***************************************!*\
  !*** ./js/factories/MoviesFactory.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MoviesFactory: () => (/* binding */ MoviesFactory)\n/* harmony export */ });\n/* harmony import */ var _Models_OldMovie_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Models/OldMovie.js */ \"./js/Models/OldMovie.js\");\n/* harmony import */ var _Models_Movie_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Models/Movie.js */ \"./js/Models/Movie.js\");\n/* harmony import */ var _Models_ExternalMovie_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Models/ExternalMovie.js */ \"./js/Models/ExternalMovie.js\");\n\n\n\n\nclass MoviesFactory {\n    constructor(data, type) {\n        // Si le type correspond à l'ancienne API, alors retourne moi l'ancien formattage\n        if (type === 'oldApi') {\n            return new _Models_OldMovie_js__WEBPACK_IMPORTED_MODULE_0__.OldMovie(data)\n        // Sinon retourne moi le nouveau formattage\n        } else if (type === 'newApi') {\n            return new _Models_Movie_js__WEBPACK_IMPORTED_MODULE_1__.Movie(data)\n        // Une bonne pratique est de throw une erreur si le format n'est pas reconnu\n        } else if (type === 'externalApi') {\n            return new _Models_ExternalMovie_js__WEBPACK_IMPORTED_MODULE_2__.ExternalMovie(data)\n        } else {\n            throw 'Unknown type format'\n        }\n    }\n}\n\n\n//# sourceURL=webpack://designpattern/./js/factories/MoviesFactory.js?");

/***/ }),

/***/ "./js/lib/filter-v2/index.js":
/*!***********************************!*\
  !*** ./js/lib/filter-v2/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FilterV2: () => (/* binding */ FilterV2)\n/* harmony export */ });\nclass FilterV2 {\n  /**\n   *\n   * @param {string} actor\n   * @param {array} Movies\n   * @returns\n   */\n  static async filterByActor(actor, Movies) {\n    await new Promise((resolve) => setTimeout(resolve, 200));\n\n    if (!actor) {\n      return Movies;\n    }\n\n    return Movies.filter((Movie) => Movie.actor === actor);\n  }\n}\n\n\n//# sourceURL=webpack://designpattern/./js/lib/filter-v2/index.js?");

/***/ }),

/***/ "./js/templates/FilterForm.js":
/*!************************************!*\
  !*** ./js/templates/FilterForm.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FilterForm: () => (/* binding */ FilterForm)\n/* harmony export */ });\n/* harmony import */ var _templates_MovieCard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../templates/MovieCard.js */ \"./js/templates/MovieCard.js\");\n/* harmony import */ var _adapters_FilterMoviesAdapter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../adapters/FilterMoviesAdapter.js */ \"./js/adapters/FilterMoviesAdapter.js\");\n/* harmony import */ var _Decorator_Decorator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Decorator/Decorator.js */ \"./js/Decorator/Decorator.js\");\n\n\n\n\nclass FilterForm {\n  constructor(Movies) {\n    this.Movies = Movies;\n\n    this.$wrapper = document.createElement(\"div\");\n    this.$filterFormWrapper = document.querySelector(\".filter-form-wrapper\");\n    this.$moviesWrapper = document.querySelector(\".movies-wrapper\");\n  }\n\n  async filterMovies(actor) {\n    this.clearMoviesWrapper();\n\n    const AdaptedFilterLib = new _adapters_FilterMoviesAdapter_js__WEBPACK_IMPORTED_MODULE_1__.FilterMoviesAdapter(this.Movies, actor);\n    const FilteredMovies = await AdaptedFilterLib.filterByActor();\n\n    FilteredMovies.forEach((movie) => {\n      const Template = new _templates_MovieCard_js__WEBPACK_IMPORTED_MODULE_0__.MovieCard(movie);\n      this.$moviesWrapper.appendChild(Template.createMovieCard());\n      (0,_Decorator_Decorator_js__WEBPACK_IMPORTED_MODULE_2__.movieCardWithPlayer)(Template, movie);\n    });\n  }\n\n  onChangeFilter() {\n    this.$wrapper.querySelector(\"form\").addEventListener(\"change\", (e) => {\n      const actor = e.target.value;\n      this.filterMovies(actor);\n    });\n  }\n\n  clearMoviesWrapper() {\n    this.$moviesWrapper.innerHTML = \"\";\n  }\n\n  render() {\n    const filterForm = `\n            <form class=\"filter-form\" action=\"#\" method=\"POST\">\n                <label for=\"filter-select\">Choississez votre acteur préféré : </label>\n                <select name=\"filter-select\" id=\"filter-select\">\n                    <option value=\"\">Aucun filtre</option>\n                    <option value=\"arnold\">Arnold Schwarzenegger</option>\n                    <option value=\"sylvester\">Sylvester Stallone</option>\n                </select>\n            </form>\n        `;\n\n    this.$wrapper.innerHTML = filterForm;\n    this.onChangeFilter();\n\n    this.$filterFormWrapper.appendChild(this.$wrapper);\n  }\n}\n\n\n//# sourceURL=webpack://designpattern/./js/templates/FilterForm.js?");

/***/ }),

/***/ "./js/templates/Modal.js":
/*!*******************************!*\
  !*** ./js/templates/Modal.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Form: () => (/* binding */ Form)\n/* harmony export */ });\n/* harmony import */ var _db_User_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../db/User.js */ \"./js/db/User.js\");\n// Importation de la classe User depuis le module \"../db/User.js\"\n\n\n\n// Définition de la classe Form\nclass Form {\n  constructor() {\n      this.$wrapper = document.createElement('div')\n      this.$modalWrapper = document.querySelector('.modal')\n  }\n\n  onSubmitForm() {\n      this.$wrapper\n          .querySelector('form')\n          .addEventListener('submit', e => {\n              e.preventDefault()\n\n              const firstNameInputValue = this\n                  .$wrapper\n                  .querySelector('#firstname')\n                  .value\n              \n              const lastNameInputValue = this\n                  .$wrapper\n                  .querySelector('#lastname')\n                  .value\n\n              const user = new _db_User_js__WEBPACK_IMPORTED_MODULE_0__.User({\n                  firstName: firstNameInputValue,\n                  lastName: lastNameInputValue\n              })\n\n              if (user.user) {\n                  this.$modalWrapper.classList.remove('modal-on')\n                  this.$modalWrapper.innerHTML = \"\"\n              } \n                  \n          })\n  }\n\n  shouldDisplayForm() {\n      const user = new _db_User_js__WEBPACK_IMPORTED_MODULE_0__.User()\n      return !user.user\n  }\n\n  createForm() {\n      const form = `\n          <form action=\"#\" method=\"POST\">\n              <div class=\"form-group\">\n                  <label class=\"form-label\" for=\"firstname\">Votre prénom : </label>\n                  <input id=\"firstname\" name=\"firstname\" type=\"text\">\n              </div>\n              <div class=\"form-group\">\n                  <label class=\"form-label\" for=\"lastname\">Votre nom : </label>\n                  <input id=\"lastname\" name=\"lastname\" type=\"text\">\n              </div>\n              <button class=\"submit-btn\" type=\"submit\">Valider</button>\n          </form>\n      `\n      this.$wrapper.innerHTML = form\n\n      this.$modalWrapper.classList.add('modal-on')\n      this.$modalWrapper.appendChild(this.$wrapper)   \n  }\n\n  render() {\n      if (this.shouldDisplayForm()) {\n          this.createForm()\n          this.onSubmitForm()\n      }\n  }\n}\n\n//# sourceURL=webpack://designpattern/./js/templates/Modal.js?");

/***/ }),

/***/ "./js/templates/MovieCard.js":
/*!***********************************!*\
  !*** ./js/templates/MovieCard.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MovieCard: () => (/* binding */ MovieCard)\n/* harmony export */ });\n\n\n\nclass MovieCard {\n  constructor(movie) {\n      this._movie = movie\n\n      this.$wrapper = document.createElement('div')\n      this.$wrapper.classList.add('movie-card-wrapper')\n  }\n\n  get movie() {\n      return this._movie\n  }\n\n  createMovieCard() {\n      const movieCard = `\n          <div class=\"movie-thumbnail center\">\n              <img\n                  alt=\"${this._movie.title}\"\n                  src=\"${this._movie.thumbnail}\"\n              />\n              <button id=\"btn\" class=\"btn\"> Voir le preview </button>\n          </div>\n          <h3 class=\"fs-16 center\">${this._movie.title}</h3>\n          <p class=\"fs-14 center\">\n              <span>${this._movie.released_in}</span>\n              -\n              <span>${this._movie.duration}</span>\n          </p>\n      `\n\n\n      \n      this.$wrapper.innerHTML = movieCard\n\n      var btn= this.$wrapper; \n\n      return btn;\n    \n\n\n  \n   \n  }\n\n    \n    \n\n  \n\n\n}\n\n\n\n//# sourceURL=webpack://designpattern/./js/templates/MovieCard.js?");

/***/ }),

/***/ "./js/templates/PlayerModal.js":
/*!*************************************!*\
  !*** ./js/templates/PlayerModal.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PlayerModal: () => (/* binding */ PlayerModal)\n/* harmony export */ });\nclass PlayerModal {\n    constructor(movie) {\n        this.movie = movie;\n\n        this.$wrapper = document.createElement('div');\n        this.$wrapper.classList.add('player-wrapper');\n\n        this.$modalWrapper = document.querySelector('.modal');\n\n      \n    }\n\n    onCloseButton() {\n        const closeButton = this.$wrapper.querySelector('.close-btn');\n        closeButton.addEventListener('click', () => {\n            this.$modalWrapper.classList.remove('modal-on');\n            this.$wrapper.innerHTML = \"\";\n        });\n    }\n\n    createPlayer() {\n        const player = `\n            <div class=\"player\">\n                <iframe \n                    height=\"600\" \n                    width=\"800\" \n                    src=${this.movie.trailer}\n                ></iframe>\n                <button class=\"close-btn\">Fermer la fenêtre</button>\n            </div>\n        `;\n\n        this.$wrapper.innerHTML = player;\n\n        this.$modalWrapper.classList.add('modal-on');\n        this.$modalWrapper.appendChild(this.$wrapper);\n\n        this.onCloseButton();\n    }\n\n    render() {\n        this.createPlayer();\n    }\n}\n\n\n//# sourceURL=webpack://designpattern/./js/templates/PlayerModal.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/App.js");
/******/ 	
/******/ })()
;