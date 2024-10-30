// components/atoms/Input/index.tsx
import React, { forwardRef } from 'react';
import classNames from 'classnames';

interface InputProps extends React.ComponentProps<'input'> {
  error?: boolean;
  helperText?: string;
  fullWidth?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ 
    error = false, 
    helperText, 
    className,
    fullWidth = false,
    ...props 
  }, ref) => {
    return (
      <div className={classNames(
        'input-wrapper',
        fullWidth && 'w-full',
        className
      )}>
        <input
          ref={ref}
          className={classNames(
            'px-4 py-2 border rounded-md outline-none transition-all',
            'focus:ring-2 focus:ring-blue-500',
            error 
              ? 'border-red-500 focus:border-red-500' 
              : 'border-gray-300 focus:border-blue-500',
            fullWidth && 'w-full'
          )}
          {...props}
        />
        {helperText && (
          <p className={classNames(
            'mt-1 text-sm',
            error ? 'text-red-500' : 'text-gray-500'
          )}>
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';