"use strict";
(() => {
var exports = {};
exports.id = "pages/blog/[id]";
exports.ids = ["pages/blog/[id]"];
exports.modules = {

/***/ "./pages/blog/[id].js":
/*!****************************!*\
  !*** ./pages/blog/[id].js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _posts_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../posts.json */ "./posts.json");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\nextjs\\pages\\blog\\[id].js";



const Post = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
      children: props.post.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
      children: props.post.content
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
      children: props.post.Instructor
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
      children: props.post.Duration
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, undefined);
};

Post.getInitialProps = ({
  query
}) => {
  return {
    post: _posts_json__WEBPACK_IMPORTED_MODULE_0__[query.id]
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "./posts.json":
/*!********************!*\
  !*** ./posts.json ***!
  \********************/
/***/ ((module) => {

module.exports = JSON.parse('{"first":{"title":"Calculus I","content":"Limits and continuity,  Derivatives: definition and basic rules, Derivatives: chain rule and other advanced topics, Applications of derivatives, Analyzing functions, Integrals, Differential equations, Applications of integrals","Instructor":"AAAAAAAAAAAA","Duration":1350},"second":{"title":"Physics I","content":"Intro to Physics, One and Two Diemsion, Newton and Aplication, Works and Energy, Center of mass, Moment of inertia","Instructor":"BBBBBBBBBBB","Duration":2350},"third":{"title":"Chemistry for Engineer","content":"Atom, Solid, Liquid, Gas, Titration","Instructor":"CCCCCCCCCCCC","Duration":999},"four":{"title":"Drawing","content":"First angle view, Dimension, Assemble","Instructor":"DDDDDDDDDDD","Duration":1456},"five":{"title":"Material","content":"Iron, Ceramics, Fabric, More..","Instructor":"EEEEEEEEEEEE","Duration":2005}}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/blog/[id].js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYmxvZy9baWRdLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7QUFFQSxNQUFNQyxJQUFJLEdBQUdDLEtBQUssSUFBSTtBQUNsQixzQkFDSTtBQUFBLDRCQUNJO0FBQUEsZ0JBQUtBLEtBQUssQ0FBQ0MsSUFBTixDQUFXQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUk7QUFBQSxnQkFBSUYsS0FBSyxDQUFDQyxJQUFOLENBQVdFO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSixlQUdJO0FBQUEsZ0JBQUlILEtBQUssQ0FBQ0MsSUFBTixDQUFXRztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEosZUFJSTtBQUFBLGdCQUFJSixLQUFLLENBQUNDLElBQU4sQ0FBV0k7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBUUgsQ0FURDs7QUFXQU4sSUFBSSxDQUFDTyxlQUFMLEdBQXVCLENBQUM7QUFBQ0MsRUFBQUE7QUFBRCxDQUFELEtBQWE7QUFDaEMsU0FBTztBQUNITixJQUFBQSxJQUFJLEVBQUVILHdDQUFLLENBQUNTLEtBQUssQ0FBQ0MsRUFBUDtBQURSLEdBQVA7QUFHSCxDQUpEOztBQU1BLGlFQUFlVCxJQUFmOzs7Ozs7Ozs7O0FDbkJBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLy4vcGFnZXMvYmxvZy9baWRdLmpzIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwb3N0cyBmcm9tICcuLi8uLi9wb3N0cy5qc29uJ1xyXG5cclxuY29uc3QgUG9zdCA9IHByb3BzID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgxPntwcm9wcy5wb3N0LnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgIDxwPntwcm9wcy5wb3N0LmNvbnRlbnR9PC9wPlxyXG4gICAgICAgICAgICA8cD57cHJvcHMucG9zdC5JbnN0cnVjdG9yfTwvcD5cclxuICAgICAgICAgICAgPHA+e3Byb3BzLnBvc3QuRHVyYXRpb259PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5Qb3N0LmdldEluaXRpYWxQcm9wcyA9ICh7cXVlcnl9KSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHBvc3Q6IHBvc3RzW3F1ZXJ5LmlkXVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJwb3N0cyIsIlBvc3QiLCJwcm9wcyIsInBvc3QiLCJ0aXRsZSIsImNvbnRlbnQiLCJJbnN0cnVjdG9yIiwiRHVyYXRpb24iLCJnZXRJbml0aWFsUHJvcHMiLCJxdWVyeSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==