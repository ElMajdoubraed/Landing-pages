import image1 from "./images/1.jpg";
import image2 from "./images/2.jpg";
export const Contact = () => {
  return (
    <section className="contact">
      <div className="container">
        <div className="row">
          <div className="col-md">
            <div className="contact-us">
              <div className="title">
                <h4>تواصل معنا</h4>
              </div>
              <form id="commentForm">
                <div className="form-group">
                  <input
                    type="text"
                    id="cname"
                    name="name"
                    className="form-control"
                    placeholder="الاسم"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    id="cemail"
                    name="email"
                    className="form-control"
                    placeholder="البريد الالكترونى"
                    required
                  />
                </div>
                <div className="form-group">
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
                  <span
                    className="fa fa-angle-double-left"
                    aria-hidden="true"
                  ></span>
                </button>
              </form>
            </div>
          </div>
          <div className="col-md">
            <div className="other-products">
              <div className="title">
                <h4>المنتجات الأكثر مشاهدة</h4>
              </div>
              <div className="media">
                <img src={image1} alt="Generic placeholder image" />
                <div className="media-body">
                  <h5>شفرة متعددة الأغراض</h5>
                  <p>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء</p>
                </div>
              </div>
              <div className="media">
                <img src={image2} alt="Generic placeholder image" />
                <div className="media-body">
                  <h5>باور بانك 3000 أمبير</h5>
                  <p>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
