"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeywordSearch = void 0;
const SearchInput_1 = require("../../atoms/SearchInput/SearchInput");
const SearchButton_1 = require("../../atoms/SearchButton/SearchButton");
const KeywordSearch = () => (<div className="keyword-search">
      <div className="search-row">
        <label>型番</label>
        <SearchInput_1.SearchInput placeholder=""/>
        <label>キーワード</label>
        <SearchInput_1.SearchInput placeholder="空白区切りで複数のキーワードが指定可能です。"/>
        <SearchButton_1.SearchButton />
      </div>
    </div>);
exports.KeywordSearch = KeywordSearch;
