import logo from "./images/logo.png";
export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md fixed-top" id="navBar">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <i className="fa fa-bars" aria-hidden="true"></i>
          </span>
        </button>

        <a className="navbar-brand scroll" href="#">
          <img src={logo} alt="logo" />
        </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link scroll" href="#services">
                خدمات الشركة
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link scroll" href="#gallery">
                المشاريع السابقة
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link scroll" href="#statistics">
                احصائيات الشركة
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link scroll" href="#contacts">
                تواصل معنا
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
