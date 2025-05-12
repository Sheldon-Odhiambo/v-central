import React, { useState } from 'react';
import "../styles/OrganizationSignup.css"; // Import the CSS file for styling

const OrganizationSignup = () => {
  const [formData, setFormData] = useState({
    organizationName: '',
    representativeName: '',
    email: '',  // This could be pre-filled if needed
    phone: '',
    location: '',
    areasSeekingVolunteers: '',
    organizationBio: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Organization Info:', formData);
    // You can send formData to an API or store it in localStorage/context
    alert('Organization Registration Successful!');
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
          placeholder="Email (pre-filled)" 
          onChange={handleChange} 
          value={formData.email}  // If email is pre-filled, set it here
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
