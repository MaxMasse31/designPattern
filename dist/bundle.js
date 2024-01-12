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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api_Api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/Api.js */ \"./js/api/Api.js\");\n/* harmony import */ var _templates_MovieCard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templates/MovieCard.js */ \"./js/templates/MovieCard.js\");\n/* harmony import */ var _factories_MoviesFactory_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./factories/MoviesFactory.js */ \"./js/factories/MoviesFactory.js\");\n/* harmony import */ var _templates_Modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./templates/Modal.js */ \"./js/templates/Modal.js\");\n/* harmony import */ var _templates_FilterForm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./templates/FilterForm.js */ \"./js/templates/FilterForm.js\");\n/* harmony import */ var _Decorator_Decorator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Decorator/Decorator.js */ \"./js/Decorator/Decorator.js\");\n/* harmony import */ var _templates_SorterForm_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./templates/SorterForm.js */ \"./js/templates/SorterForm.js\");\n/* harmony import */ var _Observer_Counter_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Observer/Counter.js */ \"./js/Observer/Counter.js\");\n/* harmony import */ var _Observer_Subject_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Observer/Subject.js */ \"./js/Observer/Subject.js\");\n/* harmony import */ var _User_Context_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./User/Context.js */ \"./js/User/Context.js\");\n/* harmony import */ var _templates_SearchForm_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./templates/SearchForm.js */ \"./js/templates/SearchForm.js\");\n/* harmony import */ var _Decorator_clickSinglePage_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Decorator/clickSinglePage.js */ \"./js/Decorator/clickSinglePage.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nclass App {\n  constructor() {\n    // Movies\n    this.FullMovies = [];\n\n    // Sélection des éléments du DOM\n    this.$moviesWrapper = document.querySelector(\".movies-wrapper\");\n\n    this.$modalWrapper = document.querySelector(\".modal\");\n\n    // Initialisation de l'API des films\n    this.moviesApi = new _api_Api_js__WEBPACK_IMPORTED_MODULE_0__.MovieApi(\"/data/new-movie-data.json\");\n    this.externalMoviesApi = new _api_Api_js__WEBPACK_IMPORTED_MODULE_0__.MovieApi(\"/data/external-movie-data.json\");\n\n    // Initialisation du système de liste de souhaits (WishList)\n    this.wishlistSubject = new _Observer_Subject_js__WEBPACK_IMPORTED_MODULE_8__.WishlistSubject();\n    this.wishListCounter = new _Observer_Counter_js__WEBPACK_IMPORTED_MODULE_7__.WhishListCounter();\n    this.wishlistSubject.subscribe(this.wishListCounter);\n\n    // UserContext\n    this.userContext = new _User_Context_js__WEBPACK_IMPORTED_MODULE_9__.UserContext();\n  }\n\n  async fetchMovies() {\n    const moviesData = await this.moviesApi.get();\n    const externalMoviesData = await this.externalMoviesApi.get();\n\n    // Création d'objets de film à partir des données\n    const movies = moviesData.map(\n      (movie) => new _factories_MoviesFactory_js__WEBPACK_IMPORTED_MODULE_2__.MoviesFactory(movie, \"newApi\")\n    );\n\n    const externalMovies = externalMoviesData.map(\n      (movie) => new _factories_MoviesFactory_js__WEBPACK_IMPORTED_MODULE_2__.MoviesFactory(movie, \"externalApi\")\n    );\n\n    // Fusion des films provenant des deux sources\n    this.FullMovies = movies.concat(externalMovies);\n  }\n\n  async renderMainPage() {\n    await this.fetchMovies();\n    const form = new _templates_Modal_js__WEBPACK_IMPORTED_MODULE_3__.FormModal(this.userContext);\n    form.render();\n\n    this.FullMovies.forEach((movie) => {\n      const movieCard = new _templates_MovieCard_js__WEBPACK_IMPORTED_MODULE_1__.MovieCard(movie, this.wishlistSubject);\n      this.$moviesWrapper.appendChild(movieCard.createMovieCard());\n      (0,_Decorator_Decorator_js__WEBPACK_IMPORTED_MODULE_5__.movieCardWithPlayer)(movieCard, movie);\n      (0,_Decorator_clickSinglePage_js__WEBPACK_IMPORTED_MODULE_11__.handleThumbnailClick)(movieCard, movie);\n    });\n\n    // Initialisation et rendu du formulaire de filtrage (FilterForm)\n    const filterForm = new _templates_FilterForm_js__WEBPACK_IMPORTED_MODULE_4__.FilterForm(this.FullMovies, this.wishlistSubject);\n    filterForm.render();\n\n    // Initialisation et rendu du formulaire de tri (SorterForm)\n    const sorterForm = new _templates_SorterForm_js__WEBPACK_IMPORTED_MODULE_6__.SorterForm(\n      this.FullMovies,\n      filterForm,\n      this.wishlistSubject\n    );\n    sorterForm.render();\n\n    // Initialisation Search Form\n    const search = new _templates_SearchForm_js__WEBPACK_IMPORTED_MODULE_10__.SearchForm(this.FullMovies);\n    search.render();\n  }\n\n  async main() {\n    await this.renderMainPage();\n    // await this.renderSinglePage();\n  }\n}\n\n// Création de l'instance de l'application et exécution de la méthode principale\nconst app = new App();\napp.main();\n\n\n//# sourceURL=webpack://designpattern/./js/App.js?");

/***/ }),

