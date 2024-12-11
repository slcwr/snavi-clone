import { useEffect, useState } from 'react';
import { useProducts } from '../../hooks/useProducts';
import { useRouter } from 'next/router';
import { useDeleteProduct } from '../../hooks/useDeleteProducts';
import { useUpdateProduct } from '../../hooks/useUpdateProducts';
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
import { GenerateProduct } from '@/types/product';


export default function AdminDashboard() {
  
  const [generateproducts, setGenerateProduct ] = useState<GenerateProduct[]>([]);
  const { handleCellEditCommit } = useUpdateProduct(setGenerateProduct);
  const { data, loading, error } = useProducts();
  const {
    deleteDialogOpen,
    handleDelete,
    executeDelete,
    handleCloseDialog,
  } = useDeleteProduct(setGenerateProduct);
  const router = useRouter();

  useEffect(() => {
    if (data) {
      setGenerateProduct(data);
    }
  }, [data]);

  // 編集完了時の処理→hooksに移動 

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
        <Csvimportbutton />
        <p>表内は直接編集できます。編集内容は即時反映されます。</p>
        <Box sx={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={generateproducts}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { pageSize: 5, page: 0 },
              },
            }}
            pageSizeOptions={[5]}
            processRowUpdate={async (updatedRow, originalRow) => {
              await handleCellEditCommit(updatedRow, originalRow);
              return updatedRow;
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