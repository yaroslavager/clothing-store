import { create } from "zustand";
import { products } from "../../product/model/products";

export interface CartItem {
  id: number;
  name: string;
  size: ("xs" | "s" | "m" | "l" | "xl")[];
  color: string[];
  price: number;
  discount?: number | null;
  img: string;
}

export const useCartStore = create((set) => ({
  cartItems: [],

  addItem: (product) =>
    set((state) => {
      console.log("Добавляем в стор:", product);
      const existing = state.cartItems.find(
        (productInCart) =>
          productInCart.id === product.id &&
          productInCart.size === product.size &&
          productInCart.color === product.color,
      );
      if (existing) {
        return {
          cartItems: state.cartItems.map((productInCart) => {
            return productInCart.id === product.id &&
              productInCart.size === product.size &&
              productInCart.color === product.color
              ? { ...productInCart, count: productInCart.count + 1 }
              : productInCart;
          }),
        };
      }
      return { cartItems: [...state.cartItems, { ...product, count: 1 }] };
    }),
  // deleteItem: (product)=>set((state)=>{

  // }),
}));
