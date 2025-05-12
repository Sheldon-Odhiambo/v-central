import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/VolunteerSignup.css'; // style file if needed

const VolunteerSignup = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    location: '',
    skills: '',
    education: '',
    experience: '',
    interests: '',
    availability: '',
    photo: null,
    email: '',
  });

  useEffect(() => {
    if (location.state?.email) {
      setFormData(prev => ({ ...prev, email: location.state.email }));
    }
  }, [location]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'photo') {
      setFormData(prev => ({ ...prev, photo: files[0] }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Volunteer Info:', formData);
    // You can send formData to an API or store it in localStorage/context
    alert('Registration Successful!');
    navigate('/thankyou'); // or any next step
  };

  return (
    <div className="signup-container">
      <h2>Volunteer Registration</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <input type="text" name="fullName" placeholder="Full Name" onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="Phone Number (optional)" onChange={handleChange} />
        <input type="text" name="location" placeholder="Location" onChange={handleChange} required />
        <input type="text" name="skills" placeholder="Skills" onChange={handleChange} />
        <input type="text" name="education" placeholder="Education" onChange={handleChange} />
        <textarea name="experience" placeholder="Experience" onChange={handleChange} rows="3" />
        <input type="text" name="interests" placeholder="Interests" onChange={handleChange} />
        <input type="text" name="availability" placeholder="Availability (e.g. Weekends)" onChange={handleChange} />
        <input type="file" name="photo" accept="image/*" onChange={handleChange} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default VolunteerSignup;
