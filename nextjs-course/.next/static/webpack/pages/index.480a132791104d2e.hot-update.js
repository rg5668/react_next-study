"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/events/EventItem.js":
/*!****************************************!*\
  !*** ./components/events/EventItem.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _icons_address_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icons/address-icon */ \"./components/icons/address-icon.js\");\n/* harmony import */ var _icons_arrow_right_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons/arrow-right-icon */ \"./components/icons/arrow-right-icon.js\");\n/* harmony import */ var _icons_date_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons/date-icon */ \"./components/icons/date-icon.js\");\n/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/Button */ \"./components/ui/Button.js\");\n/* harmony import */ var _EventItem_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EventItem.module.css */ \"./components/events/EventItem.module.css\");\n/* harmony import */ var _EventItem_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_EventItem_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nfunction EventItem(props) {\n    var title = props.title, image = props.image, date = props.date, location = props.location, id = props.id;\n    var humanReadableDate = new Date(date).toLocaleDateString(\"en-US\", {\n        day: \"numeric\",\n        month: \"long\",\n        year: \"numeric\"\n    });\n    var formattedAddress = location.replace(\", \", \"\\n\");\n    var exploreLink = \"/events/\".concat(id);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: (_EventItem_module_css__WEBPACK_IMPORTED_MODULE_5___default().item),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"/\" + image,\n                alt: title\n            }, void 0, false, {\n                fileName: \"/Users/kh/react_next-study/nextjs-course/components/events/EventItem.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_EventItem_module_css__WEBPACK_IMPORTED_MODULE_5___default().content),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_EventItem_module_css__WEBPACK_IMPORTED_MODULE_5___default().summary),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: title\n                            }, void 0, false, {\n                                fileName: \"/Users/kh/react_next-study/nextjs-course/components/events/EventItem.js\",\n                                lineNumber: 22,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_EventItem_module_css__WEBPACK_IMPORTED_MODULE_5___default().date),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_date_icon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/Users/kh/react_next-study/nextjs-course/components/events/EventItem.js\",\n                                        lineNumber: 24,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"time\", {\n                                        children: humanReadableDate\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kh/react_next-study/nextjs-course/components/events/EventItem.js\",\n                                        lineNumber: 25,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kh/react_next-study/nextjs-course/components/events/EventItem.js\",\n                                lineNumber: 23,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_EventItem_module_css__WEBPACK_IMPORTED_MODULE_5___default().address),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_address_icon__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/Users/kh/react_next-study/nextjs-course/components/events/EventItem.js\",\n                                        lineNumber: 28,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"address\", {\n                                        children: formattedAddress\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kh/react_next-study/nextjs-course/components/events/EventItem.js\",\n                                        lineNumber: 29,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kh/react_next-study/nextjs-course/components/events/EventItem.js\",\n                                lineNumber: 27,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kh/react_next-study/nextjs-course/components/events/EventItem.js\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_EventItem_module_css__WEBPACK_IMPORTED_MODULE_5___default().actions),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            link: exploreLink,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"Explore Event\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kh/react_next-study/nextjs-course/components/events/EventItem.js\",\n                                lineNumber: 36,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/kh/react_next-study/nextjs-course/components/events/EventItem.js\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/kh/react_next-study/nextjs-course/components/events/EventItem.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kh/react_next-study/nextjs-course/components/events/EventItem.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kh/react_next-study/nextjs-course/components/events/EventItem.js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n_c = EventItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EventItem);\nvar _c;\n$RefreshReg$(_c, \"EventItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2V2ZW50cy9FdmVudEl0ZW0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBZ0Q7QUFDTztBQUNiO0FBQ1I7QUFDVztBQUU3QyxTQUFTSyxTQUFTLENBQUNDLEtBQUssRUFBRTtJQUN4QixJQUFRQyxLQUFLLEdBQWdDRCxLQUFLLENBQTFDQyxLQUFLLEVBQUVDLEtBQUssR0FBeUJGLEtBQUssQ0FBbkNFLEtBQUssRUFBRUMsSUFBSSxHQUFtQkgsS0FBSyxDQUE1QkcsSUFBSSxFQUFFQyxRQUFRLEdBQVNKLEtBQUssQ0FBdEJJLFFBQVEsRUFBRUMsRUFBRSxHQUFLTCxLQUFLLENBQVpLLEVBQUU7SUFDeEMsSUFBTUMsaUJBQWlCLEdBQUcsSUFBSUMsSUFBSSxDQUFDSixJQUFJLENBQUMsQ0FBQ0ssa0JBQWtCLENBQUMsT0FBTyxFQUFFO1FBQ25FQyxHQUFHLEVBQUUsU0FBUztRQUNkQyxLQUFLLEVBQUUsTUFBTTtRQUNiQyxJQUFJLEVBQUUsU0FBUztLQUNoQixDQUFDO0lBQ0YsSUFBTUMsZ0JBQWdCLEdBQUdSLFFBQVEsQ0FBQ1MsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7SUFDckQsSUFBTUMsV0FBVyxHQUFHLFVBQVMsQ0FBSyxPQUFIVCxFQUFFLENBQUU7SUFFbkMscUJBQ0UsOERBQUNVLElBQUU7UUFBQ0MsU0FBUyxFQUFFbEIsbUVBQVk7OzBCQUN6Qiw4REFBQ29CLEtBQUc7Z0JBQUNDLEdBQUcsRUFBRSxHQUFHLEdBQUdqQixLQUFLO2dCQUFFa0IsR0FBRyxFQUFFbkIsS0FBSzs7Ozs7b0JBQUk7MEJBQ3JDLDhEQUFDb0IsS0FBRztnQkFBQ0wsU0FBUyxFQUFFbEIsc0VBQWU7O2tDQUM3Qiw4REFBQ3VCLEtBQUc7d0JBQUNMLFNBQVMsRUFBRWxCLHNFQUFlOzswQ0FDN0IsOERBQUMwQixJQUFFOzBDQUFFdkIsS0FBSzs7Ozs7b0NBQU07MENBQ2hCLDhEQUFDb0IsS0FBRztnQ0FBQ0wsU0FBUyxFQUFFbEIsbUVBQVk7O2tEQUMxQiw4REFBQ0Ysd0RBQVE7Ozs7NENBQUc7a0RBQ1osOERBQUM2QixNQUFJO2tEQUFFbkIsaUJBQWlCOzs7Ozs0Q0FBUTs7Ozs7O29DQUM1QjswQ0FDTiw4REFBQ2UsS0FBRztnQ0FBQ0wsU0FBUyxFQUFFbEIsc0VBQWU7O2tEQUM3Qiw4REFBQ0osMkRBQVc7Ozs7NENBQUc7a0RBQ2YsOERBQUNnQyxTQUFPO2tEQUFFZCxnQkFBZ0I7Ozs7OzRDQUFXOzs7Ozs7b0NBQ2pDOzs7Ozs7NEJBQ0Y7a0NBQ04sOERBQUNTLEtBQUc7d0JBQUNMLFNBQVMsRUFBRWxCLHNFQUFlO2tDQUc3Qiw0RUFBQ0Qsa0RBQU07NEJBQUMrQixJQUFJLEVBQUVkLFdBQVc7c0NBQ3ZCLDRFQUFDZSxNQUFJOzBDQUFDLGVBQWE7Ozs7O29DQUFPOzs7OztnQ0FDbkI7Ozs7OzRCQUNMOzs7Ozs7b0JBQ0Y7Ozs7OztZQUNILENBQ0w7Q0FDSDtBQW5DUTlCLEtBQUFBLFNBQVM7QUFxQ2xCLCtEQUFlQSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ldmVudHMvRXZlbnRJdGVtLmpzPzc1ZmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFkZHJlc3NJY29uIGZyb20gXCIuLi9pY29ucy9hZGRyZXNzLWljb25cIjtcbmltcG9ydCBBcnJvd1JpZ2h0SWNvbiBmcm9tIFwiLi4vaWNvbnMvYXJyb3ctcmlnaHQtaWNvblwiO1xuaW1wb3J0IERhdGVJY29uIGZyb20gXCIuLi9pY29ucy9kYXRlLWljb25cIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL3VpL0J1dHRvblwiO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vRXZlbnRJdGVtLm1vZHVsZS5jc3NcIjtcblxuZnVuY3Rpb24gRXZlbnRJdGVtKHByb3BzKSB7XG4gIGNvbnN0IHsgdGl0bGUsIGltYWdlLCBkYXRlLCBsb2NhdGlvbiwgaWQgfSA9IHByb3BzO1xuICBjb25zdCBodW1hblJlYWRhYmxlRGF0ZSA9IG5ldyBEYXRlKGRhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZyhcImVuLVVTXCIsIHtcbiAgICBkYXk6IFwibnVtZXJpY1wiLFxuICAgIG1vbnRoOiBcImxvbmdcIixcbiAgICB5ZWFyOiBcIm51bWVyaWNcIixcbiAgfSk7XG4gIGNvbnN0IGZvcm1hdHRlZEFkZHJlc3MgPSBsb2NhdGlvbi5yZXBsYWNlKFwiLCBcIiwgXCJcXG5cIik7XG4gIGNvbnN0IGV4cGxvcmVMaW5rID0gYC9ldmVudHMvJHtpZH1gO1xuXG4gIHJldHVybiAoXG4gICAgPGxpIGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtfT5cbiAgICAgIDxpbWcgc3JjPXtcIi9cIiArIGltYWdlfSBhbHQ9e3RpdGxlfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnN1bW1hcnl9PlxuICAgICAgICAgIDxoMj57dGl0bGV9PC9oMj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kYXRlfT5cbiAgICAgICAgICAgIDxEYXRlSWNvbiAvPlxuICAgICAgICAgICAgPHRpbWU+e2h1bWFuUmVhZGFibGVEYXRlfTwvdGltZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hZGRyZXNzfT5cbiAgICAgICAgICAgIDxBZGRyZXNzSWNvbiAvPlxuICAgICAgICAgICAgPGFkZHJlc3M+e2Zvcm1hdHRlZEFkZHJlc3N9PC9hZGRyZXNzPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYWN0aW9uc30+XG4gICAgICAgICAgey8qIDxMaW5rIGhyZWY9e2V4cGxvcmVMaW5rfT5FeHBsb3JlIEV2ZW50PC9MaW5rPiAqL31cblxuICAgICAgICAgIDxCdXR0b24gbGluaz17ZXhwbG9yZUxpbmt9PlxuICAgICAgICAgICAgPHNwYW4+RXhwbG9yZSBFdmVudDwvc3Bhbj5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2xpPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudEl0ZW07XG4iXSwibmFtZXMiOlsiQWRkcmVzc0ljb24iLCJBcnJvd1JpZ2h0SWNvbiIsIkRhdGVJY29uIiwiQnV0dG9uIiwiY2xhc3NlcyIsIkV2ZW50SXRlbSIsInByb3BzIiwidGl0bGUiLCJpbWFnZSIsImRhdGUiLCJsb2NhdGlvbiIsImlkIiwiaHVtYW5SZWFkYWJsZURhdGUiLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiZGF5IiwibW9udGgiLCJ5ZWFyIiwiZm9ybWF0dGVkQWRkcmVzcyIsInJlcGxhY2UiLCJleHBsb3JlTGluayIsImxpIiwiY2xhc3NOYW1lIiwiaXRlbSIsImltZyIsInNyYyIsImFsdCIsImRpdiIsImNvbnRlbnQiLCJzdW1tYXJ5IiwiaDIiLCJ0aW1lIiwiYWRkcmVzcyIsImFjdGlvbnMiLCJsaW5rIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/events/EventItem.js\n"));

/***/ })

});