/***/ "./js/Decorator/Decorator.js":
/*!***********************************!*\
  !*** ./js/Decorator/Decorator.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   movieCardWithPlayer: () => (/* binding */ movieCardWithPlayer)\n/* harmony export */ });\n/* harmony import */ var _templates_PlayerModal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../templates/PlayerModal.js */ \"./js/templates/PlayerModal.js\");\n// Importez la classe PlayerModal\n\n\nfunction movieCardWithPlayer(movieCard, movie) {\n  const decoratedBtn = movieCard.$wrapper.querySelector(\".btn\");\n  decoratedBtn.addEventListener(\"click\", (event) => {\n    event.stopPropagation();\n    const Player = new _templates_PlayerModal_js__WEBPACK_IMPORTED_MODULE_0__.PlayerModal(movie);\n    Player.render();\n  });\n\n  return movieCard;\n}\n\n\n//# sourceURL=webpack://designpattern/./js/Decorator/Decorator.js?");

/***/ }),

/***/ "./js/Decorator/clickSinglePage.js":
/*!*****************************************!*\
  !*** ./js/Decorator/clickSinglePage.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleThumbnailClick: () => (/* binding */ handleThumbnailClick)\n/* harmony export */ });\n/* harmony import */ var _SinglePage_singlemovieDisplay_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../SinglePage/singlemovieDisplay.js */ \"./js/SinglePage/singlemovieDisplay.js\");\n\n\nfunction handleThumbnailClick(movieCard, movie) {\n  const thumbnail = movieCard.$wrapper.querySelector(\".btn-single-film\");\n  thumbnail.addEventListener(\"click\", (event) => {\n    event.stopPropagation();\n    // alert(`Clicked on thumbnail. Movie ID: ${movie.id}`);\n    \n    // méthode displayMovieById de SingleMovieDisplay\n    const single = new _SinglePage_singlemovieDisplay_js__WEBPACK_IMPORTED_MODULE_0__.SingleMovieDisplay(movie);\n    single.displayMovie(movie.id);\n    single.render();\n\n    const searchFormWrapper = document.querySelector(\".search-form-wrapper\");\n    const formsWrapper= document.querySelector(\".forms-wrapper\");\n    if (searchFormWrapper && formsWrapper) {\n      searchFormWrapper.style.display = \"none\";\n      formsWrapper.style.display = \"none\";\n    }\n     // Changement de l'URL\n     const newUrl = `/${movie.title}`;\n     history.pushState({ movieId: movie.id }, null, newUrl);\n     window.location.href = `/${movie.title}`;\n\n    \n  });\n\n  return movieCard;\n}\n\n\n//# sourceURL=webpack://designpattern/./js/Decorator/clickSinglePage.js?");

/***/ }),

/***/ "./js/Models/ExternalMovie.js":
/*!************************************!*\
  !*** ./js/Models/ExternalMovie.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ExternalMovie: () => (/* binding */ ExternalMovie)\n/* harmony export */ });\nclass ExternalMovie {\n    constructor(data) {\n        this._actor = \"sylvester\";\n        this._infos = data.infos;\n        this._medias = data.medias;\n        this._synopsis = data.synopsis;\n        this._title_en = data.title_en;\n        this._title_fr = data.title_fr;\n        this._trailer = data.trailer_id;\n        this._wished = data.wished || false;\n        this._id=data.id;\n    }\n\n    get id(){\n\n        return this._id\n    }\n\n    get actor() {\n        return this._actor;\n    }\n\n    get duration() {\n        return this._infos.duration;\n    }\n\n    get picture() {\n        return `/assets/${this._medias.picture}`;\n    }\n\n    get thumbnail() {\n        return `/assets/thumbnails/${this._medias.thumbnail}`;\n    }\n\n    get released_in() {\n        return this._infos.released_in;\n    }\n\n    get synopsis() {\n        return this._synopsis;\n    }\n\n    get title() {\n        return this._title_fr ? this._title_fr : this._title_en;\n    }\n\n    get trailer() {\n        return `https://www.youtube.com/embed/${this._trailer}`;\n    }\n\n    get wished() {\n        return this._wished;\n    }\n\n    set wished(value) {\n        this._wished = value;\n    }\n}\n\n\n//# sourceURL=webpack://designpattern/./js/Models/ExternalMovie.js?");

/***/ }),

/***/ "./js/Models/Movie.js":
/*!****************************!*\
  !*** ./js/Models/Movie.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Movie: () => (/* binding */ Movie)\n/* harmony export */ });\nclass Movie {\n    constructor(data) {\n        this._actor = \"arnold\"\n        this._duration = data.duration\n        this._picture = data.picture\n        this._released_in = data.released_in\n        this._synopsis = data.synopsis\n        this._title = data.title\n        this._wished = false;\n        this._id=data.id\n       \n    }\n\n    get id(){\n\n        return this._id\n    }\n\n    get actor() {\n        return this._actor\n    }\n\n    get duration() {\n        const hours = Math.floor(this._duration / 60)\n        const minutes = this._duration % 60\n        return `${hours}h${minutes}`\n    }\n\n    get picture() {\n        return `/assets/${this._picture}`\n    }\n\n    get thumbnail() {\n        return `/assets/thumbnails/${this._picture}`\n    }\n\n    get released_in() {\n        return this._released_in\n    }\n\n    get synopsis() {\n        return this._synopsis\n    }\n\n    get title() {\n        return this._title.hasOwnProperty('fr') ? this._title['fr'] : this._title['en']\n    }\n\n\n    get wished() {\n        return this._wished;\n    }\n\n    set wished(value) {\n        this._wished = value;\n    }\n}\n\n//# sourceURL=webpack://designpattern/./js/Models/Movie.js?");

/***/ }),

