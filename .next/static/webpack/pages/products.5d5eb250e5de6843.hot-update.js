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

/***/ "./src/hooks/useProducts.ts":
/*!**********************************!*\
  !*** ./src/hooks/useProducts.ts ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useProducts: function() { return /* binding */ useProducts; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n// hooks/useProducts\n\n\nconst useProducts = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const [generateproducts, setGenerateProducts] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n    const { keyword, modelNumber, modelName } = router.query;\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const fetchProducts = async ()=>{\n            setLoading(true);\n            setError(null);\n            try {\n                const params = new URLSearchParams();\n                if (keyword) params.append(\"keyword\", String(keyword));\n                if (modelNumber) params.append(\"modelNumber\", String(modelNumber));\n                if (modelName) params.append(\"modelName\", String(modelName));\n                // Express APIのエンドポイントを呼び出し\n                const response = await fetch(\"\".concat(\"http://localhost:3001/api\", \"/products?\").concat(params.toString()));\n                if (!response.ok) {\n                    throw new Error(\"API error: \".concat(response.status));\n                }\n                const data = await response.json();\n                console.log(\"Received data:\", data);\n                console.log(\"data.length:\", data.length);\n                setProducts(data);\n                const productArray = Array.isArray(data) ? data : data.products || [];\n                setGenerateProducts(productArray);\n            } catch (error) {\n                console.error(\"製品の取得に失敗しました:\", error);\n                setError(\"製品の取得に失敗しました\");\n            } finally{\n                setLoading(false);\n            }\n        };\n        if (router.isReady) {\n            fetchProducts();\n        }\n    }, [\n        router.isReady,\n        keyword,\n        modelNumber,\n        modelName\n    ]);\n    return {\n        data: generateproducts,\n        loading,\n        error\n    };\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlUHJvZHVjdHMudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDd0I7QUFDSjtBQVNqQyxNQUFNRyxjQUFjO0lBQ3pCLE1BQU1DLFNBQVNGLHNEQUFTQTtJQUN4QixNQUFNLENBQUNHLGtCQUFrQkMsb0JBQW9CLEdBQUdMLCtDQUFRQSxDQUFvQixFQUFFO0lBQzlFLE1BQU0sQ0FBQ00sU0FBU0MsV0FBVyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNRLE9BQU9DLFNBQVMsR0FBR1QsK0NBQVFBLENBQWdCO0lBQ2xELE1BQU0sRUFBRVUsT0FBTyxFQUFFQyxXQUFXLEVBQUNDLFNBQVMsRUFBRSxHQUFHVCxPQUFPVSxLQUFLO0lBRXZEZCxnREFBU0EsQ0FBQztRQUNSLE1BQU1lLGdCQUFnQjtZQUNwQlAsV0FBVztZQUNYRSxTQUFTO1lBRVQsSUFBSTtnQkFDRixNQUFNTSxTQUFTLElBQUlDO2dCQUNuQixJQUFJTixTQUFTSyxPQUFPRSxNQUFNLENBQUMsV0FBV0MsT0FBT1I7Z0JBQzdDLElBQUlDLGFBQWFJLE9BQU9FLE1BQU0sQ0FBQyxlQUFlQyxPQUFPUDtnQkFDckQsSUFBSUMsV0FBV0csT0FBT0UsTUFBTSxDQUFDLGFBQWFDLE9BQU9OO2dCQUVqRCwyQkFBMkI7Z0JBQzNCLE1BQU1PLFdBQVcsTUFBTUMsTUFBTSxHQUFvREwsT0FBakRNLDJCQUFvQyxFQUFDLGNBQThCLE9BQWxCTixPQUFPUyxRQUFRO2dCQUVoRyxJQUFJLENBQUNMLFNBQVNNLEVBQUUsRUFBRTtvQkFDaEIsTUFBTSxJQUFJQyxNQUFNLGNBQThCLE9BQWhCUCxTQUFTUSxNQUFNO2dCQUMvQztnQkFFQSxNQUFNQyxPQUFPLE1BQU1ULFNBQVNVLElBQUk7Z0JBQ2hDQyxRQUFRQyxHQUFHLENBQUMsa0JBQWtCSDtnQkFDOUJFLFFBQVFDLEdBQUcsQ0FBQyxnQkFBZUgsS0FBS0ksTUFBTTtnQkFDdENDLFlBQVlMO2dCQUdaLE1BQU1NLGVBQWVDLE1BQU1DLE9BQU8sQ0FBQ1IsUUFBUUEsT0FBT0EsS0FBS1MsUUFBUSxJQUFJLEVBQUU7Z0JBQ3JFaEMsb0JBQW9CNkI7WUFDdEIsRUFBRSxPQUFPMUIsT0FBTztnQkFDZHNCLFFBQVF0QixLQUFLLENBQUMsaUJBQWlCQTtnQkFDL0JDLFNBQVM7WUFDWCxTQUFVO2dCQUNSRixXQUFXO1lBQ2I7UUFDRjtRQUVBLElBQUlKLE9BQU9tQyxPQUFPLEVBQUU7WUFDbEJ4QjtRQUNGO0lBQ0YsR0FBRztRQUFDWCxPQUFPbUMsT0FBTztRQUFFNUI7UUFBU0M7UUFBYUM7S0FBVztJQUVyRCxPQUFPO1FBQ0xnQixNQUFNeEI7UUFDTkU7UUFDQUU7SUFDRjtBQUVGLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZVByb2R1Y3RzLnRzPzVhNGUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaG9va3MvdXNlUHJvZHVjdHNcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmludGVyZmFjZSBHZW5lcmF0ZVByb2R1Y3Qge1xuICBpZDogc3RyaW5nO1xuICBwcm9kdWN0bm86IHN0cmluZztcbiAgcHJvZHVjdG5hbWU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IHVzZVByb2R1Y3RzID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW2dlbmVyYXRlcHJvZHVjdHMsIHNldEdlbmVyYXRlUHJvZHVjdHNdID0gdXNlU3RhdGU8R2VuZXJhdGVQcm9kdWN0W10+KFtdKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuICBjb25zdCB7IGtleXdvcmQsIG1vZGVsTnVtYmVyLG1vZGVsTmFtZSB9ID0gcm91dGVyLnF1ZXJ5O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hQcm9kdWN0cyA9IGFzeW5jICgpID0+IHtcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICBzZXRFcnJvcihudWxsKTtcbiAgICAgIFxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xuICAgICAgICBpZiAoa2V5d29yZCkgcGFyYW1zLmFwcGVuZCgna2V5d29yZCcsIFN0cmluZyhrZXl3b3JkKSk7XG4gICAgICAgIGlmIChtb2RlbE51bWJlcikgcGFyYW1zLmFwcGVuZCgnbW9kZWxOdW1iZXInLCBTdHJpbmcobW9kZWxOdW1iZXIpKTtcbiAgICAgICAgaWYgKG1vZGVsTmFtZSkgcGFyYW1zLmFwcGVuZCgnbW9kZWxOYW1lJywgU3RyaW5nKG1vZGVsTmFtZSkpO1xuXG4gICAgICAgIC8vIEV4cHJlc3MgQVBJ44Gu44Ko44Oz44OJ44Od44Kk44Oz44OI44KS5ZG844Gz5Ye644GXXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX0JBU0VfVVJMfS9wcm9kdWN0cz8ke3BhcmFtcy50b1N0cmluZygpfWApO1xuICAgICAgICBcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQVBJIGVycm9yOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdSZWNlaXZlZCBkYXRhOicsIGRhdGEpO1xuICAgICAgICBjb25zb2xlLmxvZygnZGF0YS5sZW5ndGg6JyxkYXRhLmxlbmd0aClcbiAgICAgICAgc2V0UHJvZHVjdHMoZGF0YSk7XG5cblxuICAgICAgICBjb25zdCBwcm9kdWN0QXJyYXkgPSBBcnJheS5pc0FycmF5KGRhdGEpID8gZGF0YSA6IGRhdGEucHJvZHVjdHMgfHwgW107XG4gICAgICAgIHNldEdlbmVyYXRlUHJvZHVjdHMocHJvZHVjdEFycmF5KTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ+ijveWTgeOBruWPluW+l+OBq+WkseaVl+OBl+OBvuOBl+OBnzonLCBlcnJvcik7XG4gICAgICAgIHNldEVycm9yKCfoo73lk4Hjga7lj5blvpfjgavlpLHmlZfjgZfjgb7jgZfjgZ8nKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAocm91dGVyLmlzUmVhZHkpIHtcbiAgICAgIGZldGNoUHJvZHVjdHMoKTtcbiAgICB9XG4gIH0sIFtyb3V0ZXIuaXNSZWFkeSwga2V5d29yZCwgbW9kZWxOdW1iZXIsIG1vZGVsTmFtZSBdKTtcblxuICByZXR1cm4ge1xuICAgIGRhdGE6IGdlbmVyYXRlcHJvZHVjdHMsXG4gICAgbG9hZGluZyxcbiAgICBlcnJvclxuICB9O1xuICBcbn0iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJ1c2VQcm9kdWN0cyIsInJvdXRlciIsImdlbmVyYXRlcHJvZHVjdHMiLCJzZXRHZW5lcmF0ZVByb2R1Y3RzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJlcnJvciIsInNldEVycm9yIiwia2V5d29yZCIsIm1vZGVsTnVtYmVyIiwibW9kZWxOYW1lIiwicXVlcnkiLCJmZXRjaFByb2R1Y3RzIiwicGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwiYXBwZW5kIiwiU3RyaW5nIiwicmVzcG9uc2UiLCJmZXRjaCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfQkFTRV9VUkwiLCJ0b1N0cmluZyIsIm9rIiwiRXJyb3IiLCJzdGF0dXMiLCJkYXRhIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJzZXRQcm9kdWN0cyIsInByb2R1Y3RBcnJheSIsIkFycmF5IiwiaXNBcnJheSIsInByb2R1Y3RzIiwiaXNSZWFkeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/hooks/useProducts.ts\n"));

/***/ })

});