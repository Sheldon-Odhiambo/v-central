import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import "../styles/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

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
        <a href="/solutions">Business Solutions</a>
        <a href="/recruit">Recruit Volunteers</a>
        <a href="/signin">Log In</a>
        <a href="/signup">
          <button className="donate-btn">Sign Up</button>
        </a>
      </div>

      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