/***/ "./js/Models/OldMovie.js":
/*!*******************************!*\
  !*** ./js/Models/OldMovie.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   OldMovie: () => (/* binding */ OldMovie)\n/* harmony export */ });\nclass OldMovie {\n  constructor(data) {\n    this._duration = data.duration;\n    this._picture = data.picture;\n    this._released_in = data.released_in;\n    this._synopsis = data.synopsis;\n    this._title = data.title;\n  }\n\n  get duration() {\n    return this._duration;\n  }\n\n  get picture() {\n    return `/assets/${this._picture}`;\n  }\n\n  get thumbnail() {\n    return `/assets/thumbnails/${this._picture}`;\n  }\n\n  get released_in() {\n    return this._released_in;\n  }\n\n  get synopsis() {\n    return this._synopsis;\n  }\n\n  get title() {\n    return this._title;\n  }\n}\n\n\n//# sourceURL=webpack://designpattern/./js/Models/OldMovie.js?");

/***/ }),

/***/ "./js/Observer/Counter.js":
/*!********************************!*\
  !*** ./js/Observer/Counter.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   WhishListCounter: () => (/* binding */ WhishListCounter)\n/* harmony export */ });\nclass WhishListCounter {\n  constructor() {\n    this._count = 0;\n    this._$wishCount = document.querySelector(\".wish-count\");\n  }\n\n  update(action) {\n    if (action === \"INC\") {\n      this._count += 1;\n    } else if (action === \"DEC\") {\n      this._count -= 1;\n    } else {\n      throw \"Unknow action\";\n    }\n\n    this._$wishCount.innerHTML = this._count;\n  }\n}\n\n\n//# sourceURL=webpack://designpattern/./js/Observer/Counter.js?");

/***/ }),

/***/ "./js/Observer/Subject.js":
/*!********************************!*\
  !*** ./js/Observer/Subject.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   WishlistSubject: () => (/* binding */ WishlistSubject)\n/* harmony export */ });\nclass WishlistSubject {\n    constructor() {\n        this._observers = []\n    }\n\n    subscribe(observer) {\n        this._observers.push(observer)\n    }\n\n    unsubscribe(observer) {\n        this._observers = this._observers.filter(obs => obs !== observer)\n    }\n\n    fire(action) {\n        this._observers.forEach(observer => observer.update(action))\n    }\n}\n\n//# sourceURL=webpack://designpattern/./js/Observer/Subject.js?");

/***/ }),

/***/ "./js/Search/MainSearch.js":
/*!*********************************!*\
  !*** ./js/Search/MainSearch.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ActorNameSearch: () => (/* binding */ ActorNameSearch),\n/* harmony export */   MovieNameSearch: () => (/* binding */ MovieNameSearch),\n/* harmony export */   Search: () => (/* binding */ Search)\n/* harmony export */ });\nclass Search {\n  constructor(Movies) {\n    this.Movies = Movies;\n  }\n\n  search(query) {\n    return this.filterMovies(query);\n  }\n}\n\nclass MovieNameSearch extends Search {\n  constructor(Movies) {\n    super(Movies);\n  }\n\n  filterMovies(query) {\n    return this.Movies.filter((Movie) =>\n      Movie.title.toLowerCase().includes(query.toLowerCase())\n    );\n  }\n}\n\nclass ActorNameSearch extends Search {\n  constructor(Movies) {\n    super(Movies);\n  }\n\n  filterMovies(query) {\n    return this.Movies.filter((Movie) =>\n      Movie.actor.toLowerCase().includes(query.toLowerCase())\n    );\n  }\n}\n\n\n//# sourceURL=webpack://designpattern/./js/Search/MainSearch.js?");

/***/ }),

/***/ "./js/SinglePage/singlemovieDisplay.js":
/*!*********************************************!*\
  !*** ./js/SinglePage/singlemovieDisplay.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SingleMovieDisplay: () => (/* binding */ SingleMovieDisplay)\n/* harmony export */ });\nclass SingleMovieDisplay {\n  constructor(Movies) {\n    this._movie = Movies;\n    this.$moviesWrapper = document.querySelector(\".movies-wrapper\");\n  }\n\n  clearMoviesWrapper() {\n    this.$moviesWrapper.innerHTML = \"\";\n  }\n\n  createSingleMovie() {\n    const singleMovieContent = `\n      <div class=\"movie-thumbnail center\">\n        <img alt=\"${this._movie.title}\" src=\"${this._movie.thumbnail}\" />\n      </div>\n      <h3 class=\"fs-16 center\">${this._movie.title}</h3>\n      <p class=\"fs-14 center\">\n        <span>${this._movie.released_in}</span>\n        -\n        <span>${this._movie.duration}</span>\n        <button id=\"btn\" class=\"btn\">Voir le détail</button>\n      </p>\n     \n    `;\n\n    this.$moviesWrapper.innerHTML = singleMovieContent;\n    return this.$moviesWrapper;\n  }\n\n  displayMovie() {\n    this.clearMoviesWrapper();\n    this.createSingleMovie();\n  }\n\n  render() {\n    // Call the displayMovieById method to render the movie\n    // Specify the movie ID you want to display\n    this.displayMovieById();\n  }\n}\n\n\n//# sourceURL=webpack://designpattern/./js/SinglePage/singlemovieDisplay.js?");

/***/ }),

