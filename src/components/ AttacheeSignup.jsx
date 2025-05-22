import React, { useState } from 'react';
import "../styles/AttacheeSignup.css"; // Create this CSS file if needed

const AttacheeSignup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    institution: '',
    course: '',
    year: '',
    department: '',
    bio: '',
    resume: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setFormData(prev => ({ ...prev, resume: files[0] }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Normally you'd send this data to your backend
    console.log('Submitted Attachee Info:', formData);
    alert("Attachee Registration Successful!");
  };

  return (
    <div className="attachee-signup-container">
      <h2>Attachee Registration</h2>
      <form onSubmit={handleSubmit} className="attachee-signup-form">
        <input type="text" name="fullName" placeholder="Full Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} />
        <input type="text" name="institution" placeholder="Institution Name" onChange={handleChange} required />
        <input type="text" name="course" placeholder="Course" onChange={handleChange} required />
        <input type="text" name="year" placeholder="Year of Study" onChange={handleChange} required />
        <input type="text" name="department" placeholder="Preferred Department / Field" onChange={handleChange} required />
        <textarea name="bio" placeholder="Short Bio or Motivation (optional)" rows="3" onChange={handleChange} />
        <input type="file" name="resume" accept=".pdf,.doc,.docx" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AttacheeSignup;
