import { Link } from "react-router-dom";
import "./filters.scss";

// import { Link } from "react-router-dom";
import { category, type Category } from "../../shared/config/category";
import { dressStyles, type Style } from "../../shared/config/dressStyle";

import PriceSlider from "./ui/priceSlider/priceSlider";
import ColorFilter from "./ui/colorFilter/colorFilter";
import SizeFilter from "./ui/sizeFilter/sizeFilter";

interface FilterProps {
  price: number[];
  setPrice: (newValue: number[]) => void;
  colorId: number | null;
  setColor: (id: number | null) => void;
  chosenSize: string | null;
  setSize: (size: string | null) => void;
  isOpen: boolean;
  filtersIsOpen: () => void;
}

function Filters({
  price,
  setPrice,
  colorId,
  setColor,
  chosenSize,
  setSize,
  isOpen,
  filtersIsOpen,
}: FilterProps) {
  const resetFilters = () => {
    setColor(null);
    setSize(null);
    setPrice([50, 200]);
  };
  console.log(isOpen);
  return (
    <aside
      className={`filters__wrapper ${isOpen ? "filters__wrapper--open" : ""}`}
    >
      <div className="filters__header">
        <p className="filters__main-title">Filters</p>
        <svg
          className="filters__main-icon"
          onClick={filtersIsOpen}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.125 11.625V20.25C13.125 20.5484 13.0065 20.8345 12.7955 21.0455C12.5845 21.2565 12.2984 21.375 12 21.375C11.7016 21.375 11.4155 21.2565 11.2045 21.0455C10.9935 20.8345 10.875 20.5484 10.875 20.25V11.625C10.875 11.3266 10.9935 11.0405 11.2045 10.8295C11.4155 10.6185 11.7016 10.5 12 10.5C12.2984 10.5 12.5845 10.6185 12.7955 10.8295C13.0065 11.0405 13.125 11.3266 13.125 11.625ZM18.75 18C18.4516 18 18.1655 18.1185 17.9545 18.3295C17.7435 18.5405 17.625 18.8266 17.625 19.125V20.25C17.625 20.5484 17.7435 20.8345 17.9545 21.0455C18.1655 21.2565 18.4516 21.375 18.75 21.375C19.0484 21.375 19.3345 21.2565 19.5455 21.0455C19.7565 20.8345 19.875 20.5484 19.875 20.25V19.125C19.875 18.8266 19.7565 18.5405 19.5455 18.3295C19.3345 18.1185 19.0484 18 18.75 18ZM21 14.25H19.875V3.75C19.875 3.45163 19.7565 3.16548 19.5455 2.9545C19.3345 2.74353 19.0484 2.625 18.75 2.625C18.4516 2.625 18.1655 2.74353 17.9545 2.9545C17.7435 3.16548 17.625 3.45163 17.625 3.75V14.25H16.5C16.2016 14.25 15.9155 14.3685 15.7045 14.5795C15.4935 14.7905 15.375 15.0766 15.375 15.375C15.375 15.6734 15.4935 15.9595 15.7045 16.1705C15.9155 16.3815 16.2016 16.5 16.5 16.5H21C21.2984 16.5 21.5845 16.3815 21.7955 16.1705C22.0065 15.9595 22.125 15.6734 22.125 15.375C22.125 15.0766 22.0065 14.7905 21.7955 14.5795C21.5845 14.3685 21.2984 14.25 21 14.25ZM5.25 15C4.95163 15 4.66548 15.1185 4.4545 15.3295C4.24353 15.5405 4.125 15.8266 4.125 16.125V20.25C4.125 20.5484 4.24353 20.8345 4.4545 21.0455C4.66548 21.2565 4.95163 21.375 5.25 21.375C5.54837 21.375 5.83452 21.2565 6.0455 21.0455C6.25647 20.8345 6.375 20.5484 6.375 20.25V16.125C6.375 15.8266 6.25647 15.5405 6.0455 15.3295C5.83452 15.1185 5.54837 15 5.25 15ZM7.5 11.25H6.375V3.75C6.375 3.45163 6.25647 3.16548 6.0455 2.9545C5.83452 2.74353 5.54837 2.625 5.25 2.625C4.95163 2.625 4.66548 2.74353 4.4545 2.9545C4.24353 3.16548 4.125 3.45163 4.125 3.75V11.25H3C2.70163 11.25 2.41548 11.3685 2.2045 11.5795C1.99353 11.7905 1.875 12.0766 1.875 12.375C1.875 12.6734 1.99353 12.9595 2.2045 13.1705C2.41548 13.3815 2.70163 13.5 3 13.5H7.5C7.79837 13.5 8.08452 13.3815 8.2955 13.1705C8.50647 12.9595 8.625 12.6734 8.625 12.375C8.625 12.0766 8.50647 11.7905 8.2955 11.5795C8.08452 11.3685 7.79837 11.25 7.5 11.25ZM14.25 6.75H13.125V3.75C13.125 3.45163 13.0065 3.16548 12.7955 2.9545C12.5845 2.74353 12.2984 2.625 12 2.625C11.7016 2.625 11.4155 2.74353 11.2045 2.9545C10.9935 3.16548 10.875 3.45163 10.875 3.75V6.75H9.75C9.45163 6.75 9.16548 6.86853 8.9545 7.0795C8.74353 7.29048 8.625 7.57663 8.625 7.875C8.625 8.17337 8.74353 8.45952 8.9545 8.6705C9.16548 8.88147 9.45163 9 9.75 9H14.25C14.5484 9 14.8345 8.88147 15.0455 8.6705C15.2565 8.45952 15.375 8.17337 15.375 7.875C15.375 7.57663 15.2565 7.29048 15.0455 7.0795C14.8345 6.86853 14.5484 6.75 14.25 6.75Z"
            fill="black"
            fill-opacity="0.4"
          />
        </svg>
      </div>
      <hr className="filters__border" />

      <div className="filters__category">
        {category.map((item: Category) => (
          <div key={item.category}>
            <Link to={item.link} className="filters__category-list">
              {item.category}
              <svg
                width="7"
                height="12"
                viewBox="0 0 7 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.28318 0.221294L6.28318 5.22129C6.3531 5.29097 6.40857 5.37377 6.44643 5.46493C6.48428 5.55609 6.50377 5.65383 6.50377 5.75254C6.50377 5.85126 6.48428 5.94899 6.44643 6.04016C6.40857 6.13132 6.3531 6.21412 6.28318 6.28379L1.28318 11.2838C1.14228 11.4247 0.951183 11.5038 0.751926 11.5038C0.552669 11.5038 0.361572 11.4247 0.220676 11.2838C0.0797797 11.1429 0.000625142 10.9518 0.000625142 10.7525C0.000625143 10.5533 0.0797797 10.3622 0.220676 10.2213L4.69005 5.75192L0.220051 1.28255C0.0791551 1.14165 1.25847e-07 0.950553 1.28223e-07 0.751295C1.30599e-07 0.552037 0.0791552 0.360941 0.220051 0.220045C0.360948 0.0791493 0.552044 -7.62281e-06 0.751301 -7.62044e-06C0.950559 -7.61806e-06 1.14166 0.0791493 1.28255 0.220045L1.28318 0.221294Z"
                  fill="black"
                  fill-opacity="0.6"
                />
              </svg>
            </Link>
          </div>
        ))}
      </div>

      <hr className="filters__border" />

      <PriceSlider price={price} setPrice={setPrice} />

      <hr className="filters__border" />

      <ColorFilter colorId={colorId} setColor={setColor} />

      <hr className="filters__border" />

      <SizeFilter chosenSize={chosenSize} setSize={setSize} />

      <hr className="filters__border" />

      <fieldset className="filters__dress-style">
        <legend className="filters__title">Dress Style</legend>
        {dressStyles.map((style: Style) => (
          <Link
            className="filters__dress-style-list"
            key={style.title}
            to={style.link ?? "/catalog"}
          >
            <div>
              {style.title}
              <svg
                width="7"
                height="12"
                viewBox="0 0 7 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.28318 0.221294L6.28318 5.22129C6.3531 5.29097 6.40857 5.37377 6.44643 5.46493C6.48428 5.55609 6.50377 5.65383 6.50377 5.75254C6.50377 5.85126 6.48428 5.94899 6.44643 6.04016C6.40857 6.13132 6.3531 6.21412 6.28318 6.28379L1.28318 11.2838C1.14228 11.4247 0.951183 11.5038 0.751926 11.5038C0.552669 11.5038 0.361572 11.4247 0.220676 11.2838C0.0797797 11.1429 0.000625142 10.9518 0.000625142 10.7525C0.000625143 10.5533 0.0797797 10.3622 0.220676 10.2213L4.69005 5.75192L0.220051 1.28255C0.0791551 1.14165 1.25847e-07 0.950553 1.28223e-07 0.751295C1.30599e-07 0.552037 0.0791552 0.360941 0.220051 0.220045C0.360948 0.0791493 0.552044 -7.62281e-06 0.751301 -7.62044e-06C0.950559 -7.61806e-06 1.14166 0.0791493 1.28255 0.220045L1.28318 0.221294Z"
                  fill="black"
                  fill-opacity="0.6"
                />
              </svg>
            </div>
          </Link>
        ))}
      </fieldset>

      <button
        className="filters__button"
        onClick={() => {
          isOpen ? filtersIsOpen() : resetFilters();
        }}
      >
        {isOpen ? "Apply Filters" : "Clear All"}
      </button>
    </aside>
  );
}
export default Filters;