/***/ "./js/User/Context.js":
/*!****************************!*\
  !*** ./js/User/Context.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserContext: () => (/* binding */ UserContext)\n/* harmony export */ });\n/* harmony import */ var _db_User_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../db/User.js */ \"./js/db/User.js\");\n/* harmony import */ var _State_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./State.js */ \"./js/User/State.js\");\n\n\n\nclass UserContext {\n    constructor() {\n        this.states = [new _State_js__WEBPACK_IMPORTED_MODULE_1__.AnonymousUserState(), new _State_js__WEBPACK_IMPORTED_MODULE_1__.UserConnectedState()]\n        this.currentState = this.getInitialState()\n    }\n\n    getInitialState() {\n        const user = new _db_User_js__WEBPACK_IMPORTED_MODULE_0__.User()\n        const [ AnonymousUserState, UserConnectedState ] = this.states\n\n        if (!user.user) {\n            return AnonymousUserState\n        } else {\n            return UserConnectedState\n        }\n    }\n\n    change(firstName, lastName) {\n        const user = new _db_User_js__WEBPACK_IMPORTED_MODULE_0__.User({\n            firstName,\n            lastName\n        })\n\n        this.currentState = this.states.filter(state => state !== this.currentState)[0]\n    }\n}\n\n//# sourceURL=webpack://designpattern/./js/User/Context.js?");

/***/ }),

/***/ "./js/User/State.js":
/*!**************************!*\
  !*** ./js/User/State.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AnonymousUserState: () => (/* binding */ AnonymousUserState),\n/* harmony export */   UserConnectedState: () => (/* binding */ UserConnectedState)\n/* harmony export */ });\n/* harmony import */ var _db_User_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../db/User.js */ \"./js/db/User.js\");\n\n\nclass UserConnectedState {\n    constructor() {\n        this.isConnected = true\n        this.User = new _db_User_js__WEBPACK_IMPORTED_MODULE_0__.User()\n    }\n\n    getUser() {\n        return new _db_User_js__WEBPACK_IMPORTED_MODULE_0__.User()\n    }\n}\n\nclass AnonymousUserState {\n    constructor() {\n        this.isConnected = false\n        this.User = new _db_User_js__WEBPACK_IMPORTED_MODULE_0__.User()\n    }\n\n    getUser() {\n        return new _db_User_js__WEBPACK_IMPORTED_MODULE_0__.User()\n    }\n}\n\n//# sourceURL=webpack://designpattern/./js/User/State.js?");

/***/ }),

/***/ "./js/adapters/FilterMoviesAdapter.js":
/*!********************************************!*\
  !*** ./js/adapters/FilterMoviesAdapter.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FilterMoviesAdapter: () => (/* binding */ FilterMoviesAdapter)\n/* harmony export */ });\n/* harmony import */ var _lib_filter_v2_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/filter-v2/index.js */ \"./js/lib/filter-v2/index.js\");\n\n\nclass FilterMoviesAdapter {\n    constructor(Movies, actor) {\n        this.Movies = Movies\n        this.actor = actor\n        \n   \n    }\n\n    async filterByActor() {\n        return await _lib_filter_v2_index_js__WEBPACK_IMPORTED_MODULE_0__.FilterV2.filterByActor(this.actor, this.Movies)\n    }\n}\n\n//# sourceURL=webpack://designpattern/./js/adapters/FilterMoviesAdapter.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   User: () => (/* binding */ User)\n/* harmony export */ });\nclass User {\n  constructor(data) {\n      if (User.exists) {\n          return User.instance\n      } else if (data && data.firstName && data.lastName) {\n          // Si firstName et lastName sont définis au moment de l'instanciation\n\n          // J'initialise les propriétés firstName et lastName\n          this._firstName = data.firstName\n          this._lastName = data.lastName\n\n          // Je les sauvegarde en Local Storage\n          this.saveToLocalStorage()\n\n          // Je \"lock\" l'objet\n          User.instance = this\n          User.exists = true\n          return this\n      }\n  }\n\n  get firstName() {\n      return this._firstName\n  }\n\n  get lastName() {\n      return this._lastName\n  }\n\n  get user() {\n      // Vérifie si firstName et lastName existent soit au sein de la classe, soit en LocalStorage\n      const firstName = this._firstName || localStorage.getItem('firstName')\n      const lastName = this._lastName || localStorage.getItem('lastName')\n\n      // Si oui, alors je réinstancie : on a besoin de ce bout de code une fois que l'application a été quittée.\n      if (firstName && lastName) {\n          const user = new User({\n              firstName,\n              lastName\n          })\n      }\n\n      // Sinon, ça veut dire que la classe n'a pas été instancié.\n      if (!firstName && !lastName) {\n          return null\n      }\n\n      // Ici, je retourne le user\n      return {\n          firstName: firstName,\n          lastName: lastName,\n      }   \n  }\n\n  saveToLocalStorage() {\n      localStorage.setItem('firstName', this._firstName)\n      localStorage.setItem('lastName', this._lastName)\n  }\n}\n\n//# sourceURL=webpack://designpattern/./js/db/User.js?");

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

