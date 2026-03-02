import "./navigation.scss";
import { navLinks } from "../../../shared/config/navLinks";

function Navigation(){

    return(

        <div className="navigation">
           
            <ul className="navigation__list">
         {navLinks.map((link, index)=> (
            link.children? link.children.map((link, inx)=> <li key={inx}><img src="" alt="" />{link.title}</li>  )

            :<li key={index}><a href="#">{link.title}</a></li>
        ))}
        </ul>
        </div>
    )
}
export default Navigation