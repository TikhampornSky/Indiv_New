"use strict";
(() => {
var exports = {};
exports.id = "pages/_error";
exports.ids = ["pages/_error"];
exports.modules = {

/***/ "./node_modules/next/dist/pages/_error.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/pages/_error.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/head */ "../shared/lib/head"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const statusCodes = {
  400: 'Bad Request',
  404: 'This page could not be found',
  405: 'Method Not Allowed',
  500: 'Internal Server Error'
};

function _getInitialProps({
  res,
  err
}) {
  const statusCode = res && res.statusCode ? res.statusCode : err ? err.statusCode : 404;
  return {
    statusCode
  };
}

class Error1 extends _react.default.Component {
  render() {
    const {
      statusCode
    } = this.props;
    const title = this.props.title || statusCodes[statusCode] || 'An unexpected error has occurred';
    return /*#__PURE__*/_react.default.createElement("div", {
      style: styles.error
    }, /*#__PURE__*/_react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("title", null, statusCode ? `${statusCode}: ${title}` : 'Application error: a client-side exception has occurred')), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: 'body { margin: 0 }'
      }
    }), statusCode ? /*#__PURE__*/_react.default.createElement("h1", {
      style: styles.h1
    }, statusCode) : null, /*#__PURE__*/_react.default.createElement("div", {
      style: styles.desc
    }, /*#__PURE__*/_react.default.createElement("h2", {
      style: styles.h2
    }, this.props.title || statusCode ? title : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, "Application error: a client-side exception has occurred (see the browser console for more information)"), "."))));
  }

}

Error1.displayName = 'ErrorPage';
Error1.getInitialProps = _getInitialProps;
Error1.origGetInitialProps = _getInitialProps;
exports.default = Error1;
const styles = {
  error: {
    color: '#000',
    background: '#fff',
    fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
    height: '100vh',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  desc: {
    display: 'inline-block',
    textAlign: 'left',
    lineHeight: '49px',
    height: '49px',
    verticalAlign: 'middle'
  },
  h1: {
    display: 'inline-block',
    borderRight: '1px solid rgba(0, 0, 0,.3)',
    margin: 0,
    marginRight: '20px',
    padding: '10px 23px 10px 0',
    fontSize: '24px',
    fontWeight: 500,
    verticalAlign: 'top'
  },
  h2: {
    fontSize: '14px',
    fontWeight: 'normal',
    lineHeight: 'inherit',
    margin: 0,
    padding: 0
  }
};

/***/ }),

