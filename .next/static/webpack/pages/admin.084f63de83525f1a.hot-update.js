"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/admin",{

/***/ "./src/hooks/useDeleteProducts.ts":
/*!****************************************!*\
  !*** ./src/hooks/useDeleteProducts.ts ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useDeleteProduct: function() { return /* binding */ useDeleteProduct; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n// hooks/useDeleteProduct.ts\n\nconst useDeleteProduct = (setProducts)=>{\n    const [deleteDialogOpen, setDeleteDialogOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n    const [productToDelete, setProductToDelete] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n    const handleDelete = (productId)=>{\n        setProductToDelete(productId);\n        setDeleteDialogOpen(true);\n    };\n    const executeDelete = async ()=>{\n        if (!productToDelete) return;\n        try {\n            const response = await fetch(\"\".concat(\"http://localhost:3001/api\", \"/products?\").concat(productToDelete.toString()));\n            if (!response.ok) {\n                throw new Error(\"削除に失敗しました\");\n            }\n            // UI上のデータを更新\n            setProducts((prevProducts)=>prevProducts.filter((product)=>product.id !== productToDelete));\n            alert(\"製品が正常に削除されました\");\n        } catch (error) {\n            console.error(\"削除エラー:\", error);\n            alert(\"削除中にエラーが発生しました\");\n        } finally{\n            setDeleteDialogOpen(false);\n            setProductToDelete(null);\n        }\n    };\n    const handleCloseDialog = ()=>{\n        setDeleteDialogOpen(false);\n        setProductToDelete(null);\n    };\n    return {\n        deleteDialogOpen,\n        productToDelete,\n        handleDelete,\n        executeDelete,\n        handleCloseDialog\n    };\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlRGVsZXRlUHJvZHVjdHMudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsNEJBQTRCO0FBQ0s7QUFVMUIsTUFBTUMsbUJBQW1CLENBQzlCQztJQUVBLE1BQU0sQ0FBQ0Msa0JBQWtCQyxvQkFBb0IsR0FBR0osK0NBQVFBLENBQUM7SUFDekQsTUFBTSxDQUFDSyxpQkFBaUJDLG1CQUFtQixHQUFHTiwrQ0FBUUEsQ0FBZ0I7SUFFdEUsTUFBTU8sZUFBZSxDQUFDQztRQUNwQkYsbUJBQW1CRTtRQUNuQkosb0JBQW9CO0lBQ3RCO0lBRUEsTUFBTUssZ0JBQWdCO1FBQ3BCLElBQUksQ0FBQ0osaUJBQWlCO1FBRXRCLElBQUk7WUFDRixNQUFNSyxXQUFXLE1BQU1DLE1BQ3BCLEdBQW9ETixPQUFqRE8sMkJBQW9DLEVBQUMsY0FBdUMsT0FBM0JQLGdCQUFnQlUsUUFBUTtZQUkvRSxJQUFJLENBQUNMLFNBQVNNLEVBQUUsRUFBRTtnQkFDaEIsTUFBTSxJQUFJQyxNQUFNO1lBQ2xCO1lBRUEsYUFBYTtZQUNiZixZQUFZZ0IsQ0FBQUEsZUFDVkEsYUFBYUMsTUFBTSxDQUFDQyxDQUFBQSxVQUFXQSxRQUFRQyxFQUFFLEtBQUtoQjtZQUdoRGlCLE1BQU07UUFDUixFQUFFLE9BQU9DLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDLFVBQVVBO1lBQ3hCRCxNQUFNO1FBQ1IsU0FBVTtZQUNSbEIsb0JBQW9CO1lBQ3BCRSxtQkFBbUI7UUFDckI7SUFDRjtJQUVBLE1BQU1tQixvQkFBb0I7UUFDeEJyQixvQkFBb0I7UUFDcEJFLG1CQUFtQjtJQUNyQjtJQUVBLE9BQU87UUFDTEg7UUFDQUU7UUFDQUU7UUFDQUU7UUFDQWdCO0lBQ0Y7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9ob29rcy91c2VEZWxldGVQcm9kdWN0cy50cz8zYjU0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGhvb2tzL3VzZURlbGV0ZVByb2R1Y3QudHNcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbnRlcmZhY2UgVXNlRGVsZXRlUHJvZHVjdCB7XG4gIGRlbGV0ZURpYWxvZ09wZW46IGJvb2xlYW47XG4gIHByb2R1Y3RUb0RlbGV0ZTogc3RyaW5nIHwgbnVsbDtcbiAgaGFuZGxlRGVsZXRlOiAocHJvZHVjdElkOiBzdHJpbmcpID0+IHZvaWQ7XG4gIGV4ZWN1dGVEZWxldGU6ICgpID0+IFByb21pc2U8dm9pZD47XG4gIGhhbmRsZUNsb3NlRGlhbG9nOiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgdXNlRGVsZXRlUHJvZHVjdCA9IChcbiAgc2V0UHJvZHVjdHM6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPGFueVtdPj5cbik6IFVzZURlbGV0ZVByb2R1Y3QgPT4ge1xuICBjb25zdCBbZGVsZXRlRGlhbG9nT3Blbiwgc2V0RGVsZXRlRGlhbG9nT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtwcm9kdWN0VG9EZWxldGUsIHNldFByb2R1Y3RUb0RlbGV0ZV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcblxuICBjb25zdCBoYW5kbGVEZWxldGUgPSAocHJvZHVjdElkOiBzdHJpbmcpID0+IHtcbiAgICBzZXRQcm9kdWN0VG9EZWxldGUocHJvZHVjdElkKTtcbiAgICBzZXREZWxldGVEaWFsb2dPcGVuKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGV4ZWN1dGVEZWxldGUgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKCFwcm9kdWN0VG9EZWxldGUpIHJldHVybjtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX0JBU0VfVVJMfS9wcm9kdWN0cz8ke3Byb2R1Y3RUb0RlbGV0ZS50b1N0cmluZygpfWAsXG4gICAgICAgIFxuICAgICAgKTtcblxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ+WJiumZpOOBq+WkseaVl+OBl+OBvuOBl+OBnycpO1xuICAgICAgfVxuXG4gICAgICAvLyBVSeS4iuOBruODh+ODvOOCv+OCkuabtOaWsFxuICAgICAgc2V0UHJvZHVjdHMocHJldlByb2R1Y3RzID0+IFxuICAgICAgICBwcmV2UHJvZHVjdHMuZmlsdGVyKHByb2R1Y3QgPT4gcHJvZHVjdC5pZCAhPT0gcHJvZHVjdFRvRGVsZXRlKVxuICAgICAgKTtcbiAgICAgIFxuICAgICAgYWxlcnQoJ+ijveWTgeOBjOato+W4uOOBq+WJiumZpOOBleOCjOOBvuOBl+OBnycpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCfliYrpmaTjgqjjg6njg7w6JywgZXJyb3IpO1xuICAgICAgYWxlcnQoJ+WJiumZpOS4reOBq+OCqOODqeODvOOBjOeZuueUn+OBl+OBvuOBl+OBnycpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXREZWxldGVEaWFsb2dPcGVuKGZhbHNlKTtcbiAgICAgIHNldFByb2R1Y3RUb0RlbGV0ZShudWxsKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2xvc2VEaWFsb2cgPSAoKSA9PiB7XG4gICAgc2V0RGVsZXRlRGlhbG9nT3BlbihmYWxzZSk7XG4gICAgc2V0UHJvZHVjdFRvRGVsZXRlKG51bGwpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZGVsZXRlRGlhbG9nT3BlbixcbiAgICBwcm9kdWN0VG9EZWxldGUsXG4gICAgaGFuZGxlRGVsZXRlLFxuICAgIGV4ZWN1dGVEZWxldGUsXG4gICAgaGFuZGxlQ2xvc2VEaWFsb2csXG4gIH07XG59OyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZURlbGV0ZVByb2R1Y3QiLCJzZXRQcm9kdWN0cyIsImRlbGV0ZURpYWxvZ09wZW4iLCJzZXREZWxldGVEaWFsb2dPcGVuIiwicHJvZHVjdFRvRGVsZXRlIiwic2V0UHJvZHVjdFRvRGVsZXRlIiwiaGFuZGxlRGVsZXRlIiwicHJvZHVjdElkIiwiZXhlY3V0ZURlbGV0ZSIsInJlc3BvbnNlIiwiZmV0Y2giLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX0JBU0VfVVJMIiwidG9TdHJpbmciLCJvayIsIkVycm9yIiwicHJldlByb2R1Y3RzIiwiZmlsdGVyIiwicHJvZHVjdCIsImlkIiwiYWxlcnQiLCJlcnJvciIsImNvbnNvbGUiLCJoYW5kbGVDbG9zZURpYWxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/hooks/useDeleteProducts.ts\n"));

/***/ })

});