"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalContent = void 0;
// components/molecules/ModalContent/index.tsx
const react_1 = require("react");
const ModalContent_module_scss_1 = __importDefault(require("./ModalContent.module.scss"));
const ModalContent = ({ isOpen, onClose, onFilter }) => {
    const [selectedOS, setSelectedOS] = (0, react_1.useState)([]);
    const [selectedModels, setSelectedModels] = (0, react_1.useState)([]);
    const handleOSChange = (value, checked) => {
        setSelectedOS(prev => checked ? [...prev, value] : prev.filter(os => os !== value));
    };
    const handleModelChange = (value, checked) => {
        setSelectedModels(prev => checked ? [...prev, value] : prev.filter(model => model !== value));
    };
    const handleSubmit = () => {
        onFilter(selectedOS, selectedModels);
        onClose();
    };
    if (!isOpen)
        return null;
    return (<div className={ModalContent_module_scss_1.default.modal}>
      <div className={ModalContent_module_scss_1.default.modal__content}>
        <h3>対象OSで絞り込む</h3>
        <div className={ModalContent_module_scss_1.default.modal__checkboxes}>
          <label>
            <input type="checkbox" name="os" value="windows" checked={selectedOS.includes('windows')} onChange={(e) => handleOSChange(e.target.value, e.target.checked)}/>
            Windows
          </label>
          <label>
          <input type="checkbox" name="os" value="windows" checked={selectedOS.includes('linux')} onChange={(e) => handleOSChange(e.target.value, e.target.checked)}/>
            Linux
          </label>
        </div>

        <h3>対象機種で絞り込む</h3>
        <div className={ModalContent_module_scss_1.default.modal__checkboxes}>
          {/* 機種のチェックボックス */}
        </div>

        <div className={ModalContent_module_scss_1.default.modal__buttons}>
          <button onClick={onClose}>キャンセル</button>
          <button onClick={() => {
            // 絞り込み処理
            onClose();
        }}>OK</button>
        </div>
      </div>
    </div>);
};
exports.ModalContent = ModalContent;
