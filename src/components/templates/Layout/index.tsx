// components/templates/Layout/index.tsx
import { ReactNode } from 'react';
import { Sidebar } from '../../molecules/SearchBar';
import styles from './Layout.module.scss';

type LayoutProps = {
    children: ReactNode;
  };

  const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>{children}</main>
      <Sidebar className={styles.sidebar} />
    </div>
  );
};