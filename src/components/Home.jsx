import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  const [email, setEmail] = useState('');
  const [userType, setUserType] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState('');

  const navigate = useNavigate();

  const checkPasswordStrength = (pwd) => {
    if (!pwd) return '';
    if (pwd.length < 6) return 'weak';
    if (/[A-Z]/.test(pwd) && /[0-9]/.test(pwd) && /[!@#$%^&*]/.test(pwd)) return 'strong';
    return 'medium';
  };

  const handlePasswordChange = (e) => {
    const pwd = e.target.value;
    setPassword(pwd);
    setPasswordStrength(checkPasswordStrength(pwd));
  };

  const handleSignUp = () => {
    if (email && userType && password) {
      navigate('/signup/volunteer', { state: { email, userType, password } });
    } else {
      alert('Please fill in all fields: email, password, and user type.');
    }
  };

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
        <h2 className="home-title">Join Us and Make a Difference</h2>
        <p className="home-subtitle">Sign up now to start your impactful journey.</p>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
        />

        <div className="password-field-wrapper">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
            className="input-field"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="toggle-password-btn"
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>

        {password && (
          <div className={`password-strength ${passwordStrength}`}>
            Strength: {passwordStrength.charAt(0).toUpperCase() + passwordStrength.slice(1)}
          </div>
        )}

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
