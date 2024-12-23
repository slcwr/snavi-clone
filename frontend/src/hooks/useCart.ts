//useCart.ts
'use client';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { useAppDispatch, useAppSelector } from '@/stores';
import { addToCart } from '@/stores/reducers/CartSlice';

const dispatch = useDispatch();
const cart = useAppSelector((state) => state.cart);

const fetchAndCalculate = async () => {
  const baseUrl = new URL(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/generateproducts`
  );

  const response = await fetch(baseUrl, {
    method: 'GET',
    headers: {
      apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '',
      Authorization: `Bearer ${
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ''
      }`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  const data = await response.json();
dispatch(addToCart(data));

  // const confirmCart = () => {
  //   dispatch(saveToLocalStorage());
  // };

  return { cart, fetchAndCalculate };
};
