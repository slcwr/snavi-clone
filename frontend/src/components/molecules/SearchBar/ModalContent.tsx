// components/molecules/ModalContent/index.tsx
'use client';
import { useState, useRef, useEffect } from 'react';
import styles from './ModalContent.module.scss';
import {
  ConstructionOutlined,
  SettingsCellOutlined,
} from '@mui/icons-material';

interface ModalContentProps {
  isOpen: boolean;
  onClose: () => void;
  onFilter: (selectedOS: string[], selectedModels: string[]) => void;
}

export const ModalContent: React.FC<ModalContentProps> = ({
  isOpen,
  onClose,
  onFilter,
}) => {
  const [selectedOS, setSelectedOS] = useState<string[]>([]);
  const [selectedModels, setSelectedModels] = useState<string[]>([]);

  const [show, setshow] = useState(false);

  //const divRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // モーダルが開いているときのみイベントリスナーを設定
    if (!isOpen) return;
    console.log('test');

    
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      // モーダルの外側のオーバーレイ要素をクリックした時のみ閉じる
      if (target.classList.contains(styles.modal)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    console.log('test2');
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      console.log('test4');
    };
  }, [isOpen, onClose]);

  const handleOSChange = (value: string, checked: boolean) => {
    setSelectedOS((prev) =>
      checked ? [...prev, value] : prev.filter((os) => os !== value)
    );
  };

  const handleModelChange = (value: string, checked: boolean) => {
    setSelectedModels((prev) =>
      checked ? [...prev, value] : prev.filter((model) => model !== value)
    );
  };

  const handleSubmit = () => {
    onFilter(selectedOS, selectedModels);
    onClose();
  };
  //propsのisopenがfalseの場合はモーダルは開かない。
  if (!isOpen) return null;

  return (
    <div className={styles.modal} onClick={onClose}>
      <div
        className={styles.modal__content}
        onClick={(e) => e.stopPropagation()}
      >
        <h3>対象OSで絞り込む</h3>
        <div className={styles.modal__checkboxes}>
          <label>
            <input
              type="checkbox"
              name="os"
              value="windows"
              checked={selectedOS.includes('windows')}
              onChange={(e) => handleOSChange(e.target.value, e.target.checked)}
            />
            Windows
          </label>
          <label>
            <input
              type="checkbox"
              name="os"
              value="linux"
              checked={selectedOS.includes('linux')}
              onChange={(e) => handleOSChange(e.target.value, e.target.checked)}
            />
            Linux
          </label>
        </div>

        <h3>対象機種で絞り込む</h3>
        <div className={styles.modal__checkboxes}>
          {/* 機種のチェックボックス */}
        </div>

        <div className={styles.modal__buttons}>
          <button onClick={onClose}>キャンセル</button>
          <button
            onClick={() => {
              // 絞り込み処理
              onClose();
            }}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};
