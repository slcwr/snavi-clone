// pages/products/index.tsx

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/pages/products/ProductList.module.scss';

// 型定義
interface Product {
  id: string;
  productno: string;
  productname: string;
  price: number;
}

export default function ProductList() {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const { keyword, modelNumber } = router.query;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // 検索パラメータを含めたAPI呼び出し
        const response = await fetch(`/api/products?keyword=${keyword || ''}&modelNumber=${modelNumber || ''}`);
        const data = await response.json();
        console.log('Received data:', data); // デバッグログ

        // データが配列でない場合の処理
        const productArray = Array.isArray(data) ? data : data.products || [];
        setProducts(productArray);
      } catch (error) {
        console.error('製品の取得に失敗しました:', error);
      }
    };

    if (router.isReady) {
      fetchProducts();
    }
  }, [router.isReady, keyword, modelNumber]);

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