import { useState } from "react";
import "./Services.css";
import services from "../../data"
import Popup from "../Popup/Popup";

const Services = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState({
    title: "",
    requirements: [],
    price: "",
    paymentLink: "",
  });

  // State to manage active category
  const [activeCategory, setActiveCategory] = useState("Cars");

  const filteredServices = services.filter(service => service.category === activeCategory);

  // Function to toggle popup and update its content dynamically
  const togglePopup = (service) => {
    setPopupContent({
      title: service.title,
      requirements: service.requirements,
      price: service.price,
      paymentLink: service.paymentLink,
    });
    setShowPopup(!showPopup);
  };

  // Function to set active category
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <>
      <div className="services">
        <div className="service-container">
          {/* Header-text */}
          <div className="service-head">
            <h1 className="service-header">Select a service</h1>
            {/* Category Button */}
            <div className="select-container">
              <div
                className={`category-btn ${
                  activeCategory === "Cars" ? "active" : ""
                }`}
                onClick={() => handleCategoryClick("Cars")}
              >
                <span className="cate-text">Cars</span>
              </div>

              <div
                className={`category-btn ${
                  activeCategory === "Motorcycle" ? "active" : ""
                }`}
                onClick={() => handleCategoryClick("Motorcycle")}
              >
                <span className="cate-text">Motorcycle</span>
              </div>

              <div
                className={`category-btn ${
                  activeCategory === "Truck" ? "active" : ""
                }`}
                onClick={() => handleCategoryClick("Truck")}
              >
                <span className="cate-text">Truck</span>
              </div>
            </div>
          </div>

          {/* Service Cards */}
          <div className="service-card-con">
            {filteredServices.map((service, index) => (
              <div className="service-card" key={index}>
                <div className="img-service">
                  <img src={service.image} alt={service.title} className="service-img" />
                </div>
                <span className="card-title">{service.title}</span>
                <div className="card-price">From: {service.price}</div>
                <div
                  className="payment-btn"
                  onClick={() => togglePopup(service)}
                >
                  <span className="payment-text">Learn more</span>
                </div>
              </div>
            ))}
          </div>

          {/* Popup Component */}
          <Popup
            show={showPopup}
            handleClose={() => setShowPopup(false)}
            title={popupContent.title}
            requirements={popupContent.requirements}
            price={popupContent.price}
            paymentLink={popupContent.paymentLink}
          />
        </div>
      </div>
    </>
  );
};

export default Services;
