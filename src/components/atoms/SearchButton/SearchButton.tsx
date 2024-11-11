// components/atoms/Button/SearchButton.tsx
import { Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from 'next/router';
import { styled } from '@mui/material/styles';

interface SearchButtonProps {
  keyword?: string;
  modelNumber?: string;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
}

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

export const SearchButton = ({ 
  keyword, 
  modelNumber,
  disabled = false,
  size = 'small'
}: SearchButtonProps) => {
  const router = useRouter();

  const handleSearch = async () => {
    try {
      const params = new URLSearchParams();
      
      if (typeof keyword === 'string' && keyword) {
        params.append('keyword', keyword);
      }
      if (typeof modelNumber === 'string' && modelNumber) {
        params.append('modelNumber', modelNumber);
      }

      // デバッグログ
      console.log('Search params:', {
        params: params.toString(),
        entries: Array.from(params.entries()),
        query: {
          keyword: keyword || undefined,
          modelNumber: modelNumber || undefined
        }
      });

      await router.push({
        pathname: '/products',
        query: {
          keyword: keyword || undefined,
          modelNumber: modelNumber || undefined
        }
      });
    } catch (error) {
      console.error('Navigation error:', error);
      // エラー処理を追加することも可能
    }
  };

  return (
    <StyledButton
      variant="contained"
      color="primary"
      onClick={handleSearch}
      disabled={disabled}
      size={size}
      startIcon={<SearchIcon />}
      sx={{
        minWidth: '70px',
        px: 2  // パディングを調整
      }}
    >
      検索
    </StyledButton>
  );
};