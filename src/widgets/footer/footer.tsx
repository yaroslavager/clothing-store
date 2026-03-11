import "./footer.scss";

function Footer() {
  return (
    <div className="footer__wrapper">
      <div className="footer__wrap container">
        <div className="footer__subscription">
          <h6>STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS</h6>
          <div className="footer__data-wraper">
            <label htmlFor="footer-email">
              <input
                className="footer__input"
                type="email"
                name="email"
                id="footer-email"
                placeholder="Enter your email address"
              />
            </label>

            <button className="footer__button">Subscribe to Newsletter</button>
          </div>
        </div>

        <div className="footer__info-wrapper">
{/* что-то из информациии */}
<div className="footer__left">
<img className="footer__logo" src="./logo.svg" alt="logo" />
<p>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
<div className="footer__social-media"> СОЦСЕТИ</div>
<div className="footer__info">
    
  ТУТ СПИСКИ
</div>


</div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
