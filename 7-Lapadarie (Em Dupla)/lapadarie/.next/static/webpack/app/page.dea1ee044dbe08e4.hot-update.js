"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/Order.tsx":
/*!**************************************!*\
  !*** ./src/app/components/Order.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Order; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _server_PUTOrder_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/server/PUTOrder.service */ \"(app-pages-browser)/./src/server/PUTOrder.service.ts\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  width: inherit;\\n  height: 77px;\\n  background-color: white;\\n  color: #5f3305;\\n  box-sizing: border-box;\\n  border-radius: 5px;\\n  padding: 15px 15px;\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: space-between;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  font-size: 16px;\\n  font-weight: 700;\\n  line-height: 24px;\\n  text-align: left;\\n  margin: 0;\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: flex;\\n  flex-direction: row;\\n  gap: 0.4vw;\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  font-size: 12px;\\n  font-weight: 700;\\n  line-height: 18px;\\n  text-align: left;\\n  margin: 0;\\n\"\n    ]);\n    _templateObject4 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  font-size: 12px;\\n  font-weight: 400;\\n  line-height: 18px;\\n  text-align: left;\\n  margin: 0;\\n  margin-right: 1vw;\\n\"\n    ]);\n    _templateObject5 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n\"\n    ]);\n    _templateObject6 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject7() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  background: none;\\n  border: 0;\\n  cursor: pointer;\\n\"\n    ]);\n    _templateObject7 = function() {\n        return data;\n    };\n    return data;\n}\n\n\n\nconst OrderDiv = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject());\n_c = OrderDiv;\nconst OrderDivLeft = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject1());\n_c1 = OrderDivLeft;\nconst OrderClientName = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].h3(_templateObject2());\n_c2 = OrderClientName;\nconst OrderInfo = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject3());\n_c3 = OrderInfo;\nconst OrderInfoName = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].h4(_templateObject4());\n_c4 = OrderInfoName;\nconst OrderInfoQuantity = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].p(_templateObject5());\n_c5 = OrderInfoQuantity;\nconst TrashIcon = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].img(_templateObject6());\n_c6 = TrashIcon;\nconst TrashButton = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].button(_templateObject7());\n_c7 = TrashButton;\nfunction Order(param) {\n    let { id, name, breadCount, valor } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(OrderDiv, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(OrderDivLeft, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(OrderClientName, {\n                        children: name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bruno\\\\Desktop\\\\repositorios\\\\InfoJR\\\\nucleo-web\\\\7-Lapadarie (Em Dupla)\\\\lapadarie\\\\src\\\\app\\\\components\\\\Order.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(OrderInfo, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(OrderInfoName, {\n                                children: \"Total de P\\xe3es:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\bruno\\\\Desktop\\\\repositorios\\\\InfoJR\\\\nucleo-web\\\\7-Lapadarie (Em Dupla)\\\\lapadarie\\\\src\\\\app\\\\components\\\\Order.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(OrderInfoQuantity, {\n                                children: [\n                                    breadCount,\n                                    \" \",\n                                    breadCount === 1 ? \"p\\xe3o\" : \"p\\xe3es\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\bruno\\\\Desktop\\\\repositorios\\\\InfoJR\\\\nucleo-web\\\\7-Lapadarie (Em Dupla)\\\\lapadarie\\\\src\\\\app\\\\components\\\\Order.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(OrderInfoName, {\n                                children: \"Total a Pagar:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\bruno\\\\Desktop\\\\repositorios\\\\InfoJR\\\\nucleo-web\\\\7-Lapadarie (Em Dupla)\\\\lapadarie\\\\src\\\\app\\\\components\\\\Order.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(OrderInfoQuantity, {\n                                children: [\n                                    \"R$ \",\n                                    valor.toFixed(2).replace(\".\", \",\")\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\bruno\\\\Desktop\\\\repositorios\\\\InfoJR\\\\nucleo-web\\\\7-Lapadarie (Em Dupla)\\\\lapadarie\\\\src\\\\app\\\\components\\\\Order.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\bruno\\\\Desktop\\\\repositorios\\\\InfoJR\\\\nucleo-web\\\\7-Lapadarie (Em Dupla)\\\\lapadarie\\\\src\\\\app\\\\components\\\\Order.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\bruno\\\\Desktop\\\\repositorios\\\\InfoJR\\\\nucleo-web\\\\7-Lapadarie (Em Dupla)\\\\lapadarie\\\\src\\\\app\\\\components\\\\Order.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(TrashButton, {\n                onClick: (0,_server_PUTOrder_service__WEBPACK_IMPORTED_MODULE_2__.finishOrder)(id),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(TrashIcon, {\n                    src: \"trashcan.svg\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\bruno\\\\Desktop\\\\repositorios\\\\InfoJR\\\\nucleo-web\\\\7-Lapadarie (Em Dupla)\\\\lapadarie\\\\src\\\\app\\\\components\\\\Order.tsx\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bruno\\\\Desktop\\\\repositorios\\\\InfoJR\\\\nucleo-web\\\\7-Lapadarie (Em Dupla)\\\\lapadarie\\\\src\\\\app\\\\components\\\\Order.tsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\bruno\\\\Desktop\\\\repositorios\\\\InfoJR\\\\nucleo-web\\\\7-Lapadarie (Em Dupla)\\\\lapadarie\\\\src\\\\app\\\\components\\\\Order.tsx\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, this);\n}\n_c8 = Order;\nvar _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;\n$RefreshReg$(_c, \"OrderDiv\");\n$RefreshReg$(_c1, \"OrderDivLeft\");\n$RefreshReg$(_c2, \"OrderClientName\");\n$RefreshReg$(_c3, \"OrderInfo\");\n$RefreshReg$(_c4, \"OrderInfoName\");\n$RefreshReg$(_c5, \"OrderInfoQuantity\");\n$RefreshReg$(_c6, \"TrashIcon\");\n$RefreshReg$(_c7, \"TrashButton\");\n$RefreshReg$(_c8, \"Order\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9PcmRlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV3RDtBQUVqQjtBQUV2QyxNQUFNRSxXQUFXRCx5REFBTUEsQ0FBQ0UsR0FBRztLQUFyQkQ7QUFhTixNQUFNRSxlQUFlSCx5REFBTUEsQ0FBQ0UsR0FBRztNQUF6QkM7QUFNTixNQUFNQyxrQkFBa0JKLHlEQUFNQSxDQUFDSyxFQUFFO01BQTNCRDtBQVFOLE1BQU1FLFlBQVlOLHlEQUFNQSxDQUFDRSxHQUFHO01BQXRCSTtBQU1OLE1BQU1DLGdCQUFnQlAseURBQU1BLENBQUNRLEVBQUU7TUFBekJEO0FBUU4sTUFBTUUsb0JBQW9CVCx5REFBTUEsQ0FBQ1UsQ0FBQztNQUE1QkQ7QUFTTixNQUFNRSxZQUFZWCx5REFBTUEsQ0FBQ1ksR0FBRztNQUF0QkQ7QUFHTixNQUFNRSxjQUFjYix5REFBTUEsQ0FBQ2MsTUFBTTtNQUEzQkQ7QUFNUyxTQUFTRSxNQUFNLEtBQXlDO1FBQXpDLEVBQUVDLEVBQUUsRUFBRUMsSUFBSSxFQUFFQyxVQUFVLEVBQUVDLEtBQUssRUFBWSxHQUF6QztJQUM1QixxQkFDRSw4REFBQ2xCOzswQkFDQyw4REFBQ0U7O2tDQUNDLDhEQUFDQztrQ0FBaUJhOzs7Ozs7a0NBQ2xCLDhEQUFDWDs7MENBQ0MsOERBQUNDOzBDQUFjOzs7Ozs7MENBQ2YsOERBQUNFOztvQ0FBbUJTO29DQUFXO29DQUFFQSxlQUFhLElBQUUsV0FBTTs7Ozs7OzswQ0FDdEQsOERBQUNYOzBDQUFjOzs7Ozs7MENBQ2YsOERBQUNFOztvQ0FBa0I7b0NBQUlVLE1BQU1DLE9BQU8sQ0FBQyxHQUFHQyxPQUFPLENBQUMsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFHekQsOERBQUNSO2dCQUFZUyxTQUFTdkIscUVBQVdBLENBQUNpQjswQkFDaEMsNEVBQUNMO29CQUFVWSxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7OztBQUl2QjtNQWpCd0JSIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9PcmRlci50c3g/MmRlZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCB7IGZpbmlzaE9yZGVyIH0gZnJvbSBcIkAvc2VydmVyL1BVVE9yZGVyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgT3JkZXJUb1VzZSB9IGZyb20gXCJAL3R5cGVzL29yZGVyLnR5cGVzXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBPcmRlckRpdiA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IGluaGVyaXQ7XHJcbiAgaGVpZ2h0OiA3N3B4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGNvbG9yOiAjNWYzMzA1O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDE1cHggMTVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5gO1xyXG5cclxuY29uc3QgT3JkZXJEaXZMZWZ0ID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5gO1xyXG5cclxuY29uc3QgT3JkZXJDbGllbnROYW1lID0gc3R5bGVkLmgzYFxyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgbWFyZ2luOiAwO1xyXG5gO1xyXG5cclxuY29uc3QgT3JkZXJJbmZvID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZ2FwOiAwLjR2dztcclxuYDtcclxuXHJcbmNvbnN0IE9yZGVySW5mb05hbWUgPSBzdHlsZWQuaDRgXHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBtYXJnaW46IDA7XHJcbmA7XHJcblxyXG5jb25zdCBPcmRlckluZm9RdWFudGl0eSA9IHN0eWxlZC5wYFxyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIG1hcmdpbi1yaWdodDogMXZ3O1xyXG5gO1xyXG5cclxuY29uc3QgVHJhc2hJY29uID0gc3R5bGVkLmltZ2BcclxuYDtcclxuXHJcbmNvbnN0IFRyYXNoQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlcjogMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBPcmRlcih7IGlkLCBuYW1lLCBicmVhZENvdW50LCB2YWxvcn06T3JkZXJUb1VzZSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8T3JkZXJEaXY+XHJcbiAgICAgIDxPcmRlckRpdkxlZnQ+XHJcbiAgICAgICAgPE9yZGVyQ2xpZW50TmFtZT57bmFtZX08L09yZGVyQ2xpZW50TmFtZT5cclxuICAgICAgICA8T3JkZXJJbmZvPlxyXG4gICAgICAgICAgPE9yZGVySW5mb05hbWU+VG90YWwgZGUgUMOjZXM6PC9PcmRlckluZm9OYW1lPlxyXG4gICAgICAgICAgPE9yZGVySW5mb1F1YW50aXR5PnticmVhZENvdW50fSB7YnJlYWRDb3VudD09PTE/J3DDo28nOidww6Nlcyd9PC9PcmRlckluZm9RdWFudGl0eT5cclxuICAgICAgICAgIDxPcmRlckluZm9OYW1lPlRvdGFsIGEgUGFnYXI6PC9PcmRlckluZm9OYW1lPlxyXG4gICAgICAgICAgPE9yZGVySW5mb1F1YW50aXR5PlIkIHt2YWxvci50b0ZpeGVkKDIpLnJlcGxhY2UoJy4nLCAnLCcpfTwvT3JkZXJJbmZvUXVhbnRpdHk+XHJcbiAgICAgICAgPC9PcmRlckluZm8+XHJcbiAgICAgIDwvT3JkZXJEaXZMZWZ0PlxyXG4gICAgICA8VHJhc2hCdXR0b24gb25DbGljaz17ZmluaXNoT3JkZXIoaWQpfT5cclxuICAgICAgICA8VHJhc2hJY29uIHNyYz1cInRyYXNoY2FuLnN2Z1wiIC8+XHJcbiAgICAgIDwvVHJhc2hCdXR0b24+XHJcbiAgICA8L09yZGVyRGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImZpbmlzaE9yZGVyIiwic3R5bGVkIiwiT3JkZXJEaXYiLCJkaXYiLCJPcmRlckRpdkxlZnQiLCJPcmRlckNsaWVudE5hbWUiLCJoMyIsIk9yZGVySW5mbyIsIk9yZGVySW5mb05hbWUiLCJoNCIsIk9yZGVySW5mb1F1YW50aXR5IiwicCIsIlRyYXNoSWNvbiIsImltZyIsIlRyYXNoQnV0dG9uIiwiYnV0dG9uIiwiT3JkZXIiLCJpZCIsIm5hbWUiLCJicmVhZENvdW50IiwidmFsb3IiLCJ0b0ZpeGVkIiwicmVwbGFjZSIsIm9uQ2xpY2siLCJzcmMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Order.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/server/PUTOrder.service.ts":
