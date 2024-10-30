// components/organisms/SearchSection/index.tsx
import { SearchBox } from '../../../components/molecules/SearchBox';
//import { CategoryFilter } from '../../../components/molecules/CategoryFilter';

export const SearchSection = () => {
  return (
    <section className="bg-white rounded-lg shadow p-6 mb-8">
      <h2 className="text-2xl font-bold mb-4">製品を探す</h2>
      <SearchBox />
      {/* <CategoryFilter /> */}
    </section>
  );
};



