// components/molecules/SearchForm/ConfigurationSearch.tsx
import styles from './ConfigurationSearch.module.scss';
import { useAppSelector, useAppDispatch } from '@/stores';
import { CartSearchbutton } from '../../atoms/Button/CartSearchButton';
import { useState } from 'react';


export const ConfigurationSearch = () => {
  const [InputCartId, setInputCartId] = useState('');
  return (
    <div className={styles.configSearch}>
      <div className={styles.configSearch__header}>
        <div className={styles.configSearch__actions}>
         
          <button className={styles.configSearch__button}>
            構成リストとは
          </button>
          <button className={styles.configSearch__button}>利用ガイド</button>
        </div>
        <div className={styles.configSearch__input}>
          <label>構成リストID</label>
          <input
            type="text"
            value={InputCartId}
            onChange={(e) => setInputCartId(e.target.value)}
          />
          <CartSearchbutton />
        </div>
      </div>
    </div>
  );
};
