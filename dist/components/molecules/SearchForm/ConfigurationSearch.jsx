// components/molecules/SearchForm/ConfigurationSearch.tsx
import { useState } from 'react';
import { Box, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ConfigButton } from '../../atoms/Button/ConfigButton';
import { SearchConfigButton } from '../../atoms/Button/SearchConfigButton';
import { ConfigInput } from '../../atoms/Input/ConfigInput';

const SearchContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
}));

const ButtonContainer = styled(Stack)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const SearchSection = styled(Stack)(({ theme }) => ({
  alignItems: 'center',
}));

export const ConfigurationSearch = () => {
  const [configId, setConfigId] = useState('');

  const handleSearch = () => {
    console.log('Searching for config ID:', configId);
  };

  return (
    <SearchContainer>
      <ButtonContainer direction="row" spacing={1}>
        <ConfigButton onClick={() => console.log('構成リストを見る')}>
          構成リストを見る
        </ConfigButton>
        <ConfigButton onClick={() => console.log('構成リストを保存')}>
          構成リストを保存
        </ConfigButton>
        <ConfigButton onClick={() => console.log('購入リストとは')}>
          購入リストとは
        </ConfigButton>
        <ConfigButton onClick={() => console.log('利用ガイド')}>
          利用ガイド
        </ConfigButton>
      </ButtonContainer>

      <SearchSection direction="row" spacing={2}>
        <ConfigInput
          label="構成リストID"
          value={configId}
          onChange={setConfigId}
        />
        <SearchConfigButton onClick={handleSearch} />
      </SearchSection>
    </SearchContainer>
  );
};
