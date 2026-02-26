import "./announcementBar.css";
import { useState } from "react";

function AnnouncementBar() {
  const [state, setState] = useState(() => {
    const saved = localStorage.getItem("announcement");
    if (!saved) return true;
    const nowDate = new Date().getTime();
    const expiryTime = JSON.parse(saved);
    if (nowDate > expiryTime) {
      localStorage.removeItem("announcement");
      return true;
    }
    return false;
  });

  const closeBar = () => {
    const closeDate = new Date();
    //бар возвращается через 15 минут
    const minutes_15 = 15 * 60 * 1000;
    const expiryDate = closeDate.getTime() + minutes_15;
    setState(false);
    localStorage.setItem("announcement", JSON.stringify(expiryDate));
  };

  if (!state) return null;
  return (
    <div className="announcement-bar">
      <div className="announcement-bar__container">
        <p className="announcement-bar__text">
          Sign up and get 20% off to your first order.{" "}
          <span className="announcement-bar__link">Sign Up Now</span>{" "}
        </p>
        <img
          className="announcement-bar__icon"
          src="/annBarExit.svg"
          alt="close announcement bar"
          onClick={closeBar}
        />
      </div>
    </div>
  );
}
export default AnnouncementBar;
