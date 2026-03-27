import { create } from "zustand";
import { products } from "../../product/model/products";

interface CartItem{
id: number,
name: string,
size: ("xs" | "s" | "m" | "l" | "xl")[] ,
color: string[] ,
price: number,
discount?: number | null,
img: string

}

export const useCartStore= create((set)=>{
cartItems: [],
addItem: (product)=> set((state)=>{
const existing= state.cartItems.find((productInCart)=> productInCart.id === product.id && productInCart.size === product.size) ;
if(existing){
    return{
        cartItems: state.cartItems.map(productInCart=>{
            return productInCart.id === product.id && productInCart.size === product.size ?
{...productInCart, count: productInCart.count+1}
: productInCart
}
)
}

}
return {cartItems: [...state.cartItems, {...product, count: 1}]}

})
// deleteItem: (product)=>set((state)=>{


// }),


})