/***/ "./js/lib/sorter/index.js":
/*!********************************!*\
  !*** ./js/lib/sorter/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RatingSorterApi: () => (/* binding */ RatingSorterApi)\n/* harmony export */ });\n/* harmony import */ var _filter_v2_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../filter-v2/index.js */ \"./js/lib/filter-v2/index.js\");\n// export class RatingSorterApi {\n//   static async sorter(data, orderBy) {\n//     console.log(\"Get from compute\");\n\n//     if (orderBy === \"ASC\") {\n//       return new Promise((resolve) => {\n//         setTimeout(() => {\n//           const result = {\n//             key: orderBy,\n//             data: Array.from(data).sort(\n//               (a, b) => a.released_in - b.released_in\n//             ),\n//           };\n\n//           resolve(result);\n//         }, 1000);\n//       });\n//     } else if (orderBy === \"DESC\") {\n//       return new Promise((resolve) => {\n//         setTimeout(() => {\n//           const result = {\n//             key: orderBy,\n//             data: Array.from(data).sort(\n//               (a, b) => b.released_in - a.released_in\n//             ),\n//           };\n\n//           resolve(result);\n//         }, 1000);\n//       });\n//     } else {\n//       throw \"unknow orderBy type\";\n//     }\n//   }\n// }\n\n\n\n // chemin vers le filter acteur \n\nclass RatingSorterApi {\n  static async sorter(data, orderBy, actorFilter) {\n    console.log(\"Get from compute\");\n\n    // Filtrer par acteur si un acteur est fourni\n    if (actorFilter) {\n      data = await _filter_v2_index_js__WEBPACK_IMPORTED_MODULE_0__.FilterV2.filterByActor(actorFilter, data);\n    }\n\n    if (orderBy === \"ASC\") {\n      return new Promise((resolve) => {\n        setTimeout(() => {\n          const result = {\n            key: orderBy,\n            data: Array.from(data).sort(\n              (a, b) => a.released_in - b.released_in\n            ),\n          };\n\n          resolve(result);\n        }, 1000);\n      });\n    } else if (orderBy === \"DESC\") {\n      return new Promise((resolve) => {\n        setTimeout(() => {\n          const result = {\n            key: orderBy,\n            data: Array.from(data).sort(\n              (a, b) => b.released_in - a.released_in\n            ),\n          };\n\n          resolve(result);\n        }, 1000);\n      });\n    } else {\n      throw \"unknown orderBy type\";\n    }\n  }\n}\n\n\n//# sourceURL=webpack://designpattern/./js/lib/sorter/index.js?");

/***/ }),

/***/ "./js/proxy/Proxy.js":
/*!***************************!*\
  !*** ./js/proxy/Proxy.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProxyRatingSorter: () => (/* binding */ ProxyRatingSorter)\n/* harmony export */ });\n/* harmony import */ var _lib_sorter_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/sorter/index.js */ \"./js/lib/sorter/index.js\");\n/* harmony import */ var _lib_filter_v2_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/filter-v2/index.js */ \"./js/lib/filter-v2/index.js\");\n\n\n\nclass ProxyRatingSorter {\n  constructor() {\n    this.cache = [];\n  }\n\n  async sorter(movies, orderBy, actorFilter) {\n    const cachedResult = this.cache.find(\n      (elt) => elt.key === orderBy && elt.actorFilter === actorFilter\n    );\n    if (cachedResult) {\n      console.log(\"get from cache\");\n\n      return cachedResult;\n    }\n\n    // Filtrer par acteur si un acteur est fourni\n    const filteredMovies = actorFilter\n      ? await _lib_filter_v2_index_js__WEBPACK_IMPORTED_MODULE_1__.FilterV2.filterByActor(actorFilter, movies)\n      : movies;\n\n    const data = await _lib_sorter_index_js__WEBPACK_IMPORTED_MODULE_0__.RatingSorterApi.sorter(\n      filteredMovies,\n      orderBy,\n      actorFilter\n    );\n\n    // Ajouter le filtre acteur aux données pour identifier le cache\n    data.actorFilter = actorFilter;\n\n    this.cache.push(data);\n    return data;\n  }\n}\n\n\n//# sourceURL=webpack://designpattern/./js/proxy/Proxy.js?");

/***/ }),

/***/ "./js/templates/FilterForm.js":
/*!************************************!*\
  !*** ./js/templates/FilterForm.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FilterForm: () => (/* binding */ FilterForm)\n/* harmony export */ });\n/* harmony import */ var _MovieCard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MovieCard.js */ \"./js/templates/MovieCard.js\");\n/* harmony import */ var _adapters_FilterMoviesAdapter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../adapters/FilterMoviesAdapter.js */ \"./js/adapters/FilterMoviesAdapter.js\");\n/* harmony import */ var _Decorator_Decorator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Decorator/Decorator.js */ \"./js/Decorator/Decorator.js\");\n\n\n\n\nclass FilterForm {\n  constructor(Movies, WishListSubject) {\n    this.Movies = Movies;\n    this.WishListSubject = WishListSubject;\n    this.$wrapper = document.createElement(\"div\");\n    this.$filterFormWrapper = document.querySelector(\".filter-form-wrapper\");\n    this.$moviesWrapper = document.querySelector(\".movies-wrapper\");\n\n    this.onChangeFilter = this.onChangeFilter.bind(this);\n  }\n\n  async filterMovies(actor) {\n    this.clearMoviesWrapper();\n\n    const adaptedFilterLib = new _adapters_FilterMoviesAdapter_js__WEBPACK_IMPORTED_MODULE_1__.FilterMoviesAdapter(this.Movies, actor);\n    const filteredMovies = await adaptedFilterLib.filterByActor();\n\n    filteredMovies.forEach((movie) => {\n      const template = new _MovieCard_js__WEBPACK_IMPORTED_MODULE_0__.MovieCard(movie, this.WishListSubject);\n      const movieCardElement = template.createMovieCard();\n\n      const container = document.createElement(\"div\");\n      container.appendChild(movieCardElement);\n\n      this.$moviesWrapper.appendChild(container);\n\n      (0,_Decorator_Decorator_js__WEBPACK_IMPORTED_MODULE_2__.movieCardWithPlayer)(template, movie);\n    });\n\n    this.emitFilterEvent(actor);\n  }\n\n  emitFilterEvent(actor) {\n    const filterEvent = new CustomEvent(\"filter\", {\n      detail: { actor },\n    });\n    document.dispatchEvent(filterEvent);\n  }\n\n  onChangeFilter() {\n    this.filterMovies(this.getSelectedActor());\n  }\n\n  getSelectedActor() {\n    const selectElement = this.$wrapper.querySelector(\"#filter-select\");\n    return selectElement ? selectElement.value : \"\";\n  }\n\n  clearMoviesWrapper() {\n    this.$moviesWrapper.innerHTML = \"\";\n  }\n\n  render() {\n    // Vérifiez si vous êtes sur la page singlePage avant d'attacher le formulaire\n    const isSinglePage = window.location.pathname.includes('singlePage.html');\n    \n    if (!isSinglePage) {\n      const filterForm = `\n        <form class=\"filter-form\" action=\"#\" method=\"POST\">\n          <label for=\"filter-select\">Choisissez votre acteur préféré : </label>\n          <select name=\"filter-select\" id=\"filter-select\">\n            <option value=\"\">Aucun filtre</option>\n            <option value=\"arnold\">Arnold Schwarzenegger</option>\n            <option value=\"sylvester\">Sylvester Stallone</option>\n          </select>\n        </form>\n      `;\n  \n      this.$wrapper.innerHTML = filterForm;\n      this.$wrapper\n        .querySelector(\"form\")\n        .addEventListener(\"change\", this.onChangeFilter);\n  \n      this.$filterFormWrapper.appendChild(this.$wrapper);\n    }\n  }\n       \n}\n\n\n//# sourceURL=webpack://designpattern/./js/templates/FilterForm.js?");

