import gallery1 from "./images/gallery/1.jpg";
import gallery2 from "./images/gallery/2.jpg";
import gallery3 from "./images/gallery/3.jpg";
import gallery4 from "./images/gallery/4.jpg";
import gallery5 from "./images/gallery/5.jpg";
import gallery6 from "./images/gallery/6.jpg";

export const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
      <div className="title text-center">
        <h2>
          <i className="fa fa-th-large" aria-hidden="true"></i>
          الأعمال السابقة
        </h2>
      </div>
      <div className="container">
        <div className="work-gallery text-center">
          <input
            id="item-type-all"
            name="radio-set-1"
            type="radio"
            className="item-type-all"
            defaultChecked
          />
          <label htmlFor="item-type-all" className="label-type-all">
            الكل
          </label>

          <input
            id="item-type-1"
            name="radio-set-1"
            type="radio"
            className="item-type-1"
          />
          <label htmlFor="item-type-1" className="label-type-1">
            تصميم
          </label>

          <input
            id="item-type-2"
            name="radio-set-1"
            type="radio"
            className="item-type-2"
          />
          <label htmlFor="item-type-2" className="label-type-2">
            برمجة مواقع
          </label>

          <input
            id="item-type-3"
            name="radio-set-1"
            type="radio"
            className="item-type-3"
          />
          <label htmlFor="item-type-3" className="label-type-3">
            تصميم تطبيقات الموبايل
          </label>
          <div className="clear-fix"></div>

          <div className="row items">
            <div className="col-md-4 col-sm-6 item item-type-1">
              <img src={gallery1} alt="gallery img" className="img-fluid" />
            </div>
            <div className="col-md-4 col-sm-6 item item-type-3">
              <img src={gallery2} alt="gallery img" className="img-fluid" />
            </div>
            <div className="col-md-4 col-sm-6 item item-type-2">
              <img src={gallery3} alt="gallery img" className="img-fluid" />
            </div>
            <div className="col-md-4 col-sm-6 item item-type-2">
              <img src={gallery4} alt="gallery img" className="img-fluid" />
            </div>
            <div className="col-md-4 col-sm-6 item item-type-1">
              <img src={gallery5} alt="gallery img" className="img-fluid" />
            </div>
            <div className="col-md-4 col-sm-6 item item-type-3">
              <img src={gallery6} alt="gallery img" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
