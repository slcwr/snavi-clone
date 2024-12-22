// hooks/useGenerateProducts.ts
'use client';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import { GenerateProduct } from '../types/generateproduct'


// fetcherを分離
const fetcher = async (url: string) => {
  //本番用
  const baseUrl = new URL(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/generateproducts`);

  const response = await fetch(baseUrl, {
    method: 'GET',
    headers: {
      'apikey': process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '',
      'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ''}`,
      'Content-Type': 'application/json'
    },
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  const data = await response.json();
  return Array.isArray(data) ? data : data.generateproducts || [];
};

export const usegenerateProducts = (initialData?: GenerateProduct[]) => {
  const router = useRouter();

  const { data, error, isLoading } = useSWR(
    ['generateproducts'],
    () => fetcher('generateproducts'),
    {
      fallbackData: initialData,
      suspense: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  return {
    data: data ?? [],
    loading: isLoading,
    error: error?.message ?? null
  };
};
