import image_1 from "./images/icon.png";
import image_2 from "./images/slogn.png";
import image_3 from "./images/icons/send1.png";

export const Header = () => {
  return (
    <header className="text-center">
      <div className="brand wow animate__animated animate__bounceIn">
        <div className="logo">
          <img src={image_1} alt="شعار التطبيق" />
        </div>
        <div className="slogn">
          <img src={image_2} alt="شعار التطبيق" />
        </div>
      </div>
      <div className="page-heading wow animate__animated animate__fadeInUp">
        <h1>أنتظروا إنطلاق التطبيق قريباً</h1>
        <p>
          هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في
          صناعات المطابع
        </p>
      </div>

      <div className="counter wow animate__animated animate__fadeInDown">
        <div id="defaultCountdown"></div>
      </div>

      <div className="send-notification wow animate__animated animate__zoomIn">
        <p>هل تريد ارسال إشعار فور الانطلاق؟</p>
        <form
          action="#"
          method="post"
          name="myForm"
          className="wow animate__animated animate__zoomIn"
        >
          <div className="form-group">
            <div className="input-group input-group-lg">
              <input
                type="email"
                className="form-control"
                placeholder="بريدك الالكترونى"
                name="email"
                required
              />
              <span className="input-group-btn">
                <button className="btn Form-Submit" type="submit" name="submit">
                  <img src={image_3} alt="send" />
                </button>
              </span>

              <div className="alert alert-danger">
                <strong>عذراً! </strong> لقد قمت بإدخال بريد الكتروني خاطئ.
              </div>

              <div className="alert alert-success">
                <strong>تهانينا، </strong> لقد تم ادخال بريدك الالكتروني بنجاح.
              </div>
            </div>
          </div>
        </form>
      </div>
    </header>
  );
};
