import { ChangeEvent } from 'react';

interface SearchInputProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

export const SearchInput = ({ 
  placeholder, 
  value, 
  onChange 
}: SearchInputProps) => (
  <input
    type="text"
    placeholder={placeholder}
    value={value}
    onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
  />
);

