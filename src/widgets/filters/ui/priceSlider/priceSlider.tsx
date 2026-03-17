import "./priceSlider.scss";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

  interface PriceProps{
    price: number[],
    setPrice: (newValue: number[])=>void
  }

function PriceSlider({ price, setPrice }: PriceProps) {

  return (
    <>
      <div className="price-slider">
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
      </div>
    </>
  );
}
export default PriceSlider;
