//CartSlice.ts
'use client';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem, CartState } from '@/types/cartitem';
import { isTemplateExpression } from 'typescript';
import { v4 as uuidv4 } from 'uuid';
import { actionAsyncStorage } from 'next/dist/client/components/action-async-storage-instance';
import { RootState } from '../../stores';
import { stringToAST } from 'openapi-typescript';

const initialState: CartState = {
  carts: {},
  activeCartId: null,
};

export const selectCartById = (state: RootState, cartId: string) =>
  state.cart.carts[cartId] || null;

const generateShortId = () => {
  return uuidv4().substring(0, 9);
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    createCart: (state) => {
      const newCartId = generateShortId();
      //cartが未定義の場合は、undefinedにプロパティを設定できないため空のオブジェクトを作る（初期化する）
      if (!state.carts) {
        state.carts = {};
      }
      state.carts[newCartId] = {
        items: [],
        totalAmount: 0,
      };
      state.activeCartId = newCartId;
      console.log('newCartId', newCartId);
      console.log('state', state.carts[newCartId].items);
      return state;
    },

    setActiveCart: (state, action: PayloadAction<string>) => {
      if (state.carts[action.payload]) {
        state.activeCartId = action.payload;
      }
    },

    addToCart: (
      state,
      action: PayloadAction<{ cartId: string; item: CartItem }>
    ) => {
      const { cartId, item } = action.payload;
      const cart = state.carts[cartId];

      if (!cart) return;

      const existingItem = cart.items.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity = item.quantity;
      } else {
        cart.items.push(item);
      }

      // 合計金額の再計算
      cart.totalAmount = cart.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
    updateCartItem: (
      state,
      action: PayloadAction<{
        cartId: string;
        item: CartItem;
      }>
    ) => {
      const { cartId, item } = action.payload;
      if (!state.carts[cartId]) {
        state.carts[cartId] = {
          items: [],
          totalAmount: 0,
        };
      }
      const existingItem = state.carts[cartId].items.find(
        (i) => i.id === item.id
      );
      if (existingItem) {
        existingItem.quantity = item.quantity;
      } else {
        state.carts[cartId].items.push(item);
      }

      //合計金額の再計算
      state.carts[cartId].totalAmount = state.carts[cartId].items.reduce(
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

export const { createCart, setActiveCart, addToCart, clearPersistedData, updateCartItem } =
  cartSlice.actions;
export const cartReducer = cartSlice.reducer;
