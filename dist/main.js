/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map */ \"./src/map.js\");\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_map__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _region_info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./region-info */ \"./src/region-info.js\");\n/* harmony import */ var _region_info__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_region_info__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar */ \"./src/navbar.js\");\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_navbar__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _passport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./passport */ \"./src/passport.js\");\n/* harmony import */ var _passport__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_passport__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _review__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./review */ \"./src/review.js\");\n/* harmony import */ var _review__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_review__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _start_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./start_modal */ \"./src/start_modal.js\");\n/* harmony import */ var _start_modal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_start_modal__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _tourist_spots__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tourist_spots */ \"./src/tourist_spots.js\");\n/* harmony import */ var _tourist_spots__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_tourist_spots__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://Travel_Dreams/./src/index.js?");

/***/ }),

/***/ "./src/map.js":
/*!********************!*\
  !*** ./src/map.js ***!
  \********************/
/***/ (() => {

eval("//licking on regionn\ndocument.getElementById('hokkaido-region').addEventListener(\"click\", function () {\n  const bodyRect = document.body.getBoundingClientRect()\n  const elemRect = document.getElementById('hokkaido-info').getBoundingClientRect()\n  window.scroll({\n    top: elemRect.top - bodyRect.top,\n    behavior: 'smooth'\n  })\n  document.getElementById('hokkaido-info').style.visibility = \"visible\"\n})\n\ndocument.getElementById('tohoku-region').addEventListener(\"click\", function () {\n  const bodyRect = document.body.getBoundingClientRect()\n  const elemRect = document.getElementById('tohoku-info').getBoundingClientRect()\n  window.scroll({\n    top: elemRect.top - bodyRect.top,\n    behavior: 'smooth'\n  })\n  document.getElementById('tohoku-info').style.visibility = \"visible\"\n})\n\ndocument.getElementById('kanto-region').addEventListener(\"click\", function() {\n  const bodyRect = document.body.getBoundingClientRect()\n  const elemRect = document.getElementById('kanto-info').getBoundingClientRect()\n  window.scroll({\n    top: elemRect.top - bodyRect.top,\n    behavior: 'smooth'\n  })\n  document.getElementById('kanto-info').style.visibility = \"visible\"\n})\n\ndocument.getElementById('chubu-region').addEventListener(\"click\", function() {\n  const bodyRect = document.body.getBoundingClientRect()\n  const elemRect = document.getElementById('chubu-info').getBoundingClientRect()\n  window.scroll({\n    top: elemRect.top - bodyRect.top,\n    behavior: 'smooth'\n  })\n  document.getElementById('chubu-info').style.visibility = \"visible\"\n})\n\ndocument.getElementById('kansai-region').addEventListener(\"click\", function() {\n  const bodyRect = document.body.getBoundingClientRect()\n  const elemRect = document.getElementById('kansai-info').getBoundingClientRect()\n  window.scroll({\n    top: elemRect.top - bodyRect.top,\n    behavior: 'smooth'\n  })\n  document.getElementById('kansai-info').style.visibility = \"visible\"\n})\n\ndocument.getElementById('chugoku-region').addEventListener(\"click\", function() {\n  const bodyRect = document.body.getBoundingClientRect()\n  const elemRect = document.getElementById('chugoku-info').getBoundingClientRect()\n  window.scroll({\n    top: elemRect.top - bodyRect.top,\n    behavior: 'smooth'\n  })\n  document.getElementById('chugoku-info').style.visibility = \"visible\"\n})\n\ndocument.getElementById('shikoku-region').addEventListener(\"click\", function() {\n  const bodyRect = document.body.getBoundingClientRect()\n  const elemRect = document.getElementById('shikoku-info').getBoundingClientRect()\n  window.scroll({\n    top: elemRect.top - bodyRect.top,\n    behavior: 'smooth'\n  })\n  document.getElementById('shikoku-info').style.visibility = \"visible\"\n})\n\ndocument.getElementById('kyushu-region').addEventListener(\"click\", function() {\n  const bodyRect = document.body.getBoundingClientRect()\n  const elemRect = document.getElementById('kyushu-info').getBoundingClientRect()\n  window.scroll({\n    top: elemRect.top - bodyRect.top,\n    behavior: 'smooth'\n  })\n  document.getElementById('kyushu-info').style.visibility = \"visible\"\n})\n  \n\n\n//Scrolling will highlight regions\nwindow.addEventListener(\"scroll\", () => {\n  const scroll = window.scrollY;\n  const mapSelectPixels = document.getElementById('map-select').offsetTop;\n  const hokkaidoPixels = document.getElementById('hokkaido-info').offsetTop;\n  const tohokuPixels = document.getElementById('tohoku-info').offsetTop;\n  const kantoPixels = document.getElementById('kanto-info').offsetTop;\n  const chubuPixels = document.getElementById('chubu-info').offsetTop;\n  const kansaiPixels = document.getElementById('kansai-info').offsetTop;\n  const chugokuPixels = document.getElementById('chugoku-info').offsetTop;\n  const shikokuPixels = document.getElementById('shikoku-info').offsetTop;\n  const kyushuPixels = document.getElementById('kyushu-info').offsetTop;\n\n  // On Hokaido\n  if ((scroll > mapSelectPixels) && (scroll < hokkaidoPixels + 250)) {\n    document.getElementById('tohoku-region').style.filter = \"opacity(55%)\"\n    document.getElementById('hokkaido-region').style.filter = \"none\"\n\n    document.getElementById('hokkaido-info').style.visibility = \"visible\";\n    document.getElementById('tohoku-info').style.visibility = \"hidden\";\n\n    document.getElementById('hokkaido-info-image').style.visibility = \"visible\";\n    document.getElementById('tohoku-info-image').style.visibility = \"hidden\";\n  }\n  // On Tohoku\n  if ((scroll > hokkaidoPixels + 250) && (scroll < tohokuPixels + 250)) {\n    document.getElementById('hokkaido-region').style.filter = \"opacity(55%)\"\n    document.getElementById('tohoku-region').style.filter = \"none\"\n    document.getElementById('kanto-region').style.filter = \"opacity(55%)\"\n\n    document.getElementById('hokkaido-info').style.visibility = \"hidden\";\n    document.getElementById('tohoku-info').style.visibility = \"visible\";\n    document.getElementById('kanto-info').style.visibility = \"hidden\";\n\n    document.getElementById('hokkaido-info-image').style.visibility = \"hidden\";\n    document.getElementById('tohoku-info-image').style.visibility = \"visible\";\n    document.getElementById('kanto-info-image').style.visibility = \"hidden\";\n  }\n  // On Kanto\n  if ((scroll > tohokuPixels + 250) && (scroll < kantoPixels + 250)) {\n    document.getElementById('tohoku-region').style.filter = \"opacity(55%)\"\n    document.getElementById('kanto-region').style.filter = \"none\"\n    document.getElementById('chubu-region').style.filter = \"opacity(55%)\"\n    \n    document.getElementById('tohoku-info').style.visibility = \"hidden\";\n    document.getElementById('kanto-info').style.visibility = \"visible\";\n    document.getElementById('chubu-info').style.visibility = \"hidden\";\n    \n    document.getElementById('tohoku-info-image').style.visibility = \"hidden\";\n    document.getElementById('kanto-info-image').style.visibility = \"visible\";\n    document.getElementById('chubu-info-image').style.visibility = \"hidden\";\n  }\n  // On Chubu\n  if ((scroll > kantoPixels + 250) && (scroll < chubuPixels + 250)) {\n    document.getElementById('kanto-region').style.filter = \"opacity(55%)\"\n    document.getElementById('chubu-region').style.filter = \"none\"\n    document.getElementById('kansai-region').style.filter = \"opacity(55%)\"\n\n    document.getElementById('kanto-info').style.visibility = \"hidden\";\n    document.getElementById('chubu-info').style.visibility = \"visible\";\n    document.getElementById('kansai-info').style.visibility = \"hidden\";\n    \n    document.getElementById('kanto-info-image').style.visibility = \"hidden\";\n    document.getElementById('chubu-info-image').style.visibility = \"visible\";\n    document.getElementById('kansai-info-image').style.visibility = \"hidden\";\n  }\n  // On Kansai\n  if ((scroll > chubuPixels + 250) && (scroll < kansaiPixels + 250)) {\n    document.getElementById('chubu-region').style.filter = \"opacity(55%)\"\n    document.getElementById('kansai-region').style.filter = \"none\"\n    document.getElementById('chugoku-region').style.filter = \"opacity(55%)\"\n\n    document.getElementById('chubu-info').style.visibility = \"hidden\";\n    document.getElementById('kansai-info').style.visibility = \"visible\";\n    document.getElementById('chugoku-info').style.visibility = \"hidden\";\n    \n    document.getElementById('chubu-info-image').style.visibility = \"hidden\";\n    document.getElementById('kansai-info-image').style.visibility = \"visible\";\n    document.getElementById('chugoku-info-image').style.visibility = \"hidden\";\n  }\n  // On Chugoku\n  if ((scroll > kansaiPixels + 250) && (scroll < chugokuPixels + 250)) {\n    document.getElementById('kansai-region').style.filter = \"opacity(55%)\"\n    document.getElementById('chugoku-region').style.filter = \"none\"\n    document.getElementById('shikoku-region').style.filter = \"opacity(55%)\"\n\n    document.getElementById('kansai-info').style.visibility = \"hidden\";\n    document.getElementById('chugoku-info').style.visibility = \"visible\";\n    document.getElementById('shikoku-info').style.visibility = \"hidden\";\n    \n    document.getElementById('kansai-info-image').style.visibility = \"hidden\";\n    document.getElementById('chugoku-info-image').style.visibility = \"visible\";\n    document.getElementById('shikoku-info-image').style.visibility = \"hidden\";\n  }\n  // On Shikoku\n  if ((scroll > chugokuPixels + 250) && (scroll < shikokuPixels + 250)) {\n    document.getElementById('chugoku-region').style.filter = \"opacity(55%)\"\n    document.getElementById('shikoku-region').style.filter = \"none\"\n    document.getElementById('kyushu-region').style.filter = \"opacity(55%)\"\n\n    document.getElementById('chugoku-info').style.visibility = \"hidden\";\n    document.getElementById('shikoku-info').style.visibility = \"visible\";\n    document.getElementById('kyushu-info').style.visibility = \"hidden\";\n    \n    document.getElementById('chugoku-info-image').style.visibility = \"hidden\";\n    document.getElementById('shikoku-info-image').style.visibility = \"visible\";\n    document.getElementById('kyushu-info-image').style.visibility = \"hidden\";\n  }\n  // On Kyushu\n  if ((scroll > shikokuPixels + 250) && (scroll < kyushuPixels + 250)) {\n    document.getElementById('shikoku-region').style.filter = \"opacity(55%)\"\n    document.getElementById('kyushu-region').style.filter = \"none\"\n\n    document.getElementById('shikoku-info').style.visibility = \"hidden\";\n    document.getElementById('kyushu-info').style.visibility = \"visible\";\n\n    document.getElementById('shikoku-info-image').style.visibility = \"hidden\";\n    document.getElementById('kyushu-info-image').style.visibility = \"visible\";\n  }\n})\n\n\n//# sourceURL=webpack://Travel_Dreams/./src/map.js?");

/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://Travel_Dreams/./src/navbar.js?");

/***/ }),

