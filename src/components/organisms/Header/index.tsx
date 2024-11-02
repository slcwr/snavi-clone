// components/organisms/Header/index.tsx
import styles from './Header.module.scss';
import { Navigation } from '../../../components/molecules/Navigation';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        {/* <Logo /> */}
      <h1>SoftNavi</h1>
      </div>
    </header>
  );
};



