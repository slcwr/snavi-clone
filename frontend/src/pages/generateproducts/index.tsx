//src/components/organisms/generateProductList
'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/pages/products/ProductList.module.scss';
import { usePagination } from '../../hooks/usePagination';
import { usegenerateProducts } from '../../hooks/useGenerateproducts';
import { GenerateProduct } from '../../types/generateproduct'

import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper
} from '@mui/material';

export default function GenerateProductList() {
    const [isClient, setIsClient] = useState(false);
    const { data, loading, error } = usegenerateProducts();
    const [currentItems, setCurrentItems] = useState<GenerateProduct[]>([]);
    const pagination = usePagination({
        totalItems: data?.length || 0,
        itemsPerPage: 5
    });

    useEffect(() => {
        console.log('data:', data);  // データの中身を確認
        console.log('currentItems:', currentItems);  // 現在の表示アイテムを確認
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
                                }
                            }
                        }}
                        aria-label="product table"
                    >
                        <TableHead>
                            <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                                <TableCell sx={{ fontWeight: 'bold' }}>製品番号</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>製品名</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>製品価格</TableCell>
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
                                    <TableCell>{generateproduct.generateproductno}</TableCell>
                                    <TableCell>{generateproduct.generateproductname}</TableCell>
                                    <TableCell>{generateproduct.price}</TableCell>


                                    <TableCell align="center">

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
    return renderContent();
}