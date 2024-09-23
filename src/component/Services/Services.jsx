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

  // Function to toggle popup and update its content dynamically
  const togglePopup = (serviceTitle, serviceRequirements, servicePrice) => {
    setPopupContent({ title: serviceTitle, requirements: serviceRequirements, price: servicePrice });
    setShowPopup(!showPopup);
  };

  return (
    <>
      <div className="services">
        <div className="service-container"> {/* Category Button */}
            <div className="select-container">
              <div className="category-btn">
                <span className="cate-text">Cars</span>
              </div>

              <div className="category-btn">
                <span className="cate-text">Motorcycle</span>
              </div>

              <div className="category-btn">
                <span className="cate-text">Truck</span>
              </div>
            </div>
          {/* Header-text */}
          <div className="service-head">
            <h1 className="service-header">Select a service</h1>
          </div>

           
          

          {/* Service Cards */}
          <div className="service-card-con">
            {/* Vehicle Document Renewal */}
            <div className="service-card">
              <div className="img-service">
                <img src="./images/service.jpg" alt="" className="service-img" />
              </div>
              <span className="card-title">Vehicle Document Renewal</span>
              <div className="card-price">From: ₦5,000 - ₦15,400</div>
              <div
                className="payment-btn"
                onClick={() =>
                  togglePopup(
                    "Vehicle Document Renewal Requirements",
                    [
                      "Full Name",
                      "Address",
                      "Scanned Copy of custom duties",
                      "Chassis number",
                      "Engine Number",
                      "Car Color",
                      "Phone Number",
                      "Picture of chassis on Dashboard",
                      "New Car Registration Requirements",
                      "A Picture of the expired vehicle license",
                      "Address and Phone number for delivery"
                    ],
                    "₦15,400"
                  )
                }
              >
                <span className="payment-text">Learn more</span>
              </div>
            </div>

            {/* Vehicle Re-Registration */}
            <div className="service-card">
              <div className="img-service">
                <img src="./images/service1.jpg" alt="" className="service-img" />
              </div>
              <span className="card-title">Vehicle Re-Registration (Change of Ownership)</span>
              <div className="card-price">From: ₦5,000 - ₦15,400</div>
              <div
                className="payment-btn"
                onClick={() =>
                  togglePopup(
                    "Vehicle Re-Registration Requirements",
                    [
                      "Full Name",
                      "Address",
                      "Proof of Ownership",
                      "Previous Registration Documents",
                      "Chassis Number",
                      "Engine Number"
                    ],
                    "₦12,000"
                  )
                }
              >
                <span className="payment-text">Learn more</span>
              </div>
            </div>

            {/* International Drivers License */}
            <div className="service-card">
              <div className="img-service">
                <img src="./images/service2.jpg" alt="" className="service-img" />
              </div>
              <span className="card-title">International Drivers License</span>
              <div className="card-price">From: ₦5,000 - ₦15,400</div>
              <div
                className="payment-btn"
                onClick={() =>
                  togglePopup(
                    "International Drivers License Requirements",
                    [
                      "Full Name",
                      "Address",
                      "Current Drivers License",
                      "Passport Photo"
                    ],
                    "₦10,500"
                  )
                }
              >
                <span className="payment-text">Learn more</span>
              </div>
            </div>

            {/* Drivers License (New Application) */}
            <div className="service-card">
              <div className="img-service">
                <img src="./images/service3.jpg" alt="" className="service-img" />
              </div>
              <span className="card-title">Drivers License (New Application)</span>
              <div className="card-price">From: ₦5,000 - ₦15,400</div>
              <div
                className="payment-btn"
                onClick={() =>
                  togglePopup(
                    "Drivers License (New Application) Requirements",
                    [
                      "Full Name",
                      "Address",
                      "Medical Fitness Report",
                      "Passport Photos"
                    ],
                    "₦15,000"
                  )
                }
              >
                <span className="payment-text">Learn more</span>
              </div>
            </div>
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
