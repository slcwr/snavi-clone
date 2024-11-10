"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchButton = void 0;
// components/atoms/Button/SearchButton.tsx
const router_1 = require("next/router");
const SearchButton = ({ keyword, modelNumber }) => {
    const router = (0, router_1.useRouter)();
    const handleSearch = () => {
        const params = new URLSearchParams();
        // undefinedチェックを行ってから追加
        if (typeof keyword === 'string' && keyword) {
            params.append('keyword', keyword);
        }
        if (typeof modelNumber === 'string' && modelNumber) {
            params.append('modelNumber', modelNumber);
        }
        // クエリオブジェクトとして渡す
        router.push({
            pathname: '/products',
            query: {
                keyword: keyword || undefined,
                modelNumber: modelNumber || undefined
            }
        });
    };
    return (<button className="search-button" onClick={handleSearch}>
      検索
    </button>);
};
exports.SearchButton = SearchButton;
