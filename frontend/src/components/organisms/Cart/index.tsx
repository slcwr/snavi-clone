'use client';
import { useAppSelector, useAppDispatch } from '@/stores';
import { Cartrmbutton } from '../../atoms/Button/CartrmButton';
import { useSearchParams } from 'next/navigation';
import { selectCartById } from '../../../stores/reducers/CartSlice';
import { BreadcrumbsComponent } from '../../molecules/Breadcrumbs';
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
import { ConstructionOutlined } from '@mui/icons-material';

export const Cart = () => {
  const searchParams = useSearchParams();
  const state = useAppSelector((state) => state.cart);
  console.log('entire cart state:', state);
  console.log('carts object:', state.carts);
  
  const cartId = searchParams.get('id');
  console.log('cartid', cartId);
  //const cart = useAppSelector((state) => cartId ? state.cart.carts[cartId] : null);
  const cart = useAppSelector((state) =>
    selectCartById(state, cartId as string)
  );
  console.log('cart', cart);
  //cart?.items: cartがnullまたはundefinedの場合、undefinedを返す。cartが存在する場合は、itemsプロパティにアクセス
  const cartItems = cart?.items || [];

  const calculateTotal = () => {
    return cartItems.reduce((sum, items) => {
      const id = items.id as string;
      const quantity = items.quantity || 0;
      return sum + quantity * items.price;
    }, 0);
  };
  
  return (
    <div>
      <BreadcrumbsComponent/>
      <h2>カート</h2>
      <Cartrmbutton />
      <a>構成リストID: {cartId}</a>
      
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
            {cartItems.map((items) => (
              <TableRow
                key={items.id}
                sx={{
                  '&:hover': { backgroundColor: '#f8f8f8' },
                }}
              >
                <TableCell>{items.name}</TableCell>
                <TableCell>{items.quantity}</TableCell>
                <TableCell>{items.price}</TableCell>
                <TableCell>{items.quantity * items.price}円</TableCell>
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
};
