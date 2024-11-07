"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchSection = void 0;
// components/organisms/SearchSection/index.tsx
const SearchBox_1 = require("../../molecules/SearchBox");
//import { Navigation } from '../../../components/molecules/Navigation';
//import { CategoryFilter } from '../../../components/molecules/CategoryFilter';
const SearchSection = () => {
    return (<section className="bg-white rounded-lg shadow p-6 mb-8">
      <h2 className="text-2xl font-bold mb-4">製品を探す</h2>
      <SearchBox_1.SearchBox />
      {/* <CategoryFilter /> */}
    </section>);
};
exports.SearchSection = SearchSection;
