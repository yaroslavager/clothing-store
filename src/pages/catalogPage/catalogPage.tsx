import { useState } from "react";
import "./catalogPage.scss";
import Filters from "../../widgets/filters/filters";
import ProductGrid from "../../widgets/productGrid/productGrid";

function CatalogPage() {
  const [price, setPrice] = useState<number[]>([50, 200]);
  const [colorId, setColor] = useState<number | null>(null);
  const [chosenSize, setSize] = useState<string | null>(null);

  const [filtersIsOpen, setFiltersIsOpen]=useState(false)
const fFiltersIsOpen=()=>{
  setFiltersIsOpen(!filtersIsOpen)
}

  return (
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
      <ProductGrid title="Casual" showCount filtersIsOpen={fFiltersIsOpen} />
    </main>
  );
}

export default CatalogPage;
