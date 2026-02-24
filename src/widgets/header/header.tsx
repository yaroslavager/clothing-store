import "./header.css"
// import BurgerMenu from "../BurgerMenu/BurgerMenu"
// import ShopMenu from "../BurgerMenu/ShopMenu/ShopMenu"
function Header(){
return(
<header className="header container">
<nav className="header__nav">
    <div className="header__left">
    {/* <BurgerMenu/> */}
<a href=""><img src="src/Components/Header/Imgs/logo.svg" alt="SHOP.CO" className="header__img-logo"/> </a>
</div>
<div className="header__menu">
<img className="header__icon" src="/search.svg" alt="search" />
<img className="header__icon" src="/cart.svg" alt="cart" />
<img className="header__icon" src="/acc.svg" alt="account" />
</div>
</nav>
</header>

)
}
export default Header