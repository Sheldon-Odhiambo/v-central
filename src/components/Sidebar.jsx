import React from "react";
import "../styles/Sidebar.css";

const Sidebar = ({ user, onLogout }) => {
  if (!user) return null;

  return (
    <aside className="sidebar">
      <div className="profile-section">
        <img
          src={user.profilePicture || "/default-avatar.png"}
          alt="Profile"
          className="profile-pic"
        />
        <h3>{user.fullName}</h3>
        <p className="user-role">{user.role}</p>
      </div>

      <ul className="menu">
        <li>Dashboard</li>
        {user.role === "organization" && <li>Manage Attachees</li>}
        {user.role === "intern" && <li>Internship Details</li>}
        {user.role === "apprentice" && <li>Apprenticeship Programs</li>}
        {user.role === "attachee" && <li>Attachment Info</li>}
        <li className="logout" onClick={onLogout}>Logout</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
