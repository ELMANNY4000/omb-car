import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="foot-container">

          <div className="footer-company">
            <span className="logo-footer">Omb Cars</span>
            <div className="company-contact">
              <div className="con-link">
              <img src="./images/message.svg" alt="" className=".footer-icon"/>
              <span className="contact">exmaple@gmail.com</span>
              </div>

              <div className="con-link">
              <img src="./images/phone2.svg" alt="" className=".footer-icon" />
              <span className="contact">+91 91813 23 2309</span>
              </div>

              <div className="con-link">
              <img src="./images/location.svg" alt="" className=".footer-icon" />
              <span className="contact">Somewhere in the World</span>
              </div>

            </div>
          </div>


          <div className="socials-pages">
            <div className="pages-links">
              <span className="links-head">Home</span>
              <span className="links-head">Service</span>
              <span className="links-head">How it works</span>
              <span className="links-head">Testimonials</span>
            </div>

            <div className="social">
              <span className="social-head">Social Profiles</span>
              <div className="social-container">
                <div className="link-socials">
                  <img src="./images/facebook.png" alt="Facebook" className="" />
                </div>

                <div className="link-socials">
                  <img src="./images/twitter.png" alt="Facebook" />
                </div>

                <div className="link-socials">
                  <img src="./images/facebook.png" alt="Facebook" />
                </div>
              </div>
            </div>
          </div>
          
        </div>

        <span className="foot-date">
          © 2023 Skillbridge. All rights reserved.
        </span>
      
      </footer>
    </>
  );
};

export default Footer;
