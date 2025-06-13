import React from "react";
import Header from "./Header";
import "../styles/Dashboard.css";

const Dashboard = ({ user, onLogout }) => {
  if (!user) {
    return (
      <div className="dashboard-container">
        <h2>User not found</h2>
        <p>Please sign in to view the dashboard.</p>
      </div>
    );
  }

  return (
    <div>
      <Header user={user} onLogout={onLogout} />

      <div className="dashboard-wrapper">
        <aside className="dashboard-sidebar">
          <div className="sidebar-profile">
            <img
              src={user.profilePicture || "/default-avatar.png"}
              alt="Profile"
              className="profile-pic"
            />
            <h3>{user.fullName}</h3>
            <p className="role">{user.role}</p>
          </div>

          <ul className="sidebar-menu">
            <li>Dashboard</li>
            {user.role === "organization" && <li>Manage Attachees</li>}
            {user.role === "intern" && <li>Internship Details</li>}
            {user.role === "apprentice" && <li>Apprenticeship Programs</li>}
            {user.role === "attachee" && <li>Attachment Info</li>}
            <li onClick={onLogout} className="logout-btn">
              Logout
            </li>
          </ul>
        </aside>

        <main className="dashboard-content">
          <h2>Welcome, {user.fullName}</h2>
          <p>This is your {user.role} dashboard. You can manage your info here.</p>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
