// components/atoms/Button/CsvReadButton.tsx
'use client';
import { Button, Stack } from '@mui/material';
import { useRouter } from 'next/router';
import { styled } from '@mui/material/styles';
import { CartState } from '../../../types/cartitem';
import { useAppSelector, useAppDispatch, store } from '@/stores';

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

export const CartSearchbutton = () => {
  const router = useRouter();
  const state = store.getState();
  const activeCartId = state.cart.activeCartId;
  const handleSearch = async () => {
    try {
      await router.push(`products/generateproducts/cart?id=${activeCartId}`);
    } catch (error) {
      console.error('Navigation error:', error);
    }
  };
  return (
    <Stack direction="row" justifyContent="flex-end">
      <StyledButton
        variant="contained"
        color="primary"
        onClick={handleSearch}
        sx={{
          fontSize: '10px',
          minWidth: '20px',
          px: 0.5, // パディングを調整
        }}
      >
        検索
      </StyledButton>
    </Stack>
  );
};
