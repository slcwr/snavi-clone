// components/templates/HomeTemplate/index.tsx
import { Header } from '../../../components/organisms/Header';
import { Footer } from '../../../components/organisms/Footer';
//import { SearchSection } from '../../../components/organisms/SerchSection';
import { ProductList } from '../../../components/organisms/ProductList';
import { Sidebar } from '../../molecules/SearchBar';
import { ProductSearch } from '../../organisms/ProductSearch';

// components/templates/HomeTemplate/index.tsx
import styles from  './HomeTemplate.module.scss';


export const HomeTemplate = ({ products }: any) => {
  return (
    <div className={styles['home-template']}>
      <Header />
      <main className={styles.container}>
        <div className={styles['main-content']}>
          <div className={styles['main-content__sidebar']}>
            <Sidebar />
          </div>
          <div className={styles['main-content__content']}>
            <ProductSearch />
            <ProductList products={products} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};        