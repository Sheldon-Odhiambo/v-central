import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  const [email, setEmail] = useState('');
  const [userType, setUserType] = useState('');
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (email && userType) {
      navigate('/signup/volunteer', { state: { email, userType } });
    } else {
      alert('Please enter your email and select user type.');
    }
  };

  return (
    <div className="home-wrapper">
      <section className="impact-hero">
        <div className="overlay">
          <h1 className="hero-title">Connecting Purpose with Opportunity</h1>
          <p className="hero-subtitle">
            V-Central bridges the gap between passionate individuals and organizations.      </p>
        </div>
      </section>

      <section className="home-container">
        <h2 className="home-title">Join Us and Make a Difference</h2>
        <p className="home-subtitle">Sign up now to start your impactful journey.</p>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
        />

        <div className="user-type-selection">
          <label>
            <input
              type="radio"
              value="volunteer"
              checked={userType === 'volunteer'}
              onChange={(e) => setUserType(e.target.value)}
            />
            Volunteer
          </label>

          <label>
            <input
              type="radio"
              value="organization"
              checked={userType === 'organization'}
              onChange={(e) => setUserType(e.target.value)}
            />
            Organization
          </label>
        </div>

        <button onClick={handleSignUp} className="signup-button">
          Sign Up
        </button>
      </section>
    </div>
  );
};

export default Home;
