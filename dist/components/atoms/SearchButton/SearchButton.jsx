"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchButton = void 0;
// components/atoms/Button/SearchButton.tsx
const router_1 = require("next/router");
const SearchButton = ({ keyword, modelNumber }) => {
    const router = (0, router_1.useRouter)();
    const handleSearch = () => {
        // 検索パラメータを構築
        const params = new URLSearchParams();
        if (keyword)
            params.append('keyword', keyword);
        if (modelNumber)
            params.append('modelNumber', modelNumber);
        // 製品一覧ページへ遷移
        router.push(`/products?${params.toString()}`);
    };
    return (<button className="search-button" onClick={handleSearch}>
      検索
    </button>);
};
exports.SearchButton = SearchButton;
