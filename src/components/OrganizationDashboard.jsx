import React from 'react';
import '../styles/OrganizationDashboard.css';

const OrganizationDashboard = ({ user }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Welcome, {user.organizationName}</h2>
      <ul className="space-y-3">
        <li><button className="btn">Edit Organization Profile</button></li>
        <li><button className="btn">Post New Opportunity</button></li>
        <li><button className="btn">View Volunteer Applications</button></li>
        <li><button className="btn">Manage Opportunities</button></li>
      </ul>
    </div>
  );
};

export default OrganizationDashboard;