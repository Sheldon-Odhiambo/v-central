import React, { useState } from 'react';
import "../styles/OrganizationSignup.css"; // Import the CSS file for styling

const OrganizationSignup = () => {
  const [formData, setFormData] = useState({
    organizationName: '',
    representativeName: '',
    email: '',
    phone: '',
    location: '',
    areasSeekingVolunteers: '',
    organizationBio: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log('Submitted Organization Info:', formData);
    alert('Organization Registration Successful!');
    // Here you'd typically send this data to your backend or auth service
  };

  return (
    <div className="organization-signup-container">
      <h2>Organization Registration</h2>
      <form onSubmit={handleSubmit} className="organization-signup-form">
        <input 
          type="text" 
          name="organizationName" 
          placeholder="Organization Name" 
          onChange={handleChange} 
          required 
        />
        <input 
          type="text" 
          name="representativeName" 
          placeholder="Representative Name" 
          onChange={handleChange} 
          required 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          onChange={handleChange} 
          value={formData.email}
          required 
        />
        <input 
          type="password" 
          name="password" 
          placeholder="Password" 
          onChange={handleChange} 
          value={formData.password}
          required 
        />
        <input 
          type="password" 
          name="confirmPassword" 
          placeholder="Confirm Password" 
          onChange={handleChange} 
          value={formData.confirmPassword}
          required 
        />
        <input 
          type="tel" 
          name="phone" 
          placeholder="Phone Number" 
          onChange={handleChange} 
        />
        <input 
          type="text" 
          name="location" 
          placeholder="Location" 
          onChange={handleChange} 
          required 
        />
        <textarea 
          name="areasSeekingVolunteers" 
          placeholder="Areas Seeking Volunteers" 
          onChange={handleChange} 
          rows="3" 
          required
        />
        <textarea 
          name="organizationBio" 
          placeholder="Organization Bio (optional)" 
          onChange={handleChange} 
          rows="3" 
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default OrganizationSignup;
