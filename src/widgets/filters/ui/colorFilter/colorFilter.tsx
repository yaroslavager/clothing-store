import "./colorFilter.scss";
import { colors } from "./colors/colors";


interface ColorProps{
    colorId: number | null;
    setColor: (id: number)=> void
}


function ColorFilter({ colorId, setColor } : ColorProps ){
  return (
    <div className="color-filter__wrapper">
      {colors.map((color) => (
        <label
          key={color.id}
          className="color-filter__label"
          htmlFor={`color-filter__${color.id}`}
          style={{ backgroundColor: color.hex }}
        >
          <input 
          checked={colorId===color.id}
           onChange={() => setColor(color.id)}
            id={`color-filter__${color.id}`}
            className="color-filter__input"
            type="checkbox"
          />

          <svg
            className="color-filter__check"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 3750 3750"
          >
            <path
              fillRule="evenodd"
              fill="white"
              fillOpacity="1"
              d="M 707.742188 1930.46875 C 1233.671875 1894.089844 1143.261719 2735.75 1466.191406 2950.367188 C 1932.921875 2658.859375 2106.210938 1208.050781 3431.800781 496.660156 C 2557.660156 582.070312 1819.441406 1440.378906 1512.328125 2260.5 C 1449.449219 1767.371094 885.992188 1428.929688 707.742188 1930.46875 Z M 707.742188 1930.46875 "
            />
          </svg>
        </label>
      ))}
    </div>
  );
}
export default ColorFilter;
