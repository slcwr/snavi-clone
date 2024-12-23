'use client';
import { useAppSelector } from '@/stores';
import { Cartrmbutton } from '../../components/atoms/Button/CartrmButton';

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
  Button,
} from '@mui/material';
import { isTemplateMiddle } from 'typescript';

export default function () {
  const cartItems = useAppSelector((state) => state.cart.items);

  const calculateTotal = () => {
    return cartItems.reduce((sum, item) => {
      const id = item.id;
      const quantity = item.quantity || 0;
      return sum + quantity * item.price;
    }, 0);
  };

  return (
    
    <div>
        <h2>カート</h2>
        <Cartrmbutton/>
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
              <TableCell sx={{ fontWeight: 'bold' }}>製品名</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>製品数量</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>製品価格</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>小計</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartItems.map((item) => (
              <TableRow
                key={item.id}
                sx={{
                  '&:hover': { backgroundColor: '#f8f8f8' },
                }}
              >
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell>{item.quantity * item.price}円</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ textAlign: 'right', mt: 2, pr: 2 }}>
            <Typography variant="h6">合計金額: {calculateTotal()}円</Typography>
     </Box>
    </div>
  );
}
