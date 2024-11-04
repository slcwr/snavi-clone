// components/molecules/ModalContent/index.tsx
import { useState } from 'react';
import styles from './ModalContent.module.scss';

interface ModalContentProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalContent: React.FC<ModalContentProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.modal__content}>
        <h3>対象OSで絞り込む</h3>
        <div className={styles.modal__checkboxes}>
          <label>
            <input type="checkbox" name="os" value="windows" />
            Windows
          </label>
          <label>
            <input type="checkbox" name="os" value="linux" />
            Linux
          </label>
        </div>

        <h3>対象機種で絞り込む</h3>
        <div className={styles.modal__checkboxes}>
          {/* 機種のチェックボックス */}
        </div>

        <div className={styles.modal__buttons}>
          <button onClick={onClose}>キャンセル</button>
          <button onClick={() => {
            // 絞り込み処理
            onClose();
          }}>OK</button>
        </div>
      </div>
    </div>
  );
};