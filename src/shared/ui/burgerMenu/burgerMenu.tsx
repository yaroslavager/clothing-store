import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./burgerMenu.scss";

import NavList from "../../ui/navList/navList";

function BurgerMenu() {
  const [visibility, setVisibility] = useState(false);
  const fVisibility = () => {
    setVisibility(!visibility);
  };
const location=useLocation()
useEffect(()=>{
setVisibility(false)

}, [location])

  return (
    <div className="burger-menu">
      <img
        className="burger-menu__icon"
        src="/button.svg"
        alt="burger menu"
        onClick={fVisibility}
      />
      
        <div className={`burger-menu__list-wrapper ${visibility ? "burger-menu__list-wrapper--open" : ""}`}      >
          <NavList Class="burger-menu" />
        </div>
      
    </div>
  );
}
export default BurgerMenu;
