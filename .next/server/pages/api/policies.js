/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/api/policies";
exports.ids = ["pages/api/policies"];
exports.modules = {

/***/ "./pages/api/policies.js":
/*!*******************************!*\
  !*** ./pages/api/policies.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"policyReq\": function() { return /* binding */ policyReq; },\n/* harmony export */   \"default\": function() { return /* binding */ handler; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst policyReq = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n  baseURL: 'http://localhost:3000/data/',\n  method: 'GET'\n});\nasync function handler(req, res) {\n  try {\n    const response = await policyReq.get('policies.csv');\n    res.status(200).json(response.data);\n  } catch (error) {\n    res.json({\n      error\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGltYXRlLXBvbGljeS1zZWFyY2gvLi9wYWdlcy9hcGkvcG9saWNpZXMuanM/ZmNiZiJdLCJuYW1lcyI6WyJwb2xpY3lSZXEiLCJheGlvcyIsImJhc2VVUkwiLCJtZXRob2QiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwicmVzcG9uc2UiLCJnZXQiLCJzdGF0dXMiLCJqc29uIiwiZGF0YSIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDTyxNQUFNQSxTQUFTLEdBQUdDLG1EQUFBLENBQWE7QUFDcENDLFNBQU8sRUFBRSw2QkFEMkI7QUFFcENDLFFBQU0sRUFBRTtBQUY0QixDQUFiLENBQWxCO0FBTVEsZUFBZUMsT0FBZixDQUF1QkMsR0FBdkIsRUFBNEJDLEdBQTVCLEVBQWlDO0FBQzlDLE1BQUk7QUFDRixVQUFNQyxRQUFRLEdBQUcsTUFBTVAsU0FBUyxDQUFDUSxHQUFWLENBQWMsY0FBZCxDQUF2QjtBQUNBRixPQUFHLENBQUNHLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQkgsUUFBUSxDQUFDSSxJQUE5QjtBQUNELEdBSEQsQ0FHRSxPQUFPQyxLQUFQLEVBQWM7QUFDZE4sT0FBRyxDQUFDSSxJQUFKLENBQVM7QUFBRUU7QUFBRixLQUFUO0FBQ0Q7QUFDRiIsImZpbGUiOiIuL3BhZ2VzL2FwaS9wb2xpY2llcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5leHBvcnQgY29uc3QgcG9saWN5UmVxID0gYXhpb3MuY3JlYXRlKHtcbiAgYmFzZVVSTDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9kYXRhLycsXG4gIG1ldGhvZDogJ0dFVCcsXG5cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBwb2xpY3lSZXEuZ2V0KCdwb2xpY2llcy5jc3YnKTtcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihyZXNwb25zZS5kYXRhKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXMuanNvbih7IGVycm9yIH0pO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/policies.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/policies.js"));
module.exports = __webpack_exports__;

})();