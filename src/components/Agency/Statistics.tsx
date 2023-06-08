//@ts-nocheck
import Static_1 from "./images/icon1.png";
import Static_2 from "./images/icon2.png";
import Static_3 from "./images/icon3.png";
import Static_4 from "./images/icon4.png";

export const Statistics = () => {
  $(document).ready(function () {
    $(".timer").countTo();
  });
  return (
    <section className="statistics" id="statistics">
      <div className="overlay">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="stat text-center">
                <img src={Static_1} alt="icon" />
                <div className="count">
                  <span
                    className="timer"
                    data-from="150"
                    data-to="250"
                    data-speed="3000"
                    data-refresh-interval="1"
                  ></span>
                </div>
                <p>موقع إلكترونى</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="stat text-center">
                <img src={Static_2} alt="icon" />
                <div className="count">
                  <span
                    className="timer"
                    data-from="1"
                    data-to="100"
                    data-speed="3000"
                    data-refresh-interval="1"
                  ></span>
                </div>
                <p>تطبيق موبايل</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="stat text-center">
                <img src={Static_3} alt="icon" />
                <div className="count">
                  <span
                    className="timer"
                    data-from="6000"
                    data-to="10000"
                    data-speed="10000"
                    data-refresh-interval="5"
                  ></span>
                </div>
                <p>مستخدم</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="stat text-center">
                <img src={Static_4} alt="icon" />
                <div className="count">
                  <span
                    className="timer"
                    data-from="0"
                    data-to="30"
                    data-speed="3000"
                    data-refresh-interval="1"
                  ></span>
                </div>
                <p>فيديو مونتاج</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
