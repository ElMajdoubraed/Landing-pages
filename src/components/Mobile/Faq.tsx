export const Faq = () => {
  return (
    <section className="faq" id="faq">
      <div className="overlay">
        <div className="container">
          <div className="title text-center">
            <h3>الأسئلة الأكثر شيوعاً عن التطبيق</h3>
          </div>
          <div className="row">
            <div className="col-md">
              <div id="accordion1">
                <div className="card">
                  <div className="card-header" role="tab" id="headingOne">
                    <h5 className="mb-0">
                      <a
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        هل التطبيق متاح بأكثر من نظام؟
                        <i className="fa fa-angle-up" aria-hidden="true"></i>
                      </a>
                    </h5>
                  </div>
                  <div
                    id="collapseOne"
                    className="collapse show"
                    aria-labelledby="headingOne"
                    data-parent="#accordion1"
                  >
                    <div className="card-block">
                      هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة
                      ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل
                      توضع الفقرات في الصفحة التي يقرأها.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" role="tab" id="headingTwo">
                    <h5 className="mb-0">
                      <a
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                        className="collapsed"
                      >
                        هل التطبيق مجاني بالكامل؟
                        <i className="fa fa-angle-up" aria-hidden="true"></i>
                      </a>
                    </h5>
                  </div>
                  <div
                    id="collapseTwo"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordion1"
                  >
                    <div className="card-block">
                      هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة
                      ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل
                      توضع الفقرات في الصفحة التي يقرأها.
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header" role="tab" id="headingThree">
                    <h5 className="mb-0">
                      <a
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                        className="collapsed"
                      >
                        ما نوع المطاعم المتاحة على التطبيق؟
                        <i className="fa fa-angle-up" aria-hidden="true"></i>
                      </a>
                    </h5>
                  </div>

                  <div
                    id="collapseThree"
                    className="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordion1"
                  >
                    <div className="card-block">
                      هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة
                      ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل
                      توضع الفقرات في الصفحة التي يقرأها.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md">
              <div id="accordion2">
                <div className="card">
                  <div className="card-header" role="tab" id="headingFour">
                    <h5 className="mb-0">
                      <a
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseFour"
                        aria-expanded="true"
                        aria-controls="collapseFour"
                      >
                        هل التطبيق متاح بأكثر من نظام؟
                        <i className="fa fa-angle-up" aria-hidden="true"></i>
                      </a>
                    </h5>
                  </div>

                  <div
                    id="collapseFour"
                    className="collapse show"
                    aria-labelledby="headingFour"
                    data-parent="#accordion2"
                  >
                    <div className="card-block">
                      هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة
                      ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل
                      توضع الفقرات في الصفحة التي يقرأها.
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header" role="tab" id="headingFive">
                    <h5 className="mb-0">
                      <a
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                        className="collapsed"
                      >
                        هل التطبيق مجاني بالكامل؟
                        <i className="fa fa-angle-up" aria-hidden="true"></i>
                      </a>
                    </h5>
                  </div>

                  <div
                    id="collapseFive"
                    className="collapse"
                    aria-labelledby="headingFive"
                    data-parent="#accordion2"
                  >
                    <div className="card-block">
                      هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة
                      ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل
                      توضع الفقرات في الصفحة التي يقرأها.
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header" role="tab" id="headingSix">
                    <h5 className="mb-0">
                      <a
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseSix"
                        aria-expanded="false"
                        aria-controls="collapseSix"
                        className="collapsed"
                      >
                        ما نوع المطاعم المتاحة على التطبيق؟
                        <i className="fa fa-angle-up" aria-hidden="true"></i>
                      </a>
                    </h5>
                  </div>

                  <div
                    id="collapseSix"
                    className="collapse"
                    aria-labelledby="headingSix"
                    data-parent="#accordion2"
                  >
                    <div className="card-block">
                      هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة
                      ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل
                      توضع الفقرات في الصفحة التي يقرأها.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
