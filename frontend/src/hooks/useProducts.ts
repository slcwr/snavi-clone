// hooks/useProducts.ts
'use client';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import { GenerateProduct } from '../types/product'


// fetcherを分離
const fetcher = async (url: string, params: URLSearchParams) => {
  //本番用
  const baseUrl = new URL(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/products`);
  const searchParams = new URLSearchParams();
  
  searchParams.append('select', '*');

  const { modelName, modelNumber, keyword } = Object.fromEntries(params);

  if (modelName) {
    searchParams.append('productname', `eq.${modelName}`);
  }
  if (modelNumber) {
    searchParams.append('productno', `eq.${modelNumber}`);
  }
  if (keyword) {
    const conditions = [
      `productname.ilike.%${keyword}%`,
      `productno.ilike.%${keyword}%`,
      `description.ilike.%${keyword}%`
    ].join(',');
    searchParams.append('or', `(${conditions})`);
  }

  baseUrl.search = searchParams.toString();

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
  return Array.isArray(data) ? data : data.products || [];
};

export const useProducts = (initialData?: GenerateProduct[]) => {
  const router = useRouter();
  const { keyword, modelNumber, modelName } = router.query;

  // クエリパラメータを作成
  const params = new URLSearchParams();
  if (keyword) params.append('keyword', String(keyword));
  if (modelNumber) params.append('modelNumber', String(modelNumber));
  if (modelName) params.append('modelName', String(modelName));

  const { data, error, isLoading } = useSWR(
    //router.isReady ? ['products', params.toString()] : null,
    ['products', params.toString()],
    ([_, paramsString]) => fetcher('products', new URLSearchParams(paramsString)),
    {
      fallbackData: initialData,
      suspense: true,
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
