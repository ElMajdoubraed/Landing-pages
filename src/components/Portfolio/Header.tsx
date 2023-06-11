import image from "./images/profile.jpg";
export const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <div className="MainCard text-center">
          <img className="rounded-circle" src={image} alt="personal-img" />
          <h1>
            <span>- مطور واجهة الاستخدام</span>
          </h1>
          <ul className="list-inline">
            <li className="list-inline-item">
              <a href="">
                <i className="fa fa-github-square" aria-hidden="true"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="">
                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="">
                <i className="fa fa-twitter-square" aria-hidden="true"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="">
                <i className="fa fa-facebook-official" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
          <h2>
            مطور واجهة الأستخدام أعمل بتصميم وتتطوير منذ خمس سنوات
            <br />
            -----
          </h2>
          <p>
            هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي
            القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في
            الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي
            توزيعاَ طبيعي
          </p>
          <a href="files/cv.pdf" download="السيرة الذاتية">
            <i className="fa fa-download" aria-hidden="true"></i>
            تحميل السيرة الذاتية
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
