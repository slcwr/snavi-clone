/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[14].oneOf[10].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[14].oneOf[10].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[14].oneOf[10].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[14].oneOf[10].use[4]!./src/components/templates/HomeTemplate/HomeTemplate.module.scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[14].oneOf[10].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[14].oneOf[10].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[14].oneOf[10].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[14].oneOf[10].use[4]!./src/components/templates/HomeTemplate/HomeTemplate.module.scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".HomeTemplate_main-content__QFQOC {\\n  display: flex;\\n  gap: 24px;\\n}\\n.HomeTemplate_main-content__sidebar__VKu4N {\\n  width: 240px;\\n  min-width: 240px;\\n}\\n@media screen and (max-width: 768px) {\\n  .HomeTemplate_main-content__sidebar__VKu4N {\\n    width: 100vw;\\n    min-width: 100vw;\\n    margin-left: calc(0vw + 50%);\\n    margin-right: calc(-50vw + 50%);\\n    order: 2;\\n    padding: 20px;\\n  }\\n}\\n.HomeTemplate_main-content__content__4fr1u {\\n  width: 85%;\\n  padding-left: 0;\\n}\\n@media screen and (max-width: 768px) {\\n  .HomeTemplate_main-content__content__4fr1u {\\n    order: 1;\\n    padding: 0;\\n  }\\n}\\n@media screen and (max-width: 768px) {\\n  .HomeTemplate_main-content__QFQOC {\\n    flex-direction: column;\\n  }\\n}\\n.HomeTemplate_main-content__container__C7scT {\\n  width: 100%;\\n}\\n@media screen and (max-width: 768px) {\\n  .HomeTemplate_main-content__container__C7scT {\\n    padding: 0;\\n    max-width: none;\\n  }\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://src/components/templates/HomeTemplate/HomeTemplate.module.scss\",\"webpack://src/styles/_mixins.scss\"],\"names\":[],\"mappings\":\"AAEA;EACE,aAAA;EACA,SAAA;AADF;AAGE;EACE,YAAA;EACA,gBAAA;AADJ;ACOE;EDRA;IAKI,YAAA;IACA,gBAAA;IACA,4BAAA;IACA,+BAAA;IACA,QAAA;IACA,aAAA;EAAJ;AACF;AAGE;EACE,UAAA;EACA,eAAA;AADJ;ACPE;EDMA;IAII,QAAA;IACA,UAAA;EACJ;AACF;ACbE;EDZF;IA6BI,sBAAA;EAAF;AACF;AAEE;EACE,WAAA;AAAJ;ACrBE;EDoBA;IAGM,UAAA;IACA,eAAA;EAEN;AACF\",\"sourcesContent\":[\"@use '../../../styles/mixins' as *;\\n\\n.main-content {\\n  display: flex;\\n  gap: 24px;\\n\\n  &__sidebar {\\n    width: 240px;\\n    min-width: 240px;\\n\\n    @include tab {\\n      width: 100vw; // ビューポート幅いっぱいに\\n      min-width: 100vw;\\n      margin-left: calc(-0vw + 50%); // ネガティブマージンで全幅に\\n      margin-right: calc(-50vw + 50%);\\n      order: 2;\\n      padding: 20px; // 内側の余白\\n    }\\n  }\\n\\n  &__content {\\n    width: 85%;\\n    padding-left: 0;\\n    @include tab {\\n      order: 1;\\n      padding: 0; \\n    }\\n\\n  }\\n   \\n  @include tab {\\n    flex-direction: column;\\n  }\\n\\n  &__container {\\n    width: 100%; \\n      @include tab {\\n        padding: 0; // タブレット以下でpaddingを削除\\n        max-width: none; // 最大幅の制限を解除\\n      }\\n    \\n  \\n  }\\n}\",\"//src/styles/_mixins.scss\\n// ブレイクポイントを指定\\n\\n$pc: 1080px;\\n$tab: 768px;\\n$sp: 480px;\\n\\n@mixin pc {\\n  @media screen and (max-width: ($pc)) {\\n    @content;\\n  }\\n}\\n\\n@mixin tab {\\n  @media screen and (max-width: ($tab)) {\\n    @content;\\n  }\\n}\\n\\n@mixin sp {\\n  @media screen and (max-width: ($sp)) {\\n    @content;\\n  }\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"main-content\": \"HomeTemplate_main-content__QFQOC\",\n\t\"main-content__sidebar\": \"HomeTemplate_main-content__sidebar__VKu4N\",\n\t\"main-content__content\": \"HomeTemplate_main-content__content__4fr1u\",\n\t\"main-content__container\": \"HomeTemplate_main-content__container__C7scT\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxNF0ub25lT2ZbMTBdLnVzZVsxXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxNF0ub25lT2ZbMTBdLnVzZVsyXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxNF0ub25lT2ZbMTBdLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzE0XS5vbmVPZlsxMF0udXNlWzRdIS4vc3JjL2NvbXBvbmVudHMvdGVtcGxhdGVzL0hvbWVUZW1wbGF0ZS9Ib21lVGVtcGxhdGUubW9kdWxlLnNjc3MiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyw0S0FBd0Y7QUFDbEk7QUFDQTtBQUNBLDZFQUE2RSxrQkFBa0IsY0FBYyxHQUFHLDhDQUE4QyxpQkFBaUIscUJBQXFCLEdBQUcsd0NBQXdDLGdEQUFnRCxtQkFBbUIsdUJBQXVCLG1DQUFtQyxzQ0FBc0MsZUFBZSxvQkFBb0IsS0FBSyxHQUFHLDhDQUE4QyxlQUFlLG9CQUFvQixHQUFHLHdDQUF3QyxnREFBZ0QsZUFBZSxpQkFBaUIsS0FBSyxHQUFHLHdDQUF3Qyx1Q0FBdUMsNkJBQTZCLEtBQUssR0FBRyxnREFBZ0QsZ0JBQWdCLEdBQUcsd0NBQXdDLGtEQUFrRCxpQkFBaUIsc0JBQXNCLEtBQUssR0FBRyxPQUFPLG1LQUFtSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxLQUFLLEtBQUssWUFBWSxLQUFLLEtBQUssS0FBSyxVQUFVLEtBQUssTUFBTSxNQUFNLFVBQVUsVUFBVSxLQUFLLDREQUE0RCxtQkFBbUIsa0JBQWtCLGNBQWMsa0JBQWtCLG1CQUFtQix1QkFBdUIsc0JBQXNCLHNCQUFzQix3Q0FBd0MsdUNBQXVDLHdEQUF3RCxpQkFBaUIsdUJBQXVCLGVBQWUsS0FBSyxrQkFBa0IsaUJBQWlCLHNCQUFzQixvQkFBb0IsaUJBQWlCLG9CQUFvQixPQUFPLE9BQU8sdUJBQXVCLDZCQUE2QixLQUFLLG9CQUFvQixtQkFBbUIsc0JBQXNCLHNCQUFzQixnREFBZ0QscUJBQXFCLGVBQWUsR0FBRyw0REFBNEQsY0FBYyxhQUFhLGVBQWUsMENBQTBDLGVBQWUsS0FBSyxHQUFHLGdCQUFnQiwyQ0FBMkMsZUFBZSxLQUFLLEdBQUcsZUFBZSwwQ0FBMEMsZUFBZSxLQUFLLEdBQUcsbUJBQW1CO0FBQzkvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3RlbXBsYXRlcy9Ib21lVGVtcGxhdGUvSG9tZVRlbXBsYXRlLm1vZHVsZS5zY3NzP2E1ZmQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5Ib21lVGVtcGxhdGVfbWFpbi1jb250ZW50X19RRlFPQyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyNHB4O1xcbn1cXG4uSG9tZVRlbXBsYXRlX21haW4tY29udGVudF9fc2lkZWJhcl9fVkt1NE4ge1xcbiAgd2lkdGg6IDI0MHB4O1xcbiAgbWluLXdpZHRoOiAyNDBweDtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIC5Ib21lVGVtcGxhdGVfbWFpbi1jb250ZW50X19zaWRlYmFyX19WS3U0TiB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgbWluLXdpZHRoOiAxMDB2dztcXG4gICAgbWFyZ2luLWxlZnQ6IGNhbGMoMHZ3ICsgNTAlKTtcXG4gICAgbWFyZ2luLXJpZ2h0OiBjYWxjKC01MHZ3ICsgNTAlKTtcXG4gICAgb3JkZXI6IDI7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICB9XFxufVxcbi5Ib21lVGVtcGxhdGVfbWFpbi1jb250ZW50X19jb250ZW50X180ZnIxdSB7XFxuICB3aWR0aDogODUlO1xcbiAgcGFkZGluZy1sZWZ0OiAwO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgLkhvbWVUZW1wbGF0ZV9tYWluLWNvbnRlbnRfX2NvbnRlbnRfXzRmcjF1IHtcXG4gICAgb3JkZXI6IDE7XFxuICAgIHBhZGRpbmc6IDA7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAuSG9tZVRlbXBsYXRlX21haW4tY29udGVudF9fUUZRT0Mge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbn1cXG4uSG9tZVRlbXBsYXRlX21haW4tY29udGVudF9fY29udGFpbmVyX19DN3NjVCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIC5Ib21lVGVtcGxhdGVfbWFpbi1jb250ZW50X19jb250YWluZXJfX0M3c2NUIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWF4LXdpZHRoOiBub25lO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL2NvbXBvbmVudHMvdGVtcGxhdGVzL0hvbWVUZW1wbGF0ZS9Ib21lVGVtcGxhdGUubW9kdWxlLnNjc3NcIixcIndlYnBhY2s6Ly9zcmMvc3R5bGVzL19taXhpbnMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0FBREY7QUFHRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQURKO0FDT0U7RURSQTtJQUtJLFlBQUE7SUFDQSxnQkFBQTtJQUNBLDRCQUFBO0lBQ0EsK0JBQUE7SUFDQSxRQUFBO0lBQ0EsYUFBQTtFQUFKO0FBQ0Y7QUFHRTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FBREo7QUNQRTtFRE1BO0lBSUksUUFBQTtJQUNBLFVBQUE7RUFDSjtBQUNGO0FDYkU7RURaRjtJQTZCSSxzQkFBQTtFQUFGO0FBQ0Y7QUFFRTtFQUNFLFdBQUE7QUFBSjtBQ3JCRTtFRG9CQTtJQUdNLFVBQUE7SUFDQSxlQUFBO0VBRU47QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdXNlICcuLi8uLi8uLi9zdHlsZXMvbWl4aW5zJyBhcyAqO1xcblxcbi5tYWluLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMjRweDtcXG5cXG4gICZfX3NpZGViYXIge1xcbiAgICB3aWR0aDogMjQwcHg7XFxuICAgIG1pbi13aWR0aDogMjQwcHg7XFxuXFxuICAgIEBpbmNsdWRlIHRhYiB7XFxuICAgICAgd2lkdGg6IDEwMHZ3OyAvLyDjg5Pjg6Xjg7zjg53jg7zjg4jluYXjgYTjgaPjgbHjgYTjgatcXG4gICAgICBtaW4td2lkdGg6IDEwMHZ3O1xcbiAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKC0wdncgKyA1MCUpOyAvLyDjg43jgqzjg4bjgqPjg5bjg57jg7zjgrjjg7PjgaflhajluYXjgatcXG4gICAgICBtYXJnaW4tcmlnaHQ6IGNhbGMoLTUwdncgKyA1MCUpO1xcbiAgICAgIG9yZGVyOiAyO1xcbiAgICAgIHBhZGRpbmc6IDIwcHg7IC8vIOWGheWBtOOBruS9meeZvVxcbiAgICB9XFxuICB9XFxuXFxuICAmX19jb250ZW50IHtcXG4gICAgd2lkdGg6IDg1JTtcXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xcbiAgICBAaW5jbHVkZSB0YWIge1xcbiAgICAgIG9yZGVyOiAxO1xcbiAgICAgIHBhZGRpbmc6IDA7IFxcbiAgICB9XFxuXFxuICB9XFxuICAgXFxuICBAaW5jbHVkZSB0YWIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgJl9fY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7IFxcbiAgICAgIEBpbmNsdWRlIHRhYiB7XFxuICAgICAgICBwYWRkaW5nOiAwOyAvLyDjgr/jg5bjg6zjg4Pjg4jku6XkuIvjgadwYWRkaW5n44KS5YmK6ZmkXFxuICAgICAgICBtYXgtd2lkdGg6IG5vbmU7IC8vIOacgOWkp+W5heOBruWItumZkOOCkuino+mZpFxcbiAgICAgIH1cXG4gICAgXFxuICBcXG4gIH1cXG59XCIsXCIvL3NyYy9zdHlsZXMvX21peGlucy5zY3NzXFxuLy8g44OW44Os44Kk44Kv44Od44Kk44Oz44OI44KS5oyH5a6aXFxuXFxuJHBjOiAxMDgwcHg7XFxuJHRhYjogNzY4cHg7XFxuJHNwOiA0ODBweDtcXG5cXG5AbWl4aW4gcGMge1xcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogKCRwYykpIHtcXG4gICAgQGNvbnRlbnQ7XFxuICB9XFxufVxcblxcbkBtaXhpbiB0YWIge1xcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogKCR0YWIpKSB7XFxuICAgIEBjb250ZW50O1xcbiAgfVxcbn1cXG5cXG5AbWl4aW4gc3Age1xcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogKCRzcCkpIHtcXG4gICAgQGNvbnRlbnQ7XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcIm1haW4tY29udGVudFwiOiBcIkhvbWVUZW1wbGF0ZV9tYWluLWNvbnRlbnRfX1FGUU9DXCIsXG5cdFwibWFpbi1jb250ZW50X19zaWRlYmFyXCI6IFwiSG9tZVRlbXBsYXRlX21haW4tY29udGVudF9fc2lkZWJhcl9fVkt1NE5cIixcblx0XCJtYWluLWNvbnRlbnRfX2NvbnRlbnRcIjogXCJIb21lVGVtcGxhdGVfbWFpbi1jb250ZW50X19jb250ZW50X180ZnIxdVwiLFxuXHRcIm1haW4tY29udGVudF9fY29udGFpbmVyXCI6IFwiSG9tZVRlbXBsYXRlX21haW4tY29udGVudF9fY29udGFpbmVyX19DN3NjVFwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[14].oneOf[10].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[14].oneOf[10].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[14].oneOf[10].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[14].oneOf[10].use[4]!./src/components/templates/HomeTemplate/HomeTemplate.module.scss\n"));

/***/ })

});