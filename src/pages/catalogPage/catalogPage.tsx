import { useState } from "react";
import "./catalogPage.scss"
import Filters from "../../widgets/filters/filters";
import ProductGrid from "../../widgets/productGrid/productGrid";

function CatalogPage() {
  const [price, setPrice] = useState<number[]>([50, 200]);
  const [colorId, setColor] = useState<number | null>(null);
  const [chosenSize, setSize] = useState<string | null>(null);

  return (
    <main className="catalog-page__wrapper container">
      <Filters
        price={price}
        setPrice={setPrice}
        colorId={colorId}
        setColor={setColor}
        chosenSize={chosenSize}
        setSize={setSize}
      />
      <ProductGrid title="Casual" showCount/>
    </main>
  );
}

export default CatalogPage;
