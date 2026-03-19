import "./productGrid.scss"
import { products } from "../../entities/product/model/products"


function ProductGrid(){

    return(
<section className="product-grid">
    <div className="product-grid__head">
<p className="product-grid__title"> Casual</p> 
</div>
<div className="product-grid__wrapper">
{
    products.map(product=>(
<div key={product.id} className="product-grid__product"> 
<img className="product-grid__img" src={product.img} alt="" />
<p className="product-grid__title">{product.name}</p>
{/* звезды */}
{product.reviews&&
<div className="product-grid__reviews">
    здесь звезды <span className="product-grid__reviews-grade">{product.reviews.total}/5</span></div> }

<div className="product-grid__price"><span className="product-grid__price--current-price">${product.discount ?product.price - (product.price * product.discount)/100   : product.price }</span>
{product.discount&&
<>
 <span className="product-grid__price--full-price">${product.price}</span> 
 <span className="product-grid__discount">-{product.discount}%</span></>
 }

 </div>
</div>

    ))
}
</div>

</section>
)
}
export default ProductGrid