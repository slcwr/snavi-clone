// components/atoms/Text/index.tsx
import React from 'react';

type TextVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

interface TextProps {
  children: React.ReactNode;
  variant?: TextVariant;
  className?: string;
  color?: 'primary' | 'secondary' | 'error' | 'success';
  weight?: 'normal' | 'medium' | 'bold';
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl';
  align?: 'left' | 'center' | 'right';
}

export const Text: React.FC<TextProps> = ({
  children,
  variant = 'p',
  className = '',
  color = 'primary',
  weight = 'normal',
  size = 'base',
  align = 'left',
  ...props
}) => {
  const Component = variant as keyof JSX.IntrinsicElements;

  const baseStyles = 'leading-relaxed';

  const colorStyles = {
    primary: 'text-gray-900',
    secondary: 'text-gray-600',
    error: 'text-red-600',
    success: 'text-green-600',
  };

  const weightStyles = {
    normal: 'font-normal',
    medium: 'font-medium',
    bold: 'font-bold',
  };

  const sizeStyles = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
  };

  const alignStyles = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const combinedClassName = `
    ${baseStyles}
    ${colorStyles[color]}
    ${weightStyles[weight]}
    ${sizeStyles[size]}
    ${alignStyles[align]}
    ${className}
  `.trim();

  return (
    <Component className={combinedClassName} {...props}>
      {children}
    </Component>
  );
};

export default Text;