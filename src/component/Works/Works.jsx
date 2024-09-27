import "./Works.css";

const Works = () => {
  return (
    <>
      <div className="works-background">
        <div className="works-inner">
          <div className="works-head">
            <h1 className="works-header">How it works</h1>
            <p className="works-paragraph">
              {"Don't"} just take our word for it; hear what our satisfied
              clients have to say about their experience with DigitX. We take
              pride in building lasting relationships and delivering exceptional
              results.
            </p>
          </div>

          <div className="works-container">
            <div className="work-card">
              <div className="card-inner">
                <div className="card-number">
                  <span className="num-card">01</span>
                </div>
                <div className="img-container">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/xba39ir72ia-521%3A243?alt=media&token=1f7e69d1-3403-4fd5-984f-92eb849f6bb8"
                    alt=""
                    className="images-card"
                  />
                </div>
                <div className="work-card-info">
                  <span className="work-card-head">Select Type of Vehicle</span>
                  <img src="./images/Line.png" alt="" className="line" />
                  <p className="card-para">
                  Whether a Saloon car, SUV, Motorcylce or even Trucks, 
                  you can specify your vehicle type and few other details 
                  and our platform automatically gives you the cost for either paper renewal, vehicle registration, change of 
                  ownership or other types of papers.
                  </p>
                </div>
              </div>
            </div>

            <div className="work-card">
              <div className="card-inner">
                <div className="card-number">
                  <span className="num-card">02</span>
                </div>
                <div className="img-container">
                  <img
                    src="./images/payment.png"
                    alt=""
                    className="images-card"
                  />
                </div>
                <div className="work-card-info">
                  <span className="work-card-head">Make Payment</span>
                  <img src="./images/Line.png" alt="" className="line" />
                  <p className="card-para">
                    You can easily make payments for the Vehicle papers you want
                    to process online with your card or make a bank transfer.
                  </p>
                </div>
              </div>
            </div>

            <div className="work-card">
              <div className="card-inner">
                <div className="card-number">
                  <span className="num-card">03</span>
                </div>
                <div className="img-container">
                  <img src="./images/time.png" alt="" className="images-card" />
                </div>
                <div className="work-card-info">
                  <span className="work-card-head">Done within 24 hours</span>
                  <img src="./images/Line.png" alt="" className="line" />
                  <p className="card-para">
                    Once you have made payments, your papers will be processed
                    immediately within 24 hours (with a picture proof), delivery
                    is usually done the next day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