/*!****************************************!*\
  !*** ./src/server/PUTOrder.service.ts ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   finishOrder: function() { return /* binding */ finishOrder; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n\nconst finishOrder = async (id)=>{\n    const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].put(\"http://localhost:3000/api/order/finish/\" + id);\n    return response;\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zZXJ2ZXIvUFVUT3JkZXIuc2VydmljZS50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUF5QjtBQUdsQixNQUFNQyxjQUFjLE9BQU9DO0lBQzlCLE1BQU1DLFdBQVcsTUFBTUgsNkNBQUtBLENBQUNJLEdBQUcsQ0FBQyw0Q0FBMENGO0lBQzNFLE9BQU9DO0FBQ1gsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc2VydmVyL1BVVE9yZGVyLnNlcnZpY2UudHM/OTJiOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuXHJcblxyXG5leHBvcnQgY29uc3QgZmluaXNoT3JkZXIgPSBhc3luYyAoaWQ6bnVtYmVyKT0+e1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wdXQoXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL29yZGVyL2ZpbmlzaC9cIitpZCk7XHJcbiAgICByZXR1cm4gcmVzcG9uc2VcclxufSJdLCJuYW1lcyI6WyJheGlvcyIsImZpbmlzaE9yZGVyIiwiaWQiLCJyZXNwb25zZSIsInB1dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/server/PUTOrder.service.ts\n"));

/***/ })

});