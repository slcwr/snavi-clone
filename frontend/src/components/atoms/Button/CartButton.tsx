// components/atoms/Button/CsvReadButton.tsx
'use client';
import { Button, Stack } from '@mui/material';
import { useRouter } from 'next/router';
import { styled } from '@mui/material/styles';



// スタイルのカスタマイズ（オプション）
const StyledButton = styled(Button)(({ theme }) => ({
  minWidth: '120px',
  '&.MuiButton-contained': {
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

export const Cartbutton = ()  => {
  const router = useRouter();
  const handleSearch = async () => {
    try {
      await router.push({
        pathname: '/cart',

      });
    } catch (error) {
      console.error('Navigation error:', error);

    }
  }
  return (
    <Stack direction="row" justifyContent="flex-end">
    <StyledButton
      variant="contained"
      color="primary"
      onClick={handleSearch}

      sx={{
        minWidth: '70px',
        px: 2  // パディングを調整
      }}
    >
      構成リストに保存
    </StyledButton>
    </Stack>
  );
};