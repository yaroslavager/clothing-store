import { useEffect } from "react";
import { useCartStore } from "../../entities/cart/model/cartStore";
import "./cartPage.scss";

function CartPage() {
  const cartItems = useCartStore((state) => state.cartItems);
  const decrease=useCartStore((state)=> state.decrease)
  const addItem= useCartStore((state)=>state.addItem)
  const deleteItem=useCartStore((state)=>state.deleteItem)
  console.log("Содержимое корзины:", cartItems);
  useEffect(()=>{
document.title=`Cart | Shop.CO`
  },[])
  return (
<>
    <div className="cart-page__main-wrapper container">
      <h1 className="cart-page__title">YOUR CART</h1>
      <div className="cart-page__order-wrapper">
        <div className="cart-page__products">
          {cartItems.length >0 ?(
          
          cartItems.map((product) => (
            <div key={product.id} className="cart-page__product-wrapper">
              <div className="cart-page__product-info">
                <img
                  className="cart-page__img"
                  src={product.img[0]}
                  alt="img of product"
                />
                <div>
                  <h3 className="cart-page__product-title">{product.name}</h3>
                  <p className="cart-page__product-description">Size: {product.chosenSize}</p>
                  <p className="cart-page__product-description">Color: {product.color}</p>
                  <span className="cart-page__price cart-page__price--padding">${product.price}</span>
                </div>
              </div>
              <div className="cart-page__product-buttons">
                <button onClick={()=>deleteItem(product)} className="cart-page__delete-button">
                  <img src="./cart/deletebutton.svg" alt="" />
                
                </button>
                <div className="cart-page__count">
                  <button className="cart-page__count-button" 
                  onClick= {()=>decrease(product)}
                  >-</button>
                  <span>{product.count}</span>{" "}
                  <button className="cart-page__count-button"
                  onClick={()=>addItem(product, 1, product.chosenSize)}
                  >+</button>
                </div>
              </div>
            </div>
          )
        )
          ) : ( <p className="cart-page__products--none">Your cart is empty</p> )


      }
        </div>

        <div className="cart-page__info-wrapper">
          <h2 className="cart-page__info-title">Order Summary</h2>

          <div className="cart-page__info">
            <div className="cart-page__info-price">
              <p className="cart-page__info-price-title">Subtotal</p>
              <span className="cart-page__price">
                ${cartItems.reduce((acc, el) => (el.price*el.count )+ acc, 0)}
              </span>
            </div>
            <div className="cart-page__info-price">
              <p className="cart-page__info-price-title">Discount</p>
              <span className="cart-page__info-price--discount">
                {cartItems.some((el) => el.discount && el.discount > 0) ? `-` : ``}$
                {cartItems.reduce(
                  (acc, el) => (el.discount ? el.discount + acc : acc),
                  0,
                )}
              </span>
            </div>
          </div>
          <hr />
          <div className="cart-page__total-price">
            <p>Total</p>{" "}
            <span className="cart-page__price">
              ${cartItems.reduce(
                (acc, el) =>
                  el.discount ? ((el.price - (el.price * el.discount) / 100)*el.count)+acc : (el.price*el.count)+acc,
                0,
              )}
            </span>
          </div>
          <div className="cart-page__applycation">
            <label
              className="cart-page__input-wrapper"
              htmlFor="cart-page-input"
            >
              <img src="/cart/promocode.svg" alt="" />
              
              <input
                id="cart-page-input"
                className="cart-page__input"
                type="text"
                placeholder="Add promo code"
              />
            </label>

            <button className="cart-page__application-button">Apply</button>
          </div>
          <button className="cart-page__checkout-button">Go to Checkout</button>
        </div>
      </div>
    </div>
    </>
  );
}
export default CartPage;
