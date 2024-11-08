// components/organisms/Sidebar/index.tsx
import { FC, useState } from 'react';
import { ModalContent } from './ModalContent'
import styles from './Sidebar.module.scss';

export const Sidebar: FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [filteredOS, setFilteredOS] = useState<string[]>([]);
    const [filteredModels, setFilteredModels] = useState<string[]>([]);

    const handleOpenModal = (e: React.MouseEvent) => {
      e.preventDefault();
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };


    const handleFilter = (selectedOS: string[], selectedModels: string[]) => {
      console.log('Selected OS:', selectedOS);
      setFilteredOS(selectedOS);
      //setFilteredModels(selectedModels);
    }

  return (
    <aside className={styles.sidebar}>
      {/* 製品情報・見積り */}
      <nav className={styles.sidebar__nav}>
      <li className={styles.sidebar__menuItem}>
            <a href="#" className={styles.sidebar__linkhead}>製品情報・見積り</a>
     </li>
        <ul className={styles.sidebar__menu}>
          <li className={styles.sidebar__menuItem}>
            <a href="#" className={styles.sidebar__link}>製品・キーワード検索</a>
          </li>
          <li className={styles.sidebar__menuItem}>
            <a href="#" className={styles.sidebar__link}>カテゴリから</a>
          </li>
          <li className={styles.sidebar__menuItem}>
            <a href="#" className={styles.sidebar__link}>型番一括検索</a>
          </li>
        </ul>
      </nav>

      {/* 表示対象選択 */}
      <nav className={styles.sidebar__nav2}>
      
        <li className={styles.sidebar__menuItem}>
            <a href="#" className={styles.sidebar__linkhead2}>表示対象選択</a>
        </li>
         <p className={styles.sidebar__filterLabel}>「頭文字索引」には無効です。</p>
         <a href="#" className={styles.sidebar__link2} onClick={handleOpenModal}>OS・機種で絞り込む</a>
        
        <div className={styles.sidebar__filterGroup}>
          <p className={styles.sidebar__filterLabel}>OS: {filteredOS.join(', ')}</p>
          <div className={styles.sidebar__filterOption}>
            <input 
              type="radio" 
              id="model-none" 
              name="model" 
              className={styles.sidebar__radio}
            />
            <label htmlFor="model-none">指定なし</label>
          </div>
        </div>

        <ModalContent 
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onFilter={handleFilter}
        />

        <div className={styles.sidebar__filterGroup}>
          <label className={styles.sidebar__checkbox}>
            <input type="checkbox" />
            <span>旧製品を含む</span>
          </label>
        </div>
        </nav>
    </aside>
    
  );
};