"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductList = void 0;
const ProductList = ({ products }) => {
    return (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))} */}
    </div>);
};
exports.ProductList = ProductList;
