import { useState } from "react";
import "./Services.css";
import Popup from "../Popup/Popup";

const Services = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState({
    title: "",
    requirements: [],
    price: "",
  });

  const [activeCategory, setActiveCategory] = useState("Cars");

  // Service data for each category
  const serviceData = {
    Cars: [
      {
        img: "./images/service.jpg",
        title: "Vehicle Document Renewal",
        price: "₦15,400",
        requirements: [
          "Full Name", "Address", "Scanned Copy of custom duties",
          "Chassis number", "Engine Number", "Car Color",
          "Phone Number", "Picture of chassis on Dashboard",
          "A Picture of the expired vehicle license", 
          "Address and Phone number for delivery"
        ],
      },
      {
        img: "./images/service1.jpg",
        title: "Vehicle Re-Registration (Change of Ownership)",
        price: "₦12,000",
        requirements: [
          "Full Name", "Address", "Proof of Ownership",
          "Previous Registration Documents", "Chassis Number", "Engine Number"
        ],
      },
    ],
    Motorcycle: [
      {
        img: "./images/service.jpg",
        title: "Vehicle Document Renewal",
        price: "₦15,400",
        requirements: [
          "Full Name", "Address", "Scanned Copy of custom duties",
          "Chassis number", "Engine Number", "Car Color",
          "Phone Number", "Picture of chassis on Dashboard",
          "A Picture of the expired vehicle license", 
          "Address and Phone number for delivery"
        ],
      },
      {
        img: "./images/service1.jpg",
        title: "Vehicle Re-Registration (Change of Ownership)",
        price: "₦12,000",
        requirements: [
          "Full Name", "Address", "Proof of Ownership",
          "Previous Registration Documents", "Chassis Number", "Engine Number"
        ],
      },
      {
        img: "./images/service3.jpg",
        title: "Drivers License (New Application)",
        price: "₦15,000",
        requirements: [
          "Full Name", "Address", "Medical Fitness Report", "Passport Photos"
        ],
      },
      {
        img: "./images/service2.jpg",
        title: "International Drivers License",
        price: "₦10,500",
        requirements: [
          "Full Name", "Address", "Current Drivers License", "Passport Photo"
        ],
      },
    ],
    Truck: [
      {
        img: "./images/service3.jpg",
        title: "Drivers License (New Application)",
        price: "₦15,000",
        requirements: [
          "Full Name", "Address", "Medical Fitness Report", "Passport Photos"
        ],
      },
    ],
  };

  // Function to set active category
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  // Function to toggle popup and update its content dynamically
  const togglePopup = (serviceTitle, serviceRequirements, servicePrice) => {
    setPopupContent({
      title: serviceTitle,
      requirements: serviceRequirements,
      price: servicePrice,
    });
    setShowPopup(!showPopup);
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
              {["Cars", "Motorcycle", "Truck"].map((category) => (
                <div
                  key={category}
                  className={`category-btn ${activeCategory === category ? "active" : ""}`}
                  onClick={() => handleCategoryClick(category)}
                >
                  <span className="cate-text">{category}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Service Cards */}
          <div className="service-card-con">
            {serviceData[activeCategory].map((service, index) => (
              <div className="service-card" key={index}>
                <div className="img-service">
                  <img src={service.img} alt="" className="service-img" />
                </div>
                <span className="card-title">{service.title}</span>
                <div className="card-price">From: {service.price}</div>
                <div
                  className="payment-btn"
                  onClick={() =>
                    togglePopup(
                      `${service.title} Requirements`,
                      service.requirements,
                      service.price
                    )
                  }
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
          />
        </div>
      </div>
    </>
  );
};

export default Services;
