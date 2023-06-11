export const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer">
          <div className="row">
            <div className="col-md">
              <div className="widget">
                <div className="title">
                  <h4>عن التطبيق</h4>
                </div>
                <div className="content">
                  <p>
                    هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة
                    ما سيلهي القارئ
                  </p>
                  <ul className="social-links list-inline">
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="fa fa-google-plus" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="widget">
                <div className="title">
                  <h4>آخر التغريدات</h4>
                </div>
                <div className="content">
                  <ul className="twittes list-unstyled">
                    <li>
                      هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة
                      ما سيلهي القارئ
                    </li>
                    <li>
                      هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة
                      ما سيلهي القارئ
                    </li>
                    <li>
                      هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة
                      ما سيلهي القارئ
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="widget">
                <div className="title">
                  <h4>القائمة البريدية</h4>
                </div>
                <div className="content">
                  <form action="#" method="post" name="myForm" id="emailForm">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="البريد الالكترونى"
                        required
                        name="email"
                      />

                      <button
                        className="btn Form-Submit"
                        type="submit"
                        name="submit"
                        value="Submit"
                      >
                        أضفني للقائمة البريدية
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p className="text-center">جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
