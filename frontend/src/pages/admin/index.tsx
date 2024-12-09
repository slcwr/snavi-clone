import { useEffect, useState } from 'react';
import { useProducts } from '../../hooks/useProducts';
import { useRouter } from 'next/router';
import { useDeleteProduct } from '../../hooks/useDeleteProducts';
import { Csvimportbutton } from '../../components/atoms/Button/CsvImportButton'


import { 
    Dialog,
    DialogTitle, 
    DialogContent, 
    DialogActions, 
    Button,
    Container, 
    Paper, 
    Typography, 
    Box
} from '@mui/material';  
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

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

  // 編集完了時の処理
  const handleCellEditCommit = async (updatedRow: Product, originalRow:Product ) => {
    try {
      const updateData = {
        productno: updatedRow.productno,
        productname: updatedRow.productname,
        description: updatedRow.description,
        updatedAt: new Date().toISOString() // 現在の日時を追加
      };

     
      // APIを呼び出して更新
      const response = await fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/products/${updatedRow.id}`, {
        method: 'PUT',
        headers: {
          'apikey': process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '',
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ''}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=minimal'
        } as HeadersInit,
        body: JSON.stringify(updateData),
      });
      console.log('送信するデータ:', {
        updatedRow,
        updateData,
        url: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/products/${updatedRow.id}`
      });

      if (!response.ok) {
        throw new Error('更新に失敗しました');
      }
    } catch (error) {
      console.error('更新エラー:', error);
      alert('更新に失敗しました');
    }
  };

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 130, editable: false },
    { field: 'productno', headerName: '製品番号', width: 130, editable: true },
    { field: 'productname', headerName: '製品名', width: 200, editable: true },
    { field: 'description', headerName: '説明', width: 300, editable: true },
    {
      field: 'actions',
      headerName: '操作',
      width: 200,
      renderCell: (params) => (
        <Box>
          <Button
            variant="outlined"
            size="small"
            onClick={() => handleDelete(params.row.id)}
            sx={{ mr: 1 }}
          >
            削除
          </Button>
        </Box>
      ),
    },
  ];

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
        <Csvimportbutton/>

        <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={products}
          columns={columns}
          initialState={{
          pagination: {
            paginationModel: { pageSize: 5, page: 0 },
          },
         }}
          pageSizeOptions={[5]}
          processRowUpdate={async (updatedRow, originalRow) => {
            try {
              console.log('Updatingrow.id:', updatedRow.id); // デバッグ用

              const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/products/${updatedRow.id}`, {
              method: 'PUT',
              headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              productno: updatedRow.productno,
              productname: updatedRow.productname,
              description: updatedRow.description
            }),
          });

          if (!response.ok) {
          throw new Error('更新に失敗しました');
          }

          return updatedRow;
            } catch (error) {
          console.error('更新エラー:', error);
          return originalRow;
          }
          }}
          loading={loading}
          disableRowSelectionOnClick
          editMode="row"
        />
        </Box>
      </Box>
    </Container>
  );
}