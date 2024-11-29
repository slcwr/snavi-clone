// components/molecules/SearchForm/ConfigurationSearch.tsx
import styles from './ConfigurationSearch.module.scss';

export const ConfigurationSearch = () => {
  return (
    <div className={styles.configSearch}>
      <div className={styles.configSearch__header}>
        <div className={styles.configSearch__actions}>
          <button className={styles.configSearch__button}>構成リストを見る</button>
          <button className={styles.configSearch__button}>構成リストを保存</button>
          <button className={styles.configSearch__button}>購入リストとは</button>
          <button className={styles.configSearch__button}>利用ガイド</button>
        </div>
        <div className={styles.configSearch__input}>
          <label>構成リストID</label>
          <input type="text" />
          <button className={styles.configSearch__submit}>検索</button>
        </div>
      </div>
    </div>
  );
};