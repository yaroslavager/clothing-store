import { footerLinks } from "../../config/footerLinks";

function FooterList() {
  return (
    <>
      {footerLinks.map((el) => (
        <div key={el.title}>
          <p className="footer__list-p">{el.title.toUpperCase()}</p>
          <ul className="footer__list">
            {el?.children.map((el) => (
              <li className="footer__list-li" key={el.title}>
                <a href={el.link}>{el.title}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}
export default FooterList;
