import "./browsebyStyle.scss";
import { dressStyles } from "../../shared/config/dressStyle";
import { Link } from "react-router-dom";

function BrowsByStyle() {
  return (
    <div className="browse-by-style__wrapper container">
      <h2 className="browse-by-style__title">BROWSE BY DRESS STYLE</h2>
      <div className="browse-by-style__grid">
        {dressStyles.map(style=>(
           <Link className={`browse-by-style__item browse-by__item--size-${style.size}`} key={style.title} to={style.link}>
            <p>{style.title}</p>
            <img src={style.img} />
            </Link> 
        ))

        }
      </div>
    </div>
  );
}
export default BrowsByStyle;
