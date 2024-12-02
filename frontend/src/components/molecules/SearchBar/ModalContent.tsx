// components/molecules/ModalContent/index.tsx
import { useState } from 'react';
import styles from './ModalContent.module.scss';

interface ModalContentProps {
  isOpen: boolean;
  onClose: () => void;
  onFilter: (selectedOS: string[], selectedModels: string[]) => void;
}

export const ModalContent: React.FC<ModalContentProps> = ({ isOpen, onClose, onFilter }) => {
  const [selectedOS,setSelectedOS] = useState<string[]>([]);
  const [selectedModels,setSelectedModels] = useState<string[]>([]);

  const handleOSChange = (value: string, checked: boolean) => {
    setSelectedOS(prev => 
      checked ? [...prev, value] : prev.filter(os => os !== value)
    );
  };

  const handleModelChange = (value: string, checked: boolean) => {
    setSelectedModels(prev =>
      checked ? [...prev, value] : prev.filter(model => model !== value)
   );
  };

  const handleSubmit = () => {
    onFilter(selectedOS, selectedModels);
    onClose();
  }
  
  if (!isOpen) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.modal__content}>
        <h3>対象OSで絞り込む</h3>
        <div className={styles.modal__checkboxes}>
          <label>
            <input 
            type="checkbox" 
            name="os" 
            value="windows"
            checked={selectedOS.includes('windows')}
            onChange={(e) => handleOSChange(e.target.value,e.target.checked)}
            />
            Windows
          </label>
          <label>
          <input 
            type="checkbox" 
            name="os" 
            value="windows"
            checked={selectedOS.includes('linux')}
            onChange={(e) => handleOSChange(e.target.value,e.target.checked)}
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
          <button onClick={() => {
            // 絞り込み処理
            onClose();
          }}>OK</button>
        </div>
      </div>
    </div>
  );
};