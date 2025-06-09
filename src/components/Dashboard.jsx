import React from "react";
import "../styles/Dashboard.css";

const Dashboard = ({ user, onLogout }) => {
  if (!user) {
    return (
      <div className="dashboard-container">
        <h2>User not found</h2>
        <p>Please sign in or provide user details to view the dashboard.</p>
      </div>
    );
  }

  return (
    <div className="dashboard-wrapper">
      <aside className="dashboard-sidebar">
        <img src={user.profilePicture || "/default-avatar.png"} alt="Profile" className="profile-pic" />
        <h3>{user.fullName}</h3>
        <p>{user.role}</p>
        <ul>
          <li>Dashboard</li>
          {user.role === "organization" && <li>Manage Attachees</li>}
          {user.role === "intern" && <li>Internship Details</li>}
          {user.role === "apprentice" && <li>Apprenticeship Programs</li>}
          {user.role === "attachee" && <li>Attachment Info</li>}
          <li onClick={onLogout} className="logout-btn">Logout</li>
        </ul>
      </aside>

      <main className="dashboard-content">
        <h2>Welcome, {user.fullName}</h2>
        <div className="user-info">
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Institution:</strong> {user.institution}</p>
          <p><strong>Course:</strong> {user.course}</p>
          <p><strong>Year of Study:</strong> {user.year}</p>
          <p><strong>Department:</strong> {user.department}</p>
          <p><strong>Bio:</strong> {user.bio}</p>
          {user.resume && (
            <p>
              <strong>Resume:</strong>{" "}
              <a href={user.resume} target="_blank" rel="noopener noreferrer">View</a>
            </p>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
