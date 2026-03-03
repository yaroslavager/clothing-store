import "./burgerMenu.scss";
import { useState } from "react";
import { navLinks } from "../../config/navLinks";
import NavList from "../../ui/navList/navList";

function BurgerMenu() {
  const [visibility, setVisibility] = useState(false);
  const fVisibility = () => {
    setVisibility(!visibility);
  };

  return (
    <div className="burgerMenu">
      <img
        className="burgerMеnu__icon"
        src="/button.svg"
        alt="burger menu"
        onClick={fVisibility}
      />
      {visibility && (
        <div className="burgerMenu__list-wrapper">
          <NavList Class="burgerMenu" />
        </div>
      )}
    </div>
  );
}
export default BurgerMenu;
