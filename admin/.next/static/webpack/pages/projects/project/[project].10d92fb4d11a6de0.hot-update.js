"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/projects/project/[project]",{

/***/ "./src/pages/projects/project/[project]/index.jsx":
/*!********************************************************!*\
  !*** ./src/pages/projects/project/[project]/index.jsx ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils */ \"./src/utils/index.js\");\n/* harmony import */ var _layouts_Admin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/layouts/Admin */ \"./src/layouts/Admin.jsx\");\n/* harmony import */ var _components_BreadCrumbs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/BreadCrumbs */ \"./src/components/BreadCrumbs.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst ProjectUpdatePage = ()=>{\n    _s();\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [select, setSelect] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Модуль 1\");\n    const setData = (e)=>{\n        setSelect(e.target.value);\n        setOpen(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (0,_utils__WEBPACK_IMPORTED_MODULE_3__.dispatchEvent)(\"stopLoader\");\n        return ()=>(0,_utils__WEBPACK_IMPORTED_MODULE_3__.removeEvent)(\"stopLoader\");\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layouts_Admin__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Редактирование проекта\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Programs\\\\OpenServer\\\\domains\\\\java_academy_ui\\\\admin\\\\src\\\\pages\\\\projects\\\\project\\\\[project]\\\\index.jsx\",\n                    lineNumber: 23,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Programs\\\\OpenServer\\\\domains\\\\java_academy_ui\\\\admin\\\\src\\\\pages\\\\projects\\\\project\\\\[project]\\\\index.jsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"wrap container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BreadCrumbs__WEBPACK_IMPORTED_MODULE_5__.BreadCrumbs, {}, void 0, false, {\n                        fileName: \"D:\\\\Programs\\\\OpenServer\\\\domains\\\\java_academy_ui\\\\admin\\\\src\\\\pages\\\\projects\\\\project\\\\[project]\\\\index.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"pagetitle\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: \"Редактирование проекта\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Programs\\\\OpenServer\\\\domains\\\\java_academy_ui\\\\admin\\\\src\\\\pages\\\\projects\\\\project\\\\[project]\\\\index.jsx\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Programs\\\\OpenServer\\\\domains\\\\java_academy_ui\\\\admin\\\\src\\\\pages\\\\projects\\\\project\\\\[project]\\\\index.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        className: \"boxshadow\",\n                        action: \"\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    placeholder: \"Русское название\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Programs\\\\OpenServer\\\\domains\\\\java_academy_ui\\\\admin\\\\src\\\\pages\\\\projects\\\\project\\\\[project]\\\\index.jsx\",\n                                    lineNumber: 32,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Programs\\\\OpenServer\\\\domains\\\\java_academy_ui\\\\admin\\\\src\\\\pages\\\\projects\\\\project\\\\[project]\\\\index.jsx\",\n                                lineNumber: 31,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    placeholder: \"Английское название\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Programs\\\\OpenServer\\\\domains\\\\java_academy_ui\\\\admin\\\\src\\\\pages\\\\projects\\\\project\\\\[project]\\\\index.jsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Programs\\\\OpenServer\\\\domains\\\\java_academy_ui\\\\admin\\\\src\\\\pages\\\\projects\\\\project\\\\[project]\\\\index.jsx\",\n                                lineNumber: 34,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                    name: \"\",\n                                    placeholder: \"Описание\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Programs\\\\OpenServer\\\\domains\\\\java_academy_ui\\\\admin\\\\src\\\\pages\\\\projects\\\\project\\\\[project]\\\\index.jsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Programs\\\\OpenServer\\\\domains\\\\java_academy_ui\\\\admin\\\\src\\\\pages\\\\projects\\\\project\\\\[project]\\\\index.jsx\",\n                                lineNumber: 37,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n                                className: \"selectbox\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>setOpen(!open),\n                                        className: open ? \"active\" : \"\",\n                                        type: \"button\",\n                                        children: select\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Programs\\\\OpenServer\\\\domains\\\\java_academy_ui\\\\admin\\\\src\\\\pages\\\\projects\\\\project\\\\[project]\\\\index.jsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                        className: open ? \"open\" : \"\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                        onChange: setData,\n                                                        type: \"radio\",\n                                                        name: \"radio\",\n                                                        value: \"Модуль 1\",\n                                                        id: \"radio1\"\n                                                    }, void 0, false, {\n                                                        fileName: \"D:\\\\Programs\\\\OpenServer\\\\domains\\\\java_academy_ui\\\\admin\\\\src\\\\pages\\\\projects\\\\project\\\\[project]\\\\index.jsx\",\n                                                        lineNumber: 46,\n                                                        columnNumber: 17\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                        htmlFor: \"radio1\",\n                                                        children: \"Модуль 1\"\n                                                    }, void 0, false, {\n                                                        fileName: \"D:\\\\Programs\\\\OpenServer\\\\domains\\\\java_academy_ui\\\\admin\\\\src\\\\pages\\\\projects\\\\project\\\\[project]\\\\index.jsx\",\n                                                        lineNumber: 47,\n                                                        columnNumber: 17\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"D:\\\\Programs\\\\OpenServer\\\\domains\\\\java_academy_ui\\\\admin\\\\src\\\\pages\\\\projects\\\\project\\\\[project]\\\\index.jsx\",\n                                                lineNumber: 45,\n                                                columnNumber: 15\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                        onChange: setData,\n                                                        type: \"radio\",\n                                                        name: \"radio\",\n                                                        value: \"Модуль 2\",\n                                                        id: \"radio2\"\n                                                    }, void 0, false, {\n                                                        fileName: \"D:\\\\Programs\\\\OpenServer\\\\domains\\\\java_academy_ui\\\\admin\\\\src\\\\pages\\\\projects\\\\project\\\\[project]\\\\index.jsx\",\n                                                        lineNumber: 50,\n                                                        columnNumber: 17\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                        htmlFor: \"radio2\",\n                                                        children: \"Модуль 2\"\n                                                    }, void 0, false, {\n                                                        fileName: \"D:\\\\Programs\\\\OpenServer\\\\domains\\\\java_academy_ui\\\\admin\\\\src\\\\pages\\\\projects\\\\project\\\\[project]\\\\index.jsx\",\n                                                        lineNumber: 51,\n                                                        columnNumber: 17\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"D:\\\\Programs\\\\OpenServer\\\\domains\\\\java_academy_ui\\\\admin\\\\src\\\\pages\\\\projects\\\\project\\\\[project]\\\\index.jsx\",\n                                                lineNumber: 49,\n                                                columnNumber: 15\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                        onChange: setData,\n                                                        type: \"radio\",\n                                                        name: \"radio\",\n                                                        value: \"Модуль 3\",\n                                                        id: \"radio3\"\n                                                    }, void 0, false, {\n                                                        fileName: \"D:\\\\Programs\\\\OpenServer\\\\domains\\\\java_academy_ui\\\\admin\\\\src\\\\pages\\\\projects\\\\project\\\\[project]\\\\index.jsx\",\n                                                        lineNumber: 54,\n                                                        columnNumber: 17\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                        htmlFor: \"radio3\",\n                                                        children: \"Модуль 3\"\n                                                    }, void 0, false, {\n                                                        fileName: \"D:\\\\Programs\\\\OpenServer\\\\domains\\\\java_academy_ui\\\\admin\\\\src\\\\pages\\\\projects\\\\project\\\\[project]\\\\index.jsx\",\n                                                        lineNumber: 55,\n                                                        columnNumber: 17\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"D:\\\\Programs\\\\OpenServer\\\\domains\\\\java_academy_ui\\\\admin\\\\src\\\\pages\\\\projects\\\\project\\\\[project]\\\\index.jsx\",\n                                                lineNumber: 53,\n                                                columnNumber: 15\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                        onChange: setData,\n                                                        type: \"radio\",\n                                                        name: \"radio\",\n                                                        value: \"Модуль 4\",\n                                                        id: \"radio4\"\n                                                    }, void 0, false, {\n                                                        fileName: \"D:\\\\Programs\\\\OpenServer\\\\domains\\\\java_academy_ui\\\\admin\\\\src\\\\pages\\\\projects\\\\project\\\\[project]\\\\index.jsx\",\n                                                        lineNumber: 58,\n                                                        columnNumber: 17\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                        htmlFor: \"radio4\",\n                                                        children: \"Модуль 4\"\n                                                    }, void 0, false, {\n                                                        fileName: \"D:\\\\Programs\\\\OpenServer\\\\domains\\\\java_academy_ui\\\\admin\\\\src\\\\pages\\\\projects\\\\project\\\\[project]\\\\index.jsx\",\n                                                        lineNumber: 59,\n                                                        columnNumber: 17\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"D:\\\\Programs\\\\OpenServer\\\\domains\\\\java_academy_ui\\\\admin\\\\src\\\\pages\\\\projects\\\\project\\\\[project]\\\\index.jsx\",\n                                                lineNumber: 57,\n                                                columnNumber: 15\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                        onChange: setData,\n                                                        type: \"radio\",\n                                                        name: \"radio\",\n                                                        value: \"Модуль 5\",\n                                                        id: \"radio5\"\n                                                    }, void 0, false, {\n                                                        fileName: \"D:\\\\Programs\\\\OpenServer\\\\domains\\\\java_academy_ui\\\\admin\\\\src\\\\pages\\\\projects\\\\project\\\\[project]\\\\index.jsx\",\n                                                        lineNumber: 62,\n                                                        columnNumber: 17\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                        htmlFor: \"radio5\",\n                                                        children: \"Модуль 5\"\n                                                    }, void 0, false, {\n                                                        fileName: \"D:\\\\Programs\\\\OpenServer\\\\domains\\\\java_academy_ui\\\\admin\\\\src\\\\pages\\\\projects\\\\project\\\\[project]\\\\index.jsx\",\n                                                        lineNumber: 63,\n                                                        columnNumber: 17\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"D:\\\\Programs\\\\OpenServer\\\\domains\\\\java_academy_ui\\\\admin\\\\src\\\\pages\\\\projects\\\\project\\\\[project]\\\\index.jsx\",\n                                                lineNumber: 61,\n                                                columnNumber: 15\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\Programs\\\\OpenServer\\\\domains\\\\java_academy_ui\\\\admin\\\\src\\\\pages\\\\projects\\\\project\\\\[project]\\\\index.jsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Programs\\\\OpenServer\\\\domains\\\\java_academy_ui\\\\admin\\\\src\\\\pages\\\\projects\\\\project\\\\[project]\\\\index.jsx\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"btn\",\n                                type: \"submit\",\n                                children: \"Отправить\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Programs\\\\OpenServer\\\\domains\\\\java_academy_ui\\\\admin\\\\src\\\\pages\\\\projects\\\\project\\\\[project]\\\\index.jsx\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Programs\\\\OpenServer\\\\domains\\\\java_academy_ui\\\\admin\\\\src\\\\pages\\\\projects\\\\project\\\\[project]\\\\index.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Programs\\\\OpenServer\\\\domains\\\\java_academy_ui\\\\admin\\\\src\\\\pages\\\\projects\\\\project\\\\[project]\\\\index.jsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Programs\\\\OpenServer\\\\domains\\\\java_academy_ui\\\\admin\\\\src\\\\pages\\\\projects\\\\project\\\\[project]\\\\index.jsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProjectUpdatePage, \"PILPu+4JLX8QQf8n1sVMttqLOeg=\");\n_c = ProjectUpdatePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectUpdatePage);\nvar _c;\n$RefreshReg$(_c, \"ProjectUpdatePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvamVjdHMvcHJvamVjdC9bcHJvamVjdF0vaW5kZXguanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEyQztBQUNmO0FBQ3dCO0FBQ1g7QUFDYTtBQUV0RCxNQUFNTyxvQkFBb0IsSUFBTTs7SUFFOUIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdSLCtDQUFRQSxDQUFDLEtBQUs7SUFDdEMsTUFBTSxDQUFDUyxRQUFRQyxVQUFVLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU1XLFVBQVUsQ0FBQ0MsSUFBTTtRQUNyQkYsVUFBVUUsRUFBRUMsTUFBTSxDQUFDQyxLQUFLO1FBQ3hCTixRQUFRLEtBQUs7SUFDZjtJQUVBVCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2RHLHFEQUFhQSxDQUFDO1FBQ2QsT0FBTyxJQUFNQyxtREFBV0EsQ0FBQztJQUMzQixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ0Msc0RBQVdBOzswQkFDViw4REFBQ0gsa0RBQUlBOzBCQUFDLDRFQUFDYzs4QkFBTTs7Ozs7Ozs7Ozs7MEJBRWIsOERBQUNDO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ1osZ0VBQVdBOzs7OztrQ0FDWiw4REFBQ1c7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNDO3NDQUFLOzs7Ozs7Ozs7OztrQ0FFUiw4REFBQ0M7d0JBQUtGLFdBQVU7d0JBQVlHLFFBQU87OzBDQUNqQyw4REFBQ0M7MENBQ0MsNEVBQUNDO29DQUFNQyxNQUFLO29DQUFPQyxhQUFZOzs7Ozs7Ozs7OzswQ0FFakMsOERBQUNIOzBDQUNDLDRFQUFDQztvQ0FBTUMsTUFBSztvQ0FBT0MsYUFBWTs7Ozs7Ozs7Ozs7MENBRWpDLDhEQUFDSDswQ0FDQyw0RUFBQ0k7b0NBQVNDLE1BQUs7b0NBQUdGLGFBQVk7Ozs7Ozs7Ozs7OzBDQUVoQyw4REFBQ0g7Z0NBQVNKLFdBQVU7O2tEQUNsQiw4REFBQ1U7d0NBQU9DLFNBQVUsSUFBTXBCLFFBQVEsQ0FBQ0Q7d0NBQVFVLFdBQVlWLE9BQU8sV0FBVyxFQUFFO3dDQUFHZ0IsTUFBSztrREFDN0VkOzs7Ozs7a0RBRUosOERBQUNvQjt3Q0FBR1osV0FBWVYsT0FBTyxTQUFTLEVBQUU7OzBEQUNoQyw4REFBQ3VCOztrRUFDQyw4REFBQ1I7d0RBQU1TLFVBQVdwQjt3REFBVVksTUFBSzt3REFBUUcsTUFBSzt3REFBUVosT0FBTTt3REFBV2tCLElBQUc7Ozs7OztrRUFDMUUsOERBQUNDO3dEQUFNQyxTQUFRO2tFQUFTOzs7Ozs7Ozs7Ozs7MERBRTFCLDhEQUFDSjs7a0VBQ0MsOERBQUNSO3dEQUFNUyxVQUFXcEI7d0RBQVVZLE1BQUs7d0RBQVFHLE1BQUs7d0RBQVFaLE9BQU07d0RBQVdrQixJQUFHOzs7Ozs7a0VBQzFFLDhEQUFDQzt3REFBTUMsU0FBUTtrRUFBUzs7Ozs7Ozs7Ozs7OzBEQUUxQiw4REFBQ0o7O2tFQUNDLDhEQUFDUjt3REFBTVMsVUFBV3BCO3dEQUFVWSxNQUFLO3dEQUFRRyxNQUFLO3dEQUFRWixPQUFNO3dEQUFXa0IsSUFBRzs7Ozs7O2tFQUMxRSw4REFBQ0M7d0RBQU1DLFNBQVE7a0VBQVM7Ozs7Ozs7Ozs7OzswREFFMUIsOERBQUNKOztrRUFDQyw4REFBQ1I7d0RBQU1TLFVBQVdwQjt3REFBVVksTUFBSzt3REFBUUcsTUFBSzt3REFBUVosT0FBTTt3REFBV2tCLElBQUc7Ozs7OztrRUFDMUUsOERBQUNDO3dEQUFNQyxTQUFRO2tFQUFTOzs7Ozs7Ozs7Ozs7MERBRTFCLDhEQUFDSjs7a0VBQ0MsOERBQUNSO3dEQUFNUyxVQUFXcEI7d0RBQVVZLE1BQUs7d0RBQVFHLE1BQUs7d0RBQVFaLE9BQU07d0RBQVdrQixJQUFHOzs7Ozs7a0VBQzFFLDhEQUFDQzt3REFBTUMsU0FBUTtrRUFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUk5Qiw4REFBQ1A7Z0NBQU9WLFdBQVU7Z0NBQU1NLE1BQUs7MENBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1oRDtHQWxFTWpCO0tBQUFBO0FBb0VOLCtEQUFlQSxpQkFBaUJBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Byb2plY3RzL3Byb2plY3QvW3Byb2plY3RdL2luZGV4LmpzeD85YWQwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgeyBkaXNwYXRjaEV2ZW50LCByZW1vdmVFdmVudCB9IGZyb20gJ0AvdXRpbHMnXHJcbmltcG9ydCBBZG1pbkxheW91dCBmcm9tICdAL2xheW91dHMvQWRtaW4nXHJcbmltcG9ydCB7IEJyZWFkQ3J1bWJzIH0gZnJvbSAnQC9jb21wb25lbnRzL0JyZWFkQ3J1bWJzJ1xyXG5cclxuY29uc3QgUHJvamVjdFVwZGF0ZVBhZ2UgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtzZWxlY3QsIHNldFNlbGVjdF0gPSB1c2VTdGF0ZSgn0JzQvtC00YPQu9GMIDEnKVxyXG4gIGNvbnN0IHNldERhdGEgPSAoZSkgPT4ge1xyXG4gICAgc2V0U2VsZWN0KGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgc2V0T3BlbihmYWxzZSlcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkaXNwYXRjaEV2ZW50KCdzdG9wTG9hZGVyJylcclxuICAgIHJldHVybiAoKSA9PiByZW1vdmVFdmVudCgnc3RvcExvYWRlcicpXHJcbiAgfSwgW10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QWRtaW5MYXlvdXQ+XHJcbiAgICAgIDxIZWFkPjx0aXRsZT7QoNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNC1INC/0YDQvtC10LrRgtCwPC90aXRsZT48L0hlYWQ+XHJcbiAgICAgIFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXAgY29udGFpbmVyXCI+XHJcbiAgICAgICAgPEJyZWFkQ3J1bWJzIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdldGl0bGVcIj5cclxuICAgICAgICAgIDxzcGFuPtCg0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40LUg0L/RgNC+0LXQutGC0LA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiYm94c2hhZG93XCIgYWN0aW9uPVwiXCI+XHJcbiAgICAgICAgICA8ZmllbGRzZXQ+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwi0KDRg9GB0YHQutC+0LUg0L3QsNC30LLQsNC90LjQtVwiIC8+XHJcbiAgICAgICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgICAgICAgPGZpZWxkc2V0PlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cItCQ0L3Qs9C70LjQudGB0LrQvtC1INC90LDQt9Cy0LDQvdC40LVcIiAvPlxyXG4gICAgICAgICAgPC9maWVsZHNldD5cclxuICAgICAgICAgIDxmaWVsZHNldD5cclxuICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJcIiBwbGFjZWhvbGRlcj1cItCe0L/QuNGB0LDQvdC40LVcIj48L3RleHRhcmVhPlxyXG4gICAgICAgICAgPC9maWVsZHNldD5cclxuICAgICAgICAgIDxmaWVsZHNldCBjbGFzc05hbWU9XCJzZWxlY3Rib3hcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsgKCkgPT4gc2V0T3Blbighb3BlbikgfSBjbGFzc05hbWU9eyBvcGVuID8gJ2FjdGl2ZScgOiAnJyB9IHR5cGU9XCJidXR0b25cIj5cclxuICAgICAgICAgICAgICB7IHNlbGVjdCB9XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXsgb3BlbiA/ICdvcGVuJyA6ICcnIH0+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXsgc2V0RGF0YSB9IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJyYWRpb1wiIHZhbHVlPVwi0JzQvtC00YPQu9GMIDFcIiBpZD1cInJhZGlvMVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInJhZGlvMVwiPtCc0L7QtNGD0LvRjCAxPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17IHNldERhdGEgfSB0eXBlPVwicmFkaW9cIiBuYW1lPVwicmFkaW9cIiB2YWx1ZT1cItCc0L7QtNGD0LvRjCAyXCIgaWQ9XCJyYWRpbzJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJyYWRpbzJcIj7QnNC+0LTRg9C70YwgMjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9eyBzZXREYXRhIH0gdHlwZT1cInJhZGlvXCIgbmFtZT1cInJhZGlvXCIgdmFsdWU9XCLQnNC+0LTRg9C70YwgM1wiIGlkPVwicmFkaW8zXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicmFkaW8zXCI+0JzQvtC00YPQu9GMIDM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXsgc2V0RGF0YSB9IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJyYWRpb1wiIHZhbHVlPVwi0JzQvtC00YPQu9GMIDRcIiBpZD1cInJhZGlvNFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInJhZGlvNFwiPtCc0L7QtNGD0LvRjCA0PC9sYWJlbD5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17IHNldERhdGEgfSB0eXBlPVwicmFkaW9cIiBuYW1lPVwicmFkaW9cIiB2YWx1ZT1cItCc0L7QtNGD0LvRjCA1XCIgaWQ9XCJyYWRpbzVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJyYWRpbzVcIj7QnNC+0LTRg9C70YwgNTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvZmllbGRzZXQ+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiIHR5cGU9XCJzdWJtaXRcIj7QntGC0L/RgNCw0LLQuNGC0Yw8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9BZG1pbkxheW91dD5cclxuICApXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0VXBkYXRlUGFnZSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhlYWQiLCJkaXNwYXRjaEV2ZW50IiwicmVtb3ZlRXZlbnQiLCJBZG1pbkxheW91dCIsIkJyZWFkQ3J1bWJzIiwiUHJvamVjdFVwZGF0ZVBhZ2UiLCJvcGVuIiwic2V0T3BlbiIsInNlbGVjdCIsInNldFNlbGVjdCIsInNldERhdGEiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ0aXRsZSIsImRpdiIsImNsYXNzTmFtZSIsInNwYW4iLCJmb3JtIiwiYWN0aW9uIiwiZmllbGRzZXQiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInRleHRhcmVhIiwibmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ1bCIsImxpIiwib25DaGFuZ2UiLCJpZCIsImxhYmVsIiwiaHRtbEZvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/projects/project/[project]/index.jsx\n"));

/***/ })

});