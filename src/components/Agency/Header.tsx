export const Header = () => {
  return (
    <header>
      <div className="overlay">
        <div className="container-fluid">
          <div className="slider">
            <div id="carousel" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                  <div className="carousel-caption">
                    <h3>
                      وكالتنا متخصصة فى برمجة وتصميم المواقع الألكترونية
                      وتطبيقات الموبايل
                    </h3>
                    <a className="scroll" href="#gallery">
                      تصفح أعمالنا
                    </a>
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="carousel-caption">
                    <h3>
                      مرحبا بك في موقع وكالتنا الرسمي لا تتردد في التواصل معنا
                      واخبارنا رأيك
                    </h3>
                    <a className="scroll" href="#contacts">
                      تواصل معنا
                    </a>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carousel"
                role="button"
                data-slide="prev"
              >
                <i className="fa fa-angle-left fa-2x" aria-hidden="true"></i>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carousel"
                role="button"
                data-slide="next"
              >
                <i className="fa fa-angle-right fa-2x" aria-hidden="true"></i>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
