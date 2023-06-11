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

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto ml-auto">
            <li className="nav-item active">
              <a className="nav-link scroll" href="#header">
                عني
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link scroll" href="#licence">
                الشهادات والمؤهلات
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link scroll" href="#statistics">
                المهارات
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link scroll" href="#gallery">
                أعمالي
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link scroll" href="#testimonials">
                آراء العملاء
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link scroll" href="#contact-info">
                تواصل معي
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
