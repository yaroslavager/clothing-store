import { useState } from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import "./catalogPage.scss";
import { products } from "../../entities/product/model/products";
import Filters from "../../widgets/filters/filters";
import ProductGrid from "../../widgets/productGrid/productGrid";

function CatalogPage() {
  const [price, setPrice] = useState<number[]>([50, 200]);
  const [colorId, setColor] = useState<number | null>(null);
  const [chosenSize, setSize] = useState<string | null>(null);

  const [filtersIsOpen, setFiltersIsOpen] = useState(false);
  const fFiltersIsOpen = () => {
    setFiltersIsOpen(!filtersIsOpen);
  };

  useEffect(() => {
    document.title = `Catalog | Shop.CO`;
  }, []);

  const [searchParams] = useSearchParams();
 
 

  const arrivalsParam = searchParams.get(`arrival`);
  const reviewParam = searchParams.get(`review`);
  const categoryParam = searchParams.get(`category`);
  const sexParam = searchParams.get(`sex`);
  const colorParam = searchParams.get(`color`);
  const sizeParam = searchParams.get(`size`);
  const styleParam = searchParams.get(`style`);
  const discountParam = searchParams.get(`sale`);
  //STYLES

  const filteredParam = products.filter((product) => {
    if (arrivalsParam === "new" && product.date !== arrivalsParam) {
      return false;
    }
    if (reviewParam === "top" && (product.reviews?.total || 0) < 4) {
      return false;
    }
    if (categoryParam && product.category.toLowerCase() !== categoryParam) {
      return false;
    }
    if (sexParam && product.sex !== sexParam) {
      return false;
    }
    if (colorParam && product.color !== colorParam) {
      return false;
    }
    if (sizeParam && product.size !== sizeParam) {
      return false;
    }
    if (styleParam && product.style !== styleParam) {
      return false;
    }
    if (discountParam === "discount" && !product.discount) {
      return false;
    }
    return true;
  });

 const getTitle=()=>{
if(categoryParam) return categoryParam;
if(styleParam) return styleParam;
if(sexParam) return sexParam;
if(discountParam) return discountParam
if(arrivalsParam) return arrivalsParam
return "casual"
 }


  return (
    <>
      <main className="catalog-page__wrapper container">
        <Filters
          price={price}
          setPrice={setPrice}
          colorId={colorId}
          setColor={setColor}
          chosenSize={chosenSize}
          setSize={setSize}
          isOpen={filtersIsOpen}
          filtersIsOpen={fFiltersIsOpen}
  
        />
        
        <ProductGrid
          products={filteredParam}
          title={getTitle()}
          showCount
          filtersIsOpen={fFiltersIsOpen}
          filtersButtonIs={true}
        />
        
      </main>
    </>
  );
}

export default CatalogPage;
