// pages/products/index.tsx
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/pages/products/ProductList.module.scss';

interface Product {
  id: string;
  productno: string;
  productname: string;
  price: number;
}

export default function ProductList() {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { keyword, modelNumber } = router.query;

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const params = new URLSearchParams();
        if (keyword) params.append('keyword', String(keyword));
        if (modelNumber) params.append('modelNumber', String(modelNumber));

        // Express APIのエンドポイントを呼び出し
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/products?${params.toString()}`);
        
        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }

        const data = await response.json();
        console.log('Received data:', data);

        const productArray = Array.isArray(data) ? data : data.products || [];
        setProducts(productArray);
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
  }, [router.isReady, keyword, modelNumber]);

  if (loading) return <div>読み込み中...</div>;
  if (error) return <div>エラー: {error}</div>;

  return (
    <div className={styles['product-list']}>
      <h2>検索結果</h2>
      <div className={styles['product-list__product-grid']}>
        {products.map((product) => (
          <div key={product.id} className={styles['product-card']}>
            <h3>{product.productname}</h3>
            <p>製品番号: {product.productno}</p>
            <p>価格: ¥{product.price.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}