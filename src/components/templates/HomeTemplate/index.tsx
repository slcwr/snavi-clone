// components/templates/HomeTemplate/index.tsx
import { Header } from '../../../components/organisms/Header';
import { Footer } from '../../../components/organisms/Footer';
//import { SearchSection } from '../../../components/organisms/SerchSection';
import { ProductList } from '../../../components/organisms/ProductList';
import { Sidebar } from '../../../components/molecules/SerchBar';

export const HomeTemplate = ({ products }: any) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Sidebar />
        <ProductList products={products} />
      </main>
      <Footer />
    </div>
  );
};