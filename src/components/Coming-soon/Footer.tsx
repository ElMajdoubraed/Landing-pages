import image_1 from "./images/icons/send.png";
export const Footer = () => {
  return (
    <footer>
      <div className="top-footer text-center">
        <div className="overlay">
          <h3>قم بإضافة بريدك الالكتروني ليصلك إشعار فور الإنطلاق</h3>
          <form action="#" method="post" name="myForm2">
            <div className="form-group">
              <div className="input-group input-group-lg">
                <input
                  type="email"
                  className="form-control"
                  placeholder="بريدك الالكترونى"
                  name="email2"
                  required
                />
                <span className="input-group-btn">
                  <button
                    className="btn Form-Submit"
                    type="submit"
                    name="submit"
                  >
                    <img src={image_1} alt="send" />
                  </button>
                </span>

                <div className="alert alert-danger">
                  <strong>عذراً! </strong> لقد قمت بإدخال بريد الكتروني خاطئ.
                </div>

                <div className="alert alert-success">
                  <strong>تهانينا، </strong> لقد تم ادخال بريدك الالكتروني
                  بنجاح.
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="contact text-center">
        <div className="overlay">
          <h3>تابعنا على القنوات الاجتماعية</h3>
          <ul className="list-inline">
            <li className="list-inline-item">
              <a href="#" className="facebook">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" className="twitter">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" className="linkedin">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" className="instagram">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
          <hr />
          <p>
            <a href="mailto:info@domain.com?Subject=Hello" target="_top">
              <i className="fa fa-envelope-o" aria-hidden="true"></i>
              info@domain.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
