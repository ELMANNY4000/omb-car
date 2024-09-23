import PropTypes from "prop-types"; // Import PropTypes
import "./Popup.css"; // Assuming the CSS matches the design

const Popup = ({ show, handleClose }) => {
  return (
    <div className={`popup ${show ? "show" : ""}`}>
      <div className="popup-inner">
        <h2>Vehicle Document Renewal Requirements</h2>

        <div className="requirements">
          <h3>Requirements</h3>
          <ul>
            <li>Full Name</li>
            <li>Address</li>
            <li>Scanned Copy of custom duties</li>
            <li>Chassis number</li>
            <li>Engine Number</li>
            <li>Car Color</li>
            <li>Phone Number</li>
            <li>Picture of chassis on Dashboard</li>
            <li>New Car Registration Requirements</li>
            <li>A Picture of the expired vehicle license</li>
            <li>Address and Phone number for delivery</li>
          </ul>
        </div>

        <div className="price">
          <h3>₦15,400</h3>
        </div>

        <div className="popup-buttons">
          <button className="cancel-btn" onClick={handleClose}>
            Cancel Payment
          </button>
          <button className="proceed-btn">Proceed Payment</button>
        </div>
      </div>
    </div>
  );
};

// Add PropTypes validation
Popup.propTypes = {
  show: PropTypes.bool.isRequired, // show must be a boolean and is required
  handleClose: PropTypes.func.isRequired, // handleClose must be a function and is required
};

export default Popup;
