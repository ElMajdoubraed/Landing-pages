export const Statistics = () => {
  return (
    <section className="statistics" id="statistics">
      <div className="overlay">
        <div className="container">
          <div className="row">
            <div className="col-lg col-md-4 col-sm-6">
              <div className="stat text-center">
                <div className="circle" data-value="0.75">
                  <span></span>
                </div>
                <p>HTML</p>
              </div>
            </div>
            <div className="col-lg col-md-4 col-sm-6">
              <div className="stat text-center">
                <div className="circle" data-value="0.5">
                  <span></span>
                </div>
                <p>CSS</p>
              </div>
            </div>
            <div className="col-lg col-md-4 col-sm-6">
              <div className="stat text-center">
                <div className="circle" data-value="0.5">
                  <span></span>
                </div>
                <p>Bootstrap</p>
              </div>
            </div>

            <div className="col-lg col-md-4 col-sm-6">
              <div className="stat text-center">
                <div className="circle" data-value="0.3">
                  <span></span>
                </div>
                <p>Javascript</p>
              </div>
            </div>

            <div className="col-lg col-md-4 col-sm-6">
              <div className="stat text-center">
                <div className="circle" data-value="0.75">
                  <span></span>
                </div>
                <p>PHP</p>
              </div>
            </div>

            <div className="col-lg col-md-4 col-sm-6">
              <div className="stat text-center">
                <div className="circle" data-value="0.5">
                  <span></span>
                </div>
                <p>MySql</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
