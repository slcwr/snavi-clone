// components/atoms/Button/ConfigButton.tsx
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

interface ConfigButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'contained' | 'outlined' | 'text';
}

const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  textTransform: 'none',
  minWidth: '120px',
}));

export const ConfigButton = ({
  children,
  onClick,
  variant = 'outlined'
}: ConfigButtonProps) => (
  <StyledButton
    variant={variant}
    onClick={onClick}
    size="medium"
    color="primary"
  >
    {children}
  </StyledButton>
);