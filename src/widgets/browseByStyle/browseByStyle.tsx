import "./browsebyStyle.scss";
import { dressStyles } from "../../shared/config/dressStyle";
import { Link } from "react-router-dom";

function BrowsByStyle() {
  return (
    <div className="browse-by-style__wrapper container">
      <h2 className="browse-by-style__title">BROWSE BY DRESS STYLE</h2>
      <div className="browse-by-style__grid">
        {dressStyles.map(style=>(
           <Link className={`browse-by-style__item browse-by-style__item--size-${style.size}`} key={style.title} to={style.link}>
            <p className="browse-by-style__style-title">{style.title}</p>
            <img className="browse-by-style__imgs" src={style.img} />
            </Link> 
        ))

        }
      </div>
    </div>
  );
}
export default BrowsByStyle;
