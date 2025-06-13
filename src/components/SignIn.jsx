import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SignIn.css';

const SignInPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [userType, setUserType] = useState('volunteer'); // NEW: user type state

  const navigate = useNavigate();

 const handleSubmit = (e) => {
  e.preventDefault();

  // Fake login simulation (Replace this with real backend auth later)
  if (email && password && userType) {
    const userData = { email, userType }; // You can add more fields as needed
    onLogin(userData); // Call the onLogin function to update App state
  } else {
    alert("Invalid credentials");
  }
};


  const handleSignUpRedirect = () => {
    navigate('/signup');
  };

  return (
    <div className="signin-page">
      <div className="form-container">
        <h2 className="vcentral-logo">V-Central</h2>

        <h1>Sign In</h1>
        <p>Access your account and manage your preferences</p>

        <form onSubmit={handleSubmit}>
          {/* User Type Dropdown */}
          <select
            className="user-type-select"
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            required
          >
            <option value="" disabled>Select user type</option>
            <option value="admin">Volunteer</option>
            <option value="organization">Organization</option>
            <option value="attachee">Attachee</option>
            <option value="interns">Interns</option>
            <option value="apprentice">Apprentice</option>


          </select>

          <input
            type="email"
            placeholder="Email or Phone"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="options-row">
            <label>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              Remember me
            </label>
            <a href="#">Forgot password?</a>
          </div>

          <button type="submit" className="primary-btn">Login</button>
        </form>

        <div className="separator">or</div>

        <button className="google-btn">Sign in with Google</button>

        <p className="signup-text">
          Don’t have an account?{' '}
          <span className="signup-link" onClick={handleSignUpRedirect}>
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
