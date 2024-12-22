//CartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CartItem {
    id: string;
    quantity: number;
    price: number;
}

interface CartState {
items: CartItem[];
totalAmount: number;
}

const initialState: CartState = {
    items: [],
    totalAmount: 0
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state,action: PayloadAction<CartItem>) => {
            state.items.push(action.payload);
            state.totalAmount = state.items.reduce((total, item) => 
            total + (item.price * item.quantity), 0);
        },
        saveToLocalStorage: (state) => {
            localStorage.setItem('cart', JSON.stringify(state.items));
        }
    }
});

export const { addToCart, saveToLocalStorage } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;