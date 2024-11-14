"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/products",{

/***/ "./src/pages/products/index.tsx":
/*!**************************************!*\
  !*** ./src/pages/products/index.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_pages_products_ProductList_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/pages/products/ProductList.module.scss */ \"./src/styles/pages/products/ProductList.module.scss\");\n/* harmony import */ var _styles_pages_products_ProductList_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_products_ProductList_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_molecules_SearchForm_KeywordSearch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/molecules/SearchForm/KeywordSearch */ \"./src/components/molecules/SearchForm/KeywordSearch.tsx\");\n/* harmony import */ var _components_atoms_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/atoms/Button */ \"./src/components/atoms/Button/index.tsx\");\n/* harmony import */ var _barrel_optimize_names_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Paper,Table,TableBody,TableCell,TableContainer,TableHead,TableRow!=!@mui/material */ \"./node_modules/@mui/material/TableContainer/TableContainer.js\");\n/* harmony import */ var _barrel_optimize_names_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Paper,Table,TableBody,TableCell,TableContainer,TableHead,TableRow!=!@mui/material */ \"./node_modules/@mui/material/Paper/Paper.js\");\n/* harmony import */ var _barrel_optimize_names_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Paper,Table,TableBody,TableCell,TableContainer,TableHead,TableRow!=!@mui/material */ \"./node_modules/@mui/material/Table/Table.js\");\n/* harmony import */ var _barrel_optimize_names_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=Paper,Table,TableBody,TableCell,TableContainer,TableHead,TableRow!=!@mui/material */ \"./node_modules/@mui/material/TableHead/TableHead.js\");\n/* harmony import */ var _barrel_optimize_names_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=Paper,Table,TableBody,TableCell,TableContainer,TableHead,TableRow!=!@mui/material */ \"./node_modules/@mui/material/TableRow/TableRow.js\");\n/* harmony import */ var _barrel_optimize_names_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=Paper,Table,TableBody,TableCell,TableContainer,TableHead,TableRow!=!@mui/material */ \"./node_modules/@mui/material/TableCell/TableCell.js\");\n/* harmony import */ var _barrel_optimize_names_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! __barrel_optimize__?names=Paper,Table,TableBody,TableCell,TableContainer,TableHead,TableRow!=!@mui/material */ \"./node_modules/@mui/material/TableBody/TableBody.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction ProductList() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const { keyword, modelNumber } = router.query;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchProducts = async ()=>{\n            setLoading(true);\n            setError(null);\n            try {\n                const params = new URLSearchParams();\n                if (keyword) params.append(\"keyword\", String(keyword));\n                if (modelNumber) params.append(\"modelNumber\", String(modelNumber));\n                // Express APIのエンドポイントを呼び出し\n                const response = await fetch(\"\".concat(\"http://localhost:3001/api\", \"/products?\").concat(params.toString()));\n                if (!response.ok) {\n                    throw new Error(\"API error: \".concat(response.status));\n                }\n                const data = await response.json();\n                console.log(\"Received data:\", data);\n                const productArray = Array.isArray(data) ? data : data.products || [];\n                setProducts(productArray);\n            } catch (error) {\n                console.error(\"製品の取得に失敗しました:\", error);\n                setError(\"製品の取得に失敗しました\");\n            } finally{\n                setLoading(false);\n            }\n        };\n        if (router.isReady) {\n            fetchProducts();\n        }\n    }, [\n        router.isReady,\n        keyword,\n        modelNumber\n    ]);\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"読み込み中...\"\n    }, void 0, false, {\n        fileName: \"/app/src/pages/products/index.tsx\",\n        lineNumber: 65,\n        columnNumber: 23\n    }, this);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"エラー: \",\n            error\n        ]\n    }, void 0, true, {\n        fileName: \"/app/src/pages/products/index.tsx\",\n        lineNumber: 66,\n        columnNumber: 21\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_pages_products_ProductList_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"product-list\"]),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"ソフトウェア製品検索\"\n            }, void 0, false, {\n                fileName: \"/app/src/pages/products/index.tsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"製品のキーワード（製品名や主な機能など）から該当する製品を検索できます。\"\n            }, void 0, false, {\n                fileName: \"/app/src/pages/products/index.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/app/src/pages/products/index.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_molecules_SearchForm_KeywordSearch__WEBPACK_IMPORTED_MODULE_4__.KeywordSearch, {}, void 0, false, {\n                fileName: \"/app/src/pages/products/index.tsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/app/src/pages/products/index.tsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"検索結果\"\n            }, void 0, false, {\n                fileName: \"/app/src/pages/products/index.tsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                component: _barrel_optimize_names_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n                sx: {\n                    mt: 2\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    sx: {\n                        minWidth: 650\n                    },\n                    \"aria-label\": \"product table\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                sx: {\n                                    backgroundColor: \"#f5f5f5\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                        sx: {\n                                            fontWeight: \"bold\"\n                                        },\n                                        children: \"製品名\"\n                                    }, void 0, false, {\n                                        fileName: \"/app/src/pages/products/index.tsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                        sx: {\n                                            fontWeight: \"bold\"\n                                        },\n                                        children: \"製品番号\"\n                                    }, void 0, false, {\n                                        fileName: \"/app/src/pages/products/index.tsx\",\n                                        lineNumber: 82,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                        sx: {\n                                            fontWeight: \"bold\"\n                                        },\n                                        align: \"right\",\n                                        children: \"価格\"\n                                    }, void 0, false, {\n                                        fileName: \"/app/src/pages/products/index.tsx\",\n                                        lineNumber: 83,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                        sx: {\n                                            fontWeight: \"bold\"\n                                        },\n                                        align: \"center\",\n                                        children: \"操作\"\n                                    }, void 0, false, {\n                                        fileName: \"/app/src/pages/products/index.tsx\",\n                                        lineNumber: 84,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/app/src/pages/products/index.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/app/src/pages/products/index.tsx\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                            children: products.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                    sx: {\n                                        \"&:hover\": {\n                                            backgroundColor: \"#f8f8f8\"\n                                        },\n                                        \"&:last-child td, &:last-child th\": {\n                                            border: 0\n                                        }\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                            children: generateproduct.productname\n                                        }, void 0, false, {\n                                            fileName: \"/app/src/pages/products/index.tsx\",\n                                            lineNumber: 96,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                            children: product.productno\n                                        }, void 0, false, {\n                                            fileName: \"/app/src/pages/products/index.tsx\",\n                                            lineNumber: 97,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                            align: \"right\",\n                                            children: [\n                                                \"\\xa5\",\n                                                generateproduct.price.toLocaleString()\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/app/src/pages/products/index.tsx\",\n                                            lineNumber: 98,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                            align: \"center\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_atoms_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                                variant: \"contained\",\n                                                color: \"primary\",\n                                                size: \"small\",\n                                                onClick: ()=>console.log(\"clicked\", product.id),\n                                                sx: {\n                                                    minWidth: \"120px\"\n                                                },\n                                                children: \"構成作成\"\n                                            }, void 0, false, {\n                                                fileName: \"/app/src/pages/products/index.tsx\",\n                                                lineNumber: 103,\n                                                columnNumber: 19\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/app/src/pages/products/index.tsx\",\n                                            lineNumber: 102,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, product.id, true, {\n                                    fileName: \"/app/src/pages/products/index.tsx\",\n                                    lineNumber: 89,\n                                    columnNumber: 15\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"/app/src/pages/products/index.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/app/src/pages/products/index.tsx\",\n                    lineNumber: 78,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/app/src/pages/products/index.tsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, this),\n            products.length === 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    textAlign: \"center\",\n                    padding: \"20px\"\n                },\n                children: \"検索結果がありません\"\n            }, void 0, false, {\n                fileName: \"/app/src/pages/products/index.tsx\",\n                lineNumber: 120,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/app/src/pages/products/index.tsx\",\n        lineNumber: 69,\n        columnNumber: 5\n    }, this);\n}\n_s(ProductList, \"5JkyrBq/HqfPA0bcc5BEhJVmOR8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = ProductList;\nvar _c;\n$RefreshReg$(_c, \"ProductList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvZHVjdHMvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFDSjtBQUNpQztBQUNXO0FBQ2pDO0FBUzVCO0FBU1IsU0FBU2E7O0lBQ3RCLE1BQU1DLFNBQVNaLHNEQUFTQTtJQUN4QixNQUFNLENBQUNhLFVBQVVDLFlBQVksR0FBR2YsK0NBQVFBLENBQVksRUFBRTtJQUN0RCxNQUFNLENBQUNnQixTQUFTQyxXQUFXLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNrQixPQUFPQyxTQUFTLEdBQUduQiwrQ0FBUUEsQ0FBZ0I7SUFDbEQsTUFBTSxFQUFFb0IsT0FBTyxFQUFFQyxXQUFXLEVBQUUsR0FBR1IsT0FBT1MsS0FBSztJQUU3Q3ZCLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTXdCLGdCQUFnQjtZQUNwQk4sV0FBVztZQUNYRSxTQUFTO1lBRVQsSUFBSTtnQkFDRixNQUFNSyxTQUFTLElBQUlDO2dCQUNuQixJQUFJTCxTQUFTSSxPQUFPRSxNQUFNLENBQUMsV0FBV0MsT0FBT1A7Z0JBQzdDLElBQUlDLGFBQWFHLE9BQU9FLE1BQU0sQ0FBQyxlQUFlQyxPQUFPTjtnQkFFckQsMkJBQTJCO2dCQUMzQixNQUFNTyxXQUFXLE1BQU1DLE1BQU0sR0FBb0RMLE9BQWpETSwyQkFBb0MsRUFBQyxjQUE4QixPQUFsQk4sT0FBT1MsUUFBUTtnQkFFaEcsSUFBSSxDQUFDTCxTQUFTTSxFQUFFLEVBQUU7b0JBQ2hCLE1BQU0sSUFBSUMsTUFBTSxjQUE4QixPQUFoQlAsU0FBU1EsTUFBTTtnQkFDL0M7Z0JBRUEsTUFBTUMsT0FBTyxNQUFNVCxTQUFTVSxJQUFJO2dCQUNoQ0MsUUFBUUMsR0FBRyxDQUFDLGtCQUFrQkg7Z0JBRTlCLE1BQU1JLGVBQWVDLE1BQU1DLE9BQU8sQ0FBQ04sUUFBUUEsT0FBT0EsS0FBS3ZCLFFBQVEsSUFBSSxFQUFFO2dCQUNyRUMsWUFBWTBCO1lBQ2QsRUFBRSxPQUFPdkIsT0FBTztnQkFDZHFCLFFBQVFyQixLQUFLLENBQUMsaUJBQWlCQTtnQkFDL0JDLFNBQVM7WUFDWCxTQUFVO2dCQUNSRixXQUFXO1lBQ2I7UUFDRjtRQUVBLElBQUlKLE9BQU8rQixPQUFPLEVBQUU7WUFDbEJyQjtRQUNGO0lBQ0YsR0FBRztRQUFDVixPQUFPK0IsT0FBTztRQUFFeEI7UUFBU0M7S0FBWTtJQUV6QyxJQUFJTCxTQUFTLHFCQUFPLDhEQUFDNkI7a0JBQUk7Ozs7OztJQUN6QixJQUFJM0IsT0FBTyxxQkFBTyw4REFBQzJCOztZQUFJO1lBQU0zQjs7Ozs7OztJQUU3QixxQkFDRSw4REFBQzJCO1FBQUlDLFdBQVc1Qyx1R0FBc0I7OzBCQUNwQyw4REFBQzZDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDOzBCQUFFOzs7Ozs7MEJBQ0gsOERBQUNDOzs7OzswQkFDRCw4REFBQzlDLHlGQUFhQTs7Ozs7MEJBQ2QsOERBQUM4Qzs7Ozs7MEJBQ0QsOERBQUNGOzBCQUFHOzs7Ozs7MEJBRUosOERBQUN2Qyw2SUFBY0E7Z0JBQUMwQyxXQUFXdkMsNklBQUtBO2dCQUFFd0MsSUFBSTtvQkFBRUMsSUFBSTtnQkFBRTswQkFDNUMsNEVBQUMvQyw2SUFBS0E7b0JBQUM4QyxJQUFJO3dCQUFFRSxVQUFVO29CQUFJO29CQUFHQyxjQUFXOztzQ0FDdkMsOERBQUM3Qyw2SUFBU0E7c0NBQ1IsNEVBQUNDLDhJQUFRQTtnQ0FBQ3lDLElBQUk7b0NBQUVJLGlCQUFpQjtnQ0FBVTs7a0RBQ3pDLDhEQUFDaEQsOElBQVNBO3dDQUFDNEMsSUFBSTs0Q0FBRUssWUFBWTt3Q0FBTztrREFBRzs7Ozs7O2tEQUN2Qyw4REFBQ2pELDhJQUFTQTt3Q0FBQzRDLElBQUk7NENBQUVLLFlBQVk7d0NBQU87a0RBQUc7Ozs7OztrREFDdkMsOERBQUNqRCw4SUFBU0E7d0NBQUM0QyxJQUFJOzRDQUFFSyxZQUFZO3dDQUFPO3dDQUFHQyxPQUFNO2tEQUFROzs7Ozs7a0RBQ3JELDhEQUFDbEQsOElBQVNBO3dDQUFDNEMsSUFBSTs0Q0FBRUssWUFBWTt3Q0FBTzt3Q0FBR0MsT0FBTTtrREFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBRzFELDhEQUFDbkQsOElBQVNBO3NDQUNQUSxTQUFTNEMsR0FBRyxDQUFDLENBQUNDLHdCQUNiLDhEQUFDakQsOElBQVFBO29DQUVQeUMsSUFBSTt3Q0FDRixXQUFXOzRDQUFFSSxpQkFBaUI7d0NBQVU7d0NBQ3hDLG9DQUFvQzs0Q0FBRUssUUFBUTt3Q0FBRTtvQ0FDbEQ7O3NEQUVBLDhEQUFDckQsOElBQVNBO3NEQUFFc0QsZ0JBQWdCQyxXQUFXOzs7Ozs7c0RBQ3ZDLDhEQUFDdkQsOElBQVNBO3NEQUFFb0QsUUFBUUksU0FBUzs7Ozs7O3NEQUM3Qiw4REFBQ3hELDhJQUFTQTs0Q0FBQ2tELE9BQU07O2dEQUFRO2dEQUNyQkksZ0JBQWdCRyxLQUFLLENBQUNDLGNBQWM7Ozs7Ozs7c0RBR3hDLDhEQUFDMUQsOElBQVNBOzRDQUFDa0QsT0FBTTtzREFDZiw0RUFBQ3JELGdFQUFNQTtnREFDTDhELFNBQVE7Z0RBQ1JDLE9BQU07Z0RBQ05DLE1BQUs7Z0RBQ0xDLFNBQVMsSUFBTTlCLFFBQVFDLEdBQUcsQ0FBQyxXQUFXbUIsUUFBUVcsRUFBRTtnREFDaERuQixJQUFJO29EQUFFRSxVQUFVO2dEQUFROzBEQUN6Qjs7Ozs7Ozs7Ozs7O21DQW5CRU0sUUFBUVcsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBNkJ4QnhELFNBQVN5RCxNQUFNLEtBQUssbUJBQ25CLDhEQUFDMUI7Z0JBQUkyQixPQUFPO29CQUFFQyxXQUFXO29CQUFVQyxTQUFTO2dCQUFPOzBCQUFHOzs7Ozs7Ozs7Ozs7QUFNOUQ7R0F2R3dCOUQ7O1FBQ1BYLGtEQUFTQTs7O0tBREZXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9wcm9kdWN0cy9pbmRleC50c3g/OWI1MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvcGFnZXMvcHJvZHVjdHMvUHJvZHVjdExpc3QubW9kdWxlLnNjc3MnO1xuaW1wb3J0IHsgS2V5d29yZFNlYXJjaCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbW9sZWN1bGVzL1NlYXJjaEZvcm0vS2V5d29yZFNlYXJjaCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYXRvbXMvQnV0dG9uJztcbmltcG9ydCB7IFxuICBUYWJsZSwgXG4gIFRhYmxlQm9keSwgXG4gIFRhYmxlQ2VsbCwgXG4gIFRhYmxlQ29udGFpbmVyLCBcbiAgVGFibGVIZWFkLCBcbiAgVGFibGVSb3csIFxuICBQYXBlciBcbn0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XG5cbmludGVyZmFjZSBQcm9kdWN0IHtcbiAgaWQ6IHN0cmluZztcbiAgcHJvZHVjdG5vOiBzdHJpbmc7XG4gIHByb2R1Y3RuYW1lOiBzdHJpbmc7XG4gIHByaWNlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RMaXN0KCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW3Byb2R1Y3RzLCBzZXRQcm9kdWN0c10gPSB1c2VTdGF0ZTxQcm9kdWN0W10+KFtdKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuICBjb25zdCB7IGtleXdvcmQsIG1vZGVsTnVtYmVyIH0gPSByb3V0ZXIucXVlcnk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaFByb2R1Y3RzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgIHNldEVycm9yKG51bGwpO1xuICAgICAgXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XG4gICAgICAgIGlmIChrZXl3b3JkKSBwYXJhbXMuYXBwZW5kKCdrZXl3b3JkJywgU3RyaW5nKGtleXdvcmQpKTtcbiAgICAgICAgaWYgKG1vZGVsTnVtYmVyKSBwYXJhbXMuYXBwZW5kKCdtb2RlbE51bWJlcicsIFN0cmluZyhtb2RlbE51bWJlcikpO1xuXG4gICAgICAgIC8vIEV4cHJlc3MgQVBJ44Gu44Ko44Oz44OJ44Od44Kk44Oz44OI44KS5ZG844Gz5Ye644GXXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX0JBU0VfVVJMfS9wcm9kdWN0cz8ke3BhcmFtcy50b1N0cmluZygpfWApO1xuICAgICAgICBcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQVBJIGVycm9yOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdSZWNlaXZlZCBkYXRhOicsIGRhdGEpO1xuXG4gICAgICAgIGNvbnN0IHByb2R1Y3RBcnJheSA9IEFycmF5LmlzQXJyYXkoZGF0YSkgPyBkYXRhIDogZGF0YS5wcm9kdWN0cyB8fCBbXTtcbiAgICAgICAgc2V0UHJvZHVjdHMocHJvZHVjdEFycmF5KTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ+ijveWTgeOBruWPluW+l+OBq+WkseaVl+OBl+OBvuOBl+OBnzonLCBlcnJvcik7XG4gICAgICAgIHNldEVycm9yKCfoo73lk4Hjga7lj5blvpfjgavlpLHmlZfjgZfjgb7jgZfjgZ8nKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAocm91dGVyLmlzUmVhZHkpIHtcbiAgICAgIGZldGNoUHJvZHVjdHMoKTtcbiAgICB9XG4gIH0sIFtyb3V0ZXIuaXNSZWFkeSwga2V5d29yZCwgbW9kZWxOdW1iZXJdKTtcblxuICBpZiAobG9hZGluZykgcmV0dXJuIDxkaXY+6Kqt44G/6L6844G/5LitLi4uPC9kaXY+O1xuICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PuOCqOODqeODvDoge2Vycm9yfTwvZGl2PjtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ3Byb2R1Y3QtbGlzdCddfT5cbiAgICAgIDxoMj7jgr3jg5Xjg4jjgqbjgqfjgqLoo73lk4HmpJzntKI8L2gyPlxuICAgICAgPHA+6KO95ZOB44Gu44Kt44O844Ov44O844OJ77yI6KO95ZOB5ZCN44KE5Li744Gq5qmf6IO944Gq44Gp77yJ44GL44KJ6Kmy5b2T44GZ44KL6KO95ZOB44KS5qSc57Si44Gn44GN44G+44GZ44CCPC9wPlxuICAgICAgPGJyLz5cbiAgICAgIDxLZXl3b3JkU2VhcmNoIC8+XG4gICAgICA8YnIvPlxuICAgICAgPGgyPuaknOe0oue1kOaenDwvaDI+XG4gICAgICBcbiAgICAgIDxUYWJsZUNvbnRhaW5lciBjb21wb25lbnQ9e1BhcGVyfSBzeD17eyBtdDogMiB9fT5cbiAgICAgICAgPFRhYmxlIHN4PXt7IG1pbldpZHRoOiA2NTAgfX0gYXJpYS1sYWJlbD1cInByb2R1Y3QgdGFibGVcIj5cbiAgICAgICAgICA8VGFibGVIZWFkPlxuICAgICAgICAgICAgPFRhYmxlUm93IHN4PXt7IGJhY2tncm91bmRDb2xvcjogJyNmNWY1ZjUnIH19PlxuICAgICAgICAgICAgICA8VGFibGVDZWxsIHN4PXt7IGZvbnRXZWlnaHQ6ICdib2xkJyB9fT7oo73lk4HlkI08L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBzeD17eyBmb250V2VpZ2h0OiAnYm9sZCcgfX0+6KO95ZOB55Wq5Y+3PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGwgc3g9e3sgZm9udFdlaWdodDogJ2JvbGQnIH19IGFsaWduPVwicmlnaHRcIj7kvqHmoLw8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBzeD17eyBmb250V2VpZ2h0OiAnYm9sZCcgfX0gYWxpZ249XCJjZW50ZXJcIj7mk43kvZw8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgPC9UYWJsZUhlYWQ+XG4gICAgICAgICAgPFRhYmxlQm9keT5cbiAgICAgICAgICAgIHtwcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IChcbiAgICAgICAgICAgICAgPFRhYmxlUm93XG4gICAgICAgICAgICAgICAga2V5PXtwcm9kdWN0LmlkfVxuICAgICAgICAgICAgICAgIHN4PXt7IFxuICAgICAgICAgICAgICAgICAgJyY6aG92ZXInOiB7IGJhY2tncm91bmRDb2xvcjogJyNmOGY4ZjgnIH0sXG4gICAgICAgICAgICAgICAgICAnJjpsYXN0LWNoaWxkIHRkLCAmOmxhc3QtY2hpbGQgdGgnOiB7IGJvcmRlcjogMCB9XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e2dlbmVyYXRlcHJvZHVjdC5wcm9kdWN0bmFtZX08L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsPntwcm9kdWN0LnByb2R1Y3Rub308L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgIMKle2dlbmVyYXRlcHJvZHVjdC5wcmljZS50b0xvY2FsZVN0cmluZygpfVxuICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNvbnNvbGUubG9nKCdjbGlja2VkJywgcHJvZHVjdC5pZCl9XG4gICAgICAgICAgICAgICAgICAgIHN4PXt7IG1pbldpZHRoOiAnMTIwcHgnIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIOani+aIkOS9nOaIkFxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1RhYmxlQm9keT5cbiAgICAgICAgPC9UYWJsZT5cbiAgICAgIDwvVGFibGVDb250YWluZXI+XG5cbiAgICAgIHtwcm9kdWN0cy5sZW5ndGggPT09IDAgJiYgKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicsIHBhZGRpbmc6ICcyMHB4JyB9fT5cbiAgICAgICAgICDmpJzntKLntZDmnpzjgYzjgYLjgorjgb7jgZvjgpNcbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsInN0eWxlcyIsIktleXdvcmRTZWFyY2giLCJCdXR0b24iLCJUYWJsZSIsIlRhYmxlQm9keSIsIlRhYmxlQ2VsbCIsIlRhYmxlQ29udGFpbmVyIiwiVGFibGVIZWFkIiwiVGFibGVSb3ciLCJQYXBlciIsIlByb2R1Y3RMaXN0Iiwicm91dGVyIiwicHJvZHVjdHMiLCJzZXRQcm9kdWN0cyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsImtleXdvcmQiLCJtb2RlbE51bWJlciIsInF1ZXJ5IiwiZmV0Y2hQcm9kdWN0cyIsInBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsImFwcGVuZCIsIlN0cmluZyIsInJlc3BvbnNlIiwiZmV0Y2giLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX0JBU0VfVVJMIiwidG9TdHJpbmciLCJvayIsIkVycm9yIiwic3RhdHVzIiwiZGF0YSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwicHJvZHVjdEFycmF5IiwiQXJyYXkiLCJpc0FycmF5IiwiaXNSZWFkeSIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwicCIsImJyIiwiY29tcG9uZW50Iiwic3giLCJtdCIsIm1pbldpZHRoIiwiYXJpYS1sYWJlbCIsImJhY2tncm91bmRDb2xvciIsImZvbnRXZWlnaHQiLCJhbGlnbiIsIm1hcCIsInByb2R1Y3QiLCJib3JkZXIiLCJnZW5lcmF0ZXByb2R1Y3QiLCJwcm9kdWN0bmFtZSIsInByb2R1Y3RubyIsInByaWNlIiwidG9Mb2NhbGVTdHJpbmciLCJ2YXJpYW50IiwiY29sb3IiLCJzaXplIiwib25DbGljayIsImlkIiwibGVuZ3RoIiwic3R5bGUiLCJ0ZXh0QWxpZ24iLCJwYWRkaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/products/index.tsx\n"));

/***/ })

});