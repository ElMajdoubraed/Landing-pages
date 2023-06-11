import slider1 from "./images/slider/1.jpg";
import slider2 from "./images/slider/2.jpg";
import slider3 from "./images/slider/3.jpg";
import slider4 from "./images/slider/4.jpg";

export const Contacts = () => {
  return (
    <section className="contacts" id="contacts">
      <div className="overlay">
        <div className="container">
          <div className="testimonials" id="testimonials">
            <div className="title text-center">
              <h3>آراء العملاء</h3>
            </div>
            <div className="slider">
              <div
                id="testimonials-slider"
                className="carousel slide"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#testimonials-slider"
                    data-slide-to="0"
                    className="active"
                  ></li>
                  <li data-target="#testimonials-slider" data-slide-to="1"></li>
                  <li data-target="#testimonials-slider" data-slide-to="2"></li>
                  <li data-target="#testimonials-slider" data-slide-to="3"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="carousel-caption">
                      <img
                        className="d-block rounded-circle"
                        alt="person"
                        src={slider1}
                      />
                      <h3>
                        محمد هاني
                        <span>- مصمم ويب بشركة جوجل</span>
                      </h3>
                      <p>
                        هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء
                        لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص
                        أو شكل توضع الفقرات
                      </p>
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <a href="">
                            <i
                              className="fa fa-linkedin-square"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="">
                            <i
                              className="fa fa-github-square"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="carousel-caption">
                      <img
                        className="d-block rounded-circle"
                        alt="person"
                        src={slider2}
                      />
                      <h3>
                        نهي احمد
                        <span>&#95; مصمم ويب بشركة جوجل</span>
                      </h3>
                      <p>
                        هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء
                        لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص
                        أو شكل توضع الفقرات
                      </p>
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <a href="">
                            <i
                              className="fa fa-linkedin-square"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="">
                            <i
                              className="fa fa-twitter-square"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="carousel-caption">
                      <img
                        className="d-block rounded-circle"
                        alt="person"
                        src={slider3}
                      />
                      <h3>
                        جورج يوسف
                        <span>&#95; مصمم ويب بشركة جوجل</span>
                      </h3>
                      <p>
                        هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء
                        لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص
                        أو شكل توضع الفقرات
                      </p>
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <a href="">
                            <i
                              className="fa fa-github-square"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="">
                            <i
                              className="fa fa-linkedin-square"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="">
                            <i
                              className="fa fa-twitter-square"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="carousel-caption">
                      <img
                        className="d-block rounded-circle"
                        alt="person"
                        src={slider4}
                      />
                      <h3>
                        لارا محسن
                        <span>&#95; مصمم ويب بشركة جوجل</span>
                      </h3>
                      <p>
                        هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء
                        لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص
                        أو شكل توضع الفقرات
                      </p>
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <a href="">
                            <i
                              className="fa fa-github-square"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="">
                            <i
                              className="fa fa-linkedin-square"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="">
                            <i
                              className="fa fa-facebook-official"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#testimonials-slider"
                  role="button"
                  data-slide="prev"
                >
                  <i className="fa fa-angle-left fa-2x" aria-hidden="true"></i>
                </a>
                <a
                  className="carousel-control-next"
                  href="#testimonials-slider"
                  role="button"
                  data-slide="next"
                >
                  <i className="fa fa-angle-right fa-2x" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="contact-info" id="contact-info">
            <div className="title text-center">
              <h3>تواصل معي</h3>
            </div>
            <div className="row">
              <div className="col-md-8">
                <div className="form">
                  <form className="cmxform row" id="commentForm">
                    <div className="form-group col-sm-6">
                      <input
                        type="text"
                        id="cname"
                        name="name"
                        minLength={2}
                        className="form-control"
                        placeholder="الاسم"
                        required
                      />
                    </div>
                    <div className="form-group col-sm-6">
                      <input
                        type="email"
                        id="cemail"
                        name="email"
                        className="form-control"
                        placeholder="البريد الالكترونى"
                        required
                      />
                    </div>
                    <div className="form-group col-sm-12">
                      <textarea
                        className="form-control"
                        id="ccomment"
                        name="comment"
                        placeholder="الرسالة"
                        required
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      name="submit"
                      className="submit Form-Submit"
                      value="Submit"
                    >
                      ارسال
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-md-4">
                <ul className="contact-us list-unstyled">
                  <li>
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    012 3456 7890
                  </li>
                  <li>
                    <i className="fa fa-envelope-o" aria-hidden="true"></i>
                    email@domain.com
                  </li>
                </ul>
                <hr />
                <ul className="social list-inline">
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
                    <a href="" className="facebook">
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="copyright text-center">
            <p>جميع الحقوق محفوظة</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
