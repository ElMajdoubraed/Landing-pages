import image from "./images/icons/1.png";
import image_1 from "./images/icons/play.png";
import image_2 from "./images/mobile-1.png";

export const Banner = () => {
  return (
    <section className="banner" id="banner">
      <div className="overlay">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 order-lg-7 col-md-7 order-md-7">
              <div className="app-icon wow animate__animated animate__fadeInUp">
                <img src={image} alt="app-icon" />
              </div>
              <div className="banner-text">
                <h1 className="wow animate__animated animate__fadeInDown">
                  مطعمك متاح أي وقت طعام صحي وطازج دائما
                </h1>
                <p className="wow animate__animated animate__fadeInDown">
                  هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
                  سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع
                  الفقرات
                </p>
                <button
                  type="button"
                  className="btn btn-lg text-right wow animate__animated animate__flipInY"
                >
                  <img src={image_1} />
                  <p className="mr-3 mb-0">
                    حمل التطبيق من
                    <br />
                    <span className="font-weight-bold">متجر جوجل</span>
                  </p>
                </button>
                <button
                  type="button"
                  className="btn btn-lg text-right wow animate__animated animate__flipInY"
                >
                  <i className="fa fa-apple" aria-hidden="true"></i>
                  <p className="mr-3 mb-0">
                    حمل التطبيق من
                    <br />
                    <span className="font-weight-bold">متجر أبل</span>
                  </p>
                </button>
              </div>
            </div>
            <div className="col-lg-4 offset-lg-1 order-lg-1 col-md-5 order-md-1">
              <div className="images wow animate__animated animate__fadeInUp">
                <img src={image_2} alt="app-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
