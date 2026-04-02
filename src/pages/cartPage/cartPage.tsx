import { useEffect } from "react";
import { useCartStore } from "../../entities/cart/model/cartStore";
import "./cartPage.scss";

function CartPage() {
  const cartItems = useCartStore((state) => state.cartItems);
  const deleteItem=useCartStore((state)=> state.deleteItem)
  const addItem= useCartStore((state)=>state.addItem)
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
          {cartItems.map((product) => (
            <div key={product.id} className="cart-page__product-wrapper">
              <div className="cart-page__product-info">
                <img
                  className="cart-page__img"
                  src={product.img}
                  alt="img of product"
                />
                <div>
                  <h3 className="cart-page__product-title">{product.name}</h3>
                  <p>Size: {product.size}</p>
                  <p>Color: {product.color}</p>
                  <span>${product.price}</span>
                </div>
              </div>
              <div className="cart-page__product-buttons">
                <button className="cart-page__delete-button">
                  <svg
                    width="18"
                    height="20"
                    viewBox="0 0 18 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.25 3H13.5V2.25C13.5 1.65326 13.2629 1.08097 12.841 0.65901C12.419 0.237053 11.8467 0 11.25 0H6.75C6.15326 0 5.58097 0.237053 5.15901 0.65901C4.73705 1.08097 4.5 1.65326 4.5 2.25V3H0.75C0.551088 3 0.360322 3.07902 0.21967 3.21967C0.0790178 3.36032 0 3.55109 0 3.75C0 3.94891 0.0790178 4.13968 0.21967 4.28033C0.360322 4.42098 0.551088 4.5 0.75 4.5H1.5V18C1.5 18.3978 1.65804 18.7794 1.93934 19.0607C2.22064 19.342 2.60218 19.5 3 19.5H15C15.3978 19.5 15.7794 19.342 16.0607 19.0607C16.342 18.7794 16.5 18.3978 16.5 18V4.5H17.25C17.4489 4.5 17.6397 4.42098 17.7803 4.28033C17.921 4.13968 18 3.94891 18 3.75C18 3.55109 17.921 3.36032 17.7803 3.21967C17.6397 3.07902 17.4489 3 17.25 3ZM7.5 14.25C7.5 14.4489 7.42098 14.6397 7.28033 14.7803C7.13968 14.921 6.94891 15 6.75 15C6.55109 15 6.36032 14.921 6.21967 14.7803C6.07902 14.6397 6 14.4489 6 14.25V8.25C6 8.05109 6.07902 7.86032 6.21967 7.71967C6.36032 7.57902 6.55109 7.5 6.75 7.5C6.94891 7.5 7.13968 7.57902 7.28033 7.71967C7.42098 7.86032 7.5 8.05109 7.5 8.25V14.25ZM12 14.25C12 14.4489 11.921 14.6397 11.7803 14.7803C11.6397 14.921 11.4489 15 11.25 15C11.0511 15 10.8603 14.921 10.7197 14.7803C10.579 14.6397 10.5 14.4489 10.5 14.25V8.25C10.5 8.05109 10.579 7.86032 10.7197 7.71967C10.8603 7.57902 11.0511 7.5 11.25 7.5C11.4489 7.5 11.6397 7.57902 11.7803 7.71967C11.921 7.86032 12 8.05109 12 8.25V14.25ZM12 3H6V2.25C6 2.05109 6.07902 1.86032 6.21967 1.71967C6.36032 1.57902 6.55109 1.5 6.75 1.5H11.25C11.4489 1.5 11.6397 1.57902 11.7803 1.71967C11.921 1.86032 12 2.05109 12 2.25V3Z"
                      fill="#FF3333"
                    />
                  </svg>
                </button>
                <div className="cart-page__count">
                  <button className="cart-page__count-button" 
                  onClick= {()=>deleteItem(product)}
                  >-</button>
                  <span>{product.count}</span>{" "}
                  <button className="cart-page__count-button"
                  onClick={()=>addItem(product)}
                  >+</button>
                </div>
              </div>
            </div>
          ))}
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
                {cartItems.some((el) => el.discount > 0) ? `-` : ``}$
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
              {cartItems.reduce(
                (acc, el) =>
                  el.discount ? el.price - (el.price * el.discount) / 100 : el.price,
                0,
              )}
            </span>
          </div>
          <div className="cart-page__applycation">
            <label
              className="cart-page__input-wrapper"
              htmlFor="cart-page-input"
            >
              <svg
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.0766 12.4856L13.7653 3.17438C13.5917 2.99963 13.3851 2.86109 13.1576 2.76679C12.93 2.67248 12.686 2.62429 12.4397 2.62501H3.75001C3.45164 2.62501 3.16549 2.74353 2.95451 2.95451C2.74353 3.16549 2.62501 3.45164 2.62501 3.75001V12.4397C2.62429 12.686 2.67248 12.93 2.76679 13.1576C2.86109 13.3851 2.99963 13.5917 3.17438 13.7653L12.4856 23.0766C12.8372 23.4281 13.3141 23.6255 13.8113 23.6255C14.3084 23.6255 14.7853 23.4281 15.1369 23.0766L23.0766 15.1369C23.4281 14.7853 23.6255 14.3084 23.6255 13.8113C23.6255 13.3141 23.4281 12.8372 23.0766 12.4856ZM13.8113 21.2203L4.87501 12.2813V4.87501H12.2813L21.2175 13.8113L13.8113 21.2203ZM9.37501 7.87501C9.37501 8.17168 9.28703 8.46169 9.12221 8.70836C8.95739 8.95504 8.72312 9.1473 8.44903 9.26083C8.17494 9.37436 7.87334 9.40406 7.58237 9.34619C7.2914 9.28831 7.02413 9.14545 6.81435 8.93567C6.60457 8.72589 6.46171 8.45861 6.40383 8.16764C6.34595 7.87667 6.37566 7.57507 6.48919 7.30098C6.60272 7.02689 6.79498 6.79263 7.04165 6.6278C7.28833 6.46298 7.57834 6.37501 7.87501 6.37501C8.27283 6.37501 8.65436 6.53304 8.93567 6.81435C9.21697 7.09565 9.37501 7.47718 9.37501 7.87501Z"
                  fill="black"
                  fill-opacity="0.4"
                />
              </svg>
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
