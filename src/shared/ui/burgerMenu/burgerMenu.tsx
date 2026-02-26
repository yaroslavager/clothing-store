import "./burgerMenu.css";
import { useState } from "react";
import { navLinks } from "../../config/navLinks";

function BurgerMenu() {
  const [visibility, setVisibility] = useState(false);
  const fVisibility = () => {
    setVisibility(!visibility);
  };

  return (
    <div className="burgerMenu__wrapper">
        <img className="burgerManu__icon" src="/button.svg" alt="burger menu" onClick={fVisibility} />
        {visibility &&(
    <div className="burgerMenu__list">
      <ul>
        {navLinks.map((link, index) =>
          link.children ? (
            <div>
              {link.children.map((sex, subIndex)=> 
            <li key={subIndex}><a href={sex.link}>{sex.title}</a></li>
            )}
            </div>
          ) : (
            <li key={index}>
              <a href={link.link}>{link.title}</a>
            </li>
          ),
        )}
      </ul>
    </div>
)}
</div>


  );
}
export default BurgerMenu