/***/ "./src/passport.js":
/*!*************************!*\
  !*** ./src/passport.js ***!
  \*************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://Travel_Dreams/./src/passport.js?");

/***/ }),

/***/ "./src/region-info.js":
/*!****************************!*\
  !*** ./src/region-info.js ***!
  \****************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://Travel_Dreams/./src/region-info.js?");

/***/ }),

/***/ "./src/review.js":
/*!***********************!*\
  !*** ./src/review.js ***!
  \***********************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://Travel_Dreams/./src/review.js?");

/***/ }),

/***/ "./src/start_modal.js":
/*!****************************!*\
  !*** ./src/start_modal.js ***!
  \****************************/
/***/ (() => {

eval("const startingModalButton = document.getElementById('starting-modal-button');\nconst startingModal = document.getElementById('starting-modal');\nconst mapOfJapan = document.getElementsByClassName('map-of-japan');\nconst regionInfo = document.getElementById('region-info')\n\nstartingModalButton.addEventListener('click', (e) => {\n  startingModal.style.display = \"none\";\n  document.body.style.backgroundColor = \"white\";\n  for (let i = 0; i < mapOfJapan.length; i++) {\n    mapOfJapan[i].style.display = \"block\";\n  }\n  regionInfo.style.display = \"block\";\n})\n\n\n//# sourceURL=webpack://Travel_Dreams/./src/start_modal.js?");

/***/ }),

/***/ "./src/tourist_spots.js":
/*!******************************!*\
  !*** ./src/tourist_spots.js ***!
  \******************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://Travel_Dreams/./src/tourist_spots.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 				() => module['default'] :
/******/ 				() => module;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;