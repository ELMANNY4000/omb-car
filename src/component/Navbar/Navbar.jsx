import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="navigation">
        <img src="./images/Logo.svg" alt="" className="logo" />

        <div className={`selection-container ${isMenuOpen ? "open" : ""}`}>
          <div className="cate">
            <span className="page">Home</span>
            <span className="page">Service</span>
            <span className="page">How it works</span>
            <span className="page">Testimonials</span>
          </div>
          <div className="navigation-btn">
            <img src="./images/phone.svg" alt="" className="btn-icon" />
            <span className="btn-text">Book a Call</span>
          </div>
        </div>

        <img
          src="./images/menu.svg"
          alt="menu"
          className="menu"
          onClick={toggleMenu}
        />
      </nav>
    </>
  );
};

export default Navbar;