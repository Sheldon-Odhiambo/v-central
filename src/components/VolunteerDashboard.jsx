import React from 'react';
import "../styles/VolunteerDasboard.css"

const VolunteerDashboard = ({ user }) => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Welcome, {user.name}</h2>
      <ul className="space-y-2">
        <li><button className="btn">Edit Profile</button></li>
        <li><button className="btn">Upload / Generate CV</button></li>
        <li><button className="btn">View Opportunities</button></li>
        <li><button className="btn">My Applications</button></li>
      </ul>
    </div>
  );
};

export default VolunteerDashboard;
