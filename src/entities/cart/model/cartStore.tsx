import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
  id: number;
  name: string;
  size: ("xs" | "s" | "m" | "l" | "xl")[];
  color: string[];
  price: number;
  discount?: number | null;
  img: string;
}

export const useCartStore = create(
  
  
  persist(
  (set) => ({
  cartItems: [],

  addItem: (product, count, chosenSize) =>
    set((state) => {
      console.log("Добавляем в стор:", product);
      const sizeToCompare= chosenSize || product.chosenSize
      const existing = state.cartItems.find(
        (productInCart) =>
          productInCart.id === product.id &&
          productInCart.chosenSize === sizeToCompare 
          //&& productInCart.color === product.color,
      );
      if (existing) {
        return {
          cartItems: state.cartItems.map((productInCart) => {
            return productInCart.id === product.id &&
              productInCart.chosenSize === sizeToCompare 
              
//&& productInCart.color === product.color
              ? { ...productInCart, count: productInCart.count + count }
              : productInCart;
          }),
        };
      }
      return { cartItems: [...state.cartItems, { ...product, count, chosenSize: sizeToCompare }] };
    }),
  decrease: (product)=>set((state)=>{
const existing = state.cartItems.find(el=> el.id===product.id && el.chosenSize===product.chosenSize)
if(existing){
 if(existing.count >1){
  return {
    cartItems: state.cartItems.map(el=> el.id===product.id && el.chosenSize === product.chosenSize? {...el, count: el.count -1} : el )   }
 }
 else {
return {cartItems:state.cartItems.filter(el=> el.id!==product.id || el.chosenSize!==product.chosenSize)}

 }

}

  }),
  
deleteItem: (product)=> set((state)=>{
return {cartItems: state.cartItems.filter(el=>el.id!==product.id || el.chosenSize!==product.chosenSize) }

})

  // deleteItem: (product)=>set((state)=>{

  // }), 





}),
{name: "cart-storage"}


  )
);
