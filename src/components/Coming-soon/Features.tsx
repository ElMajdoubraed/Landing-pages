import image_1 from "./images/icons/prush.png";
import image_2 from "./images/icons/phone.png";
import image_3 from "./images/icons/fork.png";
import image_4 from "./images/icons/photo.png";
import image_5 from "./images/icons/mail.png";
import image_6 from "./images/icons/person-plus.png";

export const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <h2>مميزات اللعبة</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="media">
              <img src={image_1} alt="feature icon" />
              <div className="media-body">
                <h5>تصميم انيق وعصري</h5>
                <p>
                  هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى)
                  ويُستخدم في صناعات المطابع
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="media">
              <div className="media-body">
                <h5>اللعبة متوفرة بوضع الشاشة الممتلئ</h5>
                <p>
                  هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى)
                  ويُستخدم في صناعات المطابع
                </p>
              </div>
              <img src={image_2} alt="feature icon" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="media">
              <img src={image_4} alt="feature icon" />
              <div className="media-body">
                <h5>يوجد صور لتوضيح تفاصيل اللعبة</h5>
                <p>
                  هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى)
                  ويُستخدم في صناعات المطابع
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="media">
              <div className="media-body">
                <h5>يمكنك مشاركة اللعبة كمجموعة</h5>
                <p>
                  هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى)
                  ويُستخدم في صناعات المطابع
                </p>
              </div>
              <img src={image_3} alt="feature icon" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="media">
              <img src={image_5} alt="feature icon" />
              <div className="media-body">
                <h5>يمكنك ارسال الهدايا لأصدقائك عبر اللعبة</h5>
                <p>
                  هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى)
                  ويُستخدم في صناعات المطابع
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="media">
              <div className="media-body">
                <h5>أضافة اصدقاء جدد لاستخدام اللعبة</h5>
                <p>
                  هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى)
                  ويُستخدم في صناعات المطابع
                </p>
              </div>
              <img src={image_6} alt="feature icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
