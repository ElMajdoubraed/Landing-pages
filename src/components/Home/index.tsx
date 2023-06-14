import "./Home.scss";
import mobile from "./images/mobile.png";
import agency from "./images/agency.png";
import product from "./images/product.png";
import portfolio from "./images/portfolio.png";
import comingSoon from "./images/coming-soon.png";

export const HomeTemplate = () => {
  return (
    <div className="body">
      <div className="container">
        <div className="row">
          <div
            onClick={() => (window.location.href = "/mobile")}
            className="card col-xl-5"
          >
            <p>مطعمك متاح أي وقت طعام صحي وطازج دائما </p>
            <img src={mobile} alt="mobile" />
            <p className="card-footer"></p>
          </div>
          <div className="col-xl-1"></div>
          <div
            onClick={() => (window.location.href = "/agency")}
            className="card col-xl-5"
          >
            <p>متخصصة فى برمجة وتصميم المواقع وتطبيقات </p>
            <img src={agency} alt="agency" />
            <p className="card-footer"></p>
          </div>
          <div className="col-1"></div>
          <div
            onClick={() => (window.location.href = "/coming-soon")}
            className="card col-xl-5"
          >
            <p> أنتظروا إنطلاق التطبيق قريباً</p>
            <img src={comingSoon} alt="comingSoon" />
            <p className="card-footer"></p>
          </div>
          <div className="col-xl-1"></div>

          <div
            onClick={() => (window.location.href = "/portfolio")}
            className="card col-xl-5"
          >
            <p> مطور واجهة الاستخدام </p>
            <img src={portfolio} alt="portfolio" />
            <p className="card-footer"></p>
          </div>
          <div className="col-xl-1"></div>
          <div
            onClick={() => (window.location.href = "/product")}
            className="card col-xl-5"
          >
            <p>تابلت - 9.7 إنش, 16 جيجابايت الجيل الرابع</p>
            <img src={product} alt="product" />
            <p className="card-footer"></p>
          </div>
          <div className="col-xl-1"></div>
        </div>
      </div>
    </div>
  );
};
