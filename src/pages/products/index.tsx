import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/pages/products/ProductList.module.scss';
import { KeywordSearch } from '../../components/molecules/SearchForm/KeywordSearch';
import Button from '../../components/atoms/Button';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper 
} from '@mui/material';

interface GenerateProduct {
  id: string;
  productno: string;
  productname: string;
  description: string;
}

export default function ProductList() {
  const router = useRouter();
  const [generateproducts, setGenerateProducts] = useState<GenerateProduct[]>([]);
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
  }, [router.isReady, keyword, modelNumber]);

  if (loading) return <div>読み込み中...</div>;
  if (error) return <div>エラー: {error}</div>;

  return (
    <div className={styles['product-list']}>
      <h2>ソフトウェア製品検索</h2>
      <p>製品のキーワード（製品名や主な機能など）から該当する製品を検索できます。</p>
      <br/>
      <KeywordSearch />
      <br/>
      <h2>検索結果</h2>
      
      <TableContainer component={Paper} sx={{ mt: 2 }}>
      <Table 
    sx={{ 
      minWidth: 650,
      border: '1px solid rgba(224, 224, 224, 1)',
      '& .MuiTableCell-root': {
        borderLeft: '1px solid rgba(224, 224, 224, 1)',
        borderRight: '1px solid rgba(224, 224, 224, 1)',
      },
      // 最後の行のスタイルを修正
      '& .MuiTableBody-root .MuiTableRow-root:last-child': {
        '& .MuiTableCell-root': {
          borderBottom: '1px solid rgba(224, 224, 224, 1)', // 最後の行の下線を追加
        }
      }
    }} 
    aria-label="product table"
  >
          <TableHead>
            <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
              <TableCell sx={{ fontWeight: 'bold' }}>製品名</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>概要</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }} align="center">操作</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {generateproducts.map((generateproduct) => (
              <TableRow
                key={generateproduct.id}
                sx={{ 
                  '&:hover': { backgroundColor: '#f8f8f8' },
                }}
              >
                <TableCell>{generateproduct.productname}</TableCell>
                <TableCell>{generateproduct.description}</TableCell>
              
                
                <TableCell align="center">
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    onClick={() => console.log('clicked', generateproduct.id)}
                    //sx={{ minWidth: '120px' }}
                  >
                    構成作成
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {generateproducts.length === 0 && (
        <div style={{ textAlign: 'center', padding: '20px' }}>
          検索結果がありません
        </div>
      )}
    </div>
  );
}