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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar express = __webpack_require__(/*! express */ \"express\");\nvar app = express();\nvar port = 3000;\nvar defaultData = [\n    {\n        \"name\": \"Mercury\",\n        \"diameter\": \"4879 km\",\n        \"mass\": \"3.3 x 10^23 kg\",\n        \"gravity\": \"3.7 m/s^2\"\n    },\n    {\n        \"name\": \"Venus\",\n        \"diameter\": \"12,104 km\",\n        \"mass\": \"4.87 x 10^24 kg\",\n        \"gravity\": \"8.87 m/s^2\"\n    },\n    {\n        \"name\": \"Earth\",\n        \"diameter\": \"12,742 km\",\n        \"mass\": \"5.97 x 10^24 kg\",\n        \"gravity\": \"9.8 m/s^2\"\n    },\n    {\n        \"name\": \"Mars\",\n        \"diameter\": \"6,779 km\",\n        \"mass\": \"6.39 x 10^23 kg\",\n        \"gravity\": \"3.71 m/s^2\"\n    },\n    {\n        \"name\": \"Jupiter\",\n        \"diameter\": \"139,820 km\",\n        \"mass\": \"1.9 x 10^27 kg\",\n        \"gravity\": \"24.79 m/s^2\"\n    },\n    {\n        \"name\": \"Saturn\",\n        \"diameter\": \"116,460 km\",\n        \"mass\": \"5.68 x 10^26 kg\",\n        \"gravity\": \"10.44 m/s^2\"\n    },\n    {\n        \"name\": \"Uranus\",\n        \"diameter\": \"50,724 km\",\n        \"mass\": \"8.68 x 10^25 kg\",\n        \"gravity\": \"8.87 m/s^2\"\n    },\n    {\n        \"name\": \"Neptune\",\n        \"diameter\": \"49,244 km\",\n        \"mass\": \"1.02 x 10^26 kg\",\n        \"gravity\": \"11.15 m/s^2\"\n    }\n];\napp.get('/', function (req, res) {\n    res.send('Hi World');\n});\napp.get('/api/v1', function (req, res) {\n    res.json(defaultData);\n});\napp.listen(port, function () {\n    console.log(\"App Listening on port: \".concat(port));\n});\n\n\n//# sourceURL=webpack://webpack/./src/index.ts?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;