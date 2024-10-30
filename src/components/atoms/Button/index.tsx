// components/atoms/Button/index.tsx
interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'outline';
    fullWidth?: boolean;
    onClick?: () => void;
  }
  
  export const Button = ({
    children,
    variant = 'primary',
    fullWidth,
    onClick
  }: ButtonProps) => {
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
  
  // components/atoms/Input/index.tsx
  interface InputProps {
    placeholder?: string;
    className?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
  
  export const Input = ({ placeholder, className, onChange }: InputProps) => {
    return (
      <input
        type="text"
        placeholder={placeholder}
        className={`border rounded px-4 py-2 ${className}`}
        onChange={onChange}
      />
    );
  };