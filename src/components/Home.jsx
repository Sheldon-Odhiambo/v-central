import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-wrapper">
      <section className="impact-hero">
        <div className="overlay">
          <h1 className="hero-title">Connecting Purpose with Opportunity</h1>
          <p className="hero-subtitle">
            V-Central bridges the gap between passionate individuals and organizations.
          </p>
          <Link to="/about" className="read-more-btn">Read More</Link>
        </div>
      </section>

      <section className="home-container">
        <h2 className="home-title">Become a Part of Something Bigger</h2>
        <p className="home-subtitle">Choose a role to start your journey with us.</p>

        <div className="diagram">
          <div className="diagram-row top-row">
            <Link to="/signup/coach" className="node">Interns</Link>
          </div>
          <div className="diagram-row middle-row">
            <Link to="/signup/player" className="node">Apprentice</Link>
            <Link to="/signup/organization" className="node center-node">Organization</Link>
            <Link to="/signup/volunteer" className="node">Volunteer</Link>
          </div>
          <div className="diagram-row bottom-row">
            <Link to="/signup/admin" className="node">Attachees</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
