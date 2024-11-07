// components/atoms/Button/SearchButton.tsx
import { useRouter } from 'next/router';

export const SearchButton = ({ keyword, modelNumber }: {
  keyword?: string;
  modelNumber?: string;
}) => {
  const router = useRouter();

  const handleSearch = () => {
    // 検索パラメータを構築
    const params = new URLSearchParams();
    if (keyword) params.append('keyword', keyword);
    if (modelNumber) params.append('modelNumber', modelNumber);

    // 製品一覧ページへ遷移
    router.push(`/products?${params.toString()}`);
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