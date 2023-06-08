import Gallery_1 from "./images/gallery/small-1.jpg";
import Gallery_2 from "./images/gallery/1.jpg";
import Gallery_3 from "./images/gallery/small-2.jpg";
import Gallery_4 from "./images/gallery/2.jpg";
import Gallery_5 from "./images/gallery/small-3.jpg";
import Gallery_6 from "./images/gallery/3.jpg";
import Gallery_7 from "./images/gallery/small-4.jpg";
import Gallery_8 from "./images/gallery/4.jpg";
import Gallery_9 from "./images/gallery/small-5.jpg";
import Gallery_10 from "./images/gallery/5.jpg";
import Gallery_11 from "./images/gallery/small-6.jpg";
import Gallery_12 from "./images/gallery/6.jpg";
import Gallery_13 from "./images/gallery/small-7.jpg";
import Gallery_14 from "./images/gallery/7.jpg";
import Gallery_15 from "./images/gallery/small-8.jpg";
import Gallery_16 from "./images/gallery/8.jpg";

export const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
      <div className="title text-center">
        <h2>أعمال الشركة</h2>
      </div>
      <div className="work-gallery">
        <div className="row no-gutters">
          <div className="col-md row no-gutters">
            <div className="col-sm">
              <a href="#image-1">
                <img src={Gallery_1} alt="gallery img" className="img-fluid" />
                <div className="hover">
                  <i className="fa fa-search-plus" aria-hidden="true"></i>
                </div>
              </a>

              <div className="overlay-gallery row" id="image-1">
                <div className="col-sm">
                  <img src={Gallery_2} alt="gallery img" />
                </div>

                <div className="col-sm gallery-text">
                  <h3>تصميم فيديو لمؤسسة الابداع لتطوير وتصميم الويب</h3>
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <i className="fa fa-tags" aria-hidden="true"></i>
                    </li>
                    <li className="list-inline-item">
                      <a href="">After Effect ,</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="">Video Editing ,</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="">Photoshop</a>
                    </li>
                  </ul>
                  <p>
                    هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة
                    ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل
                    توضع الفقرات
                  </p>
                  <a href="#" className="visit">
                    زيارة المشروع
                  </a>
                </div>
                <a href="#page" className="close">
                  X
                </a>
              </div>
            </div>

            <div className="col-sm">
              <a href="#image-2">
                <img src={Gallery_3} alt="gallery img" className="img-fluid" />

                <div className="hover">
                  <i className="fa fa-search-plus" aria-hidden="true"></i>
                </div>
              </a>

              <div className="overlay-gallery row" id="image-2">
                <div className="col-sm">
                  <img src={Gallery_4} alt="gallery img" />
                </div>

                <div className="col-sm gallery-text">
                  <h3>تصميم فيديو لمؤسسة الابداع لتطوير وتصميم الويب</h3>
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <i className="fa fa-tags" aria-hidden="true"></i>
                    </li>
                    <li className="list-inline-item">
                      <a href="">After Effect ,</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="">Video Editing ,</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="">Photoshop</a>
                    </li>
                  </ul>
                  <p>
                    هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة
                    ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل
                    توضع الفقرات
                  </p>
                  <a href="#" className="visit">
                    زيارة المشروع
                  </a>
                </div>
                <a href="#page" className="close">
                  X
                </a>
              </div>
            </div>
          </div>

          <div className="col-md row no-gutters">
            <div className="col-sm">
              <a href="#image-3">
                <img src={Gallery_5} alt="gallery img" className="img-fluid" />

                <div className="hover">
                  <i className="fa fa-search-plus" aria-hidden="true"></i>
                </div>
              </a>

              <div className="overlay-gallery row" id="image-3">
                <div className="col-sm">
                  <img src={Gallery_6} alt="gallery img" />
                </div>

                <div className="col-sm gallery-text">
                  <h3>تصميم فيديو لمؤسسة الابداع لتطوير وتصميم الويب</h3>
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <i className="fa fa-tags" aria-hidden="true"></i>
                    </li>
                    <li className="list-inline-item">
                      <a href="">After Effect ,</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="">Video Editing ,</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="">Photoshop</a>
                    </li>
                  </ul>
                  <p>
                    هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة
                    ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل
                    توضع الفقرات
                  </p>
                  <a href="#" className="visit">
                    زيارة المشروع
                  </a>
                </div>
                <a href="#page" className="close">
                  X
                </a>
              </div>
            </div>

            <div className="col-sm">
              <a href="#image-4">
                <img src={Gallery_7} alt="gallery img" className="img-fluid" />

                <div className="hover">
                  <i className="fa fa-search-plus" aria-hidden="true"></i>
                </div>
              </a>

              <div className="overlay-gallery row" id="image-4">
                <div className="col-sm">
                  <img src={Gallery_8} alt="gallery img" />
                </div>

                <div className="col-sm gallery-text">
                  <h3>تصميم فيديو لمؤسسة الابداع لتطوير وتصميم الويب</h3>
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <i className="fa fa-tags" aria-hidden="true"></i>
                    </li>
                    <li className="list-inline-item">
                      <a href="">After Effect ,</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="">Video Editing ,</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="">Photoshop</a>
                    </li>
                  </ul>
                  <p>
                    هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة
                    ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل
                    توضع الفقرات
                  </p>
                  <a href="#" className="visit">
                    زيارة المشروع
                  </a>
                </div>
                <a href="#page" className="close">
                  X
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row no-gutters">
          <div className="col-md row no-gutters">
            <div className="col-sm">
              <a href="#image-5">
                <img src={Gallery_9} alt="gallery img" className="img-fluid" />

                <div className="hover">
                  <i className="fa fa-search-plus" aria-hidden="true"></i>
                </div>
              </a>

              <div className="overlay-gallery row" id="image-5">
                <div className="col-sm">
                  <img src={Gallery_10} alt="gallery img" />
                </div>

                <div className="col-sm gallery-text">
                  <h3>تصميم فيديو لمؤسسة الابداع لتطوير وتصميم الويب</h3>
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <i className="fa fa-tags" aria-hidden="true"></i>
                    </li>
                    <li className="list-inline-item">
                      <a href="">After Effect ,</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="">Video Editing ,</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="">Photoshop</a>
                    </li>
                  </ul>
                  <p>
                    هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة
                    ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل
                    توضع الفقرات
                  </p>
                  <a href="#" className="visit">
                    زيارة المشروع
                  </a>
                </div>
                <a href="#page" className="close">
                  X
                </a>
              </div>
            </div>

            <div className="col-sm">
              <a href="#image-6">
                <img src={Gallery_11} alt="gallery img" className="img-fluid" />

                <div className="hover">
                  <i className="fa fa-search-plus" aria-hidden="true"></i>
                </div>
              </a>

              <div className="overlay-gallery row" id="image-6">
                <div className="col-sm">
                  <img src={Gallery_12} alt="gallery img" />
                </div>

                <div className="col-sm gallery-text">
                  <h3>تصميم فيديو لمؤسسة الابداع لتطوير وتصميم الويب</h3>
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <i className="fa fa-tags" aria-hidden="true"></i>
                    </li>
                    <li className="list-inline-item">
                      <a href="">After Effect ,</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="">Video Editing ,</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="">Photoshop</a>
                    </li>
                  </ul>
                  <p>
                    هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة
                    ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل
                    توضع الفقرات
                  </p>
                  <a href="#" className="visit">
                    زيارة المشروع
                  </a>
                </div>
                <a href="#page" className="close">
                  X
                </a>
              </div>
            </div>
          </div>

          <div className="col-md row no-gutters">
            <div className="col-sm">
              <a href="#image-7">
                <img src={Gallery_13} alt="gallery img" className="img-fluid" />

                <div className="hover">
                  <i className="fa fa-search-plus" aria-hidden="true"></i>
                </div>
              </a>

              <div className="overlay-gallery row" id="image-7">
                <div className="col-sm">
                  <img src={Gallery_14} alt="gallery img" />
                </div>

                <div className="col-sm gallery-text">
                  <h3>تصميم فيديو لمؤسسة الابداع لتطوير وتصميم الويب</h3>
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <i className="fa fa-tags" aria-hidden="true"></i>
                    </li>
                    <li className="list-inline-item">
                      <a href="">After Effect ,</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="">Video Editing ,</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="">Photoshop</a>
                    </li>
                  </ul>
                  <p>
                    هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة
                    ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل
                    توضع الفقرات
                  </p>
                  <a href="#" className="visit">
                    زيارة المشروع
                  </a>
                </div>
                <a href="#page" className="close">
                  X
                </a>
              </div>
            </div>

            <div className="col-sm">
              <a href="#image-8">
                <img src={Gallery_15} alt="gallery img" className="img-fluid" />

                <div className="hover">
                  <i className="fa fa-search-plus" aria-hidden="true"></i>
                </div>
              </a>

              <div className="overlay-gallery row" id="image-8">
                <div className="col-sm">
                  <img src={Gallery_16} alt="gallery img" />
                </div>

                <div className="col-sm gallery-text">
                  <h3>تصميم فيديو لمؤسسة الابداع لتطوير وتصميم الويب</h3>
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <i className="fa fa-tags" aria-hidden="true"></i>
                    </li>
                    <li className="list-inline-item">
                      <a href="">After Effect ,</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="">Video Editing ,</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="">Photoshop</a>
                    </li>
                  </ul>
                  <p>
                    هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة
                    ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل
                    توضع الفقرات
                  </p>
                  <a href="#" className="visit">
                    زيارة المشروع
                  </a>
                </div>
                <a href="#page" className="close">
                  X
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
