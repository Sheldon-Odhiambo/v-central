import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import "../styles/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <nav className={`navbar ${location.pathname === '/' ? 'home-bg' : 'default-bg'}`}>
      <div className="navbar-logo" onClick={handleLogoClick}>
        <span className="logo-icon">🖐</span>
        <span className="logo-text">V-Central</span>
      </div>

      <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <a href="/opportunities">Find Opportunities</a>
        <a href="/about">About</a>
        <a href="/signin">Log In</a>

        <div
          className="signup-dropdown"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <button className="donate-btn">Sign Up ▾</button>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <a href="/signup/volunteer">As Volunteer</a>
              <a href="/signup/organization">As Organization</a>
            </div>
          )}
        </div>

        <a href="/contact">Contact</a>
      </div>

      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
