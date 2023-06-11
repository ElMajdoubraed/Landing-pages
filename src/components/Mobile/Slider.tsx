import slider1 from "./images/slider/mobile1.png";
import slider2 from "./images/slider/mobile2.png";
import slider3 from "./images/slider/mobile1.png";
import slider4 from "./images/slider/mobile2.png";
export const Slider = () => {
  return (
    <section className="slider" id="slider">
      <div className="container">
        <div className="title text-center">
          <h3>شاهد التطبيق بالتفصيل</h3>
        </div>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <img
                className="d-block img-fluid"
                src={slider1}
                alt="app-img First slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block img-fluid"
                src={slider2}
                alt="app-img Second slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block img-fluid"
                src={slider3}
                alt="app-img Third slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block img-fluid"
                src={slider4}
                alt="app-img Fourth slide"
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span className="fa fa-angle-left fa-2x" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span className="fa fa-angle-right fa-2x" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Slider;
