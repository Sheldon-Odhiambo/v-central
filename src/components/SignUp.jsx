import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styles/SignUp.css';

const SignUpPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ fullName, email, password });
    // Here you can add your API call or logic
  };

  const handleSignInRedirect = () => {
    navigate('/signin'); // Navigate to the sign-in page
  };

  return (
    <div className="signup-page">
      <div className="form-container">
        <h2 className="vcentral-logo">V-Central</h2>

        <h1>Make the most of your journey</h1>
        <p>Join V-Central today — it's fast and easy.</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password (6 or more characters)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength="6"
          />

          <p className="terms">
            By clicking Agree & Join, you agree to the V-Central User Agreement, Privacy Policy, and Cookie Policy.
          </p>

          <button type="submit" className="primary-btn">Agree & Join</button>
        </form>

        <div className="separator">or</div>

        <button className="google-btn">Sign up with Google</button>

        <p className="signin-text">
          Already have an account?{' '}
          <span className="signin-link" onClick={handleSignInRedirect}>
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
