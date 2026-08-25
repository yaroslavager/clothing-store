import "./footer.scss";
import FooterList from "../../shared/ui/footerList/footerList";
import { useState, type FormEvent } from "react";

function Footer() {
  //Email
  const [email, setEmail] = useState("");
  console.log(email);
  //Status
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [showToast, setShowToast] = useState(false);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email }),
      });
      if (res.ok) {
        setStatus("success");
        setShowToast(true);
        setEmail("");
        console.log("success");
      } else {
        throw new Error();
      }
    } catch (error) {
      console.log(error);
      setStatus("error");
      setShowToast(true);
    }
  };

  return (
    <div className="footer__wrapper">
      <div className="footer__wrap container">
        <div className="footer__subscription">
          <h2 className="footer__title">
            STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS
          </h2>
          <form
            method="POST"
            onSubmit={handleSubmit}
            className="footer__data-wraper"
          >
            <label htmlFor="footer-email">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="footer__input"
                type="email"
                name="email"
                id="footer-email"
                placeholder="Enter your email address"
                required
              />
            </label>

            <button type="submit" className="footer__button">
              Subscribe to Newsletter
            </button>
          </form>
        </div>
        {showToast && (
          <div className="footer__toast">
            <p className="footer__toast-message">
              {status === "success"
                ? "Thank you for subscription"
                : "Somethimg went wrong"}
            </p>
            <button
              onClick={() => setShowToast(false)}
              className="footer__toast-button"
            >
              X
            </button>
          </div>
        )}

        <div className="footer__info-wrapper ">
          {/* что-то из информациии */}
          <div className="footer__left">
            <img className="footer__logo" src="/logo.svg" alt="logo" />
            <p className="footer__p">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
            <div className="footer__social-media">
              <a href="#">
                <div className="footer__icon-wrapper">
                  <img src="/smicons/twitter.svg" alt="our twitter" />
                </div>
              </a>

              <a href="#">
                <div className="footer__icon-wrapper footer__icon-wrapper-fb">
                  <img src="/smicons/facebook.svg" alt="our facebook" />
                </div>
              </a>
              <a href="#">
                <div className="footer__icon-wrapper">
                  <img src="/smicons/instagram.svg" alt="our instagram" />
                </div>
              </a>
              <a href="#">
                <div className="footer__icon-wrapper">
                  <img src="/smicons/git.svg" alt="our github" />
                </div>
              </a>
            </div>
          </div>
          <div className="footer__info">
            <FooterList />
          </div>
        </div>
        <div className="footer__buttom">
          <p className="footer__p">Shop.co © 2000-2023, All Rights Reserved</p>
          <div className="footer__payment-system">
            <img src="/paymenticons/visa.svg" alt="payment system: visa" />
            <img src="paymenticons/mastercard.svg" alt="payment system: mastercard" />
            <img src="paymenticons/paypal.svg" alt="payment system: paypal" />
            <img src="/paymenticons/applepay.svg" alt="payment system: apple pay" />
            <img src="/paymenticons/googlepay.svg" alt="payment system: google pay" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
