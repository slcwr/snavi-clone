"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductProvider = ProductProvider;
// contexts/ProductContext.tsx
const react_1 = require("react");
const ProductContext = (0, react_1.createContext)({});
function ProductProvider({ children }) {
    const [products, setProducts] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        // データ取得ロジック
        setProducts([]);
    }, []);
    return (<ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>);
}
