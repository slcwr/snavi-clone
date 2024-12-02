import { useState } from 'react';
import { SearchInput } from '../../atoms/SearchInput/SearchInput'; 
import { SearchButton } from '../../atoms/SearchButton/SearchButton';
import { styled } from '@mui/material/styles';
import { Box, Stack, Tabs, Tab  } from '@mui/material'; 


const SearchContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      {...other}
    >
      {value === index && (
        <Box sx={{ pt: 2 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

export const CategorySearch = () => {
  const [tabValue, setTabValue] = useState(0);
  const [keyword, setKeyword] = useState('');
  const [modelNumber, setModelNumber] = useState('');
  const [modelName, setModelName] = useState('');
  
  // 2つ目のパターン用の状態
  const [keyword2, setKeyword2] = useState('');
  const [modelNumber2, setModelNumber2] = useState('');
  const [modelName2, setModelName2] = useState('');

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <SearchContainer>
      <Tabs value={tabValue} onChange={handleTabChange}>
        <Tab label="キーワード検索" />
        <Tab label="カテゴリ検索" />
      </Tabs>

      <TabPanel value={tabValue} index={0}>
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
      </TabPanel>

      <TabPanel value={tabValue} index={1}>
        <Stack direction="row" spacing={2} alignItems="center">
          <SearchInput
            placeholder="第一階層"
            value={modelNumber2}
            onChange={setModelNumber2}
            width="200px"
          />
          <SearchInput
            placeholder="第二階層"
            value={modelName2}
            onChange={setModelName2}
            width="200px"
          />
          <SearchInput
            placeholder="第三階層"
            value={keyword2}
            onChange={setKeyword2}
            width="200px"
          />
          <SearchButton
            keyword={keyword2}
            modelNumber={modelNumber2}
            modelName={modelName2}
          />
        </Stack>
      </TabPanel>
    </SearchContainer>
  );
};

