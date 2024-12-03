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
  const { keyword, modelNumber,modelName } = router.query;

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
        const response = await fetch(`/api/products?${params.toString()}`);
        //const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/products?${params.toString()}`);
        
        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }

        const data = await response.json();
        console.log('Received data:', data);
        console.log('data.length:',data.length)

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
  }, [router.isReady, keyword, modelNumber, modelName ]);

  return {
    data: generateproducts,
    loading,
    error
  };
  
}