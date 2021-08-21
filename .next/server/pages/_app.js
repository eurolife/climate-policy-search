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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./actions/actionTypes.js":
/*!********************************!*\
  !*** ./actions/actionTypes.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GET_POLICIES\": function() { return /* binding */ GET_POLICIES; },\n/* harmony export */   \"SET_POLICIES\": function() { return /* binding */ SET_POLICIES; },\n/* harmony export */   \"SET_SECTORS\": function() { return /* binding */ SET_SECTORS; },\n/* harmony export */   \"UPDATE_METADATA\": function() { return /* binding */ UPDATE_METADATA; },\n/* harmony export */   \"SET_STATUS\": function() { return /* binding */ SET_STATUS; }\n/* harmony export */ });\nconst GET_POLICIES = 'GET_POLICIES';\nconst SET_POLICIES = 'SET_POLICIES';\nconst SET_SECTORS = 'SET_SECTORS';\nconst UPDATE_METADATA = 'UPDATE_METADATA';\nconst SET_STATUS = 'SET_STATUS';//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGltYXRlLXBvbGljeS1zZWFyY2gvLi9hY3Rpb25zL2FjdGlvblR5cGVzLmpzPzViZTciXSwibmFtZXMiOlsiR0VUX1BPTElDSUVTIiwiU0VUX1BPTElDSUVTIiwiU0VUX1NFQ1RPUlMiLCJVUERBVEVfTUVUQURBVEEiLCJTRVRfU1RBVFVTIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFPLE1BQU1BLFlBQVksR0FBRyxjQUFyQjtBQUNBLE1BQU1DLFlBQVksR0FBRyxjQUFyQjtBQUNBLE1BQU1DLFdBQVcsR0FBRyxhQUFwQjtBQUNBLE1BQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFDQSxNQUFNQyxVQUFVLEdBQUcsWUFBbkIiLCJmaWxlIjoiLi9hY3Rpb25zL2FjdGlvblR5cGVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEdFVF9QT0xJQ0lFUyA9ICdHRVRfUE9MSUNJRVMnO1xuZXhwb3J0IGNvbnN0IFNFVF9QT0xJQ0lFUyA9ICdTRVRfUE9MSUNJRVMnO1xuZXhwb3J0IGNvbnN0IFNFVF9TRUNUT1JTID0gJ1NFVF9TRUNUT1JTJztcbmV4cG9ydCBjb25zdCBVUERBVEVfTUVUQURBVEEgPSAnVVBEQVRFX01FVEFEQVRBJztcbmV4cG9ydCBjb25zdCBTRVRfU1RBVFVTID0gJ1NFVF9TVEFUVVMnOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./actions/actionTypes.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/app.scss */ \"./styles/app.scss\");\n/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_app_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store */ \"./store/index.js\");\n\nvar _jsxFileName = \"/Users/admin/Documents/climate-policy-search/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nconst MyApp = ({\n  Component,\n  pageProps\n}) => {\n  const store = (0,_store__WEBPACK_IMPORTED_MODULE_4__.useStore)(pageProps);\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {\n    var _window;\n\n    if ((_window = window) !== null && _window !== void 0 && _window.Cypress) {\n      window.store = store;\n    }\n  }, [store]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {\n    store: store,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGltYXRlLXBvbGljeS1zZWFyY2gvLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzdG9yZSIsInVzZVN0b3JlIiwidXNlRWZmZWN0Iiwid2luZG93IiwiQ3lwcmVzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLEtBQUssR0FBRyxDQUFDO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFELEtBQThCO0FBRTFDLFFBQU1DLEtBQUssR0FBR0MsZ0RBQVEsQ0FBQ0YsU0FBRCxDQUF0QjtBQUVBRyxrREFBUyxDQUFDLE1BQU07QUFBQTs7QUFDZCxtQkFBSUMsTUFBSixvQ0FBSSxRQUFRQyxPQUFaLEVBQXFCO0FBQ25CRCxZQUFNLENBQUNILEtBQVAsR0FBZUEsS0FBZjtBQUNEO0FBQ0YsR0FKUSxFQUlOLENBQUNBLEtBQUQsQ0FKTSxDQUFUO0FBTUEsc0JBQ0UsOERBQUMsaURBQUQ7QUFBVSxTQUFLLEVBQUVBLEtBQWpCO0FBQUEsMkJBQ0UsOERBQUMsU0FBRCxvQkFBZUQsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBS0QsQ0FmRDs7QUFpQkEsK0RBQWVGLEtBQWYiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvYXBwLnNjc3MnO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB1c2VTdG9yZSB9IGZyb20gJy4uL3N0b3JlJztcblxuY29uc3QgTXlBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XG5cbiAgY29uc3Qgc3RvcmUgPSB1c2VTdG9yZShwYWdlUHJvcHMpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHdpbmRvdz8uQ3lwcmVzcykge1xuICAgICAgd2luZG93LnN0b3JlID0gc3RvcmU7XG4gICAgfVxuICB9LCBbc3RvcmVdKVxuXG4gIHJldHVybiAoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _policies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./policies */ \"./reducers/policies.js\");\n/* harmony import */ var _sectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sectors */ \"./reducers/sectors.js\");\n/* harmony import */ var _status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./status */ \"./reducers/status.js\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({\n  status: _status__WEBPACK_IMPORTED_MODULE_3__.default,\n  policies: _policies__WEBPACK_IMPORTED_MODULE_1__.default,\n  sectors: _sectors__WEBPACK_IMPORTED_MODULE_2__.default\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGltYXRlLXBvbGljeS1zZWFyY2gvLi9yZWR1Y2Vycy9pbmRleC5qcz9jZThlIl0sIm5hbWVzIjpbImNvbWJpbmVSZWR1Y2VycyIsInN0YXR1cyIsInBvbGljaWVzIiwic2VjdG9ycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSwrREFBZUEsc0RBQWUsQ0FBQztBQUFDQyxRQUFEO0FBQVNDLFVBQVQ7QUFBbUJDLFNBQU9BO0FBQTFCLENBQUQsQ0FBOUIiLCJmaWxlIjoiLi9yZWR1Y2Vycy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBwb2xpY2llcyBmcm9tICcuL3BvbGljaWVzJztcbmltcG9ydCBzZWN0b3JzIGZyb20gJy4vc2VjdG9ycyc7XG5pbXBvcnQgc3RhdHVzIGZyb20gJy4vc3RhdHVzJztcblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtzdGF0dXMsIHBvbGljaWVzLCBzZWN0b3JzfSkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducers/index.js\n");

