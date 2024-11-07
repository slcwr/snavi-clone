"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../styles/globals.scss");
function MyApp({ Component, pageProps }) {
    return (<div className="app-wrapper">
      <Component {...pageProps}/>
    </div>);
}
exports.default = MyApp;
