import React, { useState } from 'react';
import "../styles/InternSignup.css"; // Create this CSS file if you haven't

const InternSignup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    university: '',
    fieldOfStudy: '',
    graduationYear: '',
    preferredDepartment: '',
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
    console.log('Submitted Intern Info:', formData);
    alert("Intern Registration Successful!");
  };

  return (
    <div className="intern-signup-container">
      <h2>Intern Registration</h2>
      <form onSubmit={handleSubmit} className="intern-signup-form">
        <input type="text" name="fullName" placeholder="Full Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} />
        <input type="text" name="university" placeholder="University Name" onChange={handleChange} required />
        <input type="text" name="fieldOfStudy" placeholder="Field of Study" onChange={handleChange} required />
        <input type="text" name="graduationYear" placeholder="Expected Graduation Year" onChange={handleChange} required />
        <input type="text" name="preferredDepartment" placeholder="Preferred Department / Field" onChange={handleChange} required />
        <textarea name="bio" placeholder="Short Bio or Motivation (optional)" rows="3" onChange={handleChange} />
        <input type="file" name="resume" accept=".pdf,.doc,.docx" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default InternSignup;
