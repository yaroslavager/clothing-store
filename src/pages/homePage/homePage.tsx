import Hero from "../../widgets/hero/hero";
import BrandsBanner from "../../shared/ui/brandsBanner/brandsBanner";
import ProductGrid from "../../widgets/productGrid/productGrid";
import { products } from "../../entities/product/model/products";
import ReviewsSlider from "../../shared/ui/reviewsSlider/reviewsSlider";
import BrowsByStyle from "../../widgets/browseByStyle/browseByStyle";


function HomePage() {
  return (
    <>
      <Hero />
      <BrandsBanner />
      <ProductGrid
      products={products}
        title="New Arrivals"
        filter={(product) => product.date === "new"}
        limit={4}
        showButton
        path="/catalog?arrival=new"
        settings
        columns
      />
<hr className="container"/>
      <ProductGrid
      products={products}
        title="Top Selling"
        filter={(product) => product.reviews?.total > 4}
        limit={4}
        showButton
 path="/catalog?review=top"
        settings
        columns
      />
      <BrowsByStyle />
      <ReviewsSlider />
    </>
  );
}

export default HomePage;
