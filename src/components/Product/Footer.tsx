export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="#" className="facebook">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="pinterest">
                  <i className="fa fa-pinterest-p" aria-hidden="true"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="google-plus">
                  <i className="fa fa-google-plus" aria-hidden="true"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="twitter">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm">
            <div className="copyright">
              <p>جميع الحقوق محفوظة</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
