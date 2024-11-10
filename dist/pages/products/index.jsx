"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ProductList;
// pages/products/index.tsx
const react_1 = require("react");
const router_1 = require("next/router");
const ProductList_module_scss_1 = __importDefault(require("../../styles/pages/products/ProductList.module.scss"));
function ProductList() {
    const router = (0, router_1.useRouter)();
    const [products, setProducts] = (0, react_1.useState)([]);
    const [loading, setLoading] = (0, react_1.useState)(false);
    const [error, setError] = (0, react_1.useState)(null);
    const { keyword, modelNumber } = router.query;
    (0, react_1.useEffect)(() => {
        const fetchProducts = async () => {
            setLoading(true);
            setError(null);
            try {
                const params = new URLSearchParams();
                if (keyword)
                    params.append('keyword', String(keyword));
                if (modelNumber)
                    params.append('modelNumber', String(modelNumber));
                // Express APIのエンドポイントを呼び出し
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/products?${params.toString()}`);
                if (!response.ok) {
                    throw new Error(`API error: ${response.status}`);
                }
                const data = await response.json();
                console.log('Received data:', data);
                const productArray = Array.isArray(data) ? data : data.products || [];
                setProducts(productArray);
            }
            catch (error) {
                console.error('製品の取得に失敗しました:', error);
                setError('製品の取得に失敗しました');
            }
            finally {
                setLoading(false);
            }
        };
        if (router.isReady) {
            fetchProducts();
        }
    }, [router.isReady, keyword, modelNumber]);
    if (loading)
        return <div>読み込み中...</div>;
    if (error)
        return <div>エラー: {error}</div>;
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
