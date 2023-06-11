import image from "./images/mobile-2.png";
export const Feature = () => {
  return (
    <section className="feature" id="feature">
      <div className="container">
        <div className="row no-gutters">
          <div className="col-md">
            <div className="features text-left">
              <div className="media">
                <div className="media-body">
                  <h5 className="mt-0">الميزة الأولى</h5>
                  <p className="mb-2">
                    هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة
                    ما سيلهي القارئ
                  </p>
                </div>
                <i
                  className="fa fa-tree fa-2x d-flex align-self-start mr-3"
                  aria-hidden="true"
                ></i>
              </div>

              <div className="media">
                <div className="media-body">
                  <h5 className="mt-0">الميزة الثانية</h5>
                  <p className="mb-2">
                    هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة
                    ما سيلهي القارئ
                  </p>
                </div>
                <i
                  className="fa fa-heart fa-2x d-flex align-self-start mr-3"
                  aria-hidden="true"
                ></i>
              </div>
              <div className="media">
                <div className="media-body">
                  <h5 className="mt-0">الميزة الثالثة</h5>
                  <p className="mb-2">
                    هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة
                    ما سيلهي القارئ
                  </p>
                </div>
                <i
                  className="fa fa-gavel fa-2x d-flex align-self-start mr-3"
                  aria-hidden="true"
                ></i>
              </div>
            </div>
          </div>
          <div className="col-md order-md-4">
            <div className="features">
              <div className="media">
                <i
                  className="fa fa-leaf fa-2x d-flex align-self-start ml-3"
                  aria-hidden="true"
                ></i>
                <div className="media-body">
                  <h5 className="mt-0">الميزة الرابعة</h5>
                  <p className="mb-2">
                    هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة
                    ما سيلهي القارئ
                  </p>
                </div>
              </div>
              <div className="media">
                <i
                  className="fa fa-fire fa-2x d-flex align-self-start ml-3"
                  aria-hidden="true"
                ></i>
                <div className="media-body">
                  <h5 className="mt-0">الميزة الخامسة</h5>
                  <p className="mb-2">
                    هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة
                    ما سيلهي القارئ
                  </p>
                </div>
              </div>
              <div className="media">
                <i
                  className="fa fa-paint-brush fa-2x d-flex align-self-start ml-3"
                  aria-hidden="true"
                ></i>
                <div className="media-body">
                  <h5 className="mt-0">الميزة السادسة</h5>
                  <p className="mb-2">
                    هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة
                    ما سيلهي القارئ
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md order-md-1">
            <div className="mobile-img">
              <img src={image} alt="mobile-app" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
