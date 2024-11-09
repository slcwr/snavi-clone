// components/atoms/Button/SearchButton.tsx
import { useRouter } from 'next/router';
import { SearchParams } from '../../../types/api';

export const SearchButton = ({ keyword, modelNumber }: {
  keyword?: string;
  modelNumber?: string;
}) => {
  const router = useRouter();

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


  return (
    <button 
      className="search-button"
      onClick={handleSearch}
    >
      検索
    </button>
  );
};