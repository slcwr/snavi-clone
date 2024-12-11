// pages/products/index.tsx
import dynamic from 'next/dynamic';

const ProductListWithSuspense = dynamic(
  () => import('../../components/organisms/ProductList/'),
  {
    ssr: false,
    loading: () => <div>Loading...</div>
  }
);

const ProductPage = () => {
  return <ProductListWithSuspense />;
};

export default ProductPage;