/***/ }),

/***/ "./js/templates/Modal.js":
/*!*******************************!*\
  !*** ./js/templates/Modal.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FormModal: () => (/* binding */ FormModal)\n/* harmony export */ });\n\nclass FormModal {\n    constructor(UserContext) {\n        this.$wrapper = document.createElement('div')\n        this.$modalWrapper = document.querySelector('.modal')\n\n        // User\n        this.UserContext = UserContext\n    }\n\n    onSubmitForm() {\n        this.$wrapper\n            .querySelector('form')\n            .addEventListener('submit', e => {\n                e.preventDefault()\n\n                const firstNameInputValue = this\n                    .$wrapper\n                    .querySelector('#firstname')\n                    .value\n                \n                const lastNameInputValue = this\n                    .$wrapper\n                    .querySelector('#lastname')\n                    .value\n\n                this.UserContext.change(firstNameInputValue, lastNameInputValue)\n\n                if (this.UserContext.currentState.isConnected) {\n                    this.$modalWrapper.classList.remove('modal-on')\n                    this.$modalWrapper.innerHTML = \"\"\n                }\n                    \n            })\n    }\n\n    shouldDisplayForm() {\n        return !this.UserContext.currentState.isConnected\n    }\n\n    createForm() {\n        const form = `\n            <form action=\"#\" method=\"POST\">\n                <div class=\"form-group\">\n                    <label class=\"form-label\" for=\"firstname\">Votre prénom : </label>\n                    <input id=\"firstname\" name=\"firstname\" type=\"text\">\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"form-label\" for=\"lastname\">Votre nom : </label>\n                    <input id=\"lastname\" name=\"lastname\" type=\"text\">\n                </div>\n                <button class=\"submit-btn\" type=\"submit\">Valider</button>\n            </form>\n        `\n        this.$wrapper.innerHTML = form\n\n        this.$modalWrapper.classList.add('modal-on')\n        this.$modalWrapper.appendChild(this.$wrapper)   \n    }\n\n    render() {\n        if (this.shouldDisplayForm()) {\n            this.createForm()\n            this.onSubmitForm()\n        }\n    }\n}\n\n//# sourceURL=webpack://designpattern/./js/templates/Modal.js?");

/***/ }),

/***/ "./js/templates/MovieCard.js":
/*!***********************************!*\
  !*** ./js/templates/MovieCard.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MovieCard: () => (/* binding */ MovieCard)\n/* harmony export */ });\n// import {SingleMovieDisplay} from \"../SinglePage/singlemovieDisplay.js\"\n\nclass MovieCard {\n  constructor(movie, WishListSubject) {\n    this._movie = movie;\n    this.$wrapper = document.createElement(\"div\");\n    this.$wrapper.classList.add(\"movie-card-wrapper\");\n    this.WishListSubject = WishListSubject;\n  }\n\n  get movie() {\n    return this._movie;\n  }\n\n  handleWishButton() {\n    const that = this;\n    const wishButton = this.$wrapper.querySelector(\".wish-btn\");\n\n    console.log(\"Attaching event listener to wish button\");\n\n    wishButton.addEventListener(\"click\", function () {\n      console.log(\"Wish button clicked!\");\n\n      // Mettre à jour l'état \"wished\" du film\n      that._movie.wished = !that._movie.wished;\n\n      if (this.classList.contains(\"wished\")) {\n        this.classList.remove(\"wished\");\n        that.WishListSubject.fire(\"DEC\");\n      } else {\n        this.classList.add(\"wished\");\n        that.WishListSubject.fire(\"INC\");\n      }\n    });\n  }\n\n  createMovieCard() {\n    const movieCard = `\n    <div class=\"movie-thumbnail center\">\n      <img class=\"btn-single-film \" alt=\"${this._movie.title}\" src=\"${\n      this._movie.thumbnail\n    }\" />\n      <div class=\"wish-btn ${this._movie.wished ? \"wished\" : \"\"}\">\n        <svg class=\"heart\" viewBox=\"0 0 241.59736 220.05746\">\n          <g transform=\"translate(-175.32265,-1696.4765)\">\n            <path d=\"m 243.45243,1708.9786 c -26.9341,0.2312 -51.58009,21.4767 -55.08178,48.2939 -3.11346,23.844 7.32949,47.3995 23.96855,64.2142 27.5148,27.8054 61.22631,49.7939 83.44686,82.5473 4.39089,-4.6889 9.27818,-12.0655 14.22742,-17.529 25.22951,-27.8509 58.1653,-48.0133 80.86454,-78.1545 17.17546,-22.8065 19.10279,-58.1138 -0.53802,-80.4051 -18.24975,-20.7125 -51.76012,-25.1712 -74.36972,-9.2543 -8.22594,5.791 -15.27469,13.3707 -19.93251,22.3123 -10.05314,-19.3195 -30.53412,-32.2142 -52.58534,-32.0248 z\" />\n          </g>\n        </svg>\n      </div>\n      <button id=\"btn\" class=\"btn\"> Voir le preview </button>\n    </div>\n    <h3 class=\"fs-16 center\">${this._movie.title}</h3>\n    <p class=\"fs-14 center\">\n      <span>${this._movie.released_in}</span>\n      -\n      <span>${this._movie.duration}</span>\n    </p>\n  `;\n\n    this.$wrapper.innerHTML = movieCard;\n    this.handleWishButton();\n\n    return this.$wrapper;\n  }\n}\n\n\n//# sourceURL=webpack://designpattern/./js/templates/MovieCard.js?");

