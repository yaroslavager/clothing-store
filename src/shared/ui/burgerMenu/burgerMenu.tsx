import "./burgerMenu.css";
import { useState } from "react";
import { navLinks } from "../../config/navLinks";

function BurgerMenu() {
  const [visibility, setVisibility] = useState(false);
  const fVisibility = () => {
    setVisibility(!visibility);
  };

  const [subMenuOpen, setSubMenu] = useState(false);
  const fSubMenu = () => {
    setSubMenu(!subMenuOpen);
  };

  return (
    <div className="burgerMenu__wrapper">
      <img
        className="burgerMеnu__icon"
        src="/button.svg"
        alt="burger menu"
        onClick={fVisibility}
      />
      {visibility && (
        <div className="burgerMenu__list-wrapper">
          <ul className="burgerMenu__list">
            {navLinks.map((link, index) =>
              link.children ? (
                <div>
                  <li className="burgerMenu__item" key={index} onClick={fSubMenu}>
                    {link.title} <img src="/shopopen.svg" alt="open sub menu" />
                  </li>
                  {subMenuOpen && (
                    <div className="burgerMenu__subMenu">
                      <ul className="burgerMenu__list">
                        {link.children.map((people, inx) => {
                          return <li  className="burgerMenu__item" key={inx}><a href="#">{people.title}</a></li>;
                        })}
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                <li className="burgerMenu__item" key={index}>
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
export default BurgerMenu;
