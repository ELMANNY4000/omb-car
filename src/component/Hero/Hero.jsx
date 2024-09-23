import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-background">

          <div className="hero-text">
            <div className="hero-head-paragraph-safe">
              <div className="hero-head-paragraph">
                <h1 className="hero-header">Vehicle Papers,<br /> Made Easy.</h1>
                <p className="hero-paragraph">
                  processes online vehicle registration & car papers renewal
                  that is cheaper, automated & with home/office delivery
                </p>
              </div>
              <div className="safe">
                <img src="./images/sun.svg" alt="" className="sun"/>
                <span className="safe100">
                100% Safe GUARANTEE
                </span>
              </div>
            </div>
            <div className="hero-btn">
              <span className="button-hero">Get Started </span>
            </div>
          </div>
          <img src="./images/hero.png" alt="" className="hero-image" />
          <img src="./images/mobile.png" alt="" className="small-image" />
        </div>
      </div>
    </>
  );
};

export default Hero;
