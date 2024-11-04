// components/organisms/Header/index.tsx
import styles from './Header.module.scss';
import { Navigation } from '../../../components/molecules/Navigation';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <h2 className={styles.header__subtitle}>
        ソフトウェア販売支援ポータル
        </h2>
        <h1 className={styles.header__title}>
          SoftNavi
        </h1>
      </div>
    </header>
  );
};


