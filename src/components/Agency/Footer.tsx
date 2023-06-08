export const Footer = () => {
  return (
    <footer>
      <div className="top-footer">
        <div className="container">
          <div className="row">
            <div className="col-md">
              <h3>عن الشركة</h3>
              <p>
                هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
                سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع
                الفقرات
              </p>
              <ul className="social list-inline">
                <li className="list-inline-item">
                  <a href="" className="facebook">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="" className="pinterest">
                    <i className="fa fa-pinterest" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="" className="google">
                    <i className="fa fa-google-plus" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="" className="twitter">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="" className="linkedin">
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md">
              <h3>الاتصال بالشركة</h3>
              <ul className="contact-us list-unstyled">
                <li>
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  الامارات العربية المتحدة في منطقة بن راشد
                </li>
                <li>
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  012 3456 7890
                </li>
                <li>
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  email@domain.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright text-center">
        <p>جميع الحقوق محفوظة</p>
      </div>
    </footer>
  );
};
