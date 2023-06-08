export const Contact = () => {
  return (
    <section className="contacts" id="contacts">
      <div className="container">
        <div className="row">
          <div className="col-md">
            <div id="map" className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.169232290924!2d55.272684514594665!3d25.19751478389605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4281e7878fd9%3A0x6e934c3edc4f07da!2sBurj+Khalifa+-+1+Sheikh+Mohammed+bin+Rashid+Blvd+-+Dubai+-+United+Arab+Emirates!5e0!3m2!1sen!2str!4v1513672333611"
                width="500"
                height="200"
                style={{
                  border: 0,
                }}
              ></iframe>
            </div>
          </div>
          <div className="col-md">
            <div className="info" id="image-1">
              <h3>عنوان الشركة</h3>
              <ul className="list-unstyled">
                <li>
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  الولايات المتحدة الامريكية ولاية سانفرانسيسكو ميدان الاوبرا
                </li>
                <li>
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  الامارات العربية المتحدة في منطقة بن راشد
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="form text-center">
              <h3>تواصل معنا</h3>
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
        </div>
      </div>
    </section>
  );
};

export default Contact;
