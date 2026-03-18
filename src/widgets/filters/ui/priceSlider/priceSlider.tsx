import "./priceSlider.scss";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

  interface PriceProps{
    price: number[],
    setPrice: (newValue: number[])=>void
  }

function PriceSlider({ price, setPrice }: PriceProps) {

  return (
    
      <fieldset className="price-slider">
          <legend className="price-slider__title">Price</legend>
        <Slider
          range
          min={0}
          max={500}
          value={price}
          onChange={(newValue) => setPrice(newValue as number[])}
          marks={{
            [price[0]]: `${price[0]}$`,
            [price[1]]: `${price[1]}$`,
          }}
        />
      </fieldset>
    


  );
}
export default PriceSlider;
