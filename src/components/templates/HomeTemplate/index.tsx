// components/templates/HomeTemplate/index.tsx
import { Header } from '../../../components/organisms/Header';
import { Footer } from '../../../components/organisms/Footer';
//import { SearchSection } from '../../../components/organisms/SerchSection';
//import { ProductList } from '../../../components/organisms/ProductList';
import { Sidebar } from '../../molecules/SearchBar';
import { ProductSearch } from '../../organisms/ProductSearch';
import { ConfigurationSearch } from '../../molecules/SearchForm/ConfigurationSearch';
import { useSp } from '../../../hooks/useSp';
import styles from  './HomeTemplate.module.scss';



export const HomeTemplate = ({ products }: any) => {
  const isSp = useSp();
  return (
    <div className={styles.container}>
      {isSp ? (
    <div className={styles['home-template']}>
      <Header />
      <ConfigurationSearch />
      <main className={styles.container}>
        <div className={styles['main-content']}>
        
          <div className={styles['main-content__sidebar']}>
            <Sidebar />
          </div>
          <div className={styles['main-content__content']}>
            <ProductSearch />
            
          </div>
        </div>
      </main>
      <Footer />
    </div>
    ) : (
      <div className={styles['home-template']}>
      <Header />
      <ConfigurationSearch />
      <main className={styles.container}>
        <div className={styles['main-content']}>
        
          <div className={styles['main-content__sidebar']}>
            <Sidebar />
          </div>
          <div className={styles['main-content__content']}>
            <ProductSearch />
            
          </div>
        </div>
      </main>
      <Footer />
    </div>
     )}
    </div>
  );
};        