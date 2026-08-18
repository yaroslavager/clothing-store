import "./hero.scss";
import mainPhoto from "../../shared/assets/mainphoto.png";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="hero__wrapper">
<div className="hero__wrap container">
      <div className="hero__left">
        <h1 className="hero__h1">FIND CLOTHES <br></br>THAT MATCHES <br></br> YOUR STYLE</h1>
        <p className="hero__title">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <Link to="/catalog" className="hero__button">Shop Now</Link>
        {/* <button > </button> */}

        <div className="hero__bottom">
          <div className="hero__info-wrapper" >
            <span className="hero__span">200+</span>
            <p className="hero__bottom-title">International Brands</p>
          </div>
          <div className="hero__info-wrapper" >
            <span className="hero__span">2,000+</span>
            <p className="hero__bottom-title">High-Quality Products</p>
          </div>
          <div >
            <span className="hero__span">30,000+</span>
            <p className="hero__bottom-title">Happy Customers</p>
          </div>
        </div>
      </div>
      <div className="hero__right">
        <img className="hero__img" src={mainPhoto} alt="main photo" />
      </div>
</div>

    </div>
  );
}

export default Hero;
