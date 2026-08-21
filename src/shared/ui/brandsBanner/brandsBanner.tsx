import "./brandsBanner.scss";

function BrandsBanner() {
  return (
    <div className="brands-banner__wrapper">
      <div className="brands-banner__img-wrapper">
      <img className="brands-banner__icon" src="/brandsicons/versace.svg" alt="brand: Versace" />
      <img className="brands-banner__icon" src="/brandsicons/zara.svg" alt="brand: Zara" />
      <img className="brands-banner__icon" src="/brandsicons/gucci.svg" alt="brand: Gucci" />
      <img className="brands-banner__icon" src="/brandsicons/prada.svg" alt="brand: Prada" />
      <img className="brands-banner__icon" src="/brandsicons/calvinklein.svg" alt="brand: Calvin Klein" />
      </div>
    </div>
  );
}

export default BrandsBanner;
