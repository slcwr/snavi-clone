// pages/admin/index.tsx
import { useEffect, useState } from 'react';
import { useProducts } from '../../hooks/useProducts';
import { useRouter } from 'next/router';
import { useDeleteProduct } from '../../hooks/useDeleteProducts';
import { 
    Dialog,
    DialogTitle, 
    DialogContent, 
    DialogActions, 
    Button 
  } from '@mui/material';  

import { 
  Container, 
  Paper, 
  Typography, 
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';

interface Product {
    id: string;
    productno: string;
    productname: string;
    description: string;
  }

export default function AdminDashboard() {
  const [products, setProducts] = useState<Product[]>([]);
  const { data, loading, error } = useProducts();
  const {
    deleteDialogOpen,
    handleDelete,
    executeDelete,
    handleCloseDialog,
  } = useDeleteProduct(setProducts);
  const router = useRouter();

  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [data]);


  const handleEdit = async (productId: string) => {
    try {
      // 編集ページへ遷移
      await router.push({
        pathname: '/admin/products/edit',
        query: { id: productId }
      });
    } catch (error) {
      console.error('編集ページへの遷移に失敗しました:', error);
      // エラーハンドリングの実装（例：アラート表示など）
      alert('編集ページへの遷移に失敗しました');
    }
  };



  return (
    <Container maxWidth="lg">

      <Dialog
        open={deleteDialogOpen}
        onClose={handleCloseDialog}
      >
        <DialogTitle>削除の確認</DialogTitle>
        <DialogContent>
          この製品を削除してもよろしいですか？この操作は取り消せません。
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>キャンセル</Button>
          <Button onClick={executeDelete} color="error">
            削除
          </Button>
        </DialogActions>
      </Dialog> 

      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          製品管理
        </Typography>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>製品名</TableCell>
                <TableCell>説明</TableCell>
                <TableCell>操作</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>{product.id}</TableCell>
                  <TableCell>{product.productname}</TableCell>
                  <TableCell>{product.description}</TableCell>
                  <TableCell>
                    <button onClick={() => handleEdit(product.id)}>編集</button>
                    <button onClick={() => handleDelete(product.id)}>削除</button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
}