import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/pages/products/ProductList.module.scss';
import { CategorySearch } from '../../../components/molecules/SearchForm/CategorySearch';
import { usePagination } from '../../../hooks/usePagination';
import Button from '../../../components/atoms/Button';
import { useProducts } from '../../../hooks/useProducts';
import { GenerateProduct } from '../../../types/product'

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material';

export default function ProductList() {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  const { data, loading, error } = useProducts();
  const pagination = usePagination({
    totalItems: data.length,
    itemsPerPage: 3
  });
  const currentItems: GenerateProduct[] = data.slice(pagination.startIndex, pagination.endIndex);

  if (loading) return <div>読み込み中...</div>;
  if (error) return <div>エラー: {error}</div>;

  return (
    <div>
      <h2>ソフトウェア製品検索</h2>
      <p>製品のキーワード（製品名や主な機能など）から該当する製品を検索できます。</p>
      <br />
      <CategorySearch />
      <br />
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
              <TableCell sx={{ fontWeight: 'bold' }}>製品番号</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>製品名</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>概要</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }} align="center">操作</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentItems.map((product) => (
              <TableRow
                key={product.id}
                sx={{
                  '&:hover': { backgroundColor: '#f8f8f8' },
                }}
              >
                <TableCell>{product.productno}</TableCell>
                <TableCell>{product.productname}</TableCell>
                <TableCell>{product.description}</TableCell>


                <TableCell align="center">
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    onClick={() => console.log('clicked', product.id)}
                  >
                    構成作成
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {data.length === 0 && (
        <div style={{ textAlign: 'center', padding: '20px' }}>
          検索結果がありません
        </div>
      )}

      <div>
        <button
          onClick={pagination.previousPage}
          disabled={!pagination.hasPreviousPage}
        >
          前へ
        </button>
        <span>
          {pagination.currentPage} / {pagination.totalPages}
        </span>
        <button
          onClick={pagination.nextPage}
          disabled={!pagination.hasNextPage}
        >
          次へ
        </button>
      </div>
    </div>
  );
}