/***/ }),

/***/ "./reducers/policies.js":
/*!******************************!*\
  !*** ./reducers/policies.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ \"immer\");\n/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/actionTypes */ \"./actions/actionTypes.js\");\n/* harmony import */ var _store_initialState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/initialState */ \"./store/initialState.js\");\n\n\n\n\nconst policiesReducer = (state = _store_initialState__WEBPACK_IMPORTED_MODULE_2__.default.policies, action) => {\n  return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {\n    switch (action.type) {\n      case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__.SET_POLICIES:\n        return draft = action.data;\n\n      case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__.UPDATE_METADATA:\n        // payload = object {id, organisation, location, date, concerns}\n        const {\n          id,\n          organisation,\n          location,\n          date,\n          concerns\n        } = action.data;\n        const policy = draft.find(policy => policy.policy_id === id);\n        policy.organisation = organisation;\n        policy.location = location;\n        policy.date = date;\n        policy.concerns = concerns;\n        break;\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (policiesReducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGltYXRlLXBvbGljeS1zZWFyY2gvLi9yZWR1Y2Vycy9wb2xpY2llcy5qcz9lMzRiIl0sIm5hbWVzIjpbInBvbGljaWVzUmVkdWNlciIsInN0YXRlIiwiaW5pdGlhbFN0YXRlIiwiYWN0aW9uIiwicHJvZHVjZSIsImRyYWZ0IiwidHlwZSIsInR5cGVzIiwiZGF0YSIsImlkIiwib3JnYW5pc2F0aW9uIiwibG9jYXRpb24iLCJkYXRlIiwiY29uY2VybnMiLCJwb2xpY3kiLCJmaW5kIiwicG9saWN5X2lkIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxlQUFlLEdBQUcsQ0FBQ0MsS0FBSyxHQUFHQyxpRUFBVCxFQUFnQ0MsTUFBaEMsS0FBMkM7QUFDakUsU0FBT0MsNENBQU8sQ0FBQ0gsS0FBRCxFQUFTSSxLQUFELElBQVc7QUFDL0IsWUFBUUYsTUFBTSxDQUFDRyxJQUFmO0FBQ0UsV0FBS0MsOERBQUw7QUFDRSxlQUFPRixLQUFLLEdBQUdGLE1BQU0sQ0FBQ0ssSUFBdEI7O0FBQ0YsV0FBS0QsaUVBQUw7QUFDRTtBQUNBLGNBQU07QUFBRUUsWUFBRjtBQUFNQyxzQkFBTjtBQUFvQkMsa0JBQXBCO0FBQThCQyxjQUE5QjtBQUFvQ0M7QUFBcEMsWUFBaURWLE1BQU0sQ0FBQ0ssSUFBOUQ7QUFDQSxjQUFNTSxNQUFNLEdBQUdULEtBQUssQ0FBQ1UsSUFBTixDQUFZRCxNQUFELElBQVlBLE1BQU0sQ0FBQ0UsU0FBUCxLQUFxQlAsRUFBNUMsQ0FBZjtBQUNBSyxjQUFNLENBQUNKLFlBQVAsR0FBc0JBLFlBQXRCO0FBQ0FJLGNBQU0sQ0FBQ0gsUUFBUCxHQUFrQkEsUUFBbEI7QUFDQUcsY0FBTSxDQUFDRixJQUFQLEdBQWNBLElBQWQ7QUFDQUUsY0FBTSxDQUFDRCxRQUFQLEdBQWtCQSxRQUFsQjtBQUVBO0FBWko7QUFjRCxHQWZhLENBQWQ7QUFnQkQsQ0FqQkQ7O0FBa0JBLCtEQUFlYixlQUFmIiwiZmlsZSI6Ii4vcmVkdWNlcnMvcG9saWNpZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcic7XG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9hY3Rpb25zL2FjdGlvblR5cGVzJztcbmltcG9ydCBpbml0aWFsU3RhdGUgZnJvbSAnLi4vc3RvcmUvaW5pdGlhbFN0YXRlJztcblxuY29uc3QgcG9saWNpZXNSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLnBvbGljaWVzLCBhY3Rpb24pID0+IHtcbiAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgdHlwZXMuU0VUX1BPTElDSUVTOlxuICAgICAgICByZXR1cm4gZHJhZnQgPSBhY3Rpb24uZGF0YTtcbiAgICAgIGNhc2UgdHlwZXMuVVBEQVRFX01FVEFEQVRBOlxuICAgICAgICAvLyBwYXlsb2FkID0gb2JqZWN0IHtpZCwgb3JnYW5pc2F0aW9uLCBsb2NhdGlvbiwgZGF0ZSwgY29uY2VybnN9XG4gICAgICAgIGNvbnN0IHsgaWQsIG9yZ2FuaXNhdGlvbiwgbG9jYXRpb24sIGRhdGUsIGNvbmNlcm5zIH0gPSBhY3Rpb24uZGF0YTtcbiAgICAgICAgY29uc3QgcG9saWN5ID0gZHJhZnQuZmluZCgocG9saWN5KSA9PiBwb2xpY3kucG9saWN5X2lkID09PSBpZCk7XG4gICAgICAgIHBvbGljeS5vcmdhbmlzYXRpb24gPSBvcmdhbmlzYXRpb247XG4gICAgICAgIHBvbGljeS5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuICAgICAgICBwb2xpY3kuZGF0ZSA9IGRhdGU7XG4gICAgICAgIHBvbGljeS5jb25jZXJucyA9IGNvbmNlcm5zO1xuICAgICAgICBcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9KVxufVxuZXhwb3J0IGRlZmF1bHQgcG9saWNpZXNSZWR1Y2VyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducers/policies.js\n");

