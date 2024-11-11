// components/atoms/Button/index.tsx
import { Button as MuiButton } from '@mui/material';
import { styled } from '@mui/material/styles';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'contained' | 'outlined' | 'text';
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  fullWidth?: boolean;
  onClick?: () => void;
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

// スタイルのカスタマイズ（オプション）
const StyledButton = styled(MuiButton)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  textTransform: 'none', // 大文字変換を無効化
  padding: theme.spacing(1, 3),
  '&.MuiButton-containedPrimary': {
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

export default function Button({
  children,
  variant = 'contained',
  color = 'primary',
  fullWidth = false,
  size = 'medium',
  disabled = false,
  onClick,
  startIcon,
  endIcon,
}: ButtonProps) {
  return (
    <StyledButton
      variant={variant}
      color={color}
      fullWidth={fullWidth}
      size={size}
      disabled={disabled}
      onClick={onClick}
      startIcon={startIcon}
      endIcon={endIcon}
    >
      {children}
    </StyledButton>
  );
}