export const Prices = () => {
  return (
    <section className="prices">
      <div className="title text-center">
        <h3>خطط الاسعار</h3>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg">
            <div className="row">
              <div className="col-sm">
                <div className="plan text-center">
                  <p>جولد</p>
                  <h3>
                    1500
                    <span>ريال</span>
                  </h3>
                  <ul className="list-unstyled">
                    <li>شاشة لمس</li>
                    <li>الدقة الافقية 1536 Pixel</li>
                    <li>يحتوي على كاميرا 5 ميجا</li>
                    <li>شرائح Appel A7</li>
                    <li>اللون جولد</li>
                  </ul>
                  <button type="button" className="btn">
                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                    اطلب الآن
                  </button>
                </div>
              </div>

              <div className="col-sm">
                <div className="plan text-center">
                  <p>سليفر</p>
                  <h3>
                    1800
                    <span>ريال</span>
                  </h3>
                  <ul className="list-unstyled">
                    <li>شاشة لمس</li>
                    <li>الدقة الافقية 1536 Pixel</li>
                    <li>يحتوي على كاميرا 5 ميجا</li>
                    <li>شرائح Appel A7</li>
                    <li>اللون سليفر</li>
                  </ul>
                  <button
                    type="button"
                    className="btn"
                    data-toggle="modal"
                    data-target="#myModal3"
                  >
                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                    اطلب الآن
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg">
            <div className="row">
              <div className="col-sm">
                <div className="plan text-center popular">
                  <p>أبيض</p>
                  <h3>
                    1900
                    <span>ريال</span>
                  </h3>
                  <ul className="list-unstyled">
                    <li>شاشة لمس</li>
                    <li>الدقة الافقية 1536 Pixel</li>
                    <li>يحتوي على كاميرا 5 ميجا</li>
                    <li>شرائح Appel A7</li>
                    <li>اللون أبيض</li>
                    <li>العمق 7.5 ملم</li>
                  </ul>
                  <button
                    type="button"
                    className="btn"
                    data-toggle="modal"
                    data-target="#myModal3"
                  >
                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                    اطلب الآن
                  </button>
                </div>
              </div>

              <div className="col-sm">
                <div className="plan text-center">
                  <p>أسود</p>
                  <h3>
                    1800
                    <span>ريال</span>
                  </h3>
                  <ul className="list-unstyled">
                    <li>شاشة لمس</li>
                    <li>الدقة الافقية 1536 Pixel</li>
                    <li>يحتوي على كاميرا 5 ميجا</li>
                    <li>شرائح Appel A7</li>
                    <li>اللون أسود</li>
                  </ul>
                  <button
                    type="button"
                    className="btn"
                    data-toggle="modal"
                    data-target="#myModal3"
                  >
                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                    اطلب الآن
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prices;
