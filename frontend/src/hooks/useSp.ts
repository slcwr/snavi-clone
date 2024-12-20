// hooks/useSp.ts
'use client';
import { useMediaQuery } from 'react-responsive';

export const useSp = () => {
  return useMediaQuery({ maxWidth: 767 });
};