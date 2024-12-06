// components/atoms/Button/CsvReadButton.tsx
import { Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';

interface CsvImportButtonProps {
  onClick?: () => void;
}

const StyledButton = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  textTransform: 'none',
}));

export const CsvImportButton = ({ onClick }: CsvImportButtonProps) => (
  <StyledButton
    variant="contained"
    color="primary"
    onClick={onClick}
  >
    CSVインポート
  </StyledButton>
);