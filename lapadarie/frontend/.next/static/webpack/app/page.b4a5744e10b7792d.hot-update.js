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

/***/ "(app-pages-browser)/./src/componentes/contador/contador.tsx":
/*!***********************************************!*\
  !*** ./src/componentes/contador/contador.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Contador: function() { return /* binding */ Contador; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _assets_logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/logo */ \"(app-pages-browser)/./src/assets/logo.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n    displayName: \"contador__Container\",\n    componentId: \"sc-5541aa04-0\"\n})([\n    \"display:flex;justify-content:center;align-items:center;flex-direction:row;gap:30px;margin-top:-65px;@media only screen and (max-width:768px){display:flex;flex-direction:column;}}\"\n]);\n_c = Container;\nconst Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n    displayName: \"contador__Wrapper\",\n    componentId: \"sc-5541aa04-1\"\n})([\n    \"width:395px;height:136px;background-color:white;padding:1.25rem;@media only screen and (max-width:600px){padding:1.25}\"\n]);\n_c1 = Wrapper;\nconst WrapperEntrada = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Wrapper).withConfig({\n    displayName: \"contador__WrapperEntrada\",\n    componentId: \"sc-5541aa04-2\"\n})([\n    \"background-color:var(--colorEntrada);\"\n]);\n_c2 = WrapperEntrada;\nconst FlexEst = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n    displayName: \"contador__FlexEst\",\n    componentId: \"sc-5541aa04-3\"\n})([\n    \"display:flex;justify-content:space-between;\"\n]);\n_c3 = FlexEst;\nconst Aling = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n    displayName: \"contador__Aling\",\n    componentId: \"sc-5541aa04-4\"\n})([\n    \"display:flex;flex-direction:column;justify-content:space-between;\"\n]);\n_c4 = Aling;\nconst PessoaText = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n    displayName: \"contador__PessoaText\",\n    componentId: \"sc-5541aa04-5\"\n})([\n    \"margin-bottom:10%;\"\n]);\n_c5 = PessoaText;\nconst EntradaText = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].h1.withConfig({\n    displayName: \"contador__EntradaText\",\n    componentId: \"sc-5541aa04-6\"\n})([\n    \"color:white;font-size:16px;font-weight:400;line-height:24px;text-align:left;margin-bottom:10%;\"\n]);\n_c6 = EntradaText;\nconst ValorText = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].p.withConfig({\n    displayName: \"contador__ValorText\",\n    componentId: \"sc-5541aa04-7\"\n})([\n    \"color:white;font-size:14px;font-weight:400;line-height:20px;\"\n]);\n_c7 = ValorText;\nfunction Contador(props) {\n    _s();\n    const [contadores, setContadores] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        numeroDePedidos: 0,\n        quantidadePaesVendidos: 0,\n        valorTotalEmReais: 0\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchContadores = async ()=>{\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:1080/contadores\");\n                setContadores(response.data);\n            } catch (error) {\n                console.error(error);\n            }\n        };\n        fetchContadores();\n        const intervalId = setInterval(fetchContadores, 0);\n        return ()=>clearInterval(intervalId);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Wrapper, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Aling, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FlexEst, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PessoaText, {\n                                    children: \"Pessoas na fila\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\InfoJr\\\\02-edernatan\\\\nucleo-web\\\\lapadarie\\\\frontend\\\\src\\\\componentes\\\\contador\\\\contador.tsx\",\n                                    lineNumber: 96,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_assets_logo__WEBPACK_IMPORTED_MODULE_2__.IconUser, {}, void 0, false, {\n                                        fileName: \"C:\\\\InfoJr\\\\02-edernatan\\\\nucleo-web\\\\lapadarie\\\\frontend\\\\src\\\\componentes\\\\contador\\\\contador.tsx\",\n                                        lineNumber: 97,\n                                        columnNumber: 18\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\InfoJr\\\\02-edernatan\\\\nucleo-web\\\\lapadarie\\\\frontend\\\\src\\\\componentes\\\\contador\\\\contador.tsx\",\n                                    lineNumber: 97,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\InfoJr\\\\02-edernatan\\\\nucleo-web\\\\lapadarie\\\\frontend\\\\src\\\\componentes\\\\contador\\\\contador.tsx\",\n                            lineNumber: 95,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: contadores.numeroDePedidos\n                        }, void 0, false, {\n                            fileName: \"C:\\\\InfoJr\\\\02-edernatan\\\\nucleo-web\\\\lapadarie\\\\frontend\\\\src\\\\componentes\\\\contador\\\\contador.tsx\",\n                            lineNumber: 99,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\InfoJr\\\\02-edernatan\\\\nucleo-web\\\\lapadarie\\\\frontend\\\\src\\\\componentes\\\\contador\\\\contador.tsx\",\n                    lineNumber: 94,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\InfoJr\\\\02-edernatan\\\\nucleo-web\\\\lapadarie\\\\frontend\\\\src\\\\componentes\\\\contador\\\\contador.tsx\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Wrapper, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Aling, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FlexEst, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PessoaText, {\n                                    children: \"P\\xe3es Vendidos\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\InfoJr\\\\02-edernatan\\\\nucleo-web\\\\lapadarie\\\\frontend\\\\src\\\\componentes\\\\contador\\\\contador.tsx\",\n                                    lineNumber: 106,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_assets_logo__WEBPACK_IMPORTED_MODULE_2__.IconLoja, {}, void 0, false, {\n                                        fileName: \"C:\\\\InfoJr\\\\02-edernatan\\\\nucleo-web\\\\lapadarie\\\\frontend\\\\src\\\\componentes\\\\contador\\\\contador.tsx\",\n                                        lineNumber: 107,\n                                        columnNumber: 18\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\InfoJr\\\\02-edernatan\\\\nucleo-web\\\\lapadarie\\\\frontend\\\\src\\\\componentes\\\\contador\\\\contador.tsx\",\n                                    lineNumber: 107,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\InfoJr\\\\02-edernatan\\\\nucleo-web\\\\lapadarie\\\\frontend\\\\src\\\\componentes\\\\contador\\\\contador.tsx\",\n                            lineNumber: 105,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: contadores.quantidadePaesVendidos\n                        }, void 0, false, {\n                            fileName: \"C:\\\\InfoJr\\\\02-edernatan\\\\nucleo-web\\\\lapadarie\\\\frontend\\\\src\\\\componentes\\\\contador\\\\contador.tsx\",\n                            lineNumber: 109,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\InfoJr\\\\02-edernatan\\\\nucleo-web\\\\lapadarie\\\\frontend\\\\src\\\\componentes\\\\contador\\\\contador.tsx\",\n                    lineNumber: 104,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\InfoJr\\\\02-edernatan\\\\nucleo-web\\\\lapadarie\\\\frontend\\\\src\\\\componentes\\\\contador\\\\contador.tsx\",\n                lineNumber: 103,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(WrapperEntrada, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Aling, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FlexEst, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(EntradaText, {\n                                    children: \"Entrada\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\InfoJr\\\\02-edernatan\\\\nucleo-web\\\\lapadarie\\\\frontend\\\\src\\\\componentes\\\\contador\\\\contador.tsx\",\n                                    lineNumber: 116,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_assets_logo__WEBPACK_IMPORTED_MODULE_2__.IconDolar, {}, void 0, false, {\n                                        fileName: \"C:\\\\InfoJr\\\\02-edernatan\\\\nucleo-web\\\\lapadarie\\\\frontend\\\\src\\\\componentes\\\\contador\\\\contador.tsx\",\n                                        lineNumber: 117,\n                                        columnNumber: 18\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\InfoJr\\\\02-edernatan\\\\nucleo-web\\\\lapadarie\\\\frontend\\\\src\\\\componentes\\\\contador\\\\contador.tsx\",\n                                    lineNumber: 117,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\InfoJr\\\\02-edernatan\\\\nucleo-web\\\\lapadarie\\\\frontend\\\\src\\\\componentes\\\\contador\\\\contador.tsx\",\n                            lineNumber: 115,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ValorText, {\n                            children: [\n                                contadores.valorTotalEmReais.toFixed(2),\n                                \" R$\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\InfoJr\\\\02-edernatan\\\\nucleo-web\\\\lapadarie\\\\frontend\\\\src\\\\componentes\\\\contador\\\\contador.tsx\",\n                            lineNumber: 119,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\InfoJr\\\\02-edernatan\\\\nucleo-web\\\\lapadarie\\\\frontend\\\\src\\\\componentes\\\\contador\\\\contador.tsx\",\n                    lineNumber: 114,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\InfoJr\\\\02-edernatan\\\\nucleo-web\\\\lapadarie\\\\frontend\\\\src\\\\componentes\\\\contador\\\\contador.tsx\",\n                lineNumber: 113,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\InfoJr\\\\02-edernatan\\\\nucleo-web\\\\lapadarie\\\\frontend\\\\src\\\\componentes\\\\contador\\\\contador.tsx\",\n        lineNumber: 92,\n        columnNumber: 5\n    }, this);\n}\n_s(Contador, \"wzCkjRRXa6Fux4pMKwkzmMprtvg=\");\n_c8 = Contador;\nvar _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c1, \"Wrapper\");\n$RefreshReg$(_c2, \"WrapperEntrada\");\n$RefreshReg$(_c3, \"FlexEst\");\n$RefreshReg$(_c4, \"Aling\");\n$RefreshReg$(_c5, \"PessoaText\");\n$RefreshReg$(_c6, \"EntradaText\");\n$RefreshReg$(_c7, \"ValorText\");\n$RefreshReg$(_c8, \"Contador\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRlcy9jb250YWRvci9jb250YWRvci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ1o7QUFDYjtBQUNvQztBQUk5RCxNQUFNUSxZQUFZTCx5REFBTUEsQ0FBQ00sR0FBRzs7Ozs7O0tBQXRCRDtBQWVOLE1BQU1FLFVBQVVQLHlEQUFNQSxDQUFDTSxHQUFHOzs7Ozs7TUFBcEJDO0FBVU4sTUFBTUMsaUJBQWlCUiw2REFBTUEsQ0FBQ087Ozs7OztNQUF4QkM7QUFJTixNQUFNQyxVQUFVVCx5REFBTUEsQ0FBQ00sR0FBRzs7Ozs7O01BQXBCRztBQUtOLE1BQU1DLFFBQVFWLHlEQUFNQSxDQUFDTSxHQUFHOzs7Ozs7TUFBbEJJO0FBTU4sTUFBTUMsYUFBYVgseURBQU1BLENBQUNNLEdBQUc7Ozs7OztNQUF2Qks7QUFJTixNQUFNQyxjQUFjWix5REFBTUEsQ0FBQ2EsRUFBRTs7Ozs7O01BQXZCRDtBQVNOLE1BQU1FLFlBQVlkLHlEQUFNQSxDQUFDZSxDQUFDOzs7Ozs7TUFBcEJEO0FBT0MsU0FBU0UsU0FBU0MsS0FBb0I7O0lBQzNDLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHcEIsK0NBQVFBLENBQUM7UUFDM0NxQixpQkFBaUI7UUFDakJDLHdCQUF3QjtRQUN4QkMsbUJBQW1CO0lBQ3JCO0lBRUF4QixnREFBU0EsQ0FBQztRQUNSLE1BQU15QixrQkFBa0I7WUFDdEIsSUFBSTtnQkFDRixNQUFNQyxXQUFXLE1BQU12Qiw2Q0FBS0EsQ0FBQ3dCLEdBQUcsQ0FBQztnQkFDakNOLGNBQWNLLFNBQVNFLElBQUk7WUFDN0IsRUFBRSxPQUFPQyxPQUFPO2dCQUNkQyxRQUFRRCxLQUFLLENBQUNBO1lBQ2hCO1FBQ0Y7UUFFQUo7UUFDQSxNQUFNTSxhQUFhQyxZQUFZUCxpQkFBaUI7UUFFaEQsT0FBTyxJQUFNUSxjQUFjRjtJQUM3QixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ3hCOzswQkFDQyw4REFBQ0U7MEJBQ0MsNEVBQUNHOztzQ0FDQyw4REFBQ0Q7OzhDQUNDLDhEQUFDRTs4Q0FBVzs7Ozs7OzhDQUNaLDhEQUFDTDs4Q0FBSSw0RUFBQ0Ysa0RBQVFBOzs7Ozs7Ozs7Ozs7Ozs7O3NDQUVoQiw4REFBQ0U7c0NBQUtZLFdBQVdFLGVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUlwQyw4REFBQ2I7MEJBQ0MsNEVBQUNHOztzQ0FDQyw4REFBQ0Q7OzhDQUNDLDhEQUFDRTs4Q0FBVzs7Ozs7OzhDQUNaLDhEQUFDTDs4Q0FBSSw0RUFBQ0gsa0RBQVFBOzs7Ozs7Ozs7Ozs7Ozs7O3NDQUVoQiw4REFBQ0c7c0NBQUtZLFdBQVdHLHNCQUFzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSTNDLDhEQUFDYjswQkFDQyw0RUFBQ0U7O3NDQUNDLDhEQUFDRDs7OENBQ0MsOERBQUNHOzhDQUFZOzs7Ozs7OENBQ2IsOERBQUNOOzhDQUFJLDRFQUFDSixtREFBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBRWpCLDhEQUFDWTs7Z0NBQVdJLFdBQVdJLGlCQUFpQixDQUFDVSxPQUFPLENBQUM7Z0NBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUs5RDtHQXhEZ0JoQjtNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50ZXMvY29udGFkb3IvY29udGFkb3IudHN4PzQ0ZTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBJY29uRG9sYXIsIEljb25Mb2phLCBJY29uVXNlciB9IGZyb20gXCJAL2Fzc2V0cy9sb2dvXCI7XHJcblxyXG5pbnRlcmZhY2UgQ29udGFkb3JQcm9wcyB7fVxyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBnYXA6IDMwcHg7XHJcbiAgbWFyZ2luLXRvcDogLTY1cHg7XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgIH1cclxufVxyXG5gO1xyXG5cclxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDM5NXB4O1xyXG4gIGhlaWdodDogMTM2cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMS4yNXJlbTtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICBwYWRkaW5nOjEuMjVcclxufVxyXG5gO1xyXG5cclxuY29uc3QgV3JhcHBlckVudHJhZGEgPSBzdHlsZWQoV3JhcHBlcilgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3JFbnRyYWRhKTtcclxuYDtcclxuXHJcbmNvbnN0IEZsZXhFc3QgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5gO1xyXG5cclxuY29uc3QgQWxpbmcgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbmA7XHJcblxyXG5jb25zdCBQZXNzb2FUZXh0ID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tYm90dG9tOiAxMCU7XHJcbmA7XHJcblxyXG5jb25zdCBFbnRyYWRhVGV4dCA9IHN0eWxlZC5oMWBcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBtYXJnaW4tYm90dG9tOiAxMCU7XHJcbmA7XHJcblxyXG5jb25zdCBWYWxvclRleHQgPSBzdHlsZWQucGBcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbmA7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ29udGFkb3IocHJvcHM6IENvbnRhZG9yUHJvcHMpIHtcclxuICBjb25zdCBbY29udGFkb3Jlcywgc2V0Q29udGFkb3Jlc10gPSB1c2VTdGF0ZSh7XHJcbiAgICBudW1lcm9EZVBlZGlkb3M6IDAsXHJcbiAgICBxdWFudGlkYWRlUGFlc1ZlbmRpZG9zOiAwLFxyXG4gICAgdmFsb3JUb3RhbEVtUmVhaXM6IDAsXHJcbiAgfSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaENvbnRhZG9yZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjEwODAvY29udGFkb3Jlc1wiKTtcclxuICAgICAgICBzZXRDb250YWRvcmVzKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZldGNoQ29udGFkb3JlcygpO1xyXG4gICAgY29uc3QgaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKGZldGNoQ29udGFkb3JlcywgMCk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7IFxyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxXcmFwcGVyPlxyXG4gICAgICAgIDxBbGluZz5cclxuICAgICAgICAgIDxGbGV4RXN0PlxyXG4gICAgICAgICAgICA8UGVzc29hVGV4dD5QZXNzb2FzIG5hIGZpbGE8L1Blc3NvYVRleHQ+XHJcbiAgICAgICAgICAgIDxkaXY+PEljb25Vc2VyIC8+PC9kaXY+XHJcbiAgICAgICAgICA8L0ZsZXhFc3Q+XHJcbiAgICAgICAgICA8ZGl2Pntjb250YWRvcmVzLm51bWVyb0RlUGVkaWRvc308L2Rpdj5cclxuICAgICAgICA8L0FsaW5nPlxyXG4gICAgICA8L1dyYXBwZXI+XHJcblxyXG4gICAgICA8V3JhcHBlcj5cclxuICAgICAgICA8QWxpbmc+XHJcbiAgICAgICAgICA8RmxleEVzdD5cclxuICAgICAgICAgICAgPFBlc3NvYVRleHQ+UMOjZXMgVmVuZGlkb3M8L1Blc3NvYVRleHQ+XHJcbiAgICAgICAgICAgIDxkaXY+PEljb25Mb2phIC8+PC9kaXY+XHJcbiAgICAgICAgICA8L0ZsZXhFc3Q+XHJcbiAgICAgICAgICA8ZGl2Pntjb250YWRvcmVzLnF1YW50aWRhZGVQYWVzVmVuZGlkb3N9PC9kaXY+XHJcbiAgICAgICAgPC9BbGluZz5cclxuICAgICAgPC9XcmFwcGVyPlxyXG5cclxuICAgICAgPFdyYXBwZXJFbnRyYWRhPlxyXG4gICAgICAgIDxBbGluZz5cclxuICAgICAgICAgIDxGbGV4RXN0PlxyXG4gICAgICAgICAgICA8RW50cmFkYVRleHQ+RW50cmFkYTwvRW50cmFkYVRleHQ+XHJcbiAgICAgICAgICAgIDxkaXY+PEljb25Eb2xhciAvPjwvZGl2PlxyXG4gICAgICAgICAgPC9GbGV4RXN0PlxyXG4gICAgICAgICAgPFZhbG9yVGV4dD57Y29udGFkb3Jlcy52YWxvclRvdGFsRW1SZWFpcy50b0ZpeGVkKDIpfSBSJDwvVmFsb3JUZXh0PlxyXG4gICAgICAgIDwvQWxpbmc+XHJcbiAgICAgIDwvV3JhcHBlckVudHJhZGE+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVkIiwiYXhpb3MiLCJJY29uRG9sYXIiLCJJY29uTG9qYSIsIkljb25Vc2VyIiwiQ29udGFpbmVyIiwiZGl2IiwiV3JhcHBlciIsIldyYXBwZXJFbnRyYWRhIiwiRmxleEVzdCIsIkFsaW5nIiwiUGVzc29hVGV4dCIsIkVudHJhZGFUZXh0IiwiaDEiLCJWYWxvclRleHQiLCJwIiwiQ29udGFkb3IiLCJwcm9wcyIsImNvbnRhZG9yZXMiLCJzZXRDb250YWRvcmVzIiwibnVtZXJvRGVQZWRpZG9zIiwicXVhbnRpZGFkZVBhZXNWZW5kaWRvcyIsInZhbG9yVG90YWxFbVJlYWlzIiwiZmV0Y2hDb250YWRvcmVzIiwicmVzcG9uc2UiLCJnZXQiLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInRvRml4ZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/componentes/contador/contador.tsx\n"));

/***/ })

});