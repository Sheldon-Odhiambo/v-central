import React, { useState } from 'react';
import "../styles/ApprenticeSignup.css"; // Make sure to rename the CSS file

const ApprenticeSignup = () => {
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

    console.log('Submitted Apprentice Info:', formData);
    alert("Apprentice Registration Successful!");
  };

  return (
    <div className="apprentice-signup-container">
      <h2>Apprentice Registration</h2>
      <form onSubmit={handleSubmit} className="apprentice-signup-form">
        <input type="text" name="fullName" placeholder="Full Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} />
        <input type="text" name="institution" placeholder="Training Institution / School" onChange={handleChange} required />
        <input type="text" name="course" placeholder="Program / Skill Track" onChange={handleChange} required />
        <input type="text" name="year" placeholder="Year or Level" onChange={handleChange} required />
        <input type="text" name="department" placeholder="Preferred Field or Department" onChange={handleChange} required />
        <textarea name="bio" placeholder="Brief Motivation / About You (optional)" rows="3" onChange={handleChange} />
        <input type="file" name="resume" accept=".pdf,.doc,.docx" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ApprenticeSignup;
