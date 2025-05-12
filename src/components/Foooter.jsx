import React from "react";
import "../styles/Foooter.css"; // import CSS file
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const About = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-section">
          <h2>About Us</h2>
          <p>
            We help organizations and communities solve complex problems using
            human-centered design and design thinking methods.
          </p>
        </div>
        <div className="footer-section">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">Workshops</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Contact</h2>
          <p>Email: hello@designsociety.com</p>
          <p>Phone: +254 712 345 678</p>
          <p>Nairobi, Kenya</p>
        </div>
        <div className="footer-section">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} Design Thinking Society. All rights reserved.
      </div>
    </footer>
  );
};

export default About;
