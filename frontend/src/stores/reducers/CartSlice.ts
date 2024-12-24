//CartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem, CartState } from '@/types/cartitem';
import { isTemplateExpression } from 'typescript';
import { v4 as uuidv4 } from 'uuid';
import { actionAsyncStorage } from 'next/dist/client/components/action-async-storage-instance';

const initialState: CartState = {
  items: [],
  totalAmount: 0,
  cartId: null,
  activeCartId: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    initializeCart: (state) => {
      state.cartId = uuidv4(); // 新しいカートIDを生成
    },
    setActiveCart: (state, action: PayloadAction<string>) => {
      state.activeCartId = action.payload;
    },
    addToCart: (state, action: PayloadAction<CartItem>) => {
      //既存のアイテムを探す
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        //既存アイテムの追加
        existingItem.quantity = action.payload.quantity;
      } else {
        //新規アイテムを追加
        state.items.push(action.payload);
      }

      //合計金額を再計算
      state.totalAmount = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
    clearPersistedData: (state) => {
      // 状態を初期状態に戻す
      return initialState;
    },
  },
});

export const { initializeCart, setActiveCart, addToCart, clearPersistedData } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
