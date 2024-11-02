// components/templates/HomeTemplate/index.tsx
import { Header } from '../../../components/organisms/Header';
import { SearchSection } from '../../../components/organisms/SerchSection';
import { ProductList } from '../../../components/organisms/ProductList';
//import styles from '../../../styles/global.scss';

export const HomeTemplate = ({ products }: any) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <SearchSection />
        <ProductList products={products} />
      </main>
    </div>
  );
};