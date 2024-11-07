"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigurationSearch = void 0;
// components/molecules/SearchForm/ConfigurationSearch.tsx
const ConfigurationSearch_module_scss_1 = __importDefault(require("./ConfigurationSearch.module.scss"));
const ConfigurationSearch = () => {
    return (<div className={ConfigurationSearch_module_scss_1.default.configSearch}>
      <div className={ConfigurationSearch_module_scss_1.default.configSearch__header}>
        <div className={ConfigurationSearch_module_scss_1.default.configSearch__actions}>
          <button className={ConfigurationSearch_module_scss_1.default.configSearch__button}>構成リストを見る</button>
          <button className={ConfigurationSearch_module_scss_1.default.configSearch__button}>構成リストを保存</button>
          <button className={ConfigurationSearch_module_scss_1.default.configSearch__button}>購入リストとは</button>
          <button className={ConfigurationSearch_module_scss_1.default.configSearch__button}>利用ガイド</button>
        </div>
        <div className={ConfigurationSearch_module_scss_1.default.configSearch__input}>
          <label>構成リストID</label>
          <input type="text"/>
          <button className={ConfigurationSearch_module_scss_1.default.configSearch__submit}>検索</button>
        </div>
      </div>
    </div>);
};
exports.ConfigurationSearch = ConfigurationSearch;
