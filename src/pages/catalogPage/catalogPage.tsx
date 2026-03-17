import { useState } from "react";
import Filters from "../../widgets/filters/filters";


function CatalogPage() {
  const [price, setPrice] = useState<number[]>([50, 200]);
  const [colorId, setColor] = useState<number|null>(null);

  return (
    <main className="container">
      <Filters
        price={price}
        setPrice={setPrice}
        colorId={colorId}
        setColor={setColor}
      />
    </main>
  );
}

export default CatalogPage;
