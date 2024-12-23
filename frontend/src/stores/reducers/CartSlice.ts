//CartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem } from '@/types/cartitem';
import { isTemplateExpression } from 'typescript';

interface CartState {
  items: CartItem[];
  totalAmount: number;
}

const initialState: CartState = {
  items: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
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
  // saveToLocalStorage: (state) => {
  //   localStorage.setItem('cart', JSON.stringify(state.items));
  // },
});

export const { addToCart, clearPersistedData } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
