import "./header.css";
import { navLinks } from "../../shared/config/navLinks";
import BurgerMenu from "../../shared/ui/burgerMenu/burgerMenu";
// import ShopMenu from "../BurgerMenu/ShopMenu/ShopMenu"

function Header() {
  return (
    <header className="header container">
      <nav className="header__nav">
        <div className="header__left">
          <BurgerMenu />
          <a href="#">
            <img
              src="/logo.svg"
              alt="SHOP.CO"
              className="header__img-logo"
            />{" "}
          </a>
        </div>
        <div className="header__menu">
          <a href="#">
            <img className="header__icon" src="/search.svg" alt="search" />
          </a>
          <a href="#">
            <img className="header__icon" src="/cart.svg" alt="cart" />
          </a>
          <a href="#">
            <img className="header__icon" src="/acc.svg" alt="account" />
          </a>
        </div>
      </nav>
    </header>
  );
}
export default Header;
