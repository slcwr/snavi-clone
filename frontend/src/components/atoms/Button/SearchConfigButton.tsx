// components/atoms/Button/SearchConfigButton.tsx
import { Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';

interface SearchConfigButtonProps {
  onClick?: () => void;
}

const StyledButton = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  textTransform: 'none',
}));

export const SearchConfigButton = ({ onClick }: SearchConfigButtonProps) => (
  <StyledButton
    variant="contained"
    color="primary"
    onClick={onClick}
    startIcon={<SearchIcon />}
  >
    検索
  </StyledButton>
);