// components/molecules/SearchForm/ConfigurationSearch.tsx
import styles from './ConfigurationSearch.module.scss';
import { useAppSelector, useAppDispatch } from '@/stores';
import { CartSearchbutton } from '../../atoms/Button/CartSearchButton';
import { useState } from 'react';
import { Loginbutton } from '../../atoms/Button/LoginButton';
import { Logoutbutton } from '../../atoms/Button/LogoutButton';
import { BreadcrumbsComponent } from '../../molecules/Breadcrumbs';

export const ConfigurationSearch = () => {
  const [InputCartId, setInputCartId] = useState('');

  return (
    <div className={styles.configSearch__header}>
      <div className={styles.configSearch__element}>
        <BreadcrumbsComponent />
      
      <div className={styles.configSearch__input}>
        <Loginbutton />
        <Logoutbutton />
      </div>
      </div>

      <div className={styles.configSearch__actions}>
        <div className={styles['button-group']}>
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
