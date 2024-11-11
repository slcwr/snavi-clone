import { useState } from 'react';
import { SearchInput } from '../../atoms/SearchInput/SearchInput'; 
import { SearchButton } from '../../atoms/SearchButton/SearchButton';
import { styled } from '@mui/material/styles';
import { Box, Stack } from '@mui/material'; 

const SearchContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),  // 16pxのスペース
  alignItems: 'center',   // 垂直方向の中央揃え
}));

export const KeywordSearch = () => {
  const [keyword, setKeyword] = useState('');
  const [modelNumber, setModelNumber] = useState('');

  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <SearchInput
        placeholder="型番を入力"
        value={modelNumber}
        onChange={setModelNumber}
        width="200px"
      />
      
      <SearchInput
        placeholder="キーワードを入力"
        value={keyword}
        onChange={setKeyword}
        width="300px"
      />
      
      <SearchButton
        keyword={keyword}
        modelNumber={modelNumber}
      />
    </Stack>
  );
};
