import "./priceSlider.scss";
import { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

function PriceSlider() {
    const [price, setPrice ]=useState([50, 200])
  return (
    <><div  className="price-slider">
      <Slider
       range 
      min={0} 
      max={500} 
      value={price}
      onChange={(newValue)=> setPrice(newValue as number[]) }
      marks={{
        [price[0]] : `${price[0]}$`,
        [price[1]]: `${price[1]}$`
      }}
      />
  </div>
    </>
  );
}
export default PriceSlider;
