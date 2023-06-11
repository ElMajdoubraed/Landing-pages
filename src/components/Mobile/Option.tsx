import image from "./images/icons/2.png";
import image2 from "./images/icons/3.png";
import image3 from "./images/mobile-3.png";
import image4 from "./images/icons/4.png";

export const Option = () => {
  return (
    <section className="option" id="option">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 order-lg-5 col-md-7 order-md-5">
            <div className="options">
              <div className="media">
                <img
                  className="d-flex align-self-start ml-3"
                  src={image}
                  alt="Generic placeholder image"
                />
                <div className="media-body">
                  <h5 className="mt-0">يمكنك اختيار اكثر من نوع من القائمة</h5>
                  <p className="mb-2">
                    هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة
                    ما سيلهي القارئ
                  </p>
                </div>
              </div>
              <div className="media">
                <img
                  className="d-flex align-self-start ml-3"
                  src={image2}
                  alt="Generic placeholder image"
                />
                <div className="media-body">
                  <h5 className="mt-0">يصلك هدية مع أول طلب عبر التطبيق</h5>
                  <p className="mb-2">
                    هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة
                    ما سيلهي القارئ
                  </p>
                </div>
              </div>
              <div className="media">
                <img
                  className="d-flex align-self-start ml-3"
                  src={image4}
                  alt="Generic placeholder image"
                />
                <div className="media-body">
                  <h5 className="mt-0">
                    يمكنك أختيار أفضل الاطباق لأفضل الطهاة
                  </h5>
                  <p className="mb-2">
                    هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة
                    ما سيلهي القارئ
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 order-lg-1 col-md-5 order-md-1">
            <div className="images">
              <img src={image3} alt="app-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Option;
