// components/atoms/Button/CartrmButton.tsx
'use client';
import { Button, Stack } from '@mui/material';
import { useRouter } from 'next/router';
import { styled } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { clearPersistedData } from '../../../stores/reducers/CartSlice';


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

export const Cartrmbutton = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleClearData = async () => {
    try {
      await router.push({
        pathname: 'products/generateproducts',
      });
      dispatch(clearPersistedData());
    } catch (error) {
      console.error('Navigation error:', error);

    }
  }
  return (
    <Stack direction="row" justifyContent="flex-end">
    <StyledButton
      variant="contained"
      color="primary"
      onClick={handleClearData}

      sx={{
        minWidth: '70px',
        px: 2  // パディングを調整
      }}
    >
      カートを空にする
    </StyledButton>
    </Stack>
  );
};