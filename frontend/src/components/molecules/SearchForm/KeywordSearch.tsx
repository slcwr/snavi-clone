import { useState } from 'react';
import { SearchInput } from '../../atoms/SearchInput/SearchInput'; 
import { SearchButton } from '../../atoms/SearchButton/SearchButton';
import { styled } from '@mui/material/styles';
import { Box, Stack, Tabs, Tab  } from '@mui/material'; 


const SearchContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
}));

export const KeywordSearch = () => {
  const [tabValue, setTabValue] = useState(0);
  const [keyword, setKeyword] = useState('');
  const [modelNumber, setModelNumber] = useState('');
  const [modelName, setModelName] = useState('');
  

  return (
    <SearchContainer>
        <Stack direction="row" spacing={2} alignItems="center">
          <SearchInput
            placeholder="型番を入力"
            value={modelNumber}
            onChange={setModelNumber}
            width="200px"
          />
          <SearchInput
            placeholder="品名を入力"
            value={modelName}
            onChange={setModelName}
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
            modelName={modelName}
          />
        </Stack>
    </SearchContainer>
  );
};
