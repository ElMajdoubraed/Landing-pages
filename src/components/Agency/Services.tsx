import feature_1 from "./images/feature-1.png";
import feature_2 from "./images/feature-2.png";
import feature_3 from "./images/feature-3.png";
export const Services = () => {
  return (
    <section className="services" id="services">
      <div className="title text-center">
        <h2>خدمات الشركة</h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md">
            <div className="card text-center">
              <img src={feature_1} alt="Card image cap" />
              <div className="card-block">
                <h4 className="card-title">تصميم المواقع والتطبيقات</h4>
                <p className="card-text">
                  هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
                  سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع
                  الفقرات
                </p>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="card text-center">
              <img src={feature_2} alt="Card image cap" />
              <div className="card-block">
                <h4 className="card-title">برمجة المواقع الالكترونية</h4>
                <p className="card-text">
                  هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
                  سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع
                  الفقرات
                </p>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="card text-center">
              <img src={feature_3} alt="Card image cap" />
              <div className="card-block">
                <h4 className="card-title">إنتاج ومونتاج الفيديو</h4>
                <p className="card-text">
                  هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
                  سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع
                  الفقرات
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