/***/ }),

/***/ "./reducers/sectors.js":
/*!*****************************!*\
  !*** ./reducers/sectors.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ \"immer\");\n/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/actionTypes */ \"./actions/actionTypes.js\");\n/* harmony import */ var _store_initialState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/initialState */ \"./store/initialState.js\");\n\n\n\n\nconst sectorsReducer = (state = _store_initialState__WEBPACK_IMPORTED_MODULE_2__.default.sectors, action) => {\n  return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {\n    switch (action.type) {\n      case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__.SET_SECTORS:\n        return draft = action.data;\n\n      default:\n        break;\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (sectorsReducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGltYXRlLXBvbGljeS1zZWFyY2gvLi9yZWR1Y2Vycy9zZWN0b3JzLmpzPzNjNzUiXSwibmFtZXMiOlsic2VjdG9yc1JlZHVjZXIiLCJzdGF0ZSIsImluaXRpYWxTdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsInR5cGUiLCJ0eXBlcyIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLGNBQWMsR0FBRyxDQUFDQyxLQUFLLEdBQUdDLGdFQUFULEVBQStCQyxNQUEvQixLQUEwQztBQUMvRCxTQUFPQyw0Q0FBTyxDQUFDSCxLQUFELEVBQVNJLEtBQUQsSUFBVztBQUMvQixZQUFRRixNQUFNLENBQUNHLElBQWY7QUFDRSxXQUFLQyw2REFBTDtBQUNFLGVBQU9GLEtBQUssR0FBR0YsTUFBTSxDQUFDSyxJQUF0Qjs7QUFDRjtBQUNFO0FBSko7QUFNRCxHQVBhLENBQWQ7QUFRRCxDQVREOztBQVVBLCtEQUFlUixjQUFmIiwiZmlsZSI6Ii4vcmVkdWNlcnMvc2VjdG9ycy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJztcbmltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL2FjdGlvbnMvYWN0aW9uVHlwZXMnO1xuaW1wb3J0IGluaXRpYWxTdGF0ZSBmcm9tICcuLi9zdG9yZS9pbml0aWFsU3RhdGUnO1xuXG5jb25zdCBzZWN0b3JzUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZS5zZWN0b3JzLCBhY3Rpb24pID0+IHtcbiAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgdHlwZXMuU0VUX1NFQ1RPUlM6XG4gICAgICAgIHJldHVybiBkcmFmdCA9IGFjdGlvbi5kYXRhO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9KVxufVxuZXhwb3J0IGRlZmF1bHQgc2VjdG9yc1JlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/sectors.js\n");

