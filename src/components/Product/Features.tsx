import feature1 from "./images/feature/tablet-1.png";
import feature2 from "./images/feature/tablet-2.png";
import feature3 from "./images/feature/tablet-3.png";
export const Features = () => {
  return (
    <section className="features">
      <div className="title text-center">
        <h3>مميزات المنتج</h3>
      </div>
      <div className="container">
        <div className="feature">
          <div className="media">
            <img src={feature1} alt="Generic placeholder image" />
            <div className="media-body">
              <h5>بطارية تدوم لأكثر من يومين</h5>
              <p>
                هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
                سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع
                الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم
                إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن
                استخدام
              </p>
            </div>
          </div>
        </div>
        <div className="feature">
          <div className="media">
            <div className="media-body">
              <h5>ثنائي الشريحة</h5>
              <p>
                هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
                سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع
                الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم
                إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن
                استخدام
              </p>
            </div>
            <img src={feature2} alt="Generic placeholder image" />
          </div>
        </div>
        <div className="feature">
          <div className="media">
            <img src={feature3} alt="Generic placeholder image" />
            <div className="media-body">
              <h5 className="mt-0">أدمجت مع التطبيقات الممتعة اللعب</h5>
              <p className="mb-2">
                هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
                سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع
                الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم
                إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن
                استخدام
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
