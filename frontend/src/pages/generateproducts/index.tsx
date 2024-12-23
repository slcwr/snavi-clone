//src/components/organisms/generateProductList
'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/pages/products/ProductList.module.scss';
import { usePagination } from '../../hooks/usePagination';
import { usegenerateProducts } from '../../hooks/useGenerateproducts';
import { GenerateProduct } from '../../types/generateproduct';
import { useAppDispatch, useAppSelector } from '@/stores';
import { addToCart, saveToLocalStorage } from '@/stores/reducers/CartSlice';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Typography,
} from '@mui/material';
import { Unstable_NumberInput as NumberInput } from '@mui/base/Unstable_NumberInput';
import { styled } from '@mui/system';

const StyledNumberInput = styled(NumberInput)`
  & {
    display: flex;
    align-items: center;
    width: 120px;
  }

  & input {
    text-align: center;
    width: 60px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin: 0 4px;
  }

  & button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &:hover {
      background-color: rgba(0, 0, 0, 0.04);
    }
    
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`;

export default function GenerateProductList() {
  const [isClient, setIsClient] = useState(false);
  const { data, loading, error } = usegenerateProducts();
  const [currentItems, setCurrentItems] = useState<GenerateProduct[]>([]);
  const pagination = usePagination({
    totalItems: data?.length || 0,
    itemsPerPage: 20,
  });
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    console.log('data:', data); // データの中身を確認
    console.log('currentItems:', currentItems); // 現在の表示アイテムを確認
  }, [data, currentItems]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (data) {
      try {
        setCurrentItems(data.slice(pagination.startIndex, pagination.endIndex));
      } catch (err) {
        console.error('Error setting current items:', err);
      }
    }
  }, [data, pagination.startIndex, pagination.endIndex]);

  const handleQuantityChange = (
    generateproductId: string,
    value: number | undefined
  ) => {
    setQuantities((prev) => ({
      ...prev,
      [generateproductId]: value || 0,
    }));
  };

  const calculateTotal = () => {
    return currentItems.reduce((sum, generateproduct) => {
      const id = generateproduct.id;
      const quantity = quantities[id] || 0;
      return sum + quantity * generateproduct.price;
    }, 0);
  };

  const renderContent = () => {
    if (!isClient) return null;
    if (loading) return <div>読み込み中...</div>;
    if (error) return <div>エラー: {error}</div>;
    if (!data) return <div>データが見つかりません</div>;

    return (
      <div>
        <h2>型番指定見積</h2>
        <p>必要な製品の数量を入力してください。</p>
        <br />
        <h2>表示フィルタ</h2>

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
                <TableCell sx={{ fontWeight: 'bold', width: '50px' }}>
                  数量
                </TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>製品番号</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>製品名</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>製品価格</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>小計</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currentItems.map((generateproduct) => (
                <TableRow
                  key={generateproduct.id}
                  sx={{
                    '&:hover': { backgroundColor: '#f8f8f8' },
                  }}
                >
                  <TableCell>
                    <StyledNumberInput
                      value={quantities[generateproduct.id] || 0}
                      onChange={(event, value) =>
                        handleQuantityChange(generateproduct.id, value)
                      }
                      min={0}
                      slots={{
                        incrementButton: KeyboardArrowUpIcon,
                        decrementButton: KeyboardArrowDownIcon,
                      }}
                      slotProps={{
                        input: {
                          'aria-label': '数量',
                        },
                      }}
                    />
                  </TableCell>

                  <TableCell>{generateproduct.generateproductno}</TableCell>
                  <TableCell>{generateproduct.generateproductname}</TableCell>
                  <TableCell>{generateproduct.price}</TableCell>
                  <TableCell>
                    {(quantities[generateproduct.id] || 0) *
                      generateproduct.price}
                    円
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
        <Box sx={{ textAlign: 'right', mt: 2, pr: 2 }}>
          <Typography variant="h6">合計金額: {calculateTotal()}円</Typography>
        </Box>
      </div>
    );
  };
  return renderContent();
}
