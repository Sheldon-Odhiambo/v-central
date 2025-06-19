// SignUpModal.jsx
import React from "react";
import VolunteerSignup from "./VolunteerSignup";
import OrganizationSignup from "./OrganizationSignup";
import ApprenticeSignup from "./ApprenticeSignup";
import InternSignup from "./InternSignup";
import AttacheeSignup from "./ AttacheeSignup";
import "../styles/Modal.css";

const SignUpModal = ({ userType, onClose, onRegister }) => {
  const renderForm = () => {
    switch (userType) {
    
      case "volunteer":
        return <VolunteerSignup onRegister={onRegister} />;
      case "organization":
        return <OrganizationSignup onRegister={onRegister} />;
      case "attachee":
        return <AttacheeSignup onRegister={onRegister} />;
      case "apprentice":
        return <ApprenticeSignup onRegister={onRegister} />;
      case "intern":
        return <InternSignup onRegister={onRegister} />;
      default:
        return <p>Unknown user type: {userType}</p>;
    }
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>×</button>
        {renderForm()}
        <button className="modal-bottom-close" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default SignUpModal;
