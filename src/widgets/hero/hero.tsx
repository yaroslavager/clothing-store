import "./hero.scss";
import mainPhoto from "../../shared/assets/mainphoto.png";

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
        <button className="hero__button"> Shop Now</button>
        <div className="hero__footer">
          <div>
            <span className="hero__span">200+</span>
            <p>International Brands</p>
          </div>
          <div>
            <span className="hero__span">2,000+</span>
            <p>High-Quality Products</p>
          </div>
          <div>
            <span className="hero__span">30,000+</span>
            <p>Happy Customers</p>
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