/***/ }),

/***/ "./reducers/status.js":
/*!****************************!*\
  !*** ./reducers/status.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ \"immer\");\n/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/actionTypes */ \"./actions/actionTypes.js\");\n/* harmony import */ var _store_initialState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/initialState */ \"./store/initialState.js\");\n\n\n\n\nconst statusReducer = (state = _store_initialState__WEBPACK_IMPORTED_MODULE_2__.default.status, action) => {\n  return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {\n    switch (action.type) {\n      case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__.SET_STATUS:\n        //payload: true or false\n        return draft = action.data;\n\n      default:\n        break;\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (statusReducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGltYXRlLXBvbGljeS1zZWFyY2gvLi9yZWR1Y2Vycy9zdGF0dXMuanM/Mjk4OCJdLCJuYW1lcyI6WyJzdGF0dXNSZWR1Y2VyIiwic3RhdGUiLCJpbml0aWFsU3RhdGUiLCJhY3Rpb24iLCJwcm9kdWNlIiwiZHJhZnQiLCJ0eXBlIiwidHlwZXMiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxhQUFhLEdBQUcsQ0FBQ0MsS0FBSyxHQUFHQywrREFBVCxFQUE4QkMsTUFBOUIsS0FBeUM7QUFDN0QsU0FBT0MsNENBQU8sQ0FBQ0gsS0FBRCxFQUFTSSxLQUFELElBQVc7QUFDL0IsWUFBUUYsTUFBTSxDQUFDRyxJQUFmO0FBQ0UsV0FBS0MsNERBQUw7QUFDRTtBQUNBLGVBQU9GLEtBQUssR0FBR0YsTUFBTSxDQUFDSyxJQUF0Qjs7QUFDRjtBQUNFO0FBTEo7QUFPRCxHQVJhLENBQWQ7QUFTRCxDQVZEOztBQVdBLCtEQUFlUixhQUFmIiwiZmlsZSI6Ii4vcmVkdWNlcnMvc3RhdHVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInO1xuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vYWN0aW9ucy9hY3Rpb25UeXBlcyc7XG5pbXBvcnQgaW5pdGlhbFN0YXRlIGZyb20gJy4uL3N0b3JlL2luaXRpYWxTdGF0ZSc7XG5cbmNvbnN0IHN0YXR1c1JlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUuc3RhdHVzLCBhY3Rpb24pID0+IHtcbiAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgdHlwZXMuU0VUX1NUQVRVUzpcbiAgICAgICAgLy9wYXlsb2FkOiB0cnVlIG9yIGZhbHNlXG4gICAgICAgIHJldHVybiBkcmFmdCA9IGFjdGlvbi5kYXRhO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9KVxufVxuZXhwb3J0IGRlZmF1bHQgc3RhdHVzUmVkdWNlcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducers/status.js\n");

/***/ }),

