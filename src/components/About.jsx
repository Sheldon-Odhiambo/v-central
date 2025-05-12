import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-page font-sans text-gray-800">
      {/* Hero Section */}
      <section className="about-hero text-center">
        <div className="overlay">
          <h1 className="hero-title">Connecting Purpose with Opportunity</h1>
      
        </div>
      </section>

      {/* Mission Statement */}
      <section className="about-section">
        <div className="container">
          <h2 className="section-title">Our Mission</h2>
          <p className="section-text">
            At V-Central, our mission is to empower organizations and students alike by creating meaningful connections.
            We help organizations find committed volunteers and internship candidates, while enabling students and professionals
            to gain real-world experience through valuable placements.
          </p>
        </div>
      </section>

    
      <section className="about-split">
        <div className="about-img">
          <img src="/src/assets/pexels-kindelmedia-7688336.jpg" alt="Connecting People" />
        </div>
        <div className="about-text">
          <h2 className="section-title">How V-Central Began</h2>
          <p className="section-text">
            The idea for V-Central was born out of a common challenge — organizations struggling to find reliable help, and students
            finding it hard to secure attachments or internships. By building this platform, we’ve created a central hub where these
            needs meet. Now, volunteers and interns can be easily matched with opportunities that align with their skills and passions.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-section bg-light">
        <div className="container text-center">
          <h2 className="section-title">What We Stand For</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Collaboration</h3>
              <p>We create partnerships that lead to impact and growth.</p>
            </div>
            <div className="value-card">
              <h3>Empowerment</h3>
              <p>We help people gain experience and confidence in real environments.</p>
            </div>
            <div className="value-card">
              <h3>Accessibility</h3>
              <p>We make opportunities visible and reachable for all.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
