//src/components/organisms/ProductList
import { useEffect, useState, useMemo } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/pages/products/ProductList.module.scss';
import { CategorySearch } from '../../components/molecules/SearchForm/CategorySearch';
import { usePagination } from '../../hooks/usePagination';
import Button from '../../components/atoms/Button';
import { useProducts } from '../../hooks/useProducts';
import { Product } from '../../types/product';
import { BreadcrumbsComponent } from '../../components/molecules/Breadcrumbs';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { ConstructionOutlined } from '@mui/icons-material';

export default function ProductList() {
  
  const [isClient, setIsClient] = useState(false);
  const { data, loading, error } = useProducts();
  const [currentItems, setCurrentItems] = useState<Product[]>([]);
  const pagination = usePagination({
    totalItems: data?.length || 0,
    itemsPerPage: 5,
  });

  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  //無限ループになる書き方
  //状態更新→再レンダリング→paginationの再生成→依存配列の変更→useEffect再実行→状態更新・・・
  //   useEffect(() => {
  //     if (data) {
  //slice()は新しい配列を作成する。参照が異なるため、内容が同じでも[1,2,3] === [1,2,3] →falseになる。
  //         setCurrentItems(data.slice(pagination.startIndex, pagination.endIndex));
  //     }
  // }, [data, pagination.startIndex, pagination.endIndex]);

  //
  useEffect(() => {
    //データがない時は処理中断
    if (!data) return;
    const newItems = data.slice(pagination.startIndex, pagination.endIndex);
    //値を比較して同じなら更新しない
    if (JSON.stringify(newItems) !== JSON.stringify(currentItems)) {
      setCurrentItems(newItems);
    }
  }, [data, pagination]);

  const handleSubmit = async () => {
    try {
      await router.push({
        pathname: 'products/generateproducts',
      });
    } catch (error) {
      console.error('Navigation error:', error);
    }
  };

  const renderContent = () => {
    if (!isClient) return null;
    if (loading) return <div>読み込み中...</div>;
    if (error) return <div>エラー: {error}</div>;
    if (!data) return <div>データが見つかりません</div>;

    return (
      <div>
        <BreadcrumbsComponent/>
        <h2>ソフトウェア製品検索</h2>
        <p>
          製品のキーワード（製品名や主な機能など）から該当する製品を検索できます。
        </p>
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
                },
              },
            }}
            aria-label="product table"
          >
            <TableHead>
              <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                <TableCell sx={{ fontWeight: 'bold' }}>製品番号</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>製品名</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>概要</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} align="center">
                  操作
                </TableCell>
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
                      onClick={() => handleSubmit()}
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
  };
  return renderContent();
}
