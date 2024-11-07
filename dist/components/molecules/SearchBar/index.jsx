"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sidebar = void 0;
// components/organisms/Sidebar/index.tsx
const react_1 = require("react");
const ModalContent_1 = require("./ModalContent");
const Sidebar_module_scss_1 = __importDefault(require("./Sidebar.module.scss"));
const Sidebar = () => {
    const [isModalOpen, setIsModalOpen] = (0, react_1.useState)(false);
    const [filteredOS, setFilteredOS] = (0, react_1.useState)([]);
    const [filteredModels, setFilteredModels] = (0, react_1.useState)([]);
    const handleOpenModal = (e) => {
        e.preventDefault();
        setIsModalOpen(true);
    };
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    const handleFilter = (selectedOS, selectedModels) => {
        console.log('Selected OS:', selectedOS);
        setFilteredOS(selectedOS);
        //setFilteredModels(selectedModels);
    };
    return (<aside className={Sidebar_module_scss_1.default.sidebar}>
      {/* 製品情報・見積り */}
      <nav className={Sidebar_module_scss_1.default.sidebar__nav}>
      <li className={Sidebar_module_scss_1.default.sidebar__menuItem}>
            <a href="#" className={Sidebar_module_scss_1.default.sidebar__linkhead}>製品情報・見積り</a>
     </li>
        <ul className={Sidebar_module_scss_1.default.sidebar__menu}>
          <li className={Sidebar_module_scss_1.default.sidebar__menuItem}>
            <a href="#" className={Sidebar_module_scss_1.default.sidebar__link}>製品・キーワード検索</a>
          </li>
          <li className={Sidebar_module_scss_1.default.sidebar__menuItem}>
            <a href="#" className={Sidebar_module_scss_1.default.sidebar__link}>カテゴリから</a>
          </li>
          <li className={Sidebar_module_scss_1.default.sidebar__menuItem}>
            <a href="#" className={Sidebar_module_scss_1.default.sidebar__link}>型番一括検索</a>
          </li>
        </ul>
      </nav>

      {/* 表示対象選択 */}
      <nav className={Sidebar_module_scss_1.default.sidebar__nav2}>
      
        <li className={Sidebar_module_scss_1.default.sidebar__menuItem}>
            <a href="#" className={Sidebar_module_scss_1.default.sidebar__linkhead2}>表示対象選択</a>
        </li>
         <p className={Sidebar_module_scss_1.default.sidebar__filterLabel}>「頭文字索引」には無効です。</p>
         <a href="#" className={Sidebar_module_scss_1.default.sidebar__link2} onClick={handleOpenModal}>OS・機種で絞り込む</a>
        
        <div className={Sidebar_module_scss_1.default.sidebar__filterGroup}>
          <p className={Sidebar_module_scss_1.default.sidebar__filterLabel}>OS: {filteredOS.join(', ')}</p>
          <div className={Sidebar_module_scss_1.default.sidebar__filterOption}>
            <input type="radio" id="model-none" name="model" className={Sidebar_module_scss_1.default.sidebar__radio}/>
            <label htmlFor="model-none">指定なし</label>
          </div>
        </div>

        <ModalContent_1.ModalContent isOpen={isModalOpen} onClose={handleCloseModal} onFilter={handleFilter}/>

        <div className={Sidebar_module_scss_1.default.sidebar__filterGroup}>
          <label className={Sidebar_module_scss_1.default.sidebar__checkbox}>
            <input type="checkbox"/>
            <span>旧製品を含む</span>
          </label>
        </div>
        </nav>
    </aside>);
};
exports.Sidebar = Sidebar;
