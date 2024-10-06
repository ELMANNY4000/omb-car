import PropTypes from "prop-types";
import "./Popup.css"; // Assuming the CSS matches the design

const Popup = ({ show, handleClose, title, requirements, price }) => {
  const handleProceedClick = () => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSe3ZWLZBuJtmFMeKqpvIGtVhJw5xiFNn5_NLST8ZwlMe_iCmw/viewform?usp=sf_link", "_blank");
  };

  return (
    <div className={`popup ${show ? "show" : ""}`}>
      <div className="popup-inner">
        <div className="popup-con">
          <div className="pop-header">
            <h2 className="popup-head">{title}</h2>
          </div>

          <div className="requirements">
            <h3>Requirements</h3>
            <div className="sub-requirements">
              <ul>
                {requirements.map((requirement, index) => (
                  <li key={index}>{requirement}</li>
                ))}
              </ul>
            </div>

            <div className="price">
              <h3>{price}</h3>
            </div>

            <div className="popup-buttons">
              <button className="cancel-btn" onClick={handleClose}>
                Cancel Payment
              </button>
              {/* Proceed Payment Button with Google Form Link */}
              <button className="proceed-btn" onClick={handleProceedClick}>
                Proceed Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add PropTypes validation
Popup.propTypes = {
  show: PropTypes.bool.isRequired, // 'show' determines whether to display the popup
  handleClose: PropTypes.func.isRequired, // 'handleClose' handles closing the popup
  title: PropTypes.string.isRequired, // Dynamic title for the popup
  requirements: PropTypes.array.isRequired, // Dynamic list of requirements
  price: PropTypes.string.isRequired, // Dynamic price for the service
};

export default Popup;
