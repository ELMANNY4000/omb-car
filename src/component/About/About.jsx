import "./About.css";

const About = () => {
  return (
    <>
       <div className="about">
        <div className="about-inner">

        <div className="hero-text">
            <div className="hero-head-paragraph-safe">
              <div className="hero-head-paragraph">
                <h1 className="hero-header">We are your trusted partner</h1>
                <p className="hero-paragraph">
                processes online vehicle registration & 
                car papers renewal that is cheaper, automated
                 & with home/office delivery
                </p>
              </div>
              
            </div>
            <div className="hero-btn">
              <span className="button-hero">Renew your papers </span>
            </div>
          </div>
          <img src="./images/about.png" alt="" className="about-image" />
          <img src="./images/about-mb.png" alt="" className="small-image" />
          
        </div>
       </div>
    </>
  )
}

export default About