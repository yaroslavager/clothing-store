import "./header.scss";
import { Link } from "react-router-dom";
import BurgerMenu from "../../shared/ui/burgerMenu/burgerMenu";
import Navigation from "./ui/navigation"
import Search from "../../features/search/search";
import AuthForm from "../../features/authForm/authForm";
import { useCartStore } from "../../entities/cart/model/cartStore";

function Header() {
  const productsInCart= useCartStore((state)=>state.cartItems).reduce((acc,el)=> el.count+acc ,0)

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
          <Link className="header__cart-wrapper" to="/cart">
            <img className="header__icon" src="/cart.svg" alt="cart" />

       {productsInCart >= 1 ? <span className="header__cart-badge">{productsInCart}</span> : null}

          </Link>
          {/* LogIn */}
<AuthForm/>
     
        </div>
      </nav>
    </header>
  );
}
export default Header;
