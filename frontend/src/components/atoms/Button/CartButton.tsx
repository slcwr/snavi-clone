// components/atoms/Button/CsvReadButton.tsx
'use client';
import { Button, Stack } from '@mui/material';
import { useRouter } from 'next/router';
import { styled } from '@mui/material/styles';
import { useAppSelector, useAppDispatch } from '@/stores';
import React, { useEffect } from 'react';
import {
  addToCart,
  createCart,
  setActiveCart,
  selectCartById,
} from '@/stores/reducers/CartSlice';
import { CartItem } from '@/types/cartitem';
import { store } from '../../../stores';
import { ConstructionOutlined } from '@mui/icons-material';

// スタイルのカスタマイズ（オプション）
const StyledButton = styled(Button)(({ theme }) => ({
  minWidth: '120px',
  '&.MuiButton-contained': {
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

interface CartButtonProps {
  item: CartItem;
}

export const Cartbutton = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const activeCartId = useAppSelector((state) => state.cart.activeCartId);
  const cart = useAppSelector((state) =>
    activeCartId ? selectCartById(state, activeCartId) : null
  );

  const handleAddToCart = async () => {
    console.log('handleAddToCart');
    const items = cart?.items || [];
    if (!activeCartId) {
      console.log('Creating new cart...');
      await dispatch(createCart());
    }
    // storeから直接取得
    const state = store.getState();
    const newCartId = state.cart.activeCartId;
    console.log('newCartId from store', newCartId);
    // if (newCartId) {
    // const additems = state.cart.carts[newCartId].items;
    // console.log('additems',additems);
    // }

    if (newCartId) {
      console.log('Adding items to cart...'); // アイテム追加処理の開始確認
      
      // 各アイテムに対して個別にaddToCartを実行
      items.forEach((item) => {
        console.log('Adding item:', item); // 個別のアイテムの確認
        dispatch(
          addToCart({
            cartId: newCartId,
            item: item,
          })
        );
      });
    }
  };

  const handleViewCart = async () => {
    try {
      await router.push(`generateproducts/cart?id=${activeCartId}`);
    } catch (error) {
      console.error('Navigation error:', error);
    }
  };
  return (
    <Stack direction="row" justifyContent="flex-end">
      <StyledButton
        variant="contained"
        color="primary"
        onClick={handleAddToCart}
        sx={{
          minWidth: '70px',
          px: 2, // パディングを調整
        }}
      >
        構成リストに追加
      </StyledButton>
      <StyledButton
        variant="contained"
        color="primary"
        onClick={handleViewCart}
        sx={{
          minWidth: '70px',
          px: 2, // パディングを調整
        }}
      >
        構成リストを見る
      </StyledButton>
    </Stack>
  );
};
