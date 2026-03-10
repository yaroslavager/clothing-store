import "./burgerMenu.scss";
import { useState } from "react";
import NavList from "../../ui/navList/navList";

function BurgerMenu() {
  const [visibility, setVisibility] = useState(false);
  const fVisibility = () => {
    setVisibility(!visibility);
  };

  return (
    <div className="burger-menu">
      <img
        className="burger-menu__icon"
        src="/button.svg"
        alt="burger menu"
        onClick={fVisibility}
      />
      {visibility && (
        <div className="burger-menu__list-wrapper">
          <NavList Class="burger-menu" />
        </div>
      )}
    </div>
  );
}
export default BurgerMenu;
