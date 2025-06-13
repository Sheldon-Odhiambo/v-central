import React, { useState } from "react";
import "../styles/Header.css"; // Make sure this file path is correct

const Header = ({ user, onLogout }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <header className="header">
      <div className="logo">V Central</div>

      {user && (
        <div className="user-section" onClick={toggleDropdown}>
          <img
            src={user.profilePicture || "/default-avatar.png"}
            alt="Profile"
            className="avatar"
          />
          <span className="user-name">{user.fullName}</span>

          <div className={`dropdown ${dropdownOpen ? "show" : ""}`}>
            <ul>
              <li>Profile</li>
              <li>Settings</li>
              <li onClick={onLogout}>Logout</li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
