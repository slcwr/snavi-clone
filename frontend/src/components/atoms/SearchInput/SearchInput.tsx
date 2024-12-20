'use client';
import { TextField } from '@mui/material';
import { ChangeEvent } from 'react';

interface SearchInputProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  size?: 'small' | 'medium';
  fullWidth?: boolean;
  variant?: 'outlined' | 'filled' | 'standard';
  width?: string | number;  // 幅を制御するプロパティを追加
}

export const SearchInput = ({ 
  placeholder, 
  value, 
  onChange,
  size = 'small', 
  fullWidth = false,
  variant = 'outlined',
  width  // 追加
}: SearchInputProps) => (
  <TextField
    placeholder={placeholder}
    value={value}
    onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
    size={size}
    fullWidth={fullWidth}
    variant={variant}
    sx={{ width }}  // 幅を適用
  />
);

