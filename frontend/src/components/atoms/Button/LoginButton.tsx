// components/atoms/Button/CsvReadButton.tsx
'use client';
import { Button, Stack } from '@mui/material';
import { useRouter } from 'next/router';
import { styled } from '@mui/material/styles';

// スタイルのカスタマイズ（オプション）
const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#4caf50',
  minWidth: '120px',
  '&.MuiButton-contained': {
    '&:hover': {
      backgroundColor: '#45a049',
    },
  },
}));

export const Loginbutton = () => {
  const router = useRouter();
  const handleSearch = async () => {
    try {
      await router.push({
        pathname: '/login',
      });
    } catch (error) {
      console.error('Navigation error:', error);
    }
  };
  return (
    <Stack direction="row" justifyContent="flex-start">
      <StyledButton
        variant="contained"
        onClick={handleSearch}
        color="primary"
        sx={{
          minWidth: '70px',
          px: 1.5, // パディングを調整
        }}
      >
        ログイン
      </StyledButton>
    </Stack>
  );
};
