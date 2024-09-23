import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navigation">
        <img src="./images/Logo.svg" alt="" className="logo" />

        <div className="selection-contanier">
            <div className="cate">
                <span className="page">Home</span>
                <span className="page">Service </span>
                <span className="page">How it  works</span>
                <span className="page">Testimonials</span>
            </div>
            <div className="navigation-btn">
                <img src="./images/phone.svg" alt="" className="btn-icon" />
                <span className="btn-text">Book a Call</span>
            </div>
            <img src="./images/menu.svg" alt="" className="menu" />
        </div>

      </nav>
    </>
  )
}

export default Navbar