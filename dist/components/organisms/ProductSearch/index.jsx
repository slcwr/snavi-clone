"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSearch = void 0;
// components/organisms/ProductSearch/index.tsx
const ProductSearch_module_scss_1 = __importDefault(require("./ProductSearch.module.scss"));
const SectionTitle_1 = require("../../atoms/SectionTitle/SectionTitle");
const SearchTypeList_1 = require("../../molecules/SearchOptions/SearchTypeList");
const KeywordSearch_1 = require("../../molecules/SearchForm/KeywordSearch");
const ProductSearch = () => (<div className={ProductSearch_module_scss_1.default['product-search']}>
    <SectionTitle_1.SectionTitle>製品情報・見積り</SectionTitle_1.SectionTitle>
    <div className={ProductSearch_module_scss_1.default['product-search__description']}>
      ソフトウェア製品の概算見積りや、おすすめ製品の情報へナビゲートします。
    </div>
    <div className={ProductSearch_module_scss_1.default['product-search-section']}>
      <h3>ソフトウェア製品を探す</h3>
      <SearchTypeList_1.SearchTypeList />
    </div>
    <div className={ProductSearch_module_scss_1.default['product-search-section']}>
      <h3>ソフトウェア製品検索</h3>
      <p>製品のキーワード（製品名や主な機能など）から該当する製品を検索できます。</p><br />
      <KeywordSearch_1.KeywordSearch />
    </div>
  </div>);
exports.ProductSearch = ProductSearch;
