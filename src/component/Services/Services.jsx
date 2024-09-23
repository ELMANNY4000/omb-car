import { useState } from "react";
import "./Services.css";
import Popup from "../Popup/Popup";

const Services = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState({
    title: "",
    description: "",
  });

  const togglePopup = (serviceTitle, serviceDescription) => {
    setPopupContent({ title: serviceTitle, description: serviceDescription });
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
          </div>
          {/* Card section */}
          <div className="service-card-con">
            <div className="service-card">
              <div className="img-service">
                <img src="" alt="" className="service-img" />
              </div>
              <span className="card-title">Vehicle Document Renewal </span>
              <div className="card-price">From: ₦5000 - ₦15,400</div>
              <div
                className="payment-btn"
                onClick={() =>
                  togglePopup(
                    "Vehicle Document Renewal",
                    "Details about vehicle document renewal..."
                  )
                }
              >
                <span className="payment-text">Learn more</span>
              </div>
            </div>

            <div className="service-card">
              <div className="img-service">
                <img src="" alt="" className="service-img" />
              </div>
              <span className="card-title">
                Vehicle Re-Registration (Change Of Ownership) Requirements
              </span>
              <div className="card-price">From: ₦5000 - ₦15,400</div>
              <div
                className="payment-btn"
                onClick={() =>
                  togglePopup(
                    "Vehicle Re-Registration",
                    "Details about vehicle re-registration..."
                  )
                }
              >
                <span className="payment-text">Learn more</span>
              </div>
            </div>

            <div className="service-card">
              <div className="img-service">
                <img src="" alt="" className="service-img" />
              </div>
              <span className="card-title">International Drivers License</span>
              <div className="card-price">From: ₦5000 - ₦15,400</div>
              <div
                className="payment-btn"
                onClick={() =>
                  togglePopup(
                    "International Drivers License",
                    "Details about international drivers license..."
                  )
                }
              >
                <span className="payment-text">Learn more</span>
              </div>
            </div>

            <div className="service-card">
              <div className="img-service">
                <img src="" alt="" className="service-img" />
              </div>
              <span className="card-title">
                Drivers Licence (New Application)
              </span>
              <div className="card-price">From: ₦5000 - ₦15,400</div>
              <div
                className="payment-btn"
                onClick={() =>
                  togglePopup(
                    "Drivers Licence (New Application)",
                    "Details about drivers licence (new application)..."
                  )
                }
              >
                <span className="payment-text">Learn more</span>
              </div>
            </div>
          </div>

          {/* Popup Component */}
          <Popup show={showPopup} handleClose={() => setShowPopup(false)}>
            <h2>{popupContent.title}</h2>
            <p>{popupContent.description}</p>
          </Popup>
        </div>
      </div>
    </>
  );
};

export default Services;
