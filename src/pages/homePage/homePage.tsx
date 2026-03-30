import Hero from "../../widgets/hero/hero";
import BrandsBanner from "../../shared/ui/brandsBanner/brandsBanner";
import ProductGrid from "../../widgets/productGrid/productGrid";
import { products } from "../../entities/product/model/products";

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
        settings
        columns
      />
    </>
  );
}

export default HomePage;
