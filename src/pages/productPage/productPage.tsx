import "./productPage.scss";
import { useParams } from "react-router-dom";
import { products } from "../../entities/product/model/products";
import ProductPrice from "../../shared/ui/productPrice/productPrice";

function ProductPage() {
  const { id } = useParams();
  const product = products.find((product) => product.id === Number(id));
  if (!product)
    return <p className="product-page--product-not-found">Product not found</p>;
  return (
    <div className="product-page__wrapper container">
      <div className="product-page__img-wrapper">
        <img className="product-page__main-img" src={product.img} alt="" />
      </div>

      <div className="product-page__info">
        <h1 className="product-page__h1">{product.name.toUpperCase()}</h1>
        <span className="product-page__reviews">{product.reviews?.total}</span>
        <ProductPrice price={product.price} discount={product.discount} />
        <p className="product-page__description">{product.description}</p>
        <hr className="product-page__hr" />
        <div className="product-page__color-selection"> 
<p>Select Colors</p>
      <div className="product-page__colors">COLORS</div>
        </div>
        <hr className="product-page__hr" />
        <div className="product=page__size-selection">
          <p>Choose Size</p>
          <div className="product-page__sizes">
            {product.size.map(size=>(
              <div key={size} className="product-page__size">{size}</div>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
