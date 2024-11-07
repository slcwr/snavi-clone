// components/organisms/ProductList/index.tsx
import { ProductCard } from '../../../components/molecules/ProductCard';
const { Product } = require('../../../db/entities/Product');

interface ProductListProps {
    products: Product[];  // エンティティの配列として型定義
  }

export const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))} */}
    </div>
  );
};