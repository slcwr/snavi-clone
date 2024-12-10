// hooks/useProducts
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface GenerateProduct {
  id: string;
  productno: string;
  productname: string;
  description: string;
}

export const useProducts = () => {
  const router = useRouter();
  const [generateproducts, setGenerateProducts] = useState<GenerateProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { keyword, modelNumber, modelName } = router.query;

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        const params = new URLSearchParams();
        if (keyword) params.append('keyword', String(keyword));
        if (modelNumber) params.append('modelNumber', String(modelNumber));
        if (modelName) params.append('modelName', String(modelName));

        // Nest.jsのエンドポイントを呼び出し
        //const response = await fetch(`/api/products?${params.toString()}`);
        const baseUrl = new URL(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/products`);
        const searchParams = new URLSearchParams(params);

        // Supabase形式でのフィルタリング
        if (modelName) {
          searchParams.append('productname', `eq.${modelName}`); // 完全一致
        }
        if (modelNumber) {
          searchParams.append('productno', `eq.${modelNumber}`); // 完全一致
        }
        if (keyword) {
          searchParams.append('productname', `ilike.%${keyword}%`); // 部分一致
        }

        baseUrl.search = searchParams.toString();

        const response = await fetch(baseUrl, {
          method: 'GET',
          headers: {
            'apikey': process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '',
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ''}`,
            'Content-Type': 'application/json'
          } as HeadersInit,
        });

        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }

        const data = await response.json();
        console.log('Received data:', data);
        console.log('data.length:', data.length)

        const productArray = Array.isArray(data) ? data : data.products || [];
        setGenerateProducts(productArray);
      } catch (error) {
        console.error('製品の取得に失敗しました:', error);
        setError('製品の取得に失敗しました');
      } finally {
        setLoading(false);
      }
    };

    if (router.isReady) {
      fetchProducts();
    }
  }, [router.isReady, keyword, modelNumber, modelName]);

  return {
    data: generateproducts,
    loading,
    error
  };

}