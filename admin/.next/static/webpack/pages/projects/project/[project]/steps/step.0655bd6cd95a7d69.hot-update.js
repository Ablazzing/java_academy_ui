"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/projects/project/[project]/steps/step",{

/***/ "./src/pages/projects/project/[project]/steps/step/index.jsx":
/*!*******************************************************************!*\
  !*** ./src/pages/projects/project/[project]/steps/step/index.jsx ***!
  \*******************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils */ \"./src/utils/index.js\");\n/* harmony import */ var _layouts_Admin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/layouts/Admin */ \"./src/layouts/Admin.jsx\");\n/* harmony import */ var _components_BreadCrumbs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/BreadCrumbs */ \"./src/components/BreadCrumbs.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst ProjectStepUpdatePage = ()=>{\n    _s();\n    const [list, setList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        \"\"\n    ]);\n    const addItem = ()=>{\n        const current = JSON.parse(JSON.stringify(list));\n        current.push(\"\");\n        setList(current);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (0,_utils__WEBPACK_IMPORTED_MODULE_3__.dispatchEvent)(\"stopLoader\");\n        return ()=>(0,_utils__WEBPACK_IMPORTED_MODULE_3__.removeEvent)(\"stopLoader\");\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layouts_Admin__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Создание шага\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Programs\\\\OpenServer\\\\domains\\\\java_academy_ui\\\\admin\\\\src\\\\pages\\\\projects\\\\project\\\\[project]\\\\steps\\\\step\\\\index.jsx\",\n                    lineNumber: 23,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Programs\\\\OpenServer\\\\domains\\\\java_academy_ui\\\\admin\\\\src\\\\pages\\\\projects\\\\project\\\\[project]\\\\steps\\\\step\\\\index.jsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"wrap container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BreadCrumbs__WEBPACK_IMPORTED_MODULE_5__.BreadCrumbs, {}, void 0, false, {\n                        fileName: \"D:\\\\Programs\\\\OpenServer\\\\domains\\\\java_academy_ui\\\\admin\\\\src\\\\pages\\\\projects\\\\project\\\\[project]\\\\steps\\\\step\\\\index.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"pagetitle\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: \"Создание шага\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Programs\\\\OpenServer\\\\domains\\\\java_academy_ui\\\\admin\\\\src\\\\pages\\\\projects\\\\project\\\\[project]\\\\steps\\\\step\\\\index.jsx\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Programs\\\\OpenServer\\\\domains\\\\java_academy_ui\\\\admin\\\\src\\\\pages\\\\projects\\\\project\\\\[project]\\\\steps\\\\step\\\\index.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        className: \"boxshadow\",\n                        action: \"\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    placeholder: \"Номер шага\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Programs\\\\OpenServer\\\\domains\\\\java_academy_ui\\\\admin\\\\src\\\\pages\\\\projects\\\\project\\\\[project]\\\\steps\\\\step\\\\index.jsx\",\n                                    lineNumber: 32,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Programs\\\\OpenServer\\\\domains\\\\java_academy_ui\\\\admin\\\\src\\\\pages\\\\projects\\\\project\\\\[project]\\\\steps\\\\step\\\\index.jsx\",\n                                lineNumber: 31,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                    name: \"\",\n                                    placeholder: \"Описание\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Programs\\\\OpenServer\\\\domains\\\\java_academy_ui\\\\admin\\\\src\\\\pages\\\\projects\\\\project\\\\[project]\\\\steps\\\\step\\\\index.jsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Programs\\\\OpenServer\\\\domains\\\\java_academy_ui\\\\admin\\\\src\\\\pages\\\\projects\\\\project\\\\[project]\\\\steps\\\\step\\\\index.jsx\",\n                                lineNumber: 34,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"title\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"Требования\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Programs\\\\OpenServer\\\\domains\\\\java_academy_ui\\\\admin\\\\src\\\\pages\\\\projects\\\\project\\\\[project]\\\\steps\\\\step\\\\index.jsx\",\n                                        lineNumber: 38,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: addItem,\n                                        className: \"btn\",\n                                        type: \"button\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"use\", {\n                                                    xlinkHref: \"/theme/img/sprite.svg#plus\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Programs\\\\OpenServer\\\\domains\\\\java_academy_ui\\\\admin\\\\src\\\\pages\\\\projects\\\\project\\\\[project]\\\\steps\\\\step\\\\index.jsx\",\n                                                    lineNumber: 40,\n                                                    columnNumber: 20\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Programs\\\\OpenServer\\\\domains\\\\java_academy_ui\\\\admin\\\\src\\\\pages\\\\projects\\\\project\\\\[project]\\\\steps\\\\step\\\\index.jsx\",\n                                                lineNumber: 40,\n                                                columnNumber: 15\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: \"Добавить\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Programs\\\\OpenServer\\\\domains\\\\java_academy_ui\\\\admin\\\\src\\\\pages\\\\projects\\\\project\\\\[project]\\\\steps\\\\step\\\\index.jsx\",\n                                                lineNumber: 41,\n                                                columnNumber: 15\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\Programs\\\\OpenServer\\\\domains\\\\java_academy_ui\\\\admin\\\\src\\\\pages\\\\projects\\\\project\\\\[project]\\\\steps\\\\step\\\\index.jsx\",\n                                        lineNumber: 39,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Programs\\\\OpenServer\\\\domains\\\\java_academy_ui\\\\admin\\\\src\\\\pages\\\\projects\\\\project\\\\[project]\\\\steps\\\\step\\\\index.jsx\",\n                                lineNumber: 37,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"list\",\n                                children: list.map((e, i)=>{\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    type: \"text\",\n                                                    placeholder: \"Требование\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Programs\\\\OpenServer\\\\domains\\\\java_academy_ui\\\\admin\\\\src\\\\pages\\\\projects\\\\project\\\\[project]\\\\steps\\\\step\\\\index.jsx\",\n                                                    lineNumber: 48,\n                                                    columnNumber: 25\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    type: \"text\",\n                                                    placeholder: \"Подсказка\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Programs\\\\OpenServer\\\\domains\\\\java_academy_ui\\\\admin\\\\src\\\\pages\\\\projects\\\\project\\\\[project]\\\\steps\\\\step\\\\index.jsx\",\n                                                    lineNumber: 49,\n                                                    columnNumber: 25\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"D:\\\\Programs\\\\OpenServer\\\\domains\\\\java_academy_ui\\\\admin\\\\src\\\\pages\\\\projects\\\\project\\\\[project]\\\\steps\\\\step\\\\index.jsx\",\n                                            lineNumber: 47,\n                                            columnNumber: 23\n                                        }, undefined)\n                                    }, i, false, {\n                                        fileName: \"D:\\\\Programs\\\\OpenServer\\\\domains\\\\java_academy_ui\\\\admin\\\\src\\\\pages\\\\projects\\\\project\\\\[project]\\\\steps\\\\step\\\\index.jsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 20\n                                    }, undefined);\n                                })\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Programs\\\\OpenServer\\\\domains\\\\java_academy_ui\\\\admin\\\\src\\\\pages\\\\projects\\\\project\\\\[project]\\\\steps\\\\step\\\\index.jsx\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"btn\",\n                                type: \"submit\",\n                                children: \"Отправить\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Programs\\\\OpenServer\\\\domains\\\\java_academy_ui\\\\admin\\\\src\\\\pages\\\\projects\\\\project\\\\[project]\\\\steps\\\\step\\\\index.jsx\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Programs\\\\OpenServer\\\\domains\\\\java_academy_ui\\\\admin\\\\src\\\\pages\\\\projects\\\\project\\\\[project]\\\\steps\\\\step\\\\index.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Programs\\\\OpenServer\\\\domains\\\\java_academy_ui\\\\admin\\\\src\\\\pages\\\\projects\\\\project\\\\[project]\\\\steps\\\\step\\\\index.jsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Programs\\\\OpenServer\\\\domains\\\\java_academy_ui\\\\admin\\\\src\\\\pages\\\\projects\\\\project\\\\[project]\\\\steps\\\\step\\\\index.jsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProjectStepUpdatePage, \"MCWaTtUI50gUdXFoem5MxM89dVo=\");\n_c = ProjectStepUpdatePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectStepUpdatePage);\nvar _c;\n$RefreshReg$(_c, \"ProjectStepUpdatePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvamVjdHMvcHJvamVjdC9bcHJvamVjdF0vc3RlcHMvc3RlcC9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ2Y7QUFDd0I7QUFDWDtBQUNhO0FBRXRELE1BQU1PLHdCQUF3QixJQUFNOztJQUVsQyxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1IsK0NBQVFBLENBQUM7UUFBQztLQUFHO0lBQ3JDLE1BQU1TLFVBQVUsSUFBTTtRQUNwQixNQUFNQyxVQUFVQyxLQUFLQyxLQUFLLENBQUNELEtBQUtFLFNBQVMsQ0FBQ047UUFDMUNHLFFBQVFJLElBQUksQ0FBQztRQUNiTixRQUFRRTtJQUNWO0lBRUFYLGdEQUFTQSxDQUFDLElBQU07UUFDZEcscURBQWFBLENBQUM7UUFDZCxPQUFPLElBQU1DLG1EQUFXQSxDQUFDO0lBQzNCLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDQyxzREFBV0E7OzBCQUNWLDhEQUFDSCxrREFBSUE7MEJBQUMsNEVBQUNjOzhCQUFNOzs7Ozs7Ozs7OzswQkFFYiw4REFBQ0M7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDWixnRUFBV0E7Ozs7O2tDQUNaLDhEQUFDVzt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ0M7c0NBQUs7Ozs7Ozs7Ozs7O2tDQUVSLDhEQUFDQzt3QkFBS0YsV0FBVTt3QkFBWUcsUUFBTzs7MENBQ2pDLDhEQUFDQzswQ0FDQyw0RUFBQ0M7b0NBQU1DLE1BQUs7b0NBQU9DLGFBQVk7Ozs7Ozs7Ozs7OzBDQUVqQyw4REFBQ0g7MENBQ0MsNEVBQUNJO29DQUFTQyxNQUFLO29DQUFHRixhQUFZOzs7Ozs7Ozs7OzswQ0FFaEMsOERBQUNSO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ0M7a0RBQUs7Ozs7OztrREFDTiw4REFBQ1M7d0NBQU9DLFNBQVVuQjt3Q0FBVVEsV0FBVTt3Q0FBTU0sTUFBSzs7MERBQy9DLDhEQUFDTTswREFBSSw0RUFBQ0M7b0RBQUlDLFdBQVU7Ozs7Ozs7Ozs7OzBEQUNwQiw4REFBQ2I7MERBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQ0FHViw4REFBQ2M7Z0NBQUdmLFdBQVU7MENBQ2JWLEtBQUswQixHQUFHLENBQUMsQ0FBQ0MsR0FBR0MsSUFBTTtvQ0FDbEIscUJBQU8sOERBQUNDO2tEQUNFLDRFQUFDZjs7OERBQ0MsOERBQUNDO29EQUFNQyxNQUFLO29EQUFPQyxhQUFZOzs7Ozs7OERBQy9CLDhEQUFDRjtvREFBTUMsTUFBSztvREFBT0MsYUFBWTs7Ozs7Ozs7Ozs7O3VDQUgxQlc7Ozs7O2dDQU1uQjs7Ozs7OzBDQUVBLDhEQUFDUjtnQ0FBT1YsV0FBVTtnQ0FBTU0sTUFBSzswQ0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWhEO0dBckRNakI7S0FBQUE7QUF1RE4sK0RBQWVBLHFCQUFxQkEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcHJvamVjdHMvcHJvamVjdC9bcHJvamVjdF0vc3RlcHMvc3RlcC9pbmRleC5qc3g/Mjc2MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHsgZGlzcGF0Y2hFdmVudCwgcmVtb3ZlRXZlbnQgfSBmcm9tICdAL3V0aWxzJ1xyXG5pbXBvcnQgQWRtaW5MYXlvdXQgZnJvbSAnQC9sYXlvdXRzL0FkbWluJ1xyXG5pbXBvcnQgeyBCcmVhZENydW1icyB9IGZyb20gJ0AvY29tcG9uZW50cy9CcmVhZENydW1icydcclxuXHJcbmNvbnN0IFByb2plY3RTdGVwVXBkYXRlUGFnZSA9ICgpID0+IHtcclxuXHJcbiAgY29uc3QgW2xpc3QsIHNldExpc3RdID0gdXNlU3RhdGUoWycnXSlcclxuICBjb25zdCBhZGRJdGVtID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY3VycmVudCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkobGlzdCkpXHJcbiAgICBjdXJyZW50LnB1c2goJycpXHJcbiAgICBzZXRMaXN0KGN1cnJlbnQpXHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2hFdmVudCgnc3RvcExvYWRlcicpXHJcbiAgICByZXR1cm4gKCkgPT4gcmVtb3ZlRXZlbnQoJ3N0b3BMb2FkZXInKVxyXG4gIH0sIFtdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEFkbWluTGF5b3V0PlxyXG4gICAgICA8SGVhZD48dGl0bGU+0KHQvtC30LTQsNC90LjQtSDRiNCw0LPQsDwvdGl0bGU+PC9IZWFkPlxyXG4gICAgICBcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwIGNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxCcmVhZENydW1icyAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZXRpdGxlXCI+XHJcbiAgICAgICAgICA8c3Bhbj7QodC+0LfQtNCw0L3QuNC1INGI0LDQs9CwPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImJveHNoYWRvd1wiIGFjdGlvbj1cIlwiPlxyXG4gICAgICAgICAgPGZpZWxkc2V0PlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cItCd0L7QvNC10YAg0YjQsNCz0LBcIiAvPlxyXG4gICAgICAgICAgPC9maWVsZHNldD5cclxuICAgICAgICAgIDxmaWVsZHNldD5cclxuICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJcIiBwbGFjZWhvbGRlcj1cItCe0L/QuNGB0LDQvdC40LVcIj48L3RleHRhcmVhPlxyXG4gICAgICAgICAgPC9maWVsZHNldD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgPHNwYW4+0KLRgNC10LHQvtCy0LDQvdC40Y88L3NwYW4+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17IGFkZEl0ZW0gfSBjbGFzc05hbWU9XCJidG5cIiB0eXBlPVwiYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgPHN2Zz48dXNlIHhsaW5rSHJlZj1cIi90aGVtZS9pbWcvc3ByaXRlLnN2ZyNwbHVzXCI+PC91c2U+PC9zdmc+XHJcbiAgICAgICAgICAgICAgPHNwYW4+0JTQvtCx0LDQstC40YLRjDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0XCI+XHJcbiAgICAgICAgICB7bGlzdC5tYXAoKGUsIGkpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIDxsaSBrZXk9eyBpIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZmllbGRzZXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwi0KLRgNC10LHQvtCy0LDQvdC40LVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cItCf0L7QtNGB0LrQsNC30LrQsFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiIHR5cGU9XCJzdWJtaXRcIj7QntGC0L/RgNCw0LLQuNGC0Yw8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9BZG1pbkxheW91dD5cclxuICApXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0U3RlcFVwZGF0ZVBhZ2UiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJIZWFkIiwiZGlzcGF0Y2hFdmVudCIsInJlbW92ZUV2ZW50IiwiQWRtaW5MYXlvdXQiLCJCcmVhZENydW1icyIsIlByb2plY3RTdGVwVXBkYXRlUGFnZSIsImxpc3QiLCJzZXRMaXN0IiwiYWRkSXRlbSIsImN1cnJlbnQiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJwdXNoIiwidGl0bGUiLCJkaXYiLCJjbGFzc05hbWUiLCJzcGFuIiwiZm9ybSIsImFjdGlvbiIsImZpZWxkc2V0IiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ0ZXh0YXJlYSIsIm5hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwic3ZnIiwidXNlIiwieGxpbmtIcmVmIiwidWwiLCJtYXAiLCJlIiwiaSIsImxpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/projects/project/[project]/steps/step/index.jsx\n"));

/***/ })

});