/***/ "./store/index.js":
/*!************************!*\
  !*** ./store/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initializeStore\": function() { return /* binding */ initializeStore; },\n/* harmony export */   \"useStore\": function() { return /* binding */ useStore; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers */ \"./reducers/index.js\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_4__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nlet store;\n\nfunction initStore(preloadedState = initialState) {\n  return (0,redux__WEBPACK_IMPORTED_MODULE_1__.createStore)(_reducers__WEBPACK_IMPORTED_MODULE_3__.default, preloadedState, (0,redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__.composeWithDevTools)((0,redux__WEBPACK_IMPORTED_MODULE_1__.applyMiddleware)((redux_thunk__WEBPACK_IMPORTED_MODULE_4___default()))));\n}\n\nconst initializeStore = preloadedState => {\n  var _store2;\n\n  let _store = (_store2 = store) !== null && _store2 !== void 0 ? _store2 : initStore(preloadedState); // After navigating to a page with an initial Redux state, merge that state\n  // with the current state in the store, and create a new store\n\n\n  if (preloadedState && store) {\n    _store = initStore(_objectSpread(_objectSpread({}, store.getState()), preloadedState)); // Reset the current store\n\n    store = undefined;\n  } // For SSG and SSR always create a new store\n\n\n  if (true) return _store; // Create the store once in the client\n\n  if (!store) store = _store;\n  return _store;\n};\nfunction useStore(initialState) {\n  const store = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => initializeStore(initialState), [initialState]);\n  return store;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGltYXRlLXBvbGljeS1zZWFyY2gvLi9zdG9yZS9pbmRleC5qcz85MTAxIl0sIm5hbWVzIjpbInN0b3JlIiwiaW5pdFN0b3JlIiwicHJlbG9hZGVkU3RhdGUiLCJpbml0aWFsU3RhdGUiLCJjcmVhdGVTdG9yZSIsInJlZHVjZXJzIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsInRodW5rTWlkZGxld2FyZSIsImluaXRpYWxpemVTdG9yZSIsIl9zdG9yZSIsImdldFN0YXRlIiwidW5kZWZpbmVkIiwidXNlU3RvcmUiLCJ1c2VNZW1vIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxLQUFKOztBQUVBLFNBQVNDLFNBQVQsQ0FBbUJDLGNBQWMsR0FBR0MsWUFBcEMsRUFBa0Q7QUFFaEQsU0FBT0Msa0RBQVcsQ0FDaEJDLDhDQURnQixFQUVoQkgsY0FGZ0IsRUFHaEJJLDZFQUFtQixDQUFDQyxzREFBZSxDQUFDQyxvREFBRCxDQUFoQixDQUhILENBQWxCO0FBS0Q7O0FBRU0sTUFBTUMsZUFBZSxHQUFJUCxjQUFELElBQW9CO0FBQUE7O0FBQ2pELE1BQUlRLE1BQU0sY0FBR1YsS0FBSCw2Q0FBWUMsU0FBUyxDQUFDQyxjQUFELENBQS9CLENBRGlELENBR2pEO0FBQ0E7OztBQUNBLE1BQUlBLGNBQWMsSUFBSUYsS0FBdEIsRUFBNkI7QUFDM0JVLFVBQU0sR0FBR1QsU0FBUyxpQ0FDYkQsS0FBSyxDQUFDVyxRQUFOLEVBRGEsR0FFYlQsY0FGYSxFQUFsQixDQUQyQixDQUszQjs7QUFDQUYsU0FBSyxHQUFHWSxTQUFSO0FBQ0QsR0FaZ0QsQ0FjakQ7OztBQUNBLFlBQW1DLE9BQU9GLE1BQVAsQ0FmYyxDQWdCakQ7O0FBQ0EsTUFBSSxDQUFDVixLQUFMLEVBQVlBLEtBQUssR0FBR1UsTUFBUjtBQUVaLFNBQU9BLE1BQVA7QUFDRCxDQXBCTTtBQXNCQSxTQUFTRyxRQUFULENBQWtCVixZQUFsQixFQUFnQztBQUNyQyxRQUFNSCxLQUFLLEdBQUdjLDhDQUFPLENBQUMsTUFBTUwsZUFBZSxDQUFDTixZQUFELENBQXRCLEVBQXNDLENBQUNBLFlBQUQsQ0FBdEMsQ0FBckI7QUFDQSxTQUFPSCxLQUFQO0FBQ0QiLCJmaWxlIjoiLi9zdG9yZS9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbidcbmltcG9ydCByZWR1Y2VycyBmcm9tICcuLi9yZWR1Y2Vycyc7XG5pbXBvcnQgdGh1bmtNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXRodW5rJztcblxubGV0IHN0b3JlXG5cbmZ1bmN0aW9uIGluaXRTdG9yZShwcmVsb2FkZWRTdGF0ZSA9IGluaXRpYWxTdGF0ZSkge1xuXG4gIHJldHVybiBjcmVhdGVTdG9yZShcbiAgICByZWR1Y2VycyxcbiAgICBwcmVsb2FkZWRTdGF0ZSxcbiAgICBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSh0aHVua01pZGRsZXdhcmUpKVxuICApXG59XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsaXplU3RvcmUgPSAocHJlbG9hZGVkU3RhdGUpID0+IHtcbiAgbGV0IF9zdG9yZSA9IHN0b3JlID8/IGluaXRTdG9yZShwcmVsb2FkZWRTdGF0ZSlcblxuICAvLyBBZnRlciBuYXZpZ2F0aW5nIHRvIGEgcGFnZSB3aXRoIGFuIGluaXRpYWwgUmVkdXggc3RhdGUsIG1lcmdlIHRoYXQgc3RhdGVcbiAgLy8gd2l0aCB0aGUgY3VycmVudCBzdGF0ZSBpbiB0aGUgc3RvcmUsIGFuZCBjcmVhdGUgYSBuZXcgc3RvcmVcbiAgaWYgKHByZWxvYWRlZFN0YXRlICYmIHN0b3JlKSB7XG4gICAgX3N0b3JlID0gaW5pdFN0b3JlKHtcbiAgICAgIC4uLnN0b3JlLmdldFN0YXRlKCksXG4gICAgICAuLi5wcmVsb2FkZWRTdGF0ZSxcbiAgICB9KVxuICAgIC8vIFJlc2V0IHRoZSBjdXJyZW50IHN0b3JlXG4gICAgc3RvcmUgPSB1bmRlZmluZWRcbiAgfVxuXG4gIC8vIEZvciBTU0cgYW5kIFNTUiBhbHdheXMgY3JlYXRlIGEgbmV3IHN0b3JlXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuIF9zdG9yZVxuICAvLyBDcmVhdGUgdGhlIHN0b3JlIG9uY2UgaW4gdGhlIGNsaWVudFxuICBpZiAoIXN0b3JlKSBzdG9yZSA9IF9zdG9yZVxuXG4gIHJldHVybiBfc3RvcmVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0b3JlKGluaXRpYWxTdGF0ZSkge1xuICBjb25zdCBzdG9yZSA9IHVzZU1lbW8oKCkgPT4gaW5pdGlhbGl6ZVN0b3JlKGluaXRpYWxTdGF0ZSksIFtpbml0aWFsU3RhdGVdKVxuICByZXR1cm4gc3RvcmVcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/index.js\n");