/***/ "../shared/lib/head":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/head.js" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./node_modules/next/dist/pages/_error.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvX2Vycm9yLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBYTs7QUFDYkEsOENBQTZDO0FBQ3pDRyxFQUFBQSxLQUFLLEVBQUU7QUFEa0MsQ0FBN0M7QUFHQUQsZUFBQSxHQUFrQixLQUFLLENBQXZCOztBQUNBLElBQUlHLE1BQU0sR0FBR0Msc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsb0JBQUQsQ0FBUixDQUFuQzs7QUFDQSxJQUFJQyxLQUFLLEdBQUdGLHNCQUFzQixDQUFDQyxtQkFBTyxDQUFDLDhDQUFELENBQVIsQ0FBbEM7O0FBQ0EsU0FBU0Qsc0JBQVQsQ0FBZ0NHLEdBQWhDLEVBQXFDO0FBQ2pDLFNBQU9BLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxVQUFYLEdBQXdCRCxHQUF4QixHQUE4QjtBQUNqQ0wsSUFBQUEsT0FBTyxFQUFFSztBQUR3QixHQUFyQztBQUdIOztBQUNELE1BQU1FLFdBQVcsR0FBRztBQUNoQixPQUFLLGFBRFc7QUFFaEIsT0FBSyw4QkFGVztBQUdoQixPQUFLLG9CQUhXO0FBSWhCLE9BQUs7QUFKVyxDQUFwQjs7QUFNQSxTQUFTQyxnQkFBVCxDQUEwQjtBQUFFQyxFQUFBQSxHQUFGO0FBQVFDLEVBQUFBO0FBQVIsQ0FBMUIsRUFBMEM7QUFDdEMsUUFBTUMsVUFBVSxHQUFHRixHQUFHLElBQUlBLEdBQUcsQ0FBQ0UsVUFBWCxHQUF3QkYsR0FBRyxDQUFDRSxVQUE1QixHQUF5Q0QsR0FBRyxHQUFHQSxHQUFHLENBQUNDLFVBQVAsR0FBb0IsR0FBbkY7QUFDQSxTQUFPO0FBQ0hBLElBQUFBO0FBREcsR0FBUDtBQUdIOztBQUNELE1BQU1DLE1BQU4sU0FBcUJYLE1BQU0sQ0FBQ0QsT0FBUCxDQUFlYSxTQUFwQyxDQUE4QztBQUMxQ0MsRUFBQUEsTUFBTSxHQUFHO0FBQ0wsVUFBTTtBQUFFSCxNQUFBQTtBQUFGLFFBQWtCLEtBQUtJLEtBQTdCO0FBQ0EsVUFBTUMsS0FBSyxHQUFHLEtBQUtELEtBQUwsQ0FBV0MsS0FBWCxJQUFvQlQsV0FBVyxDQUFDSSxVQUFELENBQS9CLElBQStDLGtDQUE3RDtBQUNBLFdBQU8sYUFBY1YsTUFBTSxDQUFDRCxPQUFQLENBQWVpQixhQUFmLENBQTZCLEtBQTdCLEVBQW9DO0FBQ3JEQyxNQUFBQSxLQUFLLEVBQUVDLE1BQU0sQ0FBQ0M7QUFEdUMsS0FBcEMsRUFFbEIsYUFBY25CLE1BQU0sQ0FBQ0QsT0FBUCxDQUFlaUIsYUFBZixDQUE2QmIsS0FBSyxDQUFDSixPQUFuQyxFQUE0QyxJQUE1QyxFQUFrRCxhQUFjQyxNQUFNLENBQUNELE9BQVAsQ0FBZWlCLGFBQWYsQ0FBNkIsT0FBN0IsRUFBc0MsSUFBdEMsRUFBNENOLFVBQVUsR0FBSSxHQUFFQSxVQUFXLEtBQUlLLEtBQU0sRUFBM0IsR0FBK0IseURBQXJGLENBQWhFLENBRkksRUFFOE0sYUFBY2YsTUFBTSxDQUFDRCxPQUFQLENBQWVpQixhQUFmLENBQTZCLEtBQTdCLEVBQW9DLElBQXBDLEVBQTBDLGFBQWNoQixNQUFNLENBQUNELE9BQVAsQ0FBZWlCLGFBQWYsQ0FBNkIsT0FBN0IsRUFBc0M7QUFDM1VJLE1BQUFBLHVCQUF1QixFQUFFO0FBQ3JCQyxRQUFBQSxNQUFNLEVBQUU7QUFEYTtBQURrVCxLQUF0QyxDQUF4RCxFQUk3T1gsVUFBVSxHQUFHLGFBQWNWLE1BQU0sQ0FBQ0QsT0FBUCxDQUFlaUIsYUFBZixDQUE2QixJQUE3QixFQUFtQztBQUM5REMsTUFBQUEsS0FBSyxFQUFFQyxNQUFNLENBQUNJO0FBRGdELEtBQW5DLEVBRTVCWixVQUY0QixDQUFqQixHQUVHLElBTmdPLEVBTTFOLGFBQWNWLE1BQU0sQ0FBQ0QsT0FBUCxDQUFlaUIsYUFBZixDQUE2QixLQUE3QixFQUFvQztBQUNyRUMsTUFBQUEsS0FBSyxFQUFFQyxNQUFNLENBQUNLO0FBRHVELEtBQXBDLEVBRWxDLGFBQWN2QixNQUFNLENBQUNELE9BQVAsQ0FBZWlCLGFBQWYsQ0FBNkIsSUFBN0IsRUFBbUM7QUFDaERDLE1BQUFBLEtBQUssRUFBRUMsTUFBTSxDQUFDTTtBQURrQyxLQUFuQyxFQUVkLEtBQUtWLEtBQUwsQ0FBV0MsS0FBWCxJQUFvQkwsVUFBcEIsR0FBaUNLLEtBQWpDLEdBQXlDLGFBQWNmLE1BQU0sQ0FBQ0QsT0FBUCxDQUFlaUIsYUFBZixDQUE2QmhCLE1BQU0sQ0FBQ0QsT0FBUCxDQUFlMEIsUUFBNUMsRUFBc0QsSUFBdEQsRUFBNEQsd0dBQTVELENBRnpDLEVBRWdOLEdBRmhOLENBRm9CLENBTjRNLENBRjVOLENBQXJCO0FBYUg7O0FBakJ5Qzs7QUFtQjlDZCxNQUFNLENBQUNlLFdBQVAsR0FBcUIsV0FBckI7QUFDQWYsTUFBTSxDQUFDZ0IsZUFBUCxHQUF5QnBCLGdCQUF6QjtBQUNBSSxNQUFNLENBQUNpQixtQkFBUCxHQUE2QnJCLGdCQUE3QjtBQUNBVixlQUFBLEdBQWtCYyxNQUFsQjtBQUNBLE1BQU1PLE1BQU0sR0FBRztBQUNYQyxFQUFBQSxLQUFLLEVBQUU7QUFDSFUsSUFBQUEsS0FBSyxFQUFFLE1BREo7QUFFSEMsSUFBQUEsVUFBVSxFQUFFLE1BRlQ7QUFHSEMsSUFBQUEsVUFBVSxFQUFFLDJIQUhUO0FBSUhDLElBQUFBLE1BQU0sRUFBRSxPQUpMO0FBS0hDLElBQUFBLFNBQVMsRUFBRSxRQUxSO0FBTUhDLElBQUFBLE9BQU8sRUFBRSxNQU5OO0FBT0hDLElBQUFBLGFBQWEsRUFBRSxRQVBaO0FBUUhDLElBQUFBLFVBQVUsRUFBRSxRQVJUO0FBU0hDLElBQUFBLGNBQWMsRUFBRTtBQVRiLEdBREk7QUFZWGQsRUFBQUEsSUFBSSxFQUFFO0FBQ0ZXLElBQUFBLE9BQU8sRUFBRSxjQURQO0FBRUZELElBQUFBLFNBQVMsRUFBRSxNQUZUO0FBR0ZLLElBQUFBLFVBQVUsRUFBRSxNQUhWO0FBSUZOLElBQUFBLE1BQU0sRUFBRSxNQUpOO0FBS0ZPLElBQUFBLGFBQWEsRUFBRTtBQUxiLEdBWks7QUFtQlhqQixFQUFBQSxFQUFFLEVBQUU7QUFDQVksSUFBQUEsT0FBTyxFQUFFLGNBRFQ7QUFFQU0sSUFBQUEsV0FBVyxFQUFFLDRCQUZiO0FBR0FDLElBQUFBLE1BQU0sRUFBRSxDQUhSO0FBSUFDLElBQUFBLFdBQVcsRUFBRSxNQUpiO0FBS0FDLElBQUFBLE9BQU8sRUFBRSxrQkFMVDtBQU1BQyxJQUFBQSxRQUFRLEVBQUUsTUFOVjtBQU9BQyxJQUFBQSxVQUFVLEVBQUUsR0FQWjtBQVFBTixJQUFBQSxhQUFhLEVBQUU7QUFSZixHQW5CTztBQTZCWGYsRUFBQUEsRUFBRSxFQUFFO0FBQ0FvQixJQUFBQSxRQUFRLEVBQUUsTUFEVjtBQUVBQyxJQUFBQSxVQUFVLEVBQUUsUUFGWjtBQUdBUCxJQUFBQSxVQUFVLEVBQUUsU0FIWjtBQUlBRyxJQUFBQSxNQUFNLEVBQUUsQ0FKUjtBQUtBRSxJQUFBQSxPQUFPLEVBQUU7QUFMVDtBQTdCTyxDQUFmOzs7Ozs7Ozs7O0FDL0NBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19lcnJvci5qcyIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwicmVhY3RcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XHJcbiAgICB2YWx1ZTogdHJ1ZVxyXG59KTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xyXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xyXG52YXIgX2hlYWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL2hlYWRcIikpO1xyXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xyXG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcclxuICAgICAgICBkZWZhdWx0OiBvYmpcclxuICAgIH07XHJcbn1cclxuY29uc3Qgc3RhdHVzQ29kZXMgPSB7XHJcbiAgICA0MDA6ICdCYWQgUmVxdWVzdCcsXHJcbiAgICA0MDQ6ICdUaGlzIHBhZ2UgY291bGQgbm90IGJlIGZvdW5kJyxcclxuICAgIDQwNTogJ01ldGhvZCBOb3QgQWxsb3dlZCcsXHJcbiAgICA1MDA6ICdJbnRlcm5hbCBTZXJ2ZXIgRXJyb3InXHJcbn07XHJcbmZ1bmN0aW9uIF9nZXRJbml0aWFsUHJvcHMoeyByZXMgLCBlcnIgIH0pIHtcclxuICAgIGNvbnN0IHN0YXR1c0NvZGUgPSByZXMgJiYgcmVzLnN0YXR1c0NvZGUgPyByZXMuc3RhdHVzQ29kZSA6IGVyciA/IGVyci5zdGF0dXNDb2RlIDogNDA0O1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzdGF0dXNDb2RlXHJcbiAgICB9O1xyXG59XHJcbmNsYXNzIEVycm9yMSBleHRlbmRzIF9yZWFjdC5kZWZhdWx0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBzdGF0dXNDb2RlICB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCB0aXRsZSA9IHRoaXMucHJvcHMudGl0bGUgfHwgc3RhdHVzQ29kZXNbc3RhdHVzQ29kZV0gfHwgJ0FuIHVuZXhwZWN0ZWQgZXJyb3IgaGFzIG9jY3VycmVkJztcclxuICAgICAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcclxuICAgICAgICAgICAgc3R5bGU6IHN0eWxlcy5lcnJvclxyXG4gICAgICAgIH0sIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfaGVhZC5kZWZhdWx0LCBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJ0aXRsZVwiLCBudWxsLCBzdGF0dXNDb2RlID8gYCR7c3RhdHVzQ29kZX06ICR7dGl0bGV9YCA6ICdBcHBsaWNhdGlvbiBlcnJvcjogYSBjbGllbnQtc2lkZSBleGNlcHRpb24gaGFzIG9jY3VycmVkJykpLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIiwge1xyXG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDoge1xyXG4gICAgICAgICAgICAgICAgX19odG1sOiAnYm9keSB7IG1hcmdpbjogMCB9J1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSksIHN0YXR1c0NvZGUgPyAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJoMVwiLCB7XHJcbiAgICAgICAgICAgIHN0eWxlOiBzdHlsZXMuaDFcclxuICAgICAgICB9LCBzdGF0dXNDb2RlKSA6IG51bGwsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XHJcbiAgICAgICAgICAgIHN0eWxlOiBzdHlsZXMuZGVzY1xyXG4gICAgICAgIH0sIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImgyXCIsIHtcclxuICAgICAgICAgICAgc3R5bGU6IHN0eWxlcy5oMlxyXG4gICAgICAgIH0sIHRoaXMucHJvcHMudGl0bGUgfHwgc3RhdHVzQ29kZSA/IHRpdGxlIDogLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdC5kZWZhdWx0LkZyYWdtZW50LCBudWxsLCBcIkFwcGxpY2F0aW9uIGVycm9yOiBhIGNsaWVudC1zaWRlIGV4Y2VwdGlvbiBoYXMgb2NjdXJyZWQgKHNlZSB0aGUgYnJvd3NlciBjb25zb2xlIGZvciBtb3JlIGluZm9ybWF0aW9uKVwiKSwgXCIuXCIpKSkpKTtcclxuICAgIH1cclxufVxyXG5FcnJvcjEuZGlzcGxheU5hbWUgPSAnRXJyb3JQYWdlJztcclxuRXJyb3IxLmdldEluaXRpYWxQcm9wcyA9IF9nZXRJbml0aWFsUHJvcHM7XHJcbkVycm9yMS5vcmlnR2V0SW5pdGlhbFByb3BzID0gX2dldEluaXRpYWxQcm9wcztcclxuZXhwb3J0cy5kZWZhdWx0ID0gRXJyb3IxO1xyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgICBlcnJvcjoge1xyXG4gICAgICAgIGNvbG9yOiAnIzAwMCcsXHJcbiAgICAgICAgYmFja2dyb3VuZDogJyNmZmYnLFxyXG4gICAgICAgIGZvbnRGYW1pbHk6ICctYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFJvYm90bywgXCJTZWdvZSBVSVwiLCBcIkZpcmEgU2Fuc1wiLCBBdmVuaXIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgXCJMdWNpZGEgR3JhbmRlXCIsIHNhbnMtc2VyaWYnLFxyXG4gICAgICAgIGhlaWdodDogJzEwMHZoJyxcclxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcidcclxuICAgIH0sXHJcbiAgICBkZXNjOiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcbiAgICAgICAgdGV4dEFsaWduOiAnbGVmdCcsXHJcbiAgICAgICAgbGluZUhlaWdodDogJzQ5cHgnLFxyXG4gICAgICAgIGhlaWdodDogJzQ5cHgnLFxyXG4gICAgICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnXHJcbiAgICB9LFxyXG4gICAgaDE6IHtcclxuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcclxuICAgICAgICBib3JkZXJSaWdodDogJzFweCBzb2xpZCByZ2JhKDAsIDAsIDAsLjMpJyxcclxuICAgICAgICBtYXJnaW46IDAsXHJcbiAgICAgICAgbWFyZ2luUmlnaHQ6ICcyMHB4JyxcclxuICAgICAgICBwYWRkaW5nOiAnMTBweCAyM3B4IDEwcHggMCcsXHJcbiAgICAgICAgZm9udFNpemU6ICcyNHB4JyxcclxuICAgICAgICBmb250V2VpZ2h0OiA1MDAsXHJcbiAgICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCdcclxuICAgIH0sXHJcbiAgICBoMjoge1xyXG4gICAgICAgIGZvbnRTaXplOiAnMTRweCcsXHJcbiAgICAgICAgZm9udFdlaWdodDogJ25vcm1hbCcsXHJcbiAgICAgICAgbGluZUhlaWdodDogJ2luaGVyaXQnLFxyXG4gICAgICAgIG1hcmdpbjogMCxcclxuICAgICAgICBwYWRkaW5nOiAwXHJcbiAgICB9XHJcbn07XHJcblxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1fZXJyb3IuanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaGVhZC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJkZWZhdWx0IiwiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfaGVhZCIsIm9iaiIsIl9fZXNNb2R1bGUiLCJzdGF0dXNDb2RlcyIsIl9nZXRJbml0aWFsUHJvcHMiLCJyZXMiLCJlcnIiLCJzdGF0dXNDb2RlIiwiRXJyb3IxIiwiQ29tcG9uZW50IiwicmVuZGVyIiwicHJvcHMiLCJ0aXRsZSIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsInN0eWxlcyIsImVycm9yIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJoMSIsImRlc2MiLCJoMiIsIkZyYWdtZW50IiwiZGlzcGxheU5hbWUiLCJnZXRJbml0aWFsUHJvcHMiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwiY29sb3IiLCJiYWNrZ3JvdW5kIiwiZm9udEZhbWlseSIsImhlaWdodCIsInRleHRBbGlnbiIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwibGluZUhlaWdodCIsInZlcnRpY2FsQWxpZ24iLCJib3JkZXJSaWdodCIsIm1hcmdpbiIsIm1hcmdpblJpZ2h0IiwicGFkZGluZyIsImZvbnRTaXplIiwiZm9udFdlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=