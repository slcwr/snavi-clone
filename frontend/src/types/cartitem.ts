export interface CartItem {
    id: string;
    name: string;
    quantity: number;
    price: number;
}


export interface CartState {
    cartId: string | null;
    items: CartItem[];
    totalAmount: number;
    activeCartId: string | null;
  }
  