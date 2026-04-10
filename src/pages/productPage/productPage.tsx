import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useCartStore } from "../../entities/cart/model/cartStore";
import { useState } from "react";

import "./productPage.scss";

import { products } from "../../entities/product/model/products";
import { colors } from "../../shared/config/colors";
import ProductPrice from "../../shared/ui/productPrice/productPrice";


function ProductPage() {
  const addItem = useCartStore((state) => state.addItem);
  const [chosenSize, setSize] = useState<string | null>(null);
  const [count, setCount] = useState(0);

  const { id } = useParams();
  const product = products.find((product) => product.id === Number(id));

  useEffect(() => {
    if (product) {
      document.title = `${product.name} | SHOP.CO`;
    }
  }, [product]);

  if (!product)
    return <p className="product-page--product-not-found">Product not found</p>;
  return (
    <>
      <div className="product-page__wrapper container">


        <div className="product-page__img-wrapper">
          
<img className="product-page__imgs" src={product.img[1]} alt="" />
<img className="product-page__imgs" src={product.img[2]} alt="" />
<img className="product-page__imgs" src={product.img[3]} alt="" />

<img className="product-page__main-img" src={product.img[0]} alt="" />
        </div>




        <div className="product-page__info">
          <h1 className="product-page__h1">{product.name.toUpperCase()}</h1>
          <span className="product-page__reviews">
            {product.reviews?.total}
          </span>
          <ProductPrice price={product.price} discount={product.discount} />
          <p className="product-page__description">{product.description}</p>
          <hr className="product-page__hr" />
          <div className="product-page__color-selection">
            <p>Select Colors</p>
            <div className="product-page__colors-wrapper">
              {product.color?.map((color) => {
                const hex =
                  colors.find((c) => c.name === color)?.hex ?? "transparent";
                return (
                  <label
                    key={color}
                    htmlFor={`product-page__${color}`}
                    className="product-page__colors-label"
                    style={{ backgroundColor: hex }}
                  >
                    <input
                      id={`product-page__${color}`}
                      className="product-page__colors-input"
                      type="checkbox"
                    />
                  </label>
                );
              })}
            </div>
          </div>
          <hr className="product-page__hr" />
          <div className="product-page__size-selection">
            <p>Choose Size</p>
            <div className="product-page__sizes">
              {product.size.map((size) => (
                <label
                  htmlFor={`product-page__${size}`}
                  key={size}
                  className={`product-page__size-label ${chosenSize === size ? "product-page__size-label--chosen" : ""}`}
                >
                  {size}
                  <input
                    checked={chosenSize === size}
                    onChange={() => setSize(size)}
                    id={`product-page__${size}`}
                    className="product-page__size-input"
                    type="checkbox"
                  />
                </label>
              ))}
            </div>
          </div>
          <hr className="product-page__hr" />
          <div className="product-page__add-product">
            <div className="product-page__count">
              {" "}
              <button
                className="product-page__count-button"
                onClick={() => count > 0 && setCount((prev) => prev - 1)}
              >
                -
              </button>{" "}
              <span>{count}</span>{" "}
              <button
                className="product-page__count-button"
                onClick={() => setCount((prev) => prev + 1)}
              >
                +
              </button>{" "}
            </div>

            <button
              className="product-page__button"
              onClick={() => addItem(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductPage;
