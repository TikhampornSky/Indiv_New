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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _posts_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../posts.json */ "./posts.json");
/* harmony import */ var _style_display_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../style/display.module.css */ "./style/display.module.css");
/* harmony import */ var _style_display_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_display_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Desktop\\123\\pages\\blog\\[id].js";




const Post = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: (_style_display_module_css__WEBPACK_IMPORTED_MODULE_2___default().test),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
      children: props.post.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
      children: props.post.content
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
      children: props.post.Instructor
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
      children: props.post.Duration
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
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

/***/ "./style/display.module.css":
/*!**********************************!*\
  !*** ./style/display.module.css ***!
  \**********************************/
/***/ ((module) => {

// Exports
module.exports = {
	"test": "display_test__WM_vE"
};


/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "./posts.json":
/*!********************!*\
  !*** ./posts.json ***!
  \********************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"first":{"title":"Calculus I","content":"Limits and continuity,  Derivatives: definition and basic rules, Derivatives: chain rule and other advanced topics, Applications of derivatives, Analyzing functions, Integrals, Differential equations, Applications of integrals","Instructor":"AAAAAAAAAAAA","Duration":1350,"Link":["second","three"]},"second":{"title":"Physics I","content":"Intro to Physics, One and Two Diemsion, Newton and Aplication, Works and Energy, Center of mass, Moment of inertia","Instructor":"BBBBBBBBBBB","Duration":2350,"Link":["first","five"]},"third":{"title":"Chemistry for Engineer","content":"Atom, Solid, Liquid, Gas, Titration","Instructor":"CCCCCCCCCCCC","Duration":999,"Link":["second"]},"four":{"title":"Drawing","content":"First angle view, Dimension, Assemble","Instructor":"DDDDDDDDDDD","Duration":1456,"Link":["five","one","two"]},"five":{"title":"Material","content":"Iron, Ceramics, Fabric, More..","Instructor":"EEEEEEEEEEEE","Duration":2005,"Link":["one","three"]}}');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYmxvZy9baWRdLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBRUEsTUFBTUUsSUFBSSxHQUFHQyxLQUFLLElBQUk7QUFDbEIsc0JBQ0k7QUFBSyxhQUFTLEVBQUVGLHVFQUFoQjtBQUFBLDRCQUNJO0FBQUEsZ0JBQUtFLEtBQUssQ0FBQ0UsSUFBTixDQUFXQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUk7QUFBQSxnQkFBSUgsS0FBSyxDQUFDRSxJQUFOLENBQVdFO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSixlQUdJO0FBQUEsZ0JBQUlKLEtBQUssQ0FBQ0UsSUFBTixDQUFXRztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEosZUFJSTtBQUFBLGdCQUFJTCxLQUFLLENBQUNFLElBQU4sQ0FBV0k7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBUUgsQ0FURDs7QUFXQVAsSUFBSSxDQUFDUSxlQUFMLEdBQXVCLENBQUM7QUFBQ0MsRUFBQUE7QUFBRCxDQUFELEtBQWE7QUFDaEMsU0FBTztBQUNITixJQUFBQSxJQUFJLEVBQUVMLHdDQUFLLENBQUNXLEtBQUssQ0FBQ0MsRUFBUDtBQURSLEdBQVA7QUFHSCxDQUpEOztBQU1BLGlFQUFlVixJQUFmOzs7Ozs7Ozs7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNIQSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy8uL3BhZ2VzL2Jsb2cvW2lkXS5qcyIsIndlYnBhY2s6Ly9uZXh0anMvLi9zdHlsZS9kaXNwbGF5Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBvc3RzIGZyb20gJy4uLy4uL3Bvc3RzLmpzb24nXHJcbmltcG9ydCBzdHlsZSBmcm9tJy4uLy4uL3N0eWxlL2Rpc3BsYXkubW9kdWxlLmNzcydcclxuXHJcbmNvbnN0IFBvc3QgPSBwcm9wcyA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS50ZXN0fT4gXHJcbiAgICAgICAgICAgIDxoMT57cHJvcHMucG9zdC50aXRsZX08L2gxPlxyXG4gICAgICAgICAgICA8cD57cHJvcHMucG9zdC5jb250ZW50fTwvcD5cclxuICAgICAgICAgICAgPHA+e3Byb3BzLnBvc3QuSW5zdHJ1Y3Rvcn08L3A+XHJcbiAgICAgICAgICAgIDxwPntwcm9wcy5wb3N0LkR1cmF0aW9ufTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuUG9zdC5nZXRJbml0aWFsUHJvcHMgPSAoe3F1ZXJ5fSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwb3N0OiBwb3N0c1txdWVyeS5pZF1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdCIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInRlc3RcIjogXCJkaXNwbGF5X3Rlc3RfX1dNX3ZFXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbInBvc3RzIiwic3R5bGUiLCJQb3N0IiwicHJvcHMiLCJ0ZXN0IiwicG9zdCIsInRpdGxlIiwiY29udGVudCIsIkluc3RydWN0b3IiLCJEdXJhdGlvbiIsImdldEluaXRpYWxQcm9wcyIsInF1ZXJ5IiwiaWQiXSwic291cmNlUm9vdCI6IiJ9