/***/ }),

/***/ "./js/templates/PlayerModal.js":
/*!*************************************!*\
  !*** ./js/templates/PlayerModal.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PlayerModal: () => (/* binding */ PlayerModal)\n/* harmony export */ });\nclass PlayerModal {\n  constructor(movie) {\n    this.movie = movie;\n\n    this.$wrapper = document.createElement(\"div\");\n    this.$wrapper.classList.add(\"player-wrapper\");\n\n    this.$modalWrapper = document.querySelector(\".modal\");\n  }\n\n  onCloseButton() {\n    const closeButton = this.$wrapper.querySelector(\".close-btn\");\n    closeButton.addEventListener(\"click\", () => {\n      this.$modalWrapper.classList.remove(\"modal-on\");\n      this.$wrapper.innerHTML = \"\";\n    });\n  }\n\n  createPlayer() {\n    const player = `\n            <div class=\"player\">\n                <iframe \n                    height=\"600\" \n                    width=\"800\" \n                    src=${this.movie.trailer}\n                ></iframe>\n                <button class=\"close-btn\">Fermer la fenêtre</button>\n            </div>\n        `;\n\n    this.$wrapper.innerHTML = player;\n\n    this.$modalWrapper.classList.add(\"modal-on\");\n    this.$modalWrapper.appendChild(this.$wrapper);\n\n    this.onCloseButton();\n  }\n\n  render() {\n    this.createPlayer();\n  }\n}\n\n\n//# sourceURL=webpack://designpattern/./js/templates/PlayerModal.js?");

/***/ }),

/***/ "./js/templates/SearchForm.js":
/*!************************************!*\
  !*** ./js/templates/SearchForm.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SearchForm: () => (/* binding */ SearchForm)\n/* harmony export */ });\n/* harmony import */ var _Search_MainSearch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Search/MainSearch.js */ \"./js/Search/MainSearch.js\");\n/* harmony import */ var _MovieCard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MovieCard.js */ \"./js/templates/MovieCard.js\");\n\n\n\n\n\nclass SearchForm {\n    constructor(Movies) {\n        this.Movies = Movies\n        this.isSearchingByActor = false\n\n        this.MovieNameSearch = new _Search_MainSearch_js__WEBPACK_IMPORTED_MODULE_0__.MovieNameSearch(Movies)\n        this.ActorNameSearch = new _Search_MainSearch_js__WEBPACK_IMPORTED_MODULE_0__.ActorNameSearch(Movies)\n\n        this.$wrapper = document.createElement('div')\n        this.$searchFormWrapper = document.querySelector('.search-form-wrapper')\n        this.$moviesWrapper = document.querySelector('.movies-wrapper')\n    }\n\n    search(query) {\n        let SearchedMovies = null\n        \n        if (this.isSearchingByActor) {\n            SearchedMovies = this.ActorNameSearch.search(query)\n        } else {\n            SearchedMovies = this.MovieNameSearch.search(query)\n        }\n\n        this.displayMovies(SearchedMovies)\n    }\n\n    clearMoviesWrapper() {\n        this.$moviesWrapper.innerHTML = \"\"\n    }\n\n    displayMovies(Movies) {\n        this.clearMoviesWrapper()\n\n        Movies.forEach(Movie => {\n            const Template = new _MovieCard_js__WEBPACK_IMPORTED_MODULE_1__.MovieCard(Movie)\n            this.$moviesWrapper.appendChild(Template.createMovieCard())\n        })\n    }\n\n    onSearch() {\n        this.$wrapper\n            .querySelector('form')\n            .addEventListener('keyup', e => {\n                const query = e.target.value\n\n                if (query.length >= 3) {\n                    this.search(query)\n                } else if (query.length === 0) {\n                    this.displayMovies(this.Movies)\n                }\n            })\n    }\n\n    onChangeSearch() {\n        this.$wrapper\n            .querySelector('.search-checkbox')\n            .addEventListener('change', e => {\n                this.isSearchingByActor = e.target.checked\n\n                console.log(this.isSearchingByActor)\n            })\n    }\n\n    render() {\n        const searchForm = `\n            <form action=\"#\" method=\"POST\">\n                <div class=\"search-input\">\n                    <label for=\"search\">Rechercher : </label> \n                    <input id=\"search\" type=\"text\">\n                </div>\n                <div class=\"search-checkbox\">\n                    <label for=\"actor\">Rechercher par acteur</label>\n                    <input id=\"actor\" type=\"checkbox\" />\n                </div>\n            </form>\n        `\n\n        this.$wrapper.innerHTML = searchForm\n\n        this.onSearch()\n        this.onChangeSearch()\n\n        this.$searchFormWrapper.appendChild(this.$wrapper)\n    }\n}\n\n//# sourceURL=webpack://designpattern/./js/templates/SearchForm.js?");

