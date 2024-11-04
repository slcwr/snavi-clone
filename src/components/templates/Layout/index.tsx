// components/layout/Layout.tsx
import { FC, ReactNode } from 'react';
import styles from './Layout.module.scss';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <header className={styles.layout__header}>
        <div className="container">
          <h1>ソフトウェア販売支援ポータル</h1>
          <div>SoftNAVI</div>
        </div>
      </header>
      
      <div className={styles.layout__container}>
        <aside className={styles.layout__sidebar}>
          <nav className={styles.layout__sidebar_menu}>
            <ul>
              <li>製品・キーワード検索</li>
              <li>カテゴリから</li>
              <li>型番一括検索</li>
            </ul>
          </nav>
          
          <div className={styles.layout__sidebar_filter}>
            <h3>表示対象選択</h3>
            <div>
              <p>OS:</p>
              <label>
                <input type="radio" name="os" value="none" />
                指定なし
              </label>
            </div>
            <div>
              <p>機種:</p>
              <label>
                <input type="radio" name="model" value="none" />
                指定なし
              </label>
            </div>
          </div>
        </aside>

        <main className={styles.layout__main}>
          {children}
        </main>
      </div>
    </div>
  );
};