import { useState } from "react";
import Filters from "../../widgets/filters/filters";


function CatalogPage() {
  const [price, setPrice] = useState<number[]>([50, 200]);
  const [colorId, setColor] = useState<number|null>(null);
  const [chosenSize, setSize]=useState<string|null>(null)

  return (
    <main className="container">
      <Filters
        price={price}
        setPrice={setPrice}
        colorId={colorId}
        setColor={setColor}
        chosenSize={chosenSize}
        setSize={setSize}
      />
    </main>
  );
}

export default CatalogPage;
