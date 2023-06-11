import logo from "./images/logo.png";
import slider1 from "./images/slider-1.png";
import label from "./images/label.png";

export const Header = () => {
  return (
    <header className="header">
      <video autoPlay muted loop poster="images/bg.jpg">
        <source src="video/bg.mp4" type="video/mp4" />
      </video>
      <div className="overlay">
        <nav className="navbar">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="شعار المنتج" />
          </a>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="header-text">
                <h3>تابلت - 9.7 إنش, 16 جيجابايت الجيل الرابع اللون أسود</h3>
                <p>
                  هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
                  سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع
                  الفقرات
                </p>
                <div className="buttons">
                  <button type="button" className="btn">
                    شراء المنتج الآن
                  </button>
                  <button type="button" className="btn">
                    مميزات المنتج
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="product-img">
                <img src={slider1} alt="product img" />
                <img src={label} alt="product label" className="label" />
                <p>
                  2,000
                  <span>ريال</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