/***/ }),

/***/ "./store/initialState.js":
/*!*******************************!*\
  !*** ./store/initialState.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst initialState = {\n  status: {\n    loading: true,\n    processed: false\n  },\n  policies: [],\n  sectors: []\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (initialState);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGltYXRlLXBvbGljeS1zZWFyY2gvLi9zdG9yZS9pbml0aWFsU3RhdGUuanM/MTdhZSJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJzdGF0dXMiLCJsb2FkaW5nIiwicHJvY2Vzc2VkIiwicG9saWNpZXMiLCJzZWN0b3JzIl0sIm1hcHBpbmdzIjoiO0FBQUEsTUFBTUEsWUFBWSxHQUFHO0FBQ25CQyxRQUFNLEVBQUU7QUFBQ0MsV0FBTyxFQUFFLElBQVY7QUFBZ0JDLGFBQVMsRUFBRTtBQUEzQixHQURXO0FBRW5CQyxVQUFRLEVBQUUsRUFGUztBQUduQkMsU0FBTyxFQUFFO0FBSFUsQ0FBckI7QUFLQSwrREFBZUwsWUFBZiIsImZpbGUiOiIuL3N0b3JlL2luaXRpYWxTdGF0ZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgc3RhdHVzOiB7bG9hZGluZzogdHJ1ZSwgcHJvY2Vzc2VkOiBmYWxzZX0sXG4gIHBvbGljaWVzOiBbXSxcbiAgc2VjdG9yczogW10sXG59O1xuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbFN0YXRlOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/initialState.js\n");

/***/ }),

/***/ "./styles/app.scss":
/*!*************************!*\
  !*** ./styles/app.scss ***!
  \*************************/
/***/ (function() {



/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("immer");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux");;

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-devtools-extension");;

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-thunk");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();