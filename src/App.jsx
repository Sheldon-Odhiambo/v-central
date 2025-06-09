import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import VolunteerSignup from "./components/VolunteerSignup";
import OrganizationSignup from "./components/OrganizationSignup";
import AttacheeSignup from "./components/ AttacheeSignup";
import ApprenticeSignup from "./components/ApprenticeSignup";
import InternSignup from "./components/InternSignup";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import About from "./components/About";
import Dashboard from "./components/Dashboard";

function App() {
  const [user, setUser] = useState(null); // Store current user
  const navigate = useNavigate();

  const fakeLogin = (userData) => {
    setUser(userData);
    navigate("/dashboard");
  };

  const logout = () => {
    setUser(null);
    navigate("/signin");
  };

  return (
    <>
      <Navbar user={user} onLogout={logout} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signup/volunteer" element={<VolunteerSignup onRegister={fakeLogin} />} />
        <Route path="/signup/organization" element={<OrganizationSignup onRegister={fakeLogin} />} />
        <Route path="/signup/attachee" element={<AttacheeSignup onRegister={fakeLogin} />} />
        <Route path="/signup/apprentice" element={<ApprenticeSignup onRegister={fakeLogin} />} />
        <Route path="/signup/intern" element={<InternSignup onRegister={fakeLogin} />} />
        <Route path="/signin" element={<SignIn onLogin={fakeLogin} />} />
        <Route path="/dashboard" element={<Dashboard user={user} onLogout={logout} />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
