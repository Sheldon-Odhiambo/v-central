import React from 'react';
import '../styles/Footer.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo / Brand */}
        <div className="footer-brand">
          <h1>V-central</h1>
          <p>Connecting good people with good causes</p>
        </div>

        {/* Link Groups */}
        <div className="footer-links">
          <div className="link-group">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
            </ul>
          </div>
          <div className="link-group">
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Help</a></li>
              <li><a href="#">Volunteer Guide</a></li>
              <li><a href="#">Nonprofits</a></li>
            </ul>
          </div>
          <div className="link-group">
            <h4>Connect</h4>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Events</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="footer-social">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaInstagram /></a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} V-central;. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
