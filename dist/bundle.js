/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/App.js":
/*!*******************!*\
  !*** ./js/App.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api_Api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/Api.js */ \"./js/api/Api.js\");\n/* harmony import */ var _api_Api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_api_Api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _templates_MovieCard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templates/MovieCard.js */ \"./js/templates/MovieCard.js\");\n/* harmony import */ var _Models_OldMovie_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Models/OldMovie.js */ \"./js/Models/OldMovie.js\");\n/* harmony import */ var _Models_OldMovie_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Models_OldMovie_js__WEBPACK_IMPORTED_MODULE_2__);\n// App.js\n\n\n\n\nclass App {\n  constructor() {\n      this.$moviesWrapper = document.querySelector('.movies-wrapper')\n      this.moviesApi = new _api_Api_js__WEBPACK_IMPORTED_MODULE_0__.MovieApi('/data/old-movie-data.json')\n  }\n\n  async main() {\n      // Ici je récupère mes films de mon fichier old-movie-data.json\n      const moviesData = await this.moviesApi.getMovies()\n      \n      moviesData\n          // Ici, je transforme mon tableau de données en un tableau de classe Movie\n          .map(movie => new _Models_OldMovie_js__WEBPACK_IMPORTED_MODULE_2__.OldMovie(movie))\n          .forEach(movie => {\n              const Template = new _templates_MovieCard_js__WEBPACK_IMPORTED_MODULE_1__.MovieCard(movie)\n              this.$moviesWrapper.appendChild(\n                  Template.createMovieCard()\n              )\n          })\n  }\n}\n\nconst app = new App()\napp.main()\n\n//# sourceURL=webpack://designpattern/./js/App.js?");

/***/ }),

/***/ "./js/Models/OldMovie.js":
/*!*******************************!*\
  !*** ./js/Models/OldMovie.js ***!
  \*******************************/
/***/ (() => {

eval("class OldMovie {\n    constructor(data) {\n        this._duration = data.duration\n        this._picture = data.picture\n        this._released_in = data.released_in\n        this._synopsis = data.synopsis\n        this._title = data.title\n    }\n\n    get duration() {\n        return this._duration\n    }\n\n    get picture() {\n        return `/assets/${this._picture}`\n    }\n\n    get thumbnail() {\n        return `/assets/thumbnails/${this._picture}`\n    }\n\n    get released_in() {\n        return this._released_in\n    }\n\n    get synopsis() {\n        return this._synopsis\n    }\n\n    get title() {\n        return this._title\n    }\n}\n\n//# sourceURL=webpack://designpattern/./js/Models/OldMovie.js?");

/***/ }),

/***/ "./js/api/Api.js":
/*!***********************!*\
  !*** ./js/api/Api.js ***!
  \***********************/
/***/ (() => {

eval("class Api {\n  /**\n   * \n   * @param {string} url \n   */\n  constructor(url) {\n      this._url = url\n  }\n\n  async get() {\n      return fetch(this._url)\n          .then(res => res.json())\n          .then(res => res.data)\n          .catch(err => console.log('an error occurs', err))\n  }\n}\n\n\nclass MovieApi extends Api {\n  /**\n   * \n   * @param {string} url \n   */\n  constructor(url) {\n      super(url)\n  }\n\n  async getMovies() {\n      return await this.get()\n  }\n}\n\n\n//# sourceURL=webpack://designpattern/./js/api/Api.js?");

/***/ }),

/***/ "./js/templates/MovieCard.js":
/*!***********************************!*\
  !*** ./js/templates/MovieCard.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MovieCard: () => (/* binding */ MovieCard)\n/* harmony export */ });\n\nclass MovieCard {\n    constructor(movie) {\n        this._movie = movie\n    }\n\n    createMovieCard() {\n        const $wrapper = document.createElement('div')\n        $wrapper.classList.add('movie-card-wrapper')\n\n        const movieCard = `\n            <div class=\"movie-thumbnail center\">\n                \n            </div>\n            <h3 class=\"fs-16 center\">${this._movie.title}</h3>\n            <p class=\"fs-14 center\">\n                <span>${this._movie.released_in}</span>\n                -\n                <span>${this._movie.duration}</span>\n            </p>\n        `\n        \n        $wrapper.innerHTML = movieCard\n        return $wrapper\n    }\n}\n\n//# sourceURL=webpack://designpattern/./js/templates/MovieCard.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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