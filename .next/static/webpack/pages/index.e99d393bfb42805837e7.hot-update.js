self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\Susan\\Documents\\projs\\react\\my-app\\pages\\index.js";


function req() {
  fetch("https://api.adviceslip.com/advice").then(function (res) {
    return res.json();
  }).then(function (data) {
    document.getElementById('h1').innerHTML = data.slip.advice;
  });
}

function App() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "App",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
      className: "App-header",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        class: "p-5 ",
        id: "jumbo",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("center", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
            class: "display-3",
            children: "Precisa de uma conselho?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            class: "lead",
            children: "Aperte o bot\xE3o!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Button, {
            onClick: req,
            children: "Clique aqui!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        class: "container-fluid",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("center", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
            id: "h1"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 7
  }, this);
}

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c;

$RefreshReg$(_c, "App");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsicmVxIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwic2xpcCIsImFkdmljZSIsIkFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztBQUVBLFNBQVNBLEdBQVQsR0FBZTtBQUNYQyxPQUFLLENBQUMsbUNBQUQsQ0FBTCxDQUNDQyxJQURELENBQ00sVUFBU0MsR0FBVCxFQUFjO0FBQ2xCLFdBQU9BLEdBQUcsQ0FBQ0MsSUFBSixFQUFQO0FBQ0QsR0FIRCxFQUlDRixJQUpELENBSU0sVUFBU0csSUFBVCxFQUFlO0FBRW5CQyxZQUFRLENBQUNDLGNBQVQsQ0FBd0IsSUFBeEIsRUFBOEJDLFNBQTlCLEdBQTBDSCxJQUFJLENBQUNJLElBQUwsQ0FBVUMsTUFBcEQ7QUFDRCxHQVBEO0FBU0Q7O0FBQ0gsU0FBU0MsR0FBVCxHQUFlO0FBQ1gsc0JBRUU7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFBLDJCQUNFO0FBQVEsZUFBUyxFQUFDLFlBQWxCO0FBQUEsOEJBQ0U7QUFBSyxhQUFLLEVBQUMsTUFBWDtBQUFrQixVQUFFLEVBQUMsT0FBckI7QUFBQSwrQkFDRTtBQUFBLGtDQUNFO0FBQUksaUJBQUssRUFBQyxXQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUU7QUFBRyxpQkFBSyxFQUFDLE1BQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkYsZUFJSSw4REFBQyxtREFBRDtBQUFRLG1CQUFPLEVBQUVYLEdBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQVVFO0FBQUssYUFBSyxFQUFDLGlCQUFYO0FBQUEsK0JBQ0U7QUFBQSxpQ0FDRTtBQUFJLGNBQUUsRUFBQztBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFGRjtBQXVCRDs7S0F4Qk1XLEc7QUEwQlAsK0RBQWVBLEdBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTk5ZDM5M2JmYjQyODA1ODM3ZTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5cclxuZnVuY3Rpb24gcmVxKCkge1xyXG4gICAgZmV0Y2goXCJodHRwczovL2FwaS5hZHZpY2VzbGlwLmNvbS9hZHZpY2VcIilcclxuICAgIC50aGVuKGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICByZXR1cm4gcmVzLmpzb24oKVxyXG4gICAgfSlcclxuICAgIC50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgIFxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaDEnKS5pbm5lckhUTUwgPSBkYXRhLnNsaXAuYWR2aWNlO1xyXG4gICAgfSlcclxuICAgIFxyXG4gIH1cclxuZnVuY3Rpb24gQXBwKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XHJcbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJBcHAtaGVhZGVyXCIgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInAtNSBcIiBpZD1cImp1bWJvXCI+XHJcbiAgICAgICAgICAgIDxjZW50ZXI+XHJcbiAgICAgICAgICAgICAgPGgxIGNsYXNzPVwiZGlzcGxheS0zXCI+UHJlY2lzYSBkZSB1bWEgY29uc2VsaG8/PC9oMT5cclxuICAgICAgICAgICAgICA8cCBjbGFzcz1cImxlYWRcIj5BcGVydGUgbyBib3TDo28hPC9wPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtyZXF9PkNsaXF1ZSBhcXVpITwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvY2VudGVyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICAgIDxjZW50ZXI+XHJcbiAgICAgICAgICAgICAgPGgxIGlkPVwiaDFcIj48L2gxPlxyXG4gICAgICAgICAgICA8L2NlbnRlcj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IEFwcDsiXSwic291cmNlUm9vdCI6IiJ9