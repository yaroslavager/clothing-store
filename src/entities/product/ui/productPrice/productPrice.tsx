import "./productPrice.scss"

interface ProductPrice{
    price: number,
    discount?: number | null
}

function ProductPrice({price, discount}: ProductPrice){
    return(
<>

 <div className="product-price__price">
            <span className="product-price__price--current-price">
              $
              {discount
                ? price - (price * discount) / 100
                : price}
            </span>
            {discount && (
              <>
                <span className="product-price__price--full-price">
                  ${price}
                </span>
                <span className="product-price__discount">
                  -{discount}%
                </span>
              </>
            )}
          </div>

</>

 )   
}

export default ProductPrice