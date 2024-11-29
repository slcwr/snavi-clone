// components/organisms/ProductSearch/index.tsx
import styles from './ProductSearch.module.scss'
import { SectionTitle } from '../../atoms/SectionTitle/SectionTitle';
import { SearchTypeList } from '../../molecules/SearchOptions/SearchTypeList';
import { KeywordSearch } from '../../molecules/SearchForm/KeywordSearch';


export const ProductSearch = () => (
  
  <div className={styles['product-search']}>
    <SectionTitle>製品情報・見積り</SectionTitle>
    <div className={styles['product-search__description']}>
      ソフトウェア製品の概算見積りや、おすすめ製品の情報へナビゲートします。
    </div>
    <div className={styles['product-search-section']}>
      <h3>ソフトウェア製品を探す</h3>
      <SearchTypeList />
    </div>
    <div className={styles['product-search-section']}>
      <h3>ソフトウェア製品検索</h3>
      <p>製品のキーワード（製品名や主な機能など）から該当する製品を検索できます。(例)型番:A-01 (入力なしの場合は全件検索します)</p><br/>
      <KeywordSearch />
    </div>
  </div>
  
);