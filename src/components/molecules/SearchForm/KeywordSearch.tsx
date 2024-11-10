import { useState } from 'react';
import { SearchInput } from '../../atoms/SearchInput/SearchInput'; 
import { SearchButton } from '../../atoms/SearchButton/SearchButton';

export const KeywordSearch = () => {
  const [keyword, setKeyword] = useState('');
  const [modelNumber, setModelNumber] = useState('');
  return (
    <div>
    <SearchInput
      placeholder="キーワードを入力"
      value={keyword}
      onChange={setKeyword}
    />
    <SearchInput
      placeholder="型番を入力"
      value={modelNumber}
      onChange={setModelNumber}
    />
    <SearchButton
      keyword={keyword}
      modelNumber={modelNumber}
    />
  </div>
  )
};
