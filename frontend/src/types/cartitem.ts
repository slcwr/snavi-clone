export interface CartItem {
    id: string;
    name: string;
    quantity: number;
    price: number;
}


  export interface CartState {
    carts: {
      [cartId: string]: {
        items: CartItem[];
        totalAmount: number;
      }
    };
    activeCartId: string | null;
  }
  