// components/atoms/Button/index.tsx
import styles from './Button.module.scss';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'outline';
    fullWidth?: boolean;
    onClick?: () => void;
  }
  

  // デフォルトエクスポートに変更
export default function Button({
  children,
  variant = 'primary',
  fullWidth,
  onClick
}: ButtonProps) {
  return (
    <button
      className={`
        px-4 py-2 rounded
        ${variant === 'primary' ? 'bg-blue-600 text-white' : 'border border-blue-600 text-blue-600'}
        ${fullWidth ? 'w-full' : ''}
      `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};