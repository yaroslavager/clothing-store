import "./authForm.scss";
import { useState, type FormEvent } from "react";
import { validateEmail } from "../../shared/lib/validation/validateEmail";


function AuthForm() {
  const [isModalOpen, setModalOpen] = useState(false);
  const fModalOpen = () => {
    setModalOpen((prev) => !prev);
  };
  const [email, setEmail] = useState("");
const [emailError, setEmailError]=useState<string | null>(null)


  const registration = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   
    const error = validateEmail(email)
if(error){
  setEmailError(error)
  return
}
setEmailError(null)

    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email }),
      });
      if (res.ok) {
        setEmail("");
        fModalOpen();
        console.log("Success");
        console.log("Статус:", res.status);
      } else {
        throw new Error("Error");
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log(error);
      }
    }
  };

  return (
    <div className="auth-form">
      <img
        className="auth-form__main-icon"
        onClick={fModalOpen}
        width="24"
        height="24"
        src="/signin/signinicon.svg"
        alt="open sign in modal"
      />

      {isModalOpen && (
        <div className="auth-form__overlay">
          <div className="auth-form__modal">
            <div className="auth-form__up">
              <span className="auth-form__span">SIGN IN</span>{" "}
              <img
                width="14"
                height="14"
                className="auth-form__icon"
                onClick={fModalOpen}
                src="/signin/closebutton.svg"
                alt="close sign in modal"
              />
            </div>
            <div className="auth-form__down">
              <p className="auth-form__title">
                Sign in with your email or sign up to become a SHOP.CO member.
              </p>
              <form
                method="POST"
                onSubmit={registration}
                className="auth-form__form"
              >
                <label htmlFor="auth-form__input">Email</label>
                <input
                
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="auth-form__input"
                  className={`auth-form__input ${emailError ? "auth-form__input--error" : ""} `}
                  type="email"
                  placeholder={"Email"}
                  required
                />
                {emailError ? <span className="auth-form__error-message">{emailError}</span>  : null}
                <button type="submit" className="auth-form__button">
                  Continue
                </button>
              </form>

              <p className="auth-form__footer-text">All data is kept secure</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default AuthForm;
