import React, { useState } from 'react';
import OrganizationSignup from './OrganizationSignup'; // Add other forms later
import SignUpModal from './SignUpModal'; // A new modal component you'll create
import '../styles/Home.css';

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [userType, setUserType] = useState('');

  const openModal = (type) => {
    setUserType(type);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setUserType('');
  };

  return (
    <div className="home-wrapper">
      <section className="impact-hero">
        <div className="overlay">
          <h1 className="hero-title">Connecting Purpose with Opportunity</h1>
          <p className="hero-subtitle">
            V-Central bridges the gap between passionate individuals and organizations.
          </p>
          <button className="read-more-btn">Read More</button>
        </div>
      </section>

      <section className="home-container">
        <h2 className="home-title">Become a Part of Something Bigger</h2>
        <p className="home-subtitle">Choose a role to start your journey with us.</p>

        <div className="diagram">
          <div className="diagram-row top-row">
            <button onClick={() => openModal("intern")} className="node">Interns</button>
          </div>
          <div className="diagram-row middle-row">
            <button onClick={() => openModal("apprentice")} className="node">Apprentices</button>
            <button onClick={() => openModal("organization")} className="node center-node">Organization</button>
            <button onClick={() => openModal("volunteer")} className="node">Volunteer</button>
          </div>
          <div className="diagram-row bottom-row">
            <button onClick={() => openModal("attachee")} className="node">Attachees</button>
          </div>
        </div>
      </section>

      {modalOpen && (
        <SignUpModal userType={userType} onClose={closeModal} />
      )}
    </div>
  );
};

export default Home;
