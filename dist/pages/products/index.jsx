"use strict";
// pages/products/index.tsx
'use client';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ProductList;
const react_1 = require("react");
const router_1 = require("next/router");
const ProductList_module_scss_1 = __importDefault(require("../../styles/pages/products/ProductList.module.scss"));
function ProductList() {
    const router = (0, router_1.useRouter)();
    const [products, setProducts] = (0, react_1.useState)([]);
    const { keyword, modelNumber } = router.query;
    (0, react_1.useEffect)(() => {
        const fetchProducts = async () => {
            try {
                // 検索パラメータを含めたAPI呼び出し
                const response = await fetch(`/api/products?keyword=${keyword || ''}&modelNumber=${modelNumber || ''}`);
                const data = await response.json();
                setProducts(data);
            }
            catch (error) {
                console.error('製品の取得に失敗しました:', error);
            }
        };
        if (router.isReady) {
            fetchProducts();
        }
    }, [router.isReady, keyword, modelNumber]);
    return (<div className={ProductList_module_scss_1.default['product-list']}>
      <h2>検索結果</h2>
      <div className={ProductList_module_scss_1.default['product-list__product-grid']}>
        {products.map((product) => (<div key={product.id} className={ProductList_module_scss_1.default['product-card']}>
            <h3>{product.productname}</h3>
            <p>製品番号: {product.productno}</p>
            <p>価格: ¥{product.price.toLocaleString()}</p>
          </div>))}
      </div>
    </div>);
}
