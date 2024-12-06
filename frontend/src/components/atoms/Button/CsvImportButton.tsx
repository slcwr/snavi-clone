// components/atoms/Button/CsvReadButton.tsx
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

export const Csvimportbutton = () => {
  const router = useRouter();
  const handleSearch = async () => {
    try {
      await router.push({
        pathname: '/csvupload',

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
      CSVアップロード
    </StyledButton>
    </Stack>
  );
};