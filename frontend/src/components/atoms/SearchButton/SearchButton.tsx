// components/atoms/Button/SearchButton.tsx
import { Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from 'next/router';
import { styled } from '@mui/material/styles';

interface SearchButtonProps {
  keyword?: string;
  modelNumber?: string;
  modelName?: string;
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
  modelName,
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
      if (typeof modelName === 'string' && modelName) {
        params.append('modelName', modelName);
      }

      // デバッグログ
      console.log('Search params:', {
        params: params.toString(),
        entries: Array.from(params.entries()),
        query: {
          keyword: keyword || undefined,
          modelNumber: modelNumber || undefined,
          modelName: modelName || undefined
        }
      });

      await router.push({
        pathname: '/products',
        query: {
          keyword: keyword || undefined,
          modelNumber: modelNumber || undefined,
          modelName: modelName || undefined
        }
      });
    } catch (error) {
      console.error('Navigation error:', error);
      
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