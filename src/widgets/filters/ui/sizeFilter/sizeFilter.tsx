import "./sizeFilter.scss";
import { sizes } from "../../../../shared/config/sizes";
import { useState } from "react";



function SizeFilter() {
const [chosenSize, setSize]=useState<string|null>(null)


  return (
    <fieldset className="size-filter__wrapper">
      <legend className="size-filter__title">Size</legend>
      {sizes.map((size, inx) => (
    
          <label
          
            key={size}
            className={`size-filter__label ${chosenSize===size? "size-filter__label--chosen" : ""} `}
            htmlFor={`"size-filter__${inx}"`}
          >
            <input

            onChange={()=> setSize(size)}
              checked={chosenSize===size}

              className="size-filter__input"
              id={`"size-filter__${inx}"`}
              type="checkbox"
            />
            <span className={`size-filter__name ${chosenSize===size? "size-filter__name--chosen" : ""}     `}>{size}</span>
          </label>
        
      ))}
    </fieldset>
  );
}
export default SizeFilter;