/***/ }),

/***/ "./js/templates/SorterForm.js":
/*!************************************!*\
  !*** ./js/templates/SorterForm.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SorterForm: () => (/* binding */ SorterForm)\n/* harmony export */ });\n/* harmony import */ var _proxy_Proxy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../proxy/Proxy.js */ \"./js/proxy/Proxy.js\");\n/* harmony import */ var _MovieCard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MovieCard.js */ \"./js/templates/MovieCard.js\");\n/* harmony import */ var _lib_filter_v2_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/filter-v2/index.js */ \"./js/lib/filter-v2/index.js\");\n/* harmony import */ var _Decorator_Decorator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Decorator/Decorator.js */ \"./js/Decorator/Decorator.js\");\n// SorterForm.js\n\n\n\n\n\n\nclass SorterForm {\n  constructor(Movies, filterForm, WishListSubject) {\n    this.Movies = Movies;\n    this.filterForm = filterForm;\n\n    this.ProxyRatingSorter = new _proxy_Proxy_js__WEBPACK_IMPORTED_MODULE_0__.ProxyRatingSorter();\n    this.$wrapper = document.createElement(\"div\");\n    this.$sorterFormWrapper = document.querySelector(\".sorter-form-wrapper\");\n    this.$moviesWrapper = document.querySelector(\".movies-wrapper\");\n\n    this.WishListSubject = WishListSubject; // Pass the WishListSubject directly to SorterForm\n    this.onChangeSorter = this.onChangeSorter.bind(this);\n  }\n\n  async sorterMovies(sorter) {\n    try {\n      this.clearMoviesWrapper();\n\n      const actorFilter = this.filterForm.getSelectedActor();\n\n      const filteredMovies = actorFilter\n        ? await _lib_filter_v2_index_js__WEBPACK_IMPORTED_MODULE_2__.FilterV2.filterByActor(actorFilter, this.Movies)\n        : this.Movies;\n\n      if (sorter === \"none\") {\n        // If \"Aucun tri\" is selected, shuffle the movies randomly\n        const shuffledMovies = this.shuffleArray(filteredMovies);\n\n        shuffledMovies.forEach((movie) => {\n          const Template = new _MovieCard_js__WEBPACK_IMPORTED_MODULE_1__.MovieCard(movie, this.WishListSubject);\n          this.$moviesWrapper.appendChild(Template.createMovieCard());\n          (0,_Decorator_Decorator_js__WEBPACK_IMPORTED_MODULE_3__.movieCardWithPlayer)(Template, movie);\n        });\n      } else if (!!sorter) {\n        const sortedData = await this.ProxyRatingSorter.sorter(\n          filteredMovies,\n          sorter,\n          actorFilter\n        );\n        const SortedMovies = sortedData.data;\n\n        SortedMovies.forEach((movie) => {\n          const Template = new _MovieCard_js__WEBPACK_IMPORTED_MODULE_1__.MovieCard(movie, this.WishListSubject);\n          this.$moviesWrapper.appendChild(Template.createMovieCard());\n          (0,_Decorator_Decorator_js__WEBPACK_IMPORTED_MODULE_3__.movieCardWithPlayer)(Template, movie);\n        });\n      } else {\n        filteredMovies.forEach((movie) => {\n          const Template = new _MovieCard_js__WEBPACK_IMPORTED_MODULE_1__.MovieCard(movie, this.WishListSubject);\n          (0,_Decorator_Decorator_js__WEBPACK_IMPORTED_MODULE_3__.movieCardWithPlayer)(Template, movie);\n          this.$moviesWrapper.appendChild(Template.createMovieCard());\n        });\n      }\n\n      this.emitSortEvent(sorter);\n    } catch (error) {\n      console.error(\"Error sorting movies:\", error);\n      // Handle or log the error as needed\n    }\n  }\n\n  shuffleArray(array) {\n    // Function to shuffle an array (Fisher-Yates algorithm)\n    for (let i = array.length - 1; i > 0; i--) {\n      const j = Math.floor(Math.random() * (i + 1));\n      [array[i], array[j]] = [array[j], array[i]];\n    }\n    return array;\n  }\n\n  emitSortEvent(sorter) {\n    const sortEvent = new CustomEvent(\"sort\", {\n      detail: { sorter },\n    });\n    document.dispatchEvent(sortEvent);\n  }\n\n  onChangeSorter(event) {\n    const sorter = event.target.value;\n    this.sorterMovies(sorter);\n  }\n\n  clearMoviesWrapper() {\n    this.$moviesWrapper.innerHTML = \"\";\n  }\n\n  render() {\n    const sorterForm = `\n      <form action=\"#\" method=\"POST\" class=\"sorter-form\">\n        <label for=\"sorter-select\">Triez par date de sortie : </label>\n        <select name=\"sorter-select\" id=\"sorter-select\">\n          <option value=\"none\">Aucun tri</option>\n          <option value=\"ASC\">Croissante</option>\n          <option value=\"DESC\">Décroissante</option>\n        </select>\n      </form>\n    `;\n\n    this.$wrapper.innerHTML = sorterForm;\n    this.$wrapper.addEventListener(\"change\", this.onChangeSorter);\n\n    this.$sorterFormWrapper.appendChild(this.$wrapper);\n  }\n}\n\n\n//# sourceURL=webpack://designpattern/./js/templates/SorterForm.js?");

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