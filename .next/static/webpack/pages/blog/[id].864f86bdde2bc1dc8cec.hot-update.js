"use strict";
self["webpackHotUpdate_N_E"]("pages/blog/[id]",{

/***/ "./pages/blog/[id].js":
/*!****************************!*\
  !*** ./pages/blog/[id].js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _posts_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../posts.json */ "./posts.json");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\nextjs\\pages\\blog\\[id].js",
    _this = undefined;




var Post = function Post(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
      children: props.post.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
      children: props.post.content
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
      children: props.post.Instructor
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
      children: props.post.Duration
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, _this);
};

_c = Post;

Post.getInitialProps = function (_ref) {
  var query = _ref.query;
  return {
    post: _posts_json__WEBPACK_IMPORTED_MODULE_0__[query.id]
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Post);

var _c;

$RefreshReg$(_c, "Post");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmxvZy9baWRdLjg2NGY4NmJkZGUyYmMxZGM4Y2VjLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBRUEsSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQUMsS0FBSyxFQUFJO0FBQ2xCLHNCQUNJO0FBQUEsNEJBQ0k7QUFBQSxnQkFBS0EsS0FBSyxDQUFDQyxJQUFOLENBQVdDO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUVJO0FBQUEsZ0JBQUlGLEtBQUssQ0FBQ0MsSUFBTixDQUFXRTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSixlQUdJO0FBQUEsZ0JBQUlILEtBQUssQ0FBQ0MsSUFBTixDQUFXRztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFISixlQUlJO0FBQUEsZ0JBQUlKLEtBQUssQ0FBQ0MsSUFBTixDQUFXSTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQVFILENBVEQ7O0tBQU1OOztBQVdOQSxJQUFJLENBQUNPLGVBQUwsR0FBdUIsZ0JBQWE7QUFBQSxNQUFYQyxLQUFXLFFBQVhBLEtBQVc7QUFDaEMsU0FBTztBQUNITixJQUFBQSxJQUFJLEVBQUVILHdDQUFLLENBQUNTLEtBQUssQ0FBQ0MsRUFBUDtBQURSLEdBQVA7QUFHSCxDQUpEOztBQU1BLCtEQUFlVCxJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Jsb2cvW2lkXS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcG9zdHMgZnJvbSAnLi4vLi4vcG9zdHMuanNvbidcclxuXHJcbmNvbnN0IFBvc3QgPSBwcm9wcyA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMT57cHJvcHMucG9zdC50aXRsZX08L2gxPlxyXG4gICAgICAgICAgICA8cD57cHJvcHMucG9zdC5jb250ZW50fTwvcD5cclxuICAgICAgICAgICAgPHA+e3Byb3BzLnBvc3QuSW5zdHJ1Y3Rvcn08L3A+XHJcbiAgICAgICAgICAgIDxwPntwcm9wcy5wb3N0LkR1cmF0aW9ufTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuUG9zdC5nZXRJbml0aWFsUHJvcHMgPSAoe3F1ZXJ5fSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwb3N0OiBwb3N0c1txdWVyeS5pZF1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdCJdLCJuYW1lcyI6WyJwb3N0cyIsIlBvc3QiLCJwcm9wcyIsInBvc3QiLCJ0aXRsZSIsImNvbnRlbnQiLCJJbnN0cnVjdG9yIiwiRHVyYXRpb24iLCJnZXRJbml0aWFsUHJvcHMiLCJxdWVyeSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==