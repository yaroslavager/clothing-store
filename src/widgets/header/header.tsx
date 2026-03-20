import "./header.scss";
import { Link } from "react-router-dom";
// import { navLinks } from "../../shared/config/navLinks";
import BurgerMenu from "../../shared/ui/burgerMenu/burgerMenu";
import Navigation from "./ui/navigation"
import Search from "../../features/search/search";
import AuthForm from "../../features/authForm/authForm";
// import ShopMenu from "../BurgerMenu/ShopMenu/ShopMenu"

function Header() {
  return (
    <header className="header container">
      <nav className="header__nav">
        <div className="header__left">
          <BurgerMenu />
          <Link to="/">
            <img
              src="/logo.svg"
              alt="SHOP.CO"
              className="header__img-logo"
            />
          </Link>
        {/* навигация */}
           {/* код */}

       <Navigation/>
        </div>
         {/* Search */}
         <Search/>
        <div className="header__menu">

          {/* Cart */}
          <a href="#">
            <img className="header__icon" src="/cart.svg" alt="cart" />
          </a>
          {/* LogIn */}
<AuthForm/>
     
        </div>
      </nav>
    </header>
  );
}